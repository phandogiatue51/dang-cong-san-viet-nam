import "./../index.css";
import { motion } from "framer-motion";
import { BadgeCheck, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameState } from "@/hooks/useGameState";
import WaveBackground from "@/components/WaveBackground";

const CreateCharacterScreen = () => {
    const navigate = useNavigate();
    const { addPlayer } = useGameState();
    const [name, setName] = useState("");
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0F172A] px-4 py-10 text-white dark">
            <WaveBackground />
            <div className="relative mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_75px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
                <header className="mb-10 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#F59E0B]">Tạo cán bộ</p>
                    <h1 className="mt-4 text-5xl font-semibold">Chọn danh tính và vai trò</h1>
                    <p className="mt-3 text-slate-300">Tạo cán bộ mới với phong cách biển cả, sẵn sàng đối mặt bão tố.</p>
                </header>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                >
                    <div className="space-y-6">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/30">
                            <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Tên cán bộ</label>
                            <input
                                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0F172A] px-4 py-3 text-white outline-none transition focus:border-[#F59E0B]"
                                placeholder="Nhập tên của bạn"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <button
                            className="w-full rounded-3xl bg-[#F59E0B] px-6 py-4 text-sm font-semibold text-[#0F172A] transition hover:bg-[#F59E0B]/90"
                            onClick={() => {
                                if (name) {
                                    const playerId = Date.now().toString();
                                    const player = {
                                        id: playerId,
                                        name,
                                        score: 0,
                                        isReady: false,
                                    };
                                    addPlayer(player);
                                    localStorage.setItem('myPlayerId', playerId);
                                    navigate('/minigame');
                                }
                            }}
                        >
                            Xác nhận và tiếp tục
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default CreateCharacterScreen;
