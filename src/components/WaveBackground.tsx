import { motion } from "framer-motion";

const WaveBackground = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_30%)]" />
            <motion.div
                className="absolute -bottom-10 left-1/2 h-80 w-[220%] -translate-x-1/2 rounded-full bg-blue-900/40 blur-3xl"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-6 left-1/4 h-56 w-[180%] rounded-full bg-sky-800/20 blur-2xl"
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default WaveBackground;
