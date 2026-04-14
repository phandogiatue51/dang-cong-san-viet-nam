const express = require('express');
const Ably = require('ably');
const fs = require('fs');
const path = require('path');

const app = express();

// Load Ably API Key from .env
let ABLY_API_KEY;
try {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/VITE_ABLY_API_KEY=(.*)/);
        if (match) ABLY_API_KEY = match[1].trim();
    }
} catch (err) {
    console.error('Error reading .env file:', err);
}

// Fallback to environment variable if .env parsing fails
ABLY_API_KEY = ABLY_API_KEY || process.env.VITE_ABLY_API_KEY;

if (!ABLY_API_KEY) {
    console.error('CRITICAL: ABLY_API_KEY not found in .env or environment variables');
    process.exit(1);
}

const ably = new Ably.Realtime(ABLY_API_KEY);
const channel = ably.channels.get('con-thuyen-chung');

let gameState = {
    players: [],
    currentScreen: 'lobby',
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

const currentVotes = new Map(); // clientId -> option

// Helper to broadcast state
const broadcastState = () => {
    channel.publish('gameState', gameState);
};

// Start Ably connection
ably.connection.on('connected', () => {
    console.log('Connected to Ably');
    // Initial broadcast to sync any existing clients
    broadcastState();
});

// Channel Subscriptions
channel.subscribe('addPlayer', (message) => {
    const player = message.data;
    const clientId = message.clientId;
    
    // Cleanup any existing player with same ID
    gameState.players = gameState.players.filter(p => p.id !== player.id);
    
    // Initialize player state
    player.score = player.score || 0;
    player.correctCount = player.correctCount || 0;
    player.corruptCount = player.corruptCount || 0;
    
    if (!gameState.playerPerformance[player.id]) {
        gameState.playerPerformance[player.id] = { corruptCount: 0, correctCount: 0, score: 0 };
    }
    
    gameState.players.push(player);
    console.log(`Player ${player.name} joined. Total: ${gameState.players.length}`);
    broadcastState();
});

channel.subscribe('startGame', () => {
    gameState.currentScreen = 'game';
    broadcastState();
});

channel.subscribe('deletePlayer', (message) => {
    const playerId = message.data;
    gameState.players = gameState.players.filter(p => p.id !== playerId);
    broadcastState();
});

channel.subscribe('vote', (message) => {
    const { option } = message.data;
    const clientId = message.clientId;

    if (gameState.votes[option] !== undefined) {
        // If player already voted, remove their previous vote
        const previousVote = currentVotes.get(clientId);
        if (previousVote) {
            gameState.votes[previousVote] = Math.max(0, gameState.votes[previousVote] - 1);
        }

        gameState.votes[option]++;
        currentVotes.set(clientId, option);
        broadcastState();
    }
});

channel.subscribe('nextQuestion', (message) => {
    const { effect, type, questionInfo, winnerOption } = message.data || {};

    if (effect) {
        gameState.hp += effect.hp ?? 0;
        gameState.purity += effect.purity ?? 0;

        // Update stats
        if (type === 'correct') {
            gameState.stats.correct++;
        } else if (type === 'wrong' || type === 'corrupt') {
            gameState.stats.wrong++;
            if (type === 'corrupt') gameState.stats.corruptCount++;
            if (questionInfo) {
                gameState.stats.topWrongQuestions.push(questionInfo);
            }
        }

        // Award points and corruption counts only to those who voted for the winner
        if (winnerOption) {
            // Get all present members to map clientId to player status
            channel.presence.get((err, members) => {
                if (err) return console.error("Presence error:", err);
                
                // Map of clientId -> playerId
                const presenceMap = new Map();
                members.forEach(m => {
                    // Try to find playerId in their presence data or use clientId if same
                    const pId = m.data?.playerId || m.clientId;
                    presenceMap.set(m.clientId, pId);
                });

                for (const [voterClientId, votedOpt] of currentVotes.entries()) {
                    if (votedOpt === winnerOption) {
                        const playerId = presenceMap.get(voterClientId);
                        // Find player in state
                        const player = gameState.players.find(p => p.id === playerId || p.id === voterClientId);
                        
                        if (player) {
                            if (type === 'correct') {
                                player.score = (player.score || 0) + 10;
                                player.correctCount = (player.correctCount || 0) + 1;
                                console.log(`Awarded 10pts to ${player.name}`);
                            } else if (type === 'corrupt') {
                                player.corruptCount = (player.corruptCount || 0) + 1;
                                console.log(`Added corruption to ${player.name}`);
                            }
                        }
                    }
                }
                // Broadcast AFTER updating scores (which are async here due to presence.get)
                broadcastState();
            });
        }
    }

    gameState.hp = Math.max(0, Math.min(100, gameState.hp));
    gameState.purity = Math.max(0, Math.min(100, gameState.purity));

    // Reset votes and move to next question
    gameState.votes = { A: 0, B: 0, C: 0, D: 0 };
    gameState.currentQuestionIndex++;
    gameState.questionCount++;

    // Apply milestone storm effects ...
    const stageStorms = {
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
        if (storm.resetPurity) {
            gameState.purity = storm.resetPurity;
        }
        if (gameState.hp > 0) gameState.stats.stormsSurvived++;
    }

    gameState.hp = Math.max(0, Math.min(100, gameState.hp));
    gameState.purity = Math.max(0, Math.min(100, gameState.purity));

    // History record ...
    const hpDelta = (effect?.hp ?? 0);
    const purityDelta = (effect?.purity ?? 0);
    const status = (hpDelta + purityDelta) > 0 ? "positive" : (hpDelta + purityDelta) < 0 ? "negative" : "neutral";
    
    gameState.history.unshift({
        id: `${gameState.currentQuestionIndex}-${Date.now()}`,
        title: type === 'correct' ? "Lựa chọn sáng suốt" : (type === 'corrupt' ? "Cán bộ thoái hóa" : "Lựa chọn sai lầm"),
        note: `${hpDelta >= 0 ? "+" : ""}${hpDelta} HP · ${purityDelta >= 0 ? "+" : ""}${purityDelta}% Purity`,
        hp: hpDelta,
        purity: purityDelta,
        status: status
    });

    if (gameState.hp <= 0 || gameState.purity <= 0 || gameState.currentQuestionIndex >= 19) {
        gameState.currentScreen = 'ending';
    }

    currentVotes.clear();
    // Only broadcast if we didn't wait for presence.get (winnerOption check)
    if (!winnerOption) broadcastState();
});

channel.subscribe('restartGame', () => {
    gameState = {
        players: gameState.players.map(p => ({ ...p, score: 0, correctCount: 0, corruptCount: 0 })),
        currentScreen: 'lobby',
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
    currentVotes.clear();
    broadcastState();
});

channel.subscribe('triggerEnding', () => {
    gameState.currentScreen = 'ending';
    broadcastState();
});

const PORT = process.env.PORT || 3001;
app.get('/health', (req, res) => res.send('OK'));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));