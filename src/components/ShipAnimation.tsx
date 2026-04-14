import { motion } from "framer-motion";
import { Sailboat } from "lucide-react";

const ShipAnimation = () => {
    return (
        <motion.div
            className="mx-auto flex w-fit items-center justify-center rounded-full bg-white/10 p-5 shadow-2xl shadow-sky-900/40"
            animate={{ x: [0, 12, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <Sailboat className="h-16 w-16 text-amber-300" />
        </motion.div>
    );
};

export default ShipAnimation;
