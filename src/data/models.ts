export interface PlayerEffect {
    corruptCount: number; // Số lần tham nhũng (tăng corruptCount)
    merit?: number;       // Số lần ghi nhận công lao (optional)
}

export interface ShipEffect {
    hp: number;    // Ảnh hưởng đến Niềm tin nhân dân (-60 đến +50)
    purity: number; // Ảnh hưởng đến Độ trong sạch (-25% đến +20%)
}

export interface MilestoneOption {
    text: string;
    effect: {
        hp: number;
        purity: number;
    };
    type: "correct" | "wrong" | "neutral" | "temptation" | "corrupt";
}

export interface MilestoneQuestion {
    year: number;
    event: string;
    question: string;
    options: MilestoneOption[];
    correctAnswer: string;
    explanation: string;
    image?: string;
    imageCaption?: string;
}
