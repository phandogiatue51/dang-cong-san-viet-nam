import { motion } from "framer-motion";
import WaveBackground from "@/components/WaveBackground";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
const RulesScreen = () => {
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white px-4 py-10">
            <WaveBackground />
            <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_75px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
                <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8 text-center">
                    <button
                        className="flex w-30 items-center justify-center gap-2 rounded-3xl bg-[#1E3A8A] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0F2A6A]"
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeft className="h-4 w-4" /> Trở về
                    </button>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#F59E0B]">Luật chơi</p>
                    <h1 className="mt-4 text-5xl font-semibold">Con thuyền chung</h1>
                    <p className="mt-3 text-slate-300">Tìm hiểu cách chơi, cơ chế vote và hệ thống chỉ số của game.</p>
                </motion.header>

                <section className="space-y-6">
                    <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                        <h2 className="text-2xl font-semibold text-white">Mục tiêu</h2>
                        <p className="mt-3 text-slate-300">Dẫn dắt con thuyền cách mạng vượt qua các tình huống, giữ lòng tin nhân dân và bảo vệ niềm tin.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                            <h3 className="text-xl font-semibold text-white">Hệ thống điểm</h3>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                <li>❤️ HP bắt đầu 100</li>
                                <li>Chọn đúng: +10 HP</li>
                                <li>Chọn sai: -15 HP</li>
                                <li>HP = 0 → Thua</li>
                                <li>Hoàn thành tất cả câu hỏi với HP {'>'} 0 → Thắng</li>
                            </ul>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                            <h3 className="text-xl font-semibold text-white">Nguyên tắc</h3>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                <li>Tập thể quyết định theo đa số</li>
                                <li>Phản ánh nguyên tắc "Lấy dân làm gốc"</li>
                                <li>Sai lầm của đa số ảnh hưởng cả thuyền</li>
                                <li>Anti-spam: 1 vote mỗi vòng</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                        <h3 className="text-xl font-semibold text-white">Flow game</h3>
                        <ol className="mt-4 space-y-3 text-slate-300 list-decimal list-inside">
                            <li>Hiển thị câu hỏi với 4 đáp án</li>
                            <li>Vote trong 10 giây</li>
                            <li>Hiện % vote và chọn đáp án đa số</li>
                            <li>Cập nhật HP/Purity/Money</li>
                            <li>Tiếp tục câu hỏi tiếp theo</li>
                        </ol>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                        <h3 className="text-xl font-semibold text-white">Mốc lịch sử & thay đổi chỉ số</h3>
                        <p className="mt-3 text-slate-300">Game sẽ có các mốc lịch sử và thay đổi chỉ số HP/Purity theo từng quyết định. Các thay đổi này hiển thị rõ rang để bạn theo dõi tiến trình của con thuyền.</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default RulesScreen;
