import { milestoneQuestions } from "@/data/milestoneQuestions";
import { MilestoneQuestion } from "@/data/models";

export const getMilestoneByYear = (year: number): MilestoneQuestion | undefined => {
    return milestoneQuestions.find(m => m.year === year);
};

export const getAllMilestones = (): MilestoneQuestion[] => {
    return milestoneQuestions;
};

export const isCorrectMilestoneAnswer = (
    question: MilestoneQuestion,
    selectedOptionIndex: number
): boolean => {
    const selectedText = question.options[selectedOptionIndex].text;
    return selectedText.startsWith(question.correctAnswer);
};

export const getMilestoneEffect = (
    question: MilestoneQuestion,
    selectedOptionIndex: number
): { hp: number; purity: number } => {
    return question.options[selectedOptionIndex].effect;
};
