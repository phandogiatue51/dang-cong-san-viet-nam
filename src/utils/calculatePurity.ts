import { corruptionQuestions } from "@/data/corruptionQuestions";
import { CorruptionQuestion } from "@/data/models";

export const getRandomCorruptionQuestion = (): CorruptionQuestion => {
    const randomIndex = Math.floor(Math.random() * corruptionQuestions.length);
    return corruptionQuestions[randomIndex];
};

export const getCorruptionQuestionById = (id: number): CorruptionQuestion | undefined => {
    return corruptionQuestions.find(q => q.id === id);
};

export interface PurityStats {
    totalDecisions: number;    // Tổng số lượt quyết định
    totalCorruptions: number;  // Tổng số lần chọn tham nhũng
}

export const calculatePurity = (stats: PurityStats): number => {
    if (stats.totalDecisions === 0) return 100;
    const corruptionPercent = (stats.totalCorruptions / stats.totalDecisions) * 100;
    return Math.max(0, Math.min(100, 100 - corruptionPercent));
};
