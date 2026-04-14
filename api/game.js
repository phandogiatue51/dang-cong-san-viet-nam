import { Redis } from '@upstash/redis';
import * as Ably from 'ably';

// Helper to load questions length without complex imports
const TOTAL_QUESTIONS = 19;

// State transition logic (inline for serverless reliability)
const initialGameState = {
    currentScreen: "loading",
    players: [],
    currentQuestionIndex: 0,
    hp: 100,
    purity: 100,
    money: 0,
    questionCount: 0,
    votes: { A: 0, B: 0, C: 0, D: 0 },
    stats: {
        correct: 0,
        total: 19,
        wrong: 0,
        corruptCount: 0,
        stormsSurvived: 0,
        topWrongQuestions: [],
    },
    playerPerformance: {},
    history: [],
    showingResult: false,
};

function applyAction(state, action) {
    const newState = JSON.parse(JSON.stringify(state));
    const { gameState, currentVotes } = newState;

    switch (action.type) {
        case 'addPlayer': {
            const player = action.data;
            gameState.players = gameState.players.filter(p => p.id !== player.id);
            player.score = player.score || 0;
            player.correctCount = player.correctCount || 0;
            player.corruptCount = player.corruptCount || 0;
            gameState.players.push(player);
            break;
        }
        case 'deletePlayer': {
            const playerId = action.data;
            gameState.players = gameState.players.filter(p => p.id !== playerId);
            if (currentVotes[playerId]) {
                const option = currentVotes[playerId];
                gameState.votes[option] = Math.max(0, gameState.votes[option] - 1);
                delete currentVotes[playerId];
            }
            break;
        }
        case 'startGame':
            gameState.currentScreen = 'game';
            break;
        case 'vote': {
            const { option } = action.data;
            const clientId = action.clientId;
            if (clientId && gameState.votes[option] !== undefined) {
                const previousVote = currentVotes[clientId];
                if (previousVote) {
                    gameState.votes[previousVote] = Math.max(0, gameState.votes[previousVote] - 1);
                }
                gameState.votes[option]++;
                currentVotes[clientId] = option;
            }
            break;
        }
        case 'nextQuestion': {
            const { effect, type, questionInfo, winnerOption, questionIndex } = action.data || {};

            // VALIDATION: Reject late requests from previous questions
            if (questionIndex !== undefined && questionIndex !== gameState.currentQuestionIndex) return newState;
            // IDEMPOTENCY GUARD: Only process result once per question
            if (gameState.showingResult) return newState;

            if (effect) {
                gameState.hp += effect.hp ?? 0;
                gameState.purity += effect.purity ?? 0;
                if (type === 'correct') gameState.stats.correct++;
                else if (type === 'wrong' || type === 'corrupt') {
                    gameState.stats.wrong++;
                    if (type === 'corrupt') gameState.stats.corruptCount++;
                    if (questionInfo) gameState.stats.topWrongQuestions.push(questionInfo);
                }
                if (winnerOption) {
                    for (const clientId in currentVotes) {
                        if (currentVotes[clientId] === winnerOption) {
                            const player = gameState.players.find(p => p.id === clientId);
                            if (player) {
                                if (type === 'correct') {
                                    player.score = (player.score || 0) + 10;
                                    player.correctCount = (player.correctCount || 0) + 1;
                                } else if (type === 'corrupt') {
                                    player.score = (player.score || 0) + 5;
                                    player.corruptCount = (player.corruptCount || 0) + 1;
                                }
                            }
                        }
                    }
                }
            }
            
            // Set result state instead of moving to next question immediately
            gameState.showingResult = true;
            gameState.lastResult = {
                winner: winnerOption,
                effect: effect,
                type: type,
                votedOption: action.data?.votedOption || null,
                votedOptionText: action.data?.votedOptionText || null
            };

            const hpDelta = effect?.hp ?? 0;
            const purityDelta = effect?.purity ?? 0;
            gameState.history.unshift({
                id: `${gameState.currentQuestionIndex}-${Date.now()}`,
                title: type === 'correct' ? "Lựa chọn sáng suốt" : (type === 'corrupt' ? "Cán bộ thoái hóa" : "Lựa chọn sai lầm"),
                note: `${hpDelta >= 0 ? "+" : ""}${hpDelta} HP · ${purityDelta >= 0 ? "+" : ""}${purityDelta}% Purity`,
                hp: hpDelta,
                purity: purityDelta,
                status: (hpDelta + purityDelta) > 0 ? "positive" : (hpDelta + purityDelta) < 0 ? "negative" : "neutral"
            });

            gameState.hp = Math.max(0, Math.min(100, gameState.hp));
            gameState.purity = Math.max(0, Math.min(100, gameState.purity));

            if (gameState.hp <= 0 || gameState.purity <= 0) {
                gameState.currentScreen = 'ending';
            }
            break;
        }
        case 'moveToNext': {
            const { questionIndex } = action.data || {};
            // VALIDATION: Reject late requests
            if (questionIndex !== undefined && questionIndex !== gameState.currentQuestionIndex) return newState;
            // IDEMPOTENCY GUARD: Only move if currently showing a result
            if (!gameState.showingResult) return newState;

            gameState.showingResult = false;
            gameState.lastResult = null;
            gameState.currentQuestionIndex++;
            gameState.questionCount++;
            gameState.votes = { A: 0, B: 0, C: 0, D: 0 };
            newState.currentVotes = {};

            if (gameState.currentQuestionIndex >= TOTAL_QUESTIONS) {
                gameState.currentScreen = 'ending';
            }
            break;
        }
        case 'restartGame': {
            const players = gameState.players.map(p => ({ ...p, score: 0, correctCount: 0, corruptCount: 0 }));
            Object.assign(gameState, initialGameState);
            gameState.players = players;
            gameState.history = []; // Explicitly clear history
            gameState.currentScreen = 'lobby';
            newState.currentVotes = {};
            break;
        }
        case 'triggerEnding':
            gameState.currentScreen = 'ending';
            break;
    }
    return newState;
}

const redis = Redis.fromEnv();
// Use Ably.Rest for stateless serverless functions to avoid connection overhead
const ably = new Ably.Rest({ key: process.env.VITE_ABLY_API_KEY });
const channel = ably.channels.get('con-thuyen-chung');

export default async function handler(req, res) {
    const REDIS_KEY = 'con-thuyen-game-state';

    if (req.method === 'GET') {
        const state = await redis.get(REDIS_KEY);
        return res.status(200).json(state?.gameState || initialGameState);
    }

    if (req.method === 'POST') {
        const { action, clientId } = req.body;
        
        // Use a simple lock or just get-and-set for now (Redis atomic multi if needed)
        // For low traffic, get-and-set is usually fine
        const state = (await redis.get(REDIS_KEY)) || { gameState: initialGameState, currentVotes: {} };
        const newState = applyAction(state, { ...action, clientId });
        
        await redis.set(REDIS_KEY, newState);
        
        // Broadcast new state via Ably
        await channel.publish('gameState', newState.gameState);
        
        return res.status(200).json(newState.gameState);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
