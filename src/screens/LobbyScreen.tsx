import "./../index.css";
import { motion } from "framer-motion";
import { Book, Play, Plus, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGameState } from "@/hooks/useGameState";
import ShipAnimation from "@/components/ShipAnimation";
import WaveBackground from "@/components/WaveBackground";

const LobbyScreen = () => {
    const navigate = useNavigate();
    const { gameState } = useGameState();
    const players = gameState.players;
    const myPlayerId = localStorage.getItem('myPlayerId');
    const hasCreatedPlayer = myPlayerId && players.some(p => p.id === myPlayerId);

    useEffect(() => {
        if (gameState.currentScreen === 'game') {
            navigate('/game');
        } else if (gameState.currentScreen === 'ending') {
            navigate('/ending');
        }
    }, [gameState.currentScreen, navigate]);
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white px-4 py-10 dark">
            <WaveBackground />
            <div className="relative mx-auto max-w-6xl space-y-8">
                <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_75px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
                    <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-[#F59E0B]">Con thuyền chung</p>
                            <h1 className="mt-4 text-5xl font-semibold text-white">Chào mừng đến với bão biển</h1>
                            <p className="mt-3 max-w-2xl text-slate-300">Chuẩn bị con thuyền cùng dân tộc vượt qua sóng gió, bảo vệ niềm tin và chống lại tham nhũng.</p>
                            <button
                                className="mb-3 mt-6 flex w-full items-center justify-center gap-2 rounded-3xl bg-[#1E3A8A] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0F2A6A]"
                                onClick={() => navigate('/rules')}
                            >
                                <Book className="h-4 w-4" /> Luật chơi
                            </button>
                        </div>

                        <ShipAnimation />
                    </div>

                </section>

                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-semibold">Danh sách cán bộ</h2>
                                <p className="mt-2 text-slate-400">Các thành viên trong phòng sẵn sàng lên thuyền.</p>
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-3xl bg-[#1E3A8A]/80 px-4 py-2 text-sm text-white">
                                <Users className="h-4 w-4" /> {players.length} người
                            </div>
                        </div>

                        <div className="space-y-3">
                            {players.length === 0 ? (
                                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-slate-400">Chưa có người chơi nào.</div>
                            ) : (
                                players.map((player) => (
                                    <div key={player.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-[#F59E0B]/50">
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                            <span className="text-lg font-semibold text-white">{player.name}</span>
                                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
                                                {player.isReady ? "Sẵn sàng" : "Chờ"}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-semibold">Hành động</h2>
                                <p className="mt-2 text-slate-400">Khởi động cuộc chơi hoặc thêm thành viên mới.</p>
                            </div>
                            <div className="rounded-3xl bg-[#F59E0B]/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                                Biển cả
                            </div>
                        </div>

                        {!hasCreatedPlayer && (
                            <button
                                className="mb-3 flex w-full items-center justify-center gap-2 rounded-3xl bg-[#1E3A8A] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0F2A6A]"
                                onClick={() => navigate('/create-character')}
                            >
                                <Plus className="h-4 w-4" /> Tạo cán bộ mới
                            </button>
                        )}

                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default LobbyScreen;
