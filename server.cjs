const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

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

const socketPlayerMap = new Map();
const currentVotes = new Map(); // socket.id -> option

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Send current game state to new client
    socket.emit('gameState', gameState);

    // Handle add player
    socket.on('addPlayer', (player) => {
        socketPlayerMap.set(socket.id, player.id);
        if (!gameState.playerPerformance[player.id]) {
            gameState.playerPerformance[player.id] = { corruptCount: 0, correctCount: 0 };
        }
        gameState.players.push(player);
        io.emit('gameState', gameState);
    });

    // Handle delete player
    socket.on('deletePlayer', (playerId) => {
        gameState.players = gameState.players.filter(p => p.id !== playerId);
        io.emit('gameState', gameState);
    });

    // Handle start game
    socket.on('startGame', () => {
        gameState.currentScreen = 'game';
        io.emit('gameState', gameState);
    });

    // Handle vote
    socket.on('vote', (option) => {
        if (gameState.votes[option] !== undefined) {
            gameState.votes[option]++;
            currentVotes.set(socket.id, option);
            io.emit('gameState', gameState);
        }
    });

    // Handle restart game
    socket.on('restartGame', () => {
        gameState = {
            players: gameState.players, // Keep players
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
        // Reset player performance for new game
        gameState.players.forEach(p => {
            gameState.playerPerformance[p.id] = { corruptCount: 0, correctCount: 0 };
        });
        currentVotes.clear();
        io.emit('gameState', gameState);
    });

    // Handle next question (after timer)
    socket.on('nextQuestion', (data) => {
        const { effect, type, questionInfo } = data || {};
        
        if (effect) {
            gameState.hp += effect.hp ?? 0;
            gameState.purity += effect.purity ?? 0;
            gameState.money += effect.money ?? 0;

            // Update stats
            if (type === 'correct') {
                gameState.stats.correct++;
            } else if (type === 'wrong') {
                gameState.stats.wrong++;
                if (questionInfo) {
                    gameState.stats.topWrongQuestions.push(questionInfo);
                }
            } else if (type === 'corrupt') {
                gameState.stats.corruptCount++;
                gameState.stats.wrong++;
                if (questionInfo) {
                    gameState.stats.topWrongQuestions.push(questionInfo);
                }
            }

            // Update player performance based on their votes for this question
            for (const [sId, opt] of currentVotes.entries()) {
                const pId = socketPlayerMap.get(sId);
                if (pId && gameState.playerPerformance[pId]) {
                    // If the player voted for the winning option and it was correct
                    if (opt === (data.winnerOption)) { // We need winnerOption from client
                        if (type === 'correct') gameState.playerPerformance[pId].correctCount++;
                        if (type === 'corrupt') gameState.playerPerformance[pId].corruptCount++;
                    }
                }
            }
        }

        gameState.hp = Math.max(0, Math.min(100, gameState.hp));
        gameState.purity = Math.max(0, Math.min(100, gameState.purity));

        // Reset votes and move to next question
        gameState.votes = { A: 0, B: 0, C: 0, D: 0 };
        gameState.currentQuestionIndex++;
        gameState.questionCount++;

        // Apply milestone storm effects when entering a new milestone stage
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
            // Count survived storm
            if (gameState.hp > 0) {
                gameState.stats.stormsSurvived++;
            }
        }

        gameState.hp = Math.max(0, Math.min(100, gameState.hp));
        gameState.purity = Math.max(0, Math.min(100, gameState.purity));

        // Add to history
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

        // Check game over conditions
        if (gameState.hp <= 0 || gameState.purity <= 0 || gameState.currentQuestionIndex >= 19) {
            gameState.currentScreen = 'ending';
        }

        currentVotes.clear(); // Clear for next round
        io.emit('gameState', gameState);
    });

    // DEBUG: Trigger Ending Screen
    socket.on('triggerEnding', () => {
        gameState.currentScreen = 'ending';
        io.emit('gameState', gameState);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});