export type EffectType = "hp" | "purity" | "money";

export interface Effect {
    type: EffectType;
    value: number;
    description: string;
}
