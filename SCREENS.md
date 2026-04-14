# 🖥️ CON THUYỀN CHUNG - MÀN HÌNH UI

## 📱 DANH SÁCH MÀN HÌNH

| STT | Màn hình | Mô tả |
|-----|----------|-------|
| 1 | Lobby | Chờ người chơi tham gia |
| 2 | Tạo nhân vật | Nhập tên, chờ host bắt đầu |
| 3 | Game chính | Hiển thị câu hỏi, vote, chỉ số |
| 5 | Mốc lịch sử | Animation bão + hiệu ứng đặc biệt |
| 6 | Kết quả round | Hiển thị % vote, giải thích |
| 7 | Bảng xếp hạng | Vinh danh cán bộ xuất sắc / tham nhũng |
| 8 | Ending | Tổng kết game, thống kê |
| 9 | Admin | Nút bắt đầu, điều khiển game |

---

## 🎮 MÀN HÌNH 1: LOBBY (CHỜ NGƯỜI CHƠI)
┌─────────────────────────────────────────────┐
│ 🚢 CON THUYỀN CHUNG │
│ Mã phòng: ABC123 │
├─────────────────────────────────────────────┤
│ 👥 NGƯỜI CHƠI (4/10) │
│ • Nguyễn Văn A (Sẵn sàng) ✅ │
│ • Trần Thị B (Sẵn sàng) ✅ │
│ • Lê Văn C (Chờ) ⏳ │
│ • Phạm Thị D (Sẵn sàng) ✅ │
├─────────────────────────────────────────────┤
│ [ 👤 TẠO NHÂN VẬT ] [ 🎮 BẮT ĐẦU (ADMIN) ] │
│ (Admin chỉ thấy nút BẮT ĐẦU khi có ≥2 người)│
└─────────────────────────────────────────────┘

---

## 👤 MÀN HÌNH 2: TẠO NHÂN VẬT (POPUP)
┌─────────────────────────────────────────────┐
│ ✨ TẠO CÁN BỘ MỚI │
├─────────────────────────────────────────────┤
│ Tên của bạn: │
│ [ 📝 Nhập họ tên..................... ] │

│ [ ✅ XÁC NHẬN ] [ ❌ HỦY ] │
└─────────────────────────────────────────────┘


---

## 🎲 MÀN HÌNH 3: GAME CHÍNH
┌─────────────────────────────────────────────────────────────┐
│ 🚢 CON THUYỀN CHUNG Mốc: 1930 (1/7) │
│ Câu: 3/24 │
├─────────────────────────────────────────────────────────────┤
│ ❤️ HP: 85/100 ████████░░ │
│ 🧼 Purity: 72% ███████░░░ │
│ 💰 Money: 250M ███░░░░░░░ │
├─────────────────────────────────────────────────────────────┤
│ │
│ ❓ "Con thuyền cách mạng vừa ra khơi. Chọn hướng đi nào?" │
│ │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ A. Đi nhanh, vượt trước │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ B. Đi chậm chắc, xây móng vững │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ C. Chờ xem hướng gió │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ D. Hợp tác với thế lực bên ngoài │ │
│ └─────────────────────────────────────────────────────┘ │
│ │
│ ⏱️ Thời gian còn lại: 8s │
│ 👥 Đã vote: 12/15 người │
└─────────────────────────────────────────────────────────────┘


## 🌊 MÀN HÌNH 5: MỐC LỊCH SỬ + BÃO
┌─────────────────────────────────────────────┐
│ ⚡ MỐC LỊCH SỬ - 1954 │
│ 🏆 CHIẾN THẮNG ĐIỆN BIÊN PHỦ │
├─────────────────────────────────────────────┤
│ 🌊 BÃO ĐANG ỦNG HỘ! │
│ │
│ "Pháp muốn viện trợ đổi lấy căn cứ quân sự"│
│ │
│ [ Animation: Sóng to, thuyền lắc ] │
│ │
│ Kiểm tra Purity: 45% < 60% │
│ ➖ Mất 15 HP! │
│ │
│ [ TIẾP TỤC ] │
└─────────────────────────────────────────────┘

---

