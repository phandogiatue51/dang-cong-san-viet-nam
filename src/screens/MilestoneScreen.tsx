const MilestoneScreen = () => {
    const stages = [
        {
            year: 1930,
            title: "Khởi hành",
            outcome: "1 câu mốc + 2 câu lý thuyết.",
        },
        {
            year: 1945,
            title: "Bão lịch sử",
            outcome: "Nếu purity < 70% thì mất 10 HP, sau đó 1 câu mốc + 2 câu lý thuyết.",
        },
        {
            year: 1954,
            title: "Bão thử thách",
            outcome: "Nếu purity < 60% thì mất 15 HP, sau đó 1 câu mốc + 2 câu lý thuyết.",
        },
        {
            year: 1969,
            title: "Bão quyết định",
            outcome: "Mất 20 HP luôn, sau đó 1 câu mốc + 2 câu lý thuyết.",
        },
        {
            year: 1975,
            title: "Bão hồi phục",
            outcome: "Nếu purity < 50% thì mất 25 HP, sau đó 1 câu mốc + 2 câu lý thuyết.",
        },
        {
            year: 1986,
            title: "Bão đổi mới",
            outcome: "Mất 15 HP và purity được đặt lại 50%, sau đó 1 câu mốc + 2 câu lý thuyết.",
        },
        {
            year: 2026,
            title: "Kiểm tra cuối cùng",
            outcome: "1 câu mốc tổng kết. Cần giữ HP > 40 để vượt qua kỳ thi.",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-900/40">
                <h1 className="text-3xl font-semibold">Mốc lịch sử</h1>
                <p className="mt-3 text-slate-400">Hiển thị luồng game 7 mốc với câu cột mốc, câu lý thuyết và bão theo purity.</p>

                <div className="mt-8 space-y-4">
                    {stages.map((item) => (
                        <div key={item.year} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Mốc {item.year}</p>
                            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
                            <p className="mt-2 text-slate-300">{item.outcome}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default MilestoneScreen;
