import type { Effect } from "@/types/effects";

export type ScreenKey =
    | "lobby"
    | "create-character"
    | "game"
    | "milestone"
    | "result"
    | "leaderboard"
    | "ending"
    | "admin"
    | "loading";

export interface Player {
    id: string;
    name: string;
    role?: string;
    score: number;
    isReady: boolean;
}

export interface AnswerOption {
    id: string;
    label: string;
    text: string;
    effects?: Effect[];
}

export interface Question {
    id: string;
    category: "theoretical" | "milestone" | "corruption";
    prompt: string;
    options: AnswerOption[];
    correctOptionId?: string;
    explanation?: string;
}

export interface TheoreticalQuestion extends Question {
    category: "theoretical";
}

export interface MilestoneQuestion extends Question {
    category: "milestone";
}

export interface CorruptionQuestion extends Question {
    category: "corruption";
}

export type GameQuestion =
    | TheoreticalQuestion
    | MilestoneQuestion
    | CorruptionQuestion;

export interface GameStats {
    correct: number;
    total: number;
    wrong: number;
    corruptCount: number;
    stormsSurvived: number;
    topWrongQuestions: {
        id: string;
        question: string;
        correctAnswer: string;
    }[];
}

export interface PlayerPerformance {
    corruptCount: number;
    correctCount: number;
}

export interface GameHistoryItem {
    id: string;
    title: string;
    note: string;
    hp: number;
    purity: number;
    status: "positive" | "negative" | "neutral";
}

export interface GameState {
    currentScreen: ScreenKey;
    players: Player[];
    currentQuestionIndex: number;
    hp: number;
    purity: number;
    money: number;
    selectedOptionId?: string;
    questionCount: number;
    votes: { [key: string]: number };
    stats: GameStats;
    playerPerformance: Record<string, PlayerPerformance>;
    history: GameHistoryItem[];
}
