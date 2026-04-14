import "./../index.css";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGameState } from "@/hooks/useGameState";
import { gameQuestions, TOTAL_GAME_QUESTIONS } from "@/data/gameQuestions";
import CountdownTimer from "@/components/CountdownTimer";
import ShipAnimation from "@/components/ShipAnimation";
import WaveBackground from "@/components/WaveBackground";
import ProgressBar from "@/components/ProgressBar";
import MilestoneDisplay from "@/components/MilestoneDisplay";

const GameScreen = () => {
    const navigate = useNavigate();
    const { gameState, vote, nextQuestion, moveToNext } = useGameState();
    const [hasVoted, setHasVoted] = useState(false);

    const currentQuestion = gameQuestions[gameState.currentQuestionIndex];

    const handleVote = (option: string) => {
        if (!hasVoted) {
            vote(option);
            setHasVoted(true);
        }
    };

    const handleNextQuestion = () => {
        if (!currentQuestion) return;

        const totalVotes = Object.values(gameState.votes).reduce((sum, value) => sum + value, 0);

        // Trường hợp 1: Không ai vote
        if (totalVotes === 0) {
            nextQuestion({
                effect: { hp: 0, purity: 0 },
                type: 'neutral',
                winnerOption: null,
                votedOption: null,
                questionInfo: undefined
            });
            return;
        }

        // Trường hợp 2: Có vote → tìm winner theo đa số
        const maxVotes = Math.max(...Object.values(gameState.votes));
        const winningOptions = Object.keys(gameState.votes).filter((opt) => gameState.votes[opt] === maxVotes);
        const isUniqueWinner = winningOptions.length === 1 && maxVotes > 0;
        const winner = isUniqueWinner ? winningOptions[0] : null;

        if (!isUniqueWinner) {
            nextQuestion({
                effect: { hp: 0, purity: 0 },
                type: 'neutral',
                winnerOption: null,
                votedOption: null
            });
            return;
        }

        const selectedOptionIndex = winner.charCodeAt(0) - 65;
        const winningOptionData = currentQuestion.options[selectedOptionIndex];

        nextQuestion({
            effect: winningOptionData.effect,
            type: winningOptionData.type,
            winnerOption: winner,
            votedOption: winner,
            votedOptionText: winningOptionData.text,
            questionInfo: winningOptionData.type !== 'correct' ? {
                id: currentQuestion.id,
                question: currentQuestion.question,
                correctAnswer: currentQuestion.correctAnswer
            } : undefined
        });
    };

    useEffect(() => {
        if (gameState.currentScreen === 'ending') {
            navigate('/ending');
        }
    }, [gameState.currentScreen, navigate]);

    useEffect(() => {
        setHasVoted(false);
    }, [gameState.currentQuestionIndex]);

    // Handle 5-second result phase transition
    useEffect(() => {
        if (gameState.showingResult) {
            const timer = setTimeout(() => {
                // To avoid multiple triggers, only one client (the one who can call nextQuestion)
                // should ideally call this. For now, we'll keep it simple.
                // In a production app, we'd check if the user is the "Admin".
                moveToNext();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [gameState.showingResult]);

    if (!currentQuestion) return null;

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white px-4 py-10 dark">
            <WaveBackground />
            <div className="relative mx-auto max-w-6xl space-y-8">
                {/* Global Progress Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[32px] border border-white/10 bg-slate-950/50 p-6 backdrop-blur-md"
                >
                    <div className="flex items-center justify-between mb-4 px-2">
                        <div className="flex items-center gap-2">
                            <Compass className="h-4 w-4 text-[#F59E0B]" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">Hành trình lịch sử</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400">Giai đoạn {gameState.currentQuestionIndex + 1} / {TOTAL_GAME_QUESTIONS}</span>
                    </div>
                    <div className="relative flex items-center justify-between px-1">
                        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-slate-800" />
                        {Array.from({ length: TOTAL_GAME_QUESTIONS }).map((_, i) => {
                            const isMilestone = [0, 3, 6, 9, 12, 15, 18].includes(i);
                            const isCompleted = i < gameState.currentQuestionIndex;
                            const isCurrent = i === gameState.currentQuestionIndex;

                            return (
                                <div
                                    key={i}
                                    className={`relative z-10 rounded-full transition-all duration-500 ${isCurrent ? 'bg-amber-500 scale-125 shadow-[0_0_15px_rgba(245,158,11,0.8)]' :
                                            isCompleted ? 'bg-emerald-500' :
                                                'bg-slate-700'
                                        } ${isMilestone ? 'h-4 w-4 border-2 border-slate-900' : 'h-2 w-2'}`}
                                    title={isMilestone ? "Mốc lịch sử" : `Câu ${i + 1}`}
                                />
                            );
                        })}
                    </div>
                </motion.div>

                <motion.section
                    key={gameState.currentQuestionIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8"
                >
                    {currentQuestion?.category === "milestone" && (
                        <MilestoneDisplay
                            year={currentQuestion.year!}
                            event={currentQuestion.event!}
                            question={currentQuestion.question}
                            image={currentQuestion.image}
                            imageCaption={currentQuestion.imageCaption}
                        />
                    )}
                </motion.section>

                <div className="grid gap-6 lg:grid-cols-[1.9fr_1fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl font-bold text-white">
                                    {currentQuestion?.category === "milestone" ? "Cột mốc lịch sử" : "Câu hỏi lý luận"}
                                </h2>
                                <p className="mt-2 text-slate-400">
                                    {currentQuestion?.category === "milestone"
                                        ? "Quyết định của tập thể trong thời điểm lịch sử quan trọng."
                                        : "Câu hỏi tập thể quyết định hướng đi của con thuyền."}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <CountdownTimer key={gameState.currentQuestionIndex} duration={10} onFinish={handleNextQuestion} />
                                <div className="inline-flex items-center gap-2 rounded-3xl bg-[#1E3A8A]/80 px-4 py-2 text-sm text-white">
                                    <Compass className="h-4 w-4" /> Câu {gameState.currentQuestionIndex + 1}/{TOTAL_GAME_QUESTIONS}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-[#0F172A]/80 p-6">
                            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <span className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                                    {currentQuestion?.category === "milestone" ? `Mốc ${currentQuestion?.year}` : "Câu lý thuyết"}
                                </span>
                                {currentQuestion?.category === "milestone" && currentQuestion?.event ? (
                                    <span className="text-sm text-slate-400">Sự kiện: {currentQuestion?.event}</span>
                                ) : null}
                            </div>
                            <p className="text-xl font-semibold text-white">{currentQuestion?.question}</p>
                        </div>

                        <div className="mt-6 grid gap-4">
                            {currentQuestion?.options.map((option, index) => {
                                const letter = String.fromCharCode(65 + index);
                                const voteCount = gameState.votes[letter] || 0;
                                const totalVotes = Object.values(gameState.votes).reduce((sum, v) => sum + v, 0);
                                const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
                                        const isWinner = gameState.showingResult && gameState.lastResult?.winner === letter;

                                        return (
                                            <button
                                                key={letter}
                                                className={`relative rounded-3xl border px-5 py-4 text-left text-white transition overflow-hidden ${isWinner
                                                        ? 'border-amber-400 bg-amber-400/20 shadow-[0_0_20px_rgba(245,158,11,0.4)] z-20 scale-[1.02]'
                                                        : hasVoted ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:border-[#F59E0B] hover:bg-[#F59E0B]/10 border-white/10 bg-white/5'
                                                    }`}
                                                onClick={() => handleVote(letter)}
                                                disabled={hasVoted || gameState.showingResult}
                                            >
                                                {isWinner && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                        className="absolute inset-0 bg-amber-400"
                                                    />
                                                )}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="font-semibold">{letter}.</span>
                                                <span>{option.text}</span>
                                            </div>
                                            <span className="text-[#F59E0B] font-semibold">{percentage}%</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40"
                    >
                        <div className="space-y-6">
                            <div className="rounded-[28px] border border-white/10 bg-[#0F172A]/80 p-6">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-semibold">Niềm tin nhân dân (HP)</h3>
                                        <p className="text-sm text-slate-400">Sức khỏe thuyền và lòng tin của nhân dân.</p>
                                    </div>
                                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">{gameState.hp >= 70 ? "Ổn định" : gameState.hp >= 40 ? "Cần giữ" : "Nguy hiểm"}</span>
                                </div>
                                <ProgressBar value={gameState.hp} max={100} />
                                <p className="text-sm text-slate-200 mt-2">{gameState.hp}/100</p>
                            </div>

                            <div className="rounded-[28px] border border-white/10 bg-[#0F172A]/80 p-6">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-semibold">Độ trong sạch (Purity)</h3>
                                        <p className="text-sm text-slate-400">Chỉ số đạo đức và tính liêm chính của thuyền.</p>
                                    </div>
                                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">{gameState.purity >= 70 ? "Trong sạch" : gameState.purity >= 40 ? "Cần thận trọng" : "Rủi ro"}</span>
                                </div>
                                <ProgressBar value={gameState.purity} max={100} />
                                <p className="text-sm text-slate-200 mt-2">{gameState.purity}%</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Result Overlay */}
            {gameState.showingResult && gameState.lastResult && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="rounded-[40px] border border-amber-400/30 bg-slate-900/90 p-10 text-center shadow-2xl"
                    >
                        <h3 className="text-xl font-bold uppercase tracking-widest text-amber-400 mb-6">Kết quả lựa chọn</h3>
                        
                        {gameState.lastResult.votedOption ? (
                            <div className="mb-6 rounded-2xl bg-white/5 p-4 border border-white/5">
                                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Lựa chọn</p>
                                <p className="text-lg font-semibold text-amber-200">
                                    {gameState.lastResult.votedOptionText || gameState.lastResult.votedOption}
                                </p>
                            </div>
                        ) : (
                            <div className="mb-8">
                                <p className="text-xl font-semibold text-slate-400">Chưa thể thống nhất</p>
                            </div>
                        )}

                        <div className="flex flex-col gap-6">
                            {gameState.lastResult.effect.hp !== 0 && (
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className={`text-4xl font-black ${gameState.lastResult.effect.hp > 0 ? "text-emerald-400" : "text-rose-400"}`}
                                >
                                    {gameState.lastResult.effect.hp > 0 ? "+" : ""}{gameState.lastResult.effect.hp} HP
                                </motion.div>
                            )}
                            {gameState.lastResult.effect.purity !== 0 && (
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className={`text-4xl font-black ${gameState.lastResult.effect.purity > 0 ? "text-sky-400" : "text-rose-400"}`}
                                >
                                    {gameState.lastResult.effect.purity > 0 ? "+" : ""}{gameState.lastResult.effect.purity}% Purity
                                </motion.div>
                            )}
                            {gameState.lastResult.effect.hp === 0 && gameState.lastResult.effect.purity === 0 && (
                                <div className="text-2xl text-slate-400 italic">Không có thay đổi chỉ số</div>
                            )}
                        </div>
                        <p className="mt-8 text-slate-400 text-sm">Chuyển sang giai đoạn tiếp theo sau vài giây...</p>
                    </motion.div>
                </motion.div>
            )}
        </main>
    );
};

export default GameScreen;
