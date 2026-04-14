import { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import type { GameState, Player } from "@/types/game";

const initialGameState: GameState = {
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

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>(initialGameState);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to server');
        });

        newSocket.on('gameState', (state: GameState) => {
            console.log('Received gameState:', state);
            setGameState(state);
        });

        return () => {
            newSocket.close();
        };
    }, []);

    const addPlayer = (player: Player) => {
        if (socket && socket.connected) {
            console.log('Emitting addPlayer:', player);
            socket.emit('addPlayer', player);
        } else {
            console.log('Socket not connected');
        }
    };

    const startGame = () => {
        if (socket && socket.connected) {
            socket.emit('startGame');
        }
    };

    const deletePlayer = (playerId: string) => {
        if (socket && socket.connected) {
            console.log('Emitting deletePlayer:', playerId);
            socket.emit('deletePlayer', playerId);
        } else {
            console.log('Socket not connected for delete');
        }
    };

    const vote = (option: string) => {
        if (socket && socket.connected) {
            socket.emit('vote', option);
        }
    };

    const nextQuestion = (data?: { effect: { hp: number; purity: number }; type: string; questionInfo?: any; winnerOption: string }) => {
        if (socket && socket.connected) {
            socket.emit('nextQuestion', data);
        }
    };

    const restartGame = () => {
        if (socket && socket.connected) {
            socket.emit('restartGame');
        }
    };

    const triggerEnding = () => {
        if (socket && socket.connected) {
            socket.emit('triggerEnding');
        }
    };

    return {
        gameState,
        setGameState,
        addPlayer,
        startGame,
        deletePlayer,
        vote,
        nextQuestion,
        restartGame,
        triggerEnding,
    };
};
