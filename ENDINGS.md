# 🏆 CON THUYỀN CHUNG - HỆ THỐNG ENDING

## 📊 BẢNG ENDING (THEO 3 CHỈ SỐ)

| HP | Purity  | Ending | Ý nghĩa |
|----|--------|-------|--------|---------|
| 80-100 | ≥ 80%  | 🌟 Vững mạnh | Trong sạch, dân tin |
| 80-100 | < 80%  | ⚓ Ổn định nhưng cảnh báo | Dân tin nhưng nội bộ có vấn đề |
| 50-79 | ≥ 70%  | ⚓ Ổn định | Cần chỉnh đốn thêm |
| 50-79 | < 70%  | 🌊 Chao đảo | Mất dần niềm tin |
| 20-49 | ≥ 50%  | 🌊 Chao đảo | Sai nguyên tắc nhiều |
| 20-49 | < 50%  | ⛈️ Suy yếu | Nội bộ tham nhũng nặng |
| 1-19 | Bất kỳ | ⛈️ Suy yếu | Gần chìm |
| 0 | - | - | 💀 Chìm thuyền | Mất lòng dân |

## 🔥 QUOTE THEO ENDING

| HP | Purity | Quote |
|----|--------|-------|
| 80-100 | ≥ 80% | "Lấy dân làm gốc, Đảng ta là đạo đức, là văn minh" |
| 50-79 | ≥ 70% | "Một Đảng mà giấu giếm khuyết điểm là một Đảng hỏng" |
| 20-49 | < 60% | "Cán bộ là cái gốc của mọi công việc. Hư cán bộ là hư cả gốc" |
| 1-19 | < 40% | "Tham ô, lãng phí, quan liêu là giặc nội xâm" |
| 0 | - | "Mất lòng dân là mất tất cả" |

## 🎨 LOGIC TÍNH ENDING

```typescript
const getEnding = (hp: number, purity: number, money: number) => {
  if (hp <= 0) {
    return { name: "💀 Chìm thuyền", quote: "Mất lòng dân là mất tất cả" };
  }
  if (hp >= 80 && purity >= 80 && money <= 10) {
    return { name: "🌟 Vững mạnh", quote: "Lấy dân làm gốc, Đảng ta là đạo đức, là văn minh" };
  }
  if (hp >= 80 && (purity < 80 || money > 10)) {
    return { name: "⚓ Ổn định nhưng cảnh báo", quote: "Cần tiếp tục chỉnh đốn và hoàn thiện" };
  }
  if (hp >= 50 && purity >= 70 && money <= 30) {
    return { name: "⚓ Ổn định", quote: "Con thuyền đã đến đích, nhưng cần tiếp tục chỉnh đốn" };
  }
  if (hp >= 50 && (purity < 70 || money > 30)) {
    return { name: "🌊 Chao đảo", quote: "Thiếu gắn bó với nhân dân, con thuyền trở nên chao đảo" };
  }
  if (hp >= 20 && purity >= 50 && money <= 50) {
    return { name: "🌊 Chao đảo", quote: "Sai nguyên tắc nhiều lần, bắt đầu mất lòng dân" };
  }
  if (hp >= 20 && (purity < 50 || money > 50)) {
    return { name: "⛈️ Suy yếu", quote: "Chủ nghĩa cá nhân và sai lầm nội bộ làm con thuyền suy yếu" };
  }
  return { name: "⛈️ Suy yếu", quote: "Gần chìm, cần cải cách gấp" };
};
📝 UI ENDING MẪU
jsx
<EndingScreen hp={75} purity={68} money={25000000} stats={stats}>
  
  {/* KẾT QUẢ */}
  <div className="ending-result">
    <h1>⚓ Con thuyền ổn định</h1>
    <p>"Con thuyền đã đến đích, nhưng cần tiếp tục chỉnh đốn và hoàn thiện"</p>
  </div>
  
  {/* 3 CHỈ SỐ CHÍNH */}
  <div className="stats-grid">
    <div className="stat hp">
      <span>❤️ NIỀM TIN DÂN</span>
      <strong>{hp}/100</strong>
      <progress value={hp} max={100} />
    </div>
    
    <div className="stat purity">
      <span>🧼 ĐỘ TRONG SẠCH</span>
      <strong>{purity}%</strong>
      <progress value={purity} max={100} />
      <p>{purity >= 70 ? "✅ Tạm ổn" : "⚠️ Cảnh báo!"}</p>
    </div>
 
  </div>
  
  {/* THỐNG KÊ CHI TIẾT */}
  <div className="details">
    <h3>📊 HÀNH TRÌNH 1930 - 2026</h3>
    <ul>
      <li>✅ Số câu đúng: {stats.correct}/{stats.total}</li>
      <li>❌ Số câu sai: {stats.wrong}/{stats.total}</li>
      <li>💰 Tổng số lần tham nhũng: {stats.corruptCount}</li>
      <li>🌊 Số lần vượt bão: {stats.stormsSurvived}/7</li>
    </ul>
  </div>
  
  {/* TOP CÂU SAI NHIỀU NHẤT */}
  {stats.topWrongQuestions.length > 0 && (
    <div className="weaknesses">
      <h3>⚠️ ĐIỂM YẾU CẦN CẢI THIỆN</h3>
      {stats.topWrongQuestions.map(q => (
        <div key={q.id}>• {q.question} → Đáp án đúng: {q.correctAnswer}</div>
      ))}
    </div>
  )}
  
  {/* QUOTE HCM */}
  <div className="quote">
    <p>“{getRandomQuote(hp, purity)}”</p>
    <span>- Hồ Chí Minh -</span>
  </div>
  
  {/* NÚT */}
  <div className="actions">
    <button onClick={restartGame}>🚢 CHƠI LẠI</button>
    <button onClick={shareResult}>📤 CHIA SẺ KẾT QUẢ</button>
  </div>
  
</EndingScreen>
🎬 ANIMATION THEO ENDING
HP	Animation	Màu sắc
80-100	🌅 Thuyền đi xa, trời sáng	Vàng/Gold
50-79	⛅ Thuyền ổn định, trời bình thường	Xanh dương
20-49	🌊 Sóng to, thuyền lắc	Cam
1-19	⛈️ Bão, thuyền rạn nứt	Đỏ/Xám
0	💀 Thuyền vỡ, chìm	Đen tối