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
    const { gameState, vote, nextQuestion } = useGameState();
    const [hasVoted, setHasVoted] = useState(false);

    const currentQuestion = gameQuestions[gameState.currentQuestionIndex];

    const handleVote = (option: string) => {
        if (!hasVoted) {
            vote(option);
            setHasVoted(true);
        }
    };

    const handleNextQuestion = () => {
        const totalVotes = Object.values(gameState.votes).reduce((sum, value) => sum + value, 0);
        let effect = { hp: 0, purity: 0 };

        if (totalVotes > 0 && currentQuestion) {
            const maxVotes = Math.max(...Object.values(gameState.votes));
            const winningOptions = Object.keys(gameState.votes).filter((opt) => gameState.votes[opt] === maxVotes);
            const winner = winningOptions[Math.floor(Math.random() * winningOptions.length)];
            const selectedOptionIndex = winner.charCodeAt(0) - 65;
            const winningOptionData = currentQuestion.options[selectedOptionIndex];

            effect = winningOptionData.effect;

            nextQuestion({
                effect,
                type: winningOptionData.type,
                winnerOption: winner,
                questionInfo: winningOptionData.type !== 'correct' ? {
                    id: currentQuestion.id,
                    question: currentQuestion.question,
                    correctAnswer: currentQuestion.correctAnswer
                } : undefined
            });
        } else {
            nextQuestion({ effect: { hp: 0, purity: 0 }, type: 'neutral', winnerOption: '' });
        }
    };

    useEffect(() => {
        if (gameState.currentScreen === 'ending') {
            navigate('/ending');
        }
    }, [gameState.currentScreen, navigate]);

    useEffect(() => {
        setHasVoted(false);
    }, [gameState.currentQuestionIndex]);

    if (!currentQuestion) return null;

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white px-4 py-10 dark">
            <WaveBackground />
            <div className="relative mx-auto max-w-6xl space-y-8">
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
                                <CountdownTimer key={gameState.currentQuestionIndex} duration={5} onFinish={handleNextQuestion} />
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
                                return (
                                    <button
                                        key={letter}
                                        className={`rounded-3xl border px-5 py-4 text-left text-white transition ${hasVoted ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:border-[#F59E0B] hover:bg-[#F59E0B]/10 border-white/10 bg-white/5'
                                            }`}
                                        onClick={() => handleVote(letter)}
                                        disabled={hasVoted}
                                    >
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
        </main>
    );
};

export default GameScreen;
