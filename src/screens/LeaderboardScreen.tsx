const LeaderboardScreen = () => {
    const leaders = [
        { name: "Trần Thị B", score: 12 },
        { name: "Lê Văn C", score: 10 },
        { name: "Nguyễn Văn A", score: 8 },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-900/40">
                <h1 className="text-3xl font-semibold">Bảng xếp hạng</h1>
                <p className="mt-3 text-slate-400">Vinh danh cán bộ xuất sắc và cảnh báo những trường hợp tham nhũng.</p>

                <div className="mt-8 space-y-3">
                    {leaders.map((leader, index) => (
                        <div key={leader.name} className="flex items-center justify-between rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4">
                            <span>{index + 1}. {leader.name}</span>
                            <span className="font-semibold text-sky-300">{leader.score} điểm</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default LeaderboardScreen;
