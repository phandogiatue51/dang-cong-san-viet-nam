import { milestoneQuestions } from "./milestoneQuestions";
import { theoreticalQuestions } from "./theoreticalQuestions";
import type { MilestoneQuestion } from "./models";

export type GameQuestion = {
    id: string;
    category: "theoretical" | "milestone";
    year?: number;
    event?: string;
    question: string;
    options: { text: string; effect: { hp: number; purity: number }; type: string }[];
    correctAnswer: string;
    explanation?: string;
    effects?: {
        correct: { hp: number; purity: number; money: number };
        wrong: { hp: number; purity: number; money: number };
    };
    milestoneEffects?: { hp: number; purity: number }[];
    image?: string;
    imageCaption?: string;
};

const toMilestoneQuestion = (question: MilestoneQuestion): GameQuestion => ({
    id: `milestone-${question.year}`,
    category: "milestone",
    year: question.year,
    event: question.event,
    question: question.question,
    options: question.options.map((option) => ({
        text: option.text,
        effect: option.effect,
        type: option.type || "neutral"
    })),
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    image: question.image,
    imageCaption: question.imageCaption,
});

const toTheoreticalQuestion = (question: typeof theoreticalQuestions[number]): GameQuestion => ({
    id: `theoretical-${question.id}`,
    category: "theoretical",
    question: question.question,
    options: question.options.map(opt => ({
        text: opt.text,
        effect: opt.effect,
        type: opt.type
    })),
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
});

const stagedTheoretical = theoreticalQuestions.slice(0, 12);
const findMilestone = (year: number) => milestoneQuestions.find((question) => question.year === year);

export const gameQuestions: GameQuestion[] = [
    toMilestoneQuestion(findMilestone(1930)!),
    toTheoreticalQuestion(stagedTheoretical[0]),
    toTheoreticalQuestion(stagedTheoretical[1]),
    toMilestoneQuestion(findMilestone(1945)!),
    toTheoreticalQuestion(stagedTheoretical[2]),
    toTheoreticalQuestion(stagedTheoretical[3]),
    toMilestoneQuestion(findMilestone(1954)!),
    toTheoreticalQuestion(stagedTheoretical[4]),
    toTheoreticalQuestion(stagedTheoretical[5]),
    toMilestoneQuestion(findMilestone(1969)!),
    toTheoreticalQuestion(stagedTheoretical[6]),
    toTheoreticalQuestion(stagedTheoretical[7]),
    toMilestoneQuestion(findMilestone(1975)!),
    toTheoreticalQuestion(stagedTheoretical[8]),
    toTheoreticalQuestion(stagedTheoretical[9]),
    toMilestoneQuestion(findMilestone(2001)!),
    toTheoreticalQuestion(stagedTheoretical[10]),
    toTheoreticalQuestion(stagedTheoretical[11]),
    toMilestoneQuestion(findMilestone(2026)!),
];

export const TOTAL_GAME_QUESTIONS = gameQuestions.length;
