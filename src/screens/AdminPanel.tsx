import { useGameState } from "@/hooks/useGameState";
import { Trash2 } from "lucide-react";

const AdminPanel = () => {
    const { gameState, startGame, deletePlayer, restartGame, triggerEnding } = useGameState();

    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-10 dark">
            <div className="mx-auto max-w-6xl rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-900/40">
                <h1 className="text-3xl font-semibold">Bảng điều khiển Admin</h1>
                <p className="mt-3 text-slate-400">Quản lý phòng chơi và điều khiển trạng thái game.</p>

                {/* 2 CỘT CHÍNH */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    {/* CỘT TRÁI: Điều khiển + Thông tin */}
                    <div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <button
                                className="rounded-3xl bg-sky-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-sky-400"
                                onClick={startGame}
                            >
                                Bắt đầu game
                            </button>
                            <button
                                className="rounded-3xl bg-amber-500 px-5 py-4 text-sm font-semibold text-[#0F172A] transition hover:bg-amber-400"
                                onClick={restartGame}
                            >
                                Chơi lại
                            </button>
                            {/* <button
                                className="rounded-3xl bg-rose-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-rose-500"
                                onClick={triggerEnding}
                            >
                                DEBUG: Hiện màn Ending
                            </button> */}
                            <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 col-span-2">
                                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Trạng thái hệ thống</p>
                                <p className="mt-3 text-2xl font-bold text-slate-200">{gameState.players.length} cán bộ</p>
                                <p className="mt-1 text-sm text-slate-400">Thời gian vote: 20s</p>
                                <p className="mt-1 text-sm text-slate-400">Số câu hỏi: {gameState.questionCount || 19}</p>
                            </div>
                        </div>

                        {/* Danh sách cán bộ */}
                        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                            <h2 className="text-xl font-semibold mb-4">📋 Danh sách cán bộ</h2>
                            {gameState.players.length === 0 ? (
                                <p className="text-slate-400">Chưa có cán bộ nào.</p>
                            ) : (
                                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                    {gameState.players.map((player) => (
                                        <div key={player.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                                            <div>
                                                <p className="font-semibold">{player.name}</p>
                                            </div>
                                            <button
                                                className="p-2 text-red-400 hover:text-red-300 transition"
                                                onClick={() => deletePlayer(player.id)}
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CỘT PHẢI: Lịch sử thay đổi */}
                    <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                        <h2 className="text-xl font-semibold mb-4 text-amber-400">📜 Lịch sử thay đổi</h2>
                        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="sticky top-0 bg-slate-950/90 border-b border-slate-700 text-slate-400 uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">Sự kiện</th>
                                        <th className="px-4 py-3 font-medium text-center">Biến đổi</th>
                                        <th className="px-4 py-3 font-medium text-right">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {gameState.history.length === 0 ? (
                                        <tr>
                                            <td colSpan={3} className="px-4 py-10 text-center text-slate-500 italic">
                                                Chưa có lịch sử thay đổi
                                            </td>
                                        </tr>
                                    ) : (
                                        gameState.history.map((item) => (
                                            <tr key={item.id} className="hover:bg-slate-800/30 transition">
                                                <td className="px-4 py-4">
                                                    <p className="font-semibold text-slate-200">{item.title}</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="font-mono text-slate-300">{item.note}</span>
                                                </td>
                                                <td className="px-4 py-4 text-right">
                                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.status === 'positive' ? 'bg-emerald-500/10 text-emerald-400' :
                                                            item.status === 'negative' ? 'bg-rose-500/10 text-rose-400' :
                                                                'bg-slate-500/10 text-slate-400'
                                                        }`}>
                                                        {item.status === 'positive' ? 'Tăng' : item.status === 'negative' ? 'Giảm' : 'Không đổi'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminPanel;