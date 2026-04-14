import { motion } from "framer-motion";

const confettiColors = ["#F59E0B", "#10B981", "#FFFFFF", "#3B82F6", "#EF4444"];

const ConfettiEffect = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 12 }).map((_, index) => {
                const size = 8 + Math.floor(Math.random() * 10);
                const color = confettiColors[index % confettiColors.length];
                const left = Math.floor(Math.random() * 100);

                return (
                    <motion.span
                        key={index}
                        className="absolute rounded-full"
                        style={{ width: size, height: size, left: `${left}%`, backgroundColor: color }}
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: [0, 120, 240], opacity: [1, 1, 0] }}
                        transition={{ duration: 2.5 + Math.random(), repeat: Infinity, ease: "easeIn" }}
                    />
                );
            })}
        </div>
    );
};

export default ConfettiEffect;
