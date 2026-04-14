export const theoreticalQuestions = [
  {
    id: 1,
    question: "Con thuyền muốn đi đúng hướng lâu dài cần dựa vào điều gì?",
    options: [
      { text: "Quyền lực áp đặt", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Nhân dân", effect: { hp: 15, purity: 8 }, type: "correct" },
      { text: "Một cá nhân giỏi", effect: { hp: -5, purity: -3 }, type: "temptation" },
      { text: "May mắn", effect: { hp: -10, purity: -5 }, type: "wrong" }
    ],
    correctAnswer: "B",
    explanation: "Đảng gắn bó với nhân dân"
  },
  {
    id: 2,
    question: "Khi thuyền chưa vững, điều quan trọng nhất là gì?",
    options: [
      { text: "Người lái phải vững", effect: { hp: 12, purity: 6 }, type: "correct" },
      { text: "Tốc độ nhanh", effect: { hp: -10, purity: -5 }, type: "wrong" },
      { text: "Ít người biết", effect: { hp: -5, purity: -3 }, type: "temptation" },
      { text: "Tránh tranh luận", effect: { hp: -8, purity: -4 }, type: "wrong" }
    ],
    correctAnswer: "A",
    explanation: "Ẩn dụ 'người lái đò'"
  },
  {
    id: 3,
    question: "Con thuyền được hình thành từ yếu tố nào là đúng nhất?",
    options: [
      { text: "Một cá nhân lãnh đạo", effect: { hp: -8, purity: -5 }, type: "wrong" },
      { text: "Sức mạnh quân sự", effect: { hp: -12, purity: -8 }, type: "wrong" },
      { text: "Kết hợp lý luận + phong trào", effect: { hp: 10, purity: 10 }, type: "correct" },
      { text: "Tiền bạc", effect: { hp: -15, purity: -10 }, type: "corrupt" }
    ],
    correctAnswer: "C",
    explanation: "Mác–Lênin + công nhân + yêu nước"
  },
  {
    id: 4,
    question: "Khi nói 'Đảng là đạo đức', điều gì là cốt lõi?",
    options: [
      { text: "Quyền lực", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Lợi ích riêng", effect: { hp: -15, purity: -12 }, type: "corrupt" },
      { text: "Phục vụ nhân dân", effect: { hp: 20, purity: 12 }, type: "correct" },
      { text: "Thành tích", effect: { hp: -5, purity: -3 }, type: "temptation" }
    ],
    correctAnswer: "C",
    explanation: "Đảng là đạo đức, văn minh"
  },
  {
    id: 5,
    question: "Nếu thuyền viên bị cám dỗ bởi giàu sang thì cần?",
    options: [
      { text: "Chấp nhận", effect: { hp: -15, purity: -12 }, type: "corrupt" },
      { text: "Thỏa hiệp", effect: { hp: -8, purity: -6 }, type: "temptation" },
      { text: "Giữ vững bản lĩnh", effect: { hp: 10, purity: 15 }, type: "correct" },
      { text: "Bỏ qua", effect: { hp: -5, purity: -3 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Giàu sang không thể quyến rũ..."
  },
  {
    id: 6,
    question: "Khi tổ chức muốn hoạt động đúng hướng, cần tuân theo?",
    options: [
      { text: "Ý kiến cá nhân", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Ngẫu nhiên", effect: { hp: -8, purity: -5 }, type: "wrong" },
      { text: "Chủ nghĩa Mác – Lênin", effect: { hp: 8, purity: 10 }, type: "correct" },
      { text: "Số đông nhất thời", effect: { hp: -5, purity: -3 }, type: "temptation" }
    ],
    correctAnswer: "C",
    explanation: "Kim chỉ nam cho hành động"
  },
  {
    id: 7,
    question: "Khi có nhiều ý kiến khác nhau, cách đúng là?",
    options: [
      { text: "Theo người mạnh nhất", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Không cần bàn", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Thảo luận rồi thống nhất", effect: { hp: 10, purity: 8 }, type: "correct" },
      { text: "Mỗi người làm một kiểu", effect: { hp: -12, purity: -8 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Tập trung dân chủ"
  },
  {
    id: 8,
    question: "Khi thuyền trưởng muốn quyết định một mình, nên?",
    options: [
      { text: "Đồng ý ngay", effect: { hp: -10, purity: -6 }, type: "wrong" },
      { text: "Phản đối hoàn toàn", effect: { hp: -5, purity: -3 }, type: "temptation" },
      { text: "Lãnh đạo tập thể", effect: { hp: 12, purity: 8 }, type: "correct" },
      { text: "Bỏ mặc", effect: { hp: -15, purity: -10 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Tránh độc đoán, chuyên quyền"
  },
  {
    id: 9,
    question: "Khi có sai lầm trong nội bộ, cần làm gì?",
    options: [
      { text: "Che giấu", effect: { hp: -20, purity: -15 }, type: "corrupt" },
      { text: "Đổ lỗi", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Tự phê bình và sửa", effect: { hp: 15, purity: 15 }, type: "correct" },
      { text: "Im lặng", effect: { hp: -10, purity: -8 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Tự phê bình là liều thuốc tốt"
  },
  {
    id: 10,
    question: "Kỷ luật trên thuyền cần như thế nào?",
    options: [
      { text: "Lỏng lẻo", effect: { hp: -15, purity: -12 }, type: "wrong" },
      { text: "Chỉ phạt người yếu", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Nghiêm minh và tự giác", effect: { hp: 10, purity: 10 }, type: "correct" },
      { text: "Không cần", effect: { hp: -20, purity: -15 }, type: "corrupt" }
    ],
    correctAnswer: "C",
    explanation: "Kỷ luật là sức mạnh"
  },
  {
    id: 11,
    question: "Mối quan hệ đúng giữa thuyền và người dân là?",
    options: [
      { text: "Cai trị", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Tách biệt", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Phục vụ", effect: { hp: 25, purity: 10 }, type: "correct" },
      { text: "Tránh tiếp xúc", effect: { hp: -20, purity: -15 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Đảng là đầy tớ của nhân dân"
  },
  {
    id: 12,
    question: "Nếu thuyền không mang lại lợi ích cho dân thì?",
    options: [
      { text: "Không sao", effect: { hp: -10, purity: -5 }, type: "wrong" },
      { text: "Vẫn chấp nhận", effect: { hp: -8, purity: -4 }, type: "wrong" },
      { text: "Mất ý nghĩa", effect: { hp: 15, purity: 8 }, type: "correct" },
      { text: "Tăng tuyên truyền", effect: { hp: -5, purity: -3 }, type: "temptation" }
    ],
    correctAnswer: "C",
    explanation: "Độc lập vô nghĩa nếu dân không hạnh phúc"
  }
];