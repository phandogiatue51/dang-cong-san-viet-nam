import type { GameState, GameQuestion, Player } from "@/types/game";

export const initialGameState: GameState = {
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
};

// All persistent state that needs to be in Redis
export interface PersistentState {
    gameState: GameState;
    currentVotes: Record<string, string>; // clientId -> option
}

export const applyAction = (
    state: PersistentState,
    action: { type: string; data?: any; clientId?: string },
    questions: GameQuestion[]
): PersistentState => {
    const newState = JSON.parse(JSON.stringify(state)) as PersistentState;
    const { gameState, currentVotes } = newState;

    switch (action.type) {
        case 'addPlayer': {
            const player = action.data as Player;
            // Cleanup existing
            gameState.players = gameState.players.filter(p => p.id !== player.id);
            // Init fields
            player.score = player.score || 0;
            player.correctCount = player.correctCount || 0;
            player.corruptCount = player.corruptCount || 0;
            gameState.players.push(player);
            break;
        }

        case 'startGame': {
            gameState.currentScreen = 'game';
            break;
        }

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
            const { effect, type, questionInfo, winnerOption } = action.data || {};
            
            if (effect) {
                gameState.hp += effect.hp ?? 0;
                gameState.purity += effect.purity ?? 0;

                // Update global stats
                if (type === 'correct') {
                    gameState.stats.correct++;
                } else if (type === 'wrong' || type === 'corrupt') {
                    gameState.stats.wrong++;
                    if (type === 'corrupt') gameState.stats.corruptCount++;
                    if (questionInfo) gameState.stats.topWrongQuestions.push(questionInfo);
                }

                // Award points to voters
                if (winnerOption) {
                    for (const clientId in currentVotes) {
                        const votedOpt = currentVotes[clientId];
                        if (votedOpt === winnerOption) {
                            // Find player by clientId or playerId if we have a mapping
                            // In this simple version, we'll try to find a player who either has this clientId 
                            // as their id or we'd need a mapping. Since we're using clientId in Ably, 
                            // and clientId is set to myPlayerId in the client, p.id === clientId usually works.
                            const player = gameState.players.find(p => p.id === clientId);
                            if (player) {
                                if (type === 'correct') {
                                    player.score = (player.score || 0) + 10;
                                    player.correctCount = (player.correctCount || 0) + 1;
                                } else if (type === 'corrupt') {
                                    player.corruptCount = (player.corruptCount || 0) + 1;
                                }
                            }
                        }
                    }
                }
            }

            gameState.currentQuestionIndex++;
            gameState.questionCount++;
            gameState.votes = { A: 0, B: 0, C: 0, D: 0 };
            
            // Storm effects
            const stageStorms: Record<number, any> = {
                3: { threshold: 70, damage: 10 },
                6: { threshold: 60, damage: 15 },
                9: { threshold: 0, damage: 20, always: true },
                12: { threshold: 50, damage: 25 },
                15: { threshold: 0, damage: 15, resetPurity: 50, always: true },
            };
            const storm = stageStorms[gameState.currentQuestionIndex];
            if (storm) {
                if (storm.always || gameState.purity < storm.threshold) {
                    gameState.hp -= storm.damage;
                }
                if (storm.resetPurity) gameState.purity = storm.resetPurity;
                if (gameState.hp > 0) gameState.stats.stormsSurvived++;
            }

            // History
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

            // Bounds
            gameState.hp = Math.max(0, Math.min(100, gameState.hp));
            gameState.purity = Math.max(0, Math.min(100, gameState.purity));

            if (gameState.hp <= 0 || gameState.purity <= 0 || gameState.currentQuestionIndex >= questions.length) {
                gameState.currentScreen = 'ending';
            }

            // Clear votes for next round
            newState.currentVotes = {};
            break;
        }

        case 'restartGame': {
            const players = gameState.players.map(p => ({ ...p, score: 0, correctCount: 0, corruptCount: 0 }));
            Object.assign(gameState, initialGameState);
            gameState.players = players;
            gameState.currentScreen = 'lobby';
            newState.currentVotes = {};
            break;
        }

        case 'triggerEnding': {
            gameState.currentScreen = 'ending';
            break;
        }
    }

    return newState;
};
