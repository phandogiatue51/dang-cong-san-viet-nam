import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
    duration?: number;
    onFinish?: () => void;
}

const CountdownTimer = ({ duration = 20, onFinish }: CountdownTimerProps) => {
    const [count, setCount] = useState(duration);

    useEffect(() => {
        setCount(duration);
    }, [duration]);

    useEffect(() => {
        if (count <= 0) {
            onFinish?.();
            return;
        }

        const timer = window.setTimeout(() => setCount((value) => value - 1), 1000);

        return () => window.clearTimeout(timer);
    }, [count, onFinish]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2 rounded-3xl bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 backdrop-blur-xl"
        >
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span>Thời gian: {count}s</span>
        </motion.div>
    );
};

export default CountdownTimer;
