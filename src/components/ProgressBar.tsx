interface ProgressBarProps {
    value: number;
    max?: number;
    hint?: string;
    className?: string;
    indicatorClassName?: string;
}

const ProgressBar = ({ value, max = 100, hint, className, indicatorClassName }: ProgressBarProps) => {
    const percent = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

    return (
        <div className="space-y-2">
            <div className={`overflow-hidden rounded-3xl bg-white/10 shadow-inner shadow-slate-950/20 ${className || ''}`}>
                <div
                    className={`h-3 rounded-3xl transition-all duration-700 ease-out ${indicatorClassName || 'bg-sky-500'}`}
                    style={{ width: `${percent}%` }}
                />
            </div>
            {hint ? <p className="text-xs text-slate-300">{hint}</p> : null}
        </div>
    );
};

export default ProgressBar;
