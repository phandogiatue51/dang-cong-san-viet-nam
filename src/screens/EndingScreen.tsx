import { motion } from "framer-motion";
import { Trophy, Ship, Flame, ShieldCheck, TrendingUp, AlertTriangle, RefreshCw, Share2, Home } from "lucide-react";
import ConfettiEffect from "@/components/ConfettiEffect";
import { useGameState } from "@/hooks/useGameState";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProgressBar from "@/components/ProgressBar";

const EndingScreen = () => {
    const { gameState, restartGame } = useGameState();
    const navigate = useNavigate();

    useEffect(() => {
        if (gameState.currentScreen === 'lobby') {
            navigate('/minigame');
        }
    }, [gameState.currentScreen, navigate]);

    const { hp, purity, stats, players } = gameState;

    const getEnding = (hp: number, purity: number) => {
        if (hp <= 0) {
            return { name: "Chìm thuyền", quote: "Mất lòng dân là mất tất cả", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" };
        }
        if (hp >= 80 && purity >= 80) {
            return { name: "Vững mạnh", quote: "Lấy dân làm gốc, Đảng ta là đạo đức, là văn minh", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" };
        }
        if (hp >= 80 && purity < 80) {
            return { name: "Ổn định nhưng cảnh báo", quote: "Cần tiếp tục chỉnh đốn và hoàn thiện nội bộ", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" };
        }
        if (hp >= 50 && purity >= 70) {
            return { name: "Ổn định", quote: "Con thuyền đã đến đích, nhưng cần tiếp tục chỉnh đốn", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" };
        }
        if (hp >= 50 && purity < 70) {
            return { name: "Chao đảo", quote: "Thiếu gắn bó với nhân dân, con thuyền trở nên chao đảo", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" };
        }
        if (hp >= 20 && purity >= 50) {
            return { name: "Chao đảo", quote: "Sai nguyên tắc nhiều lần, bắt đầu mất lòng dân", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" };
        }
        return { name: "Suy yếu", quote: "Gần chìm, cần cải cách và chỉnh đốn gấp", color: "text-slate-400", bg: "bg-slate-400/10", border: "border-slate-400/20" };
    };

    const ending = getEnding(hp, purity);

    const topGood = [...players]
        .filter(p => p.correctCount > 0 && p.corruptCount === 0)
        .sort((a, b) => b.correctCount - a.correctCount)
        .slice(0, 5);

    const topCorrupt = [...players]
        .filter(p => p.corruptCount > 0)
        .sort((a, b) => b.corruptCount - a.corruptCount)
        .slice(0, 5);

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white px-4 py-10 dark font-sans">
            {hp > 50 && <ConfettiEffect />}

            <div className="relative mx-auto max-w-5xl space-y-8">
                {/* Result Header */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-[32px] border ${ending.border} ${ending.bg} p-10 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden`}
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Ship className="h-40 w-40 rotate-12" />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ${ending.color}`}
                    >
                        {hp <= 0 ? <Flame className="h-12 w-12" /> : <Trophy className="h-12 w-12" />}
                    </motion.div>

                    <h1 className={`text-6xl font-black uppercase tracking-tight ${ending.color}`}>
                        {ending.name}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-xl italic text-slate-200 leading-relaxed">
                        "{ending.quote}"
                    </p>
                </motion.section>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Core Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/50 p-8"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <ShieldCheck className="text-emerald-400" /> Chỉ số cốt lõi
                        </h2>

                        <div className="space-y-8 mt-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-widest text-slate-400">Niềm tin nhân dân</p>
                                        <p className="text-3xl font-bold text-emerald-400">{hp}/100</p>
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase">HP</span>
                                </div>
                                <ProgressBar value={hp} max={100} className="h-4 rounded-full bg-slate-800" indicatorClassName="bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-widest text-slate-400">Độ trong sạch</p>
                                        <p className="text-3xl font-bold text-sky-400">{purity}%</p>
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase">Purity</span>
                                </div>
                                <ProgressBar value={purity} max={100} className="h-4 rounded-full bg-slate-800" indicatorClassName="bg-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.5)]" />
                                <p className={`text-sm font-semibold ${purity >= 70 ? "text-emerald-400" : "text-rose-400"}`}>
                                    {purity >= 70 ? "✅ Bộ máy liêm chính" : "⚠️ Cần rà soát nội bộ!"}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Journey Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[32px] border border-white/10 bg-slate-900/50 p-8"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <TrendingUp className="text-sky-400" /> Hành trình 1930 - 2026
                        </h2>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-white/5 p-5 border border-white/5">
                                <p className="text-xs uppercase text-slate-400 font-bold mb-1">Số câu đúng</p>
                                <p className="text-2xl font-black text-white">{stats.correct}<span className="text-slate-500 text-lg">/{stats.total}</span></p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-5 border border-white/5">
                                <p className="text-xs uppercase text-slate-400 font-bold mb-1">Số câu sai</p>
                                <p className="text-2xl font-black text-rose-400">{stats.wrong}<span className="text-slate-500 text-lg">/{stats.total}</span></p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-5 border border-white/5">
                                <p className="text-xs uppercase text-slate-400 font-bold mb-1">Tham nhũng</p>
                                <p className="text-2xl font-black text-orange-400">{stats.corruptCount}</p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-5 border border-white/5">
                                <p className="text-xs uppercase text-slate-400 font-bold mb-1">Vượt bão</p>
                                <p className="text-2xl font-black text-cyan-400">{stats.stormsSurvived}<span className="text-slate-500 text-lg">/5</span></p>
                            </div>
                        </div>

                        {/* Top Weaknesses */}
                        {stats.topWrongQuestions.length > 0 && (
                            <div className="mt-8 space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-orange-400" /> Điểm yếu cần cải thiện
                                </h3>
                                <div className="space-y-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                    {stats.topWrongQuestions.slice(0, 3).map((q, i) => (
                                        <div key={i} className="text-sm p-3 rounded-xl bg-orange-400/5 border border-orange-400/10 text-slate-300">
                                            • {q.question.length > 60 ? q.question.substring(0, 60) + "..." : q.question}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Player Performance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    <div className="rounded-[32px] border border-white/10 bg-emerald-500/5 p-8">
                        <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                            🌟 Cán bộ tiêu biểu
                        </h2>
                        <div className="space-y-4">
                            {topGood.length === 0 ? <p className="text-slate-500 italic">Chưa có ghi nhận</p> :
                                topGood.map((p, i) => (
                                    <div key={p.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <span className="font-bold flex items-center gap-3">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">{i + 1}</span>
                                            {p.name}
                                        </span>
                                        <span className="text-emerald-400 font-black text-sm">{p.correctCount} câu đúng · {p.score}đ</span>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-rose-500/5 p-8">
                        <h2 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
                            🏚️ Cán bộ tha hóa
                        </h2>
                        <div className="space-y-4">
                            {topCorrupt.length === 0 ? <p className="text-slate-500 italic">Tập thể trong sạch</p> :
                                topCorrupt.map((p, i) => (
                                    <div key={p.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <span className="font-bold flex items-center gap-3">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-rose-400 text-xs">{i + 1}</span>
                                            {p.name}
                                        </span>
                                        <span className="text-rose-400 font-black text-sm">{p.corruptCount} lần tham ô · {p.score}đ</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </motion.div>

                {/* Final Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center py-8"
                >
                    <p className="text-slate-400 font-serif italic text-lg decoration-amber-500/30 underline-offset-8 underline decoration-2">
                        “Cán bộ là cái gốc của mọi công việc. Huấn luyện cán bộ là công việc gốc của Đảng.”
                    </p>
                    <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-500">- Hồ Chí Minh -</p>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-10">

                    <button
                        onClick={() => navigate('/')}
                        className="group relative flex items-center gap-3 rounded-full bg-blue-500 px-10 py-5 text-lg font-black text-[#0F172A] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-95"
                    >
                        <Home className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                        Về trang chủ
                    </button>
                </div>
            </div>
        </main>
    );
};

export default EndingScreen;