## 📊 MÀN HÌNH 6: KẾT QUẢ ROUND
┌─────────────────────────────────────────────┐
│ 📊 KẾT QUẢ BÌNH CHỌN │
├─────────────────────────────────────────────┤
│ A: 30% ████████░░ │
│ B: 45% ████████████░░ (CHỌN) │
│ C: 15% ████░░ │
│ D: 10% ██░░ │
├─────────────────────────────────────────────┤
│ ✅ Đáp án đúng là B │
│ │
│ 📖 "Độc lập dân tộc là trên hết, │
│ không đánh đổi" │
│ │
│ ❤️ HP: 85 → 100 (+15) │
│ 🧼 Purity: 72% → 82% (+10%) │
│ │
│ [ TIẾP TỤC ] │
└─────────────────────────────────────────────┘

---

## 🏆 MÀN HÌNH 7: BẢNG XẾP HẠNG (GIỮA GAME)
┌─────────────────────────────────────────────┐
│ 📋 BẢNG XẾP HẠNG CÁN BỘ │
├─────────────────────────────────────────────┤
│ 🌟 CÁN BỘ XUẤT SẮC │
│ 1. Trần Thị B - Merit: 7 │
│ 2. Lê Văn C - Merit: 5 │
│ 3. Phạm Thị D - Merit: 3 │
│ │
│ 💀 CẢNH BÁO THAM NHŨNG │
│ 1. Nguyễn Văn A - 3 lần (350M) │
│ 2. Hoàng Văn E - 2 lần (120M) │
│ │
│ [ ĐÓNG ] │
└─────────────────────────────────────────────┘


---

## 🏁 MÀN HÌNH 8: ENDING (TỔNG KẾT)
┌─────────────────────────────────────────────┐
│ ⚓ Con thuyền ổn định │
│ "Con thuyền đã đến đích, nhưng cần │
│ tiếp tục chỉnh đốn và hoàn thiện" │
├─────────────────────────────────────────────┤
│ ❤️ HP: 75/100 ████████░░ │
│ 🧼 Purity: 68% ███████░░░ │
│ 💰 Money: 25M ██░░░░░░░░ │
├─────────────────────────────────────────────┤
│ 📊 THỐNG KÊ HÀNH TRÌNH │
│ ✅ Đúng: 18/24 │
│ ❌ Sai: 6/24 │
│ 💰 Tham nhũng: 3 lần │
│ 🌊 Vượt bão: 5/7 │
├─────────────────────────────────────────────┤
│ 📖 "Một Đảng mà giấu giếm khuyết điểm │
│ là một Đảng hỏng" │
│ - Hồ Chí Minh -│
├─────────────────────────────────────────────┤
│ [ 🚢 CHƠI LẠI ] [ 📤 CHIA SẺ ] │
└─────────────────────────────────────────────┘


---

## 👑 MÀN HÌNH 9: ADMIN (HOST)
┌─────────────────────────────────────────────┐
│ 👑 ADMIN PANEL - CON THUYỀN CHUNG │
├─────────────────────────────────────────────┤
│ Mã phòng: ABC123 │
│ Số người: 8/20 │
│ │
│ [ 🎮 BẮT ĐẦU GAME ] │
│ [ ⏸️ TẠM DỪNG ] │
│ [ 🚪 KẾT THÚC SỚM ] │
│ │
│ Cài đặt: │
│ • Thời gian vote: [ 10 ▼ ] giây │
│ • Số câu hỏi: [ 24 ] (mặc định) │
│ • Chế độ bão: [ ✅ BẬT ] │
│ │
│ DANH SÁCH NGƯỜI CHƠI: │
│ • Nguyễn Văn A ✅ [ KICK ] │
│ • Trần Thị B ✅ [ KICK ] │
│ • Lê Văn C ⏳ [ KICK ] │
└─────────────────────────────────────────────┘

---

## 🎯 TÓM TẮT CÁC MÀN HÌNH CẦN CODE

| File | Màn hình |
|------|----------|
| `LobbyScreen.tsx` | Lobby chờ, tạo phòng |
| `CreateCharacterScreen.tsx` | Nhập tên, chọn avatar |
| `GameScreen.tsx` | Game chính (câu hỏi, vote) |
| `CorruptPopup.tsx` | Popup tham nhũng |
| `MilestoneScreen.tsx` | Mốc lịch sử + bão |
| `ResultScreen.tsx` | Kết quả từng round |
| `LeaderboardScreen.tsx` | Bảng xếp hạng |
| `EndingScreen.tsx` | Tổng kết game |
| `AdminPanel.tsx` | Điều khiển game |
