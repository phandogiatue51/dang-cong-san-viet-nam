# 🚢 CON THUYỀN CHUNG - LUẬT CHƠI

## 🎯 MỤC TIÊU
Dẫn dắt con thuyền cách mạng vượt qua các tình huống, giữ lòng tin nhân dân (HP)

## 👥 NGƯỜI CHƠI
- Không giới hạn số lượng
- Mỗi người = 1 phiếu vote

## 🎮 CÁCH CHƠI (FLOW)

1. **Hiển thị câu hỏi**: 1 tình huống + 4 đáp án (A, B, C, D)
2. **Vote**: 5-10 giây, mỗi user 1 vote
3. **Hiển thị kết quả**: % từng đáp án (A:30%, B:45%, C:15%, D:10%)
4. **Quyết định**: Đáp án có % cao nhất → hướng đi của thuyền
5. **Cập nhật chỉ số**: Cộng/trừ HP, Purity, Money

## ❤️ HỆ THỐNG ĐIỂM (HP)

- **Bắt đầu**: 100 HP
- **Chọn đúng**: +10 HP
- **Chọn sai**: -15 HP
- **Thua**: HP = 0
- **Thắng**: Kết thúc tất cả câu hỏi với HP > 0

## ⚖️ NGUYÊN TẮC

1. **Tập thể quyết định** - Kết quả theo đa số (tập trung dân chủ)
2. **Lấy dân làm gốc** - Đúng → tăng HP, Sai → mất HP
3. **Hậu quả tập thể** - Sai lầm của đa số ảnh hưởng cả thuyền

## 🎲 LUẬT PHỤ

- ⏱️ Không vote → mất lượt
- 👀 Anti-spam: 1 vote/round
- 🎁 Bonus: Câu đặc biệt (+20 hoặc -30)

## 🧩 UI CẦN CÓ

- 🚢 Animation thuyền (tiến/lùi)
- 📊 Biểu đồ % vote
- ❤️ Thanh HP
- 🧠 Giải thích ngắn sau mỗi câu

## 🔥 FLOW TỔNG THỂ
Start → Câu hỏi → Vote → Hiện % → Quyết định → Cộng/trừ điểm → Next → End

## 🚀 TAGLINE

- **Thắng**: "Con thuyền vững mạnh vì luôn gắn bó với nhân dân"
- **Thua**: "Mất lòng dân là mất tất cả"

## 📊 TÓM TẮT (CHO WEB)
Multiplayer vote
4 đáp án
Chọn theo đa số
HP (niềm tin nhân dân): 100
Đúng → +10 | Sai → -15
Hết câu → thắng/thua

## 🗺️ CẤU TRÚC GAME (24 CÂU)
START (HP=100, Purity=100%)
↓
📍 MỐC 1: 1930: 1 câu mốc + 2 câu lý thuyết
↓
📍 MỐC 2: 1945 - BÃO: Mất 10 HP nếu Purity < 70% + 1 câu mốc + 2 câu lý thuyết
↓
📍 MỐC 3: 1954 - BÃO: Mất 15 HP nếu Purity < 60% + 1 câu mốc + 2 câu lý thuyết
↓
📍 MỐC 4: 1969 - BÃO: Mất 20 HP (luôn) + 1 câu mốc + 2 câu lý thuyết
↓
📍 MỐC 5: 1975 - BÃO: Mất 25 HP nếu Purity < 50% + 1 câu mốc + 2 câu lý thuyết
↓
📍 MỐC 6: 1986 - BÃO: Mất 15 HP + Reset Purity = 50% + 1 câu mốc + 2 câu lý thuyết
↓
📍 MỐC 7: 2026 - KIỂM TRA: HP > 40 + 1 câu mốc tổng kết
↓
END GAME

text

## 🌊 CHI TIẾT BÃO TỪNG MỐC

| Mốc | Điều kiện | Hậu quả |
|-----|-----------|---------|
| 1930 | Purity < 80% | Mất 5 HP |
| 1945 | Purity < 70% | Mất 10 HP |
| 1954 | Purity < 60% | Mất 15 HP |
| 1969 | Luôn | Mất 20 HP |
| 1975 | Purity < 50% | Mất 25 HP |
| 1986 | Luôn | Mất 15 HP + Reset Purity = 50% |
| 2026 | HP > 40 mới thắng | - |

🔗 CÁC FILE DỮ LIỆU
theoreticalQuestions.ts - 20 câu lý thuyết
milestoneQuestions.ts - 7 câu mốc lịch sử (1930-2026)

🛠 YÊU CẦU CODE
React + TypeScript + Vite
Tailwind CSS + Framer Motion
Real-time vote (WebSocket hoặc state)
3 chỉ số: HP, Purity, Money
7 mốc bão (kiểm tra Purity trước khi trừ HP)