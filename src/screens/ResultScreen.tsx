const ResultScreen = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-900/40">
                <h1 className="text-3xl font-semibold">Kết quả vòng</h1>
                <p className="mt-3 text-slate-400">Tổng hợp số liệu sau một câu hỏi và cập nhật chỉ số.</p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                        <h2 className="mb-3 text-xl font-semibold">Chỉ số</h2>
                        <div className="space-y-3 text-slate-200">
                            <p>HP: 85 → 95</p>
                            <p>Purity: 78% → 82%</p>
                            <p>Money: 12M → 9M</p>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
                        <h2 className="mb-3 text-xl font-semibold">Thông báo</h2>
                        <p className="text-slate-300">Đáp án đúng: B. Lựa chọn này giúp củng cố niềm tin nhân dân.</p>
                    </div>
                </div>

                <button className="mt-8 rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                    Tiếp tục
                </button>
            </div>
        </main>
    );
};

export default ResultScreen;
