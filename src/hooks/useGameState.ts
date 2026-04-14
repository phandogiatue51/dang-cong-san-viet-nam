import { useState, useEffect } from "react";
import type { GameState, Player } from "@/types/game";
import { gameChannel } from "@/lib/ably";

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
    showingResult: false,
};

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>(initialGameState);

    useEffect(() => {
        // 1. Fetch initial state from serverless API
        const fetchState = async () => {
            try {
                const res = await fetch('/api/game');
                if (res.ok) {
                    const data = await res.json();
                    setGameState(data);
                }
            } catch (err) {
                console.error("Failed to fetch initial state:", err);
            }
        };
        fetchState();

        // 2. Subscribe to real-time updates via Ably
        const subscription = (message: any) => {
            console.log("Ably received state update:", message.data);
            setGameState(message.data);
        };

        gameChannel.subscribe("gameState", subscription);

        return () => {
            gameChannel.unsubscribe("gameState", subscription);
        };
    }, []);

    const callApi = async (type: string, data?: any) => {
        const myPlayerId = localStorage.getItem("myPlayerId");
        try {
            await fetch('/api/game', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    action: { type, data }, 
                    clientId: myPlayerId 
                })
            });
        } catch (err) {
            console.error(`API Call failed (${type}):`, err);
        }
    };

    const addPlayer = (player: Player) => {
        localStorage.setItem("myPlayerId", player.id);
        callApi("addPlayer", player);
    };

    const startGame = () => callApi("startGame");

    const moveToNext = () => callApi("moveToNext", { questionIndex: gameState.currentQuestionIndex });
    
    const deletePlayer = (playerId: string) => callApi("deletePlayer", playerId);

    const vote = (option: string) => callApi("vote", { option });

    const nextQuestion = (data?: { effect: { hp: number; purity: number }; type: string; questionInfo?: any; winnerOption: string | null; votedOption?: string | null; votedOptionText?: string | null }) => {
        callApi("nextQuestion", { ...data, questionIndex: gameState.currentQuestionIndex });
    };

    const restartGame = () => callApi("restartGame");

    const triggerEnding = () => callApi("triggerEnding");

    return {
        gameState,
        setGameState,
        addPlayer,
        startGame,
        deletePlayer,
        vote,
        nextQuestion,
        moveToNext,
        restartGame,
        triggerEnding,
    };
};
