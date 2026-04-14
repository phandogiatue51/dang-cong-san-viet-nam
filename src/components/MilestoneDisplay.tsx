import { motion } from "framer-motion";
import { History, Anchor } from "lucide-react";

interface MilestoneDisplayProps {
    year: number;
    event: string;
    question: string;
    image?: string;
    imageCaption?: string;
}

const MilestoneDisplay = ({ year, event, question, image, imageCaption }: MilestoneDisplayProps) => {
    return (
        /* Added max-w-3xl to keep the whole component from getting too large */
        <div className="mx-auto max-w-3xl space-y-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1E293B]/50 p-1 shadow-2xl backdrop-blur-md"
            >
                <div className="group relative">
                    <div className="relative aspect-[21/8] md:aspect-[21/7] w-full overflow-hidden rounded-[20px] bg-slate-950/50">
                        {image ? (
                            <img
                                src={image}
                                alt={event}
                                className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center space-y-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                                <div className="h-12 w-20 rounded-lg border border-white/10 flex items-center justify-center">
                                    <span className="text-slate-700 text-sm font-bold uppercase tracking-widest">Preview</span>
                                </div>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    </div>

                    {imageCaption && (
                        <div className="absolute bottom-3 left-0 right-0 px-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-md font-medium text-slate-400 text-center italic"
                            >
                                {imageCaption}
                            </motion.p>
                        </div>
                    )}
                </div>

                {year && event && (
                    <div className="p-6">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold leading-snug text-white text-center"
                        >
                            Cột mốc {year} — {event}
                        </motion.p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default MilestoneDisplay;