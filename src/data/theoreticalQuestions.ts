export const theoreticalQuestions = [
  {
    id: 1,
    question: "Đảng ta muốn đi đúng hướng lâu dài cần dựa vào điều gì?",
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
    question: "Khi Đảng còn non trẻ và chưa vững mạnh, điều quan trọng nhất là gì?",
    options: [
      { text: "Người lãnh đạo phải vững vàng, bản lĩnh", effect: { hp: 12, purity: 6 }, type: "correct" },
      { text: "Đẩy nhanh tiến độ, chạy theo thành tích", effect: { hp: -10, purity: -5 }, type: "wrong" },
      { text: "Giữ bí mật, càng ít người biết càng tốt", effect: { hp: -5, purity: -3 }, type: "temptation" },
      { text: "Tránh tranh luận, không bàn cãi trong nội bộ", effect: { hp: -8, purity: -4 }, type: "wrong" }
    ],
    correctAnswer: "A",
    explanation: "Vai trò của người lãnh đạo trong giai đoạn đầu"
  },
  {
    id: 3,
    question: "Đảng Cộng sản Việt Nam được hình thành từ sự kết hợp của những yếu tố nào?",
    options: [
      { text: "Một cá nhân lãnh đạo xuất sắc", effect: { hp: -8, purity: -5 }, type: "wrong" },
      { text: "Sức mạnh quân sự", effect: { hp: -12, purity: -8 }, type: "wrong" },
      { text: "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước", effect: { hp: 10, purity: 10 }, type: "correct" },
      { text: "Tiền bạc và viện trợ từ nước ngoài", effect: { hp: -15, purity: -10 }, type: "corrupt" }
    ],
    correctAnswer: "C",
    explanation: "Mác–Lênin + công nhân + yêu nước"
  },
  {
    id: 4,
    question: "Khi nói 'Đảng là đạo đức, là văn minh', điều cốt lõi nhất có nghĩa là?",
    options: [
      { text: "Nắm giữ quyền lực tuyệt đối", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Theo đuổi lợi ích riêng của tập thể lãnh đạo", effect: { hp: -15, purity: -12 }, type: "corrupt" },
      { text: "Đặt lợi ích của nhân dân lên trên hết, phục vụ nhân dân", effect: { hp: 20, purity: 12 }, type: "correct" },
      { text: "Chạy theo thành tích và báo cáo đẹp", effect: { hp: -5, purity: -3 }, type: "temptation" }
    ],
    correctAnswer: "C",
    explanation: "Đảng là đạo đức, văn minh"
  },
  {
    id: 5,
    question: "Nếu cán bộ, đảng viên bị cám dỗ bởi giàu sang, vật chất thì cần phải làm gì?",
    options: [
      { text: "Chấp nhận vì ai cũng vậy", effect: { hp: -15, purity: -12 }, type: "corrupt" },
      { text: "Thỏa hiệp để tránh mất lòng", effect: { hp: -8, purity: -6 }, type: "temptation" },
      { text: "Giữ vững bản lĩnh chính trị, tu dưỡng đạo đức", effect: { hp: 10, purity: 15 }, type: "correct" },
      { text: "Làm ngơ, bỏ qua vì không ảnh hưởng lớn", effect: { hp: -5, purity: -3 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Giàu sang không thể quyến rũ, nghèo khó không thể chuyển lay, uy vũ không thể khuất phục"
  },
  {
    id: 6,
    question: "Để tổ chức Đảng hoạt động đúng hướng và khoa học, cần lấy hệ tư tưởng nào làm nền tảng?",
    options: [
      { text: "Ý kiến chủ quan của người đứng đầu", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Sự ngẫu nhiên, tình huống", effect: { hp: -8, purity: -5 }, type: "wrong" },
      { text: "Chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh", effect: { hp: 8, purity: 10 }, type: "correct" },
      { text: "Theo ý số đông nhất thời mà không có luận cứ", effect: { hp: -5, purity: -3 }, type: "temptation" }
    ],
    correctAnswer: "C",
    explanation: "Kim chỉ nam cho hành động"
  },
  {
    id: 7,
    question: "Trong Đảng, khi có nhiều ý kiến khác nhau về một vấn đề quan trọng, cần xử lý thế nào?",
    options: [
      { text: "Làm theo ý người có chức vụ cao nhất", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Không bàn bạc, cấp trên tự quyết", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Tổ chức thảo luận dân chủ, sau đó biểu quyết theo nguyên tắc tập trung", effect: { hp: 10, purity: 8 }, type: "correct" },
      { text: "Mỗi người làm một kiểu, không cần thống nhất", effect: { hp: -12, purity: -8 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Nguyên tắc tập trung dân chủ"
  },
  {
    id: 8,
    question: "Nếu người đứng đầu có xu hướng độc đoán, muốn quyết định mọi việc một mình, cần phải làm gì?",
    options: [
      { text: "Đồng ý ngay vì sợ mất lòng", effect: { hp: -10, purity: -6 }, type: "wrong" },
      { text: "Phản đối kịch liệt, gây mất đoàn kết", effect: { hp: -5, purity: -3 }, type: "temptation" },
      { text: "Thực hiện nguyên tắc lãnh đạo tập thể, quyết định theo đa số", effect: { hp: 12, purity: 8 }, type: "correct" },
      { text: "Bỏ mặc vì không phải việc của mình", effect: { hp: -15, purity: -10 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Tránh độc đoán, chuyên quyền, đề cao tập thể"
  },
  {
    id: 9,
    question: "Khi phát hiện sai lầm, khuyết điểm trong nội bộ Đảng, việc cần làm ngay là?",
    options: [
      { text: "Che giấu để giữ uy tín", effect: { hp: -20, purity: -15 }, type: "corrupt" },
      { text: "Đổ lỗi cho cấp dưới hoặc hoàn cảnh", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Tự phê bình và phê bình thẳng thắn, nghiêm túc sửa chữa", effect: { hp: 15, purity: 15 }, type: "correct" },
      { text: "Im lặng, để thời gian tự quên", effect: { hp: -10, purity: -8 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Tự phê bình là liều thuốc tốt"
  },
  {
    id: 10,
    question: "Kỷ luật trong một tổ chức cách mạng cần được thực hiện như thế nào?",
    options: [
      { text: "Lỏng lẻo, nương nhẹ", effect: { hp: -15, purity: -12 }, type: "wrong" },
      { text: "Chỉ áp dụng với cấp dưới, không áp dụng với cấp trên", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Nghiêm minh, công bằng và mang tính tự giác cao", effect: { hp: 10, purity: 10 }, type: "correct" },
      { text: "Không cần kỷ luật vì đã có đạo đức", effect: { hp: -20, purity: -15 }, type: "corrupt" }
    ],
    correctAnswer: "C",
    explanation: "Kỷ luật là sức mạnh của tổ chức"
  },
  {
    id: 11,
    question: "Mối quan hệ đúng đắn và bản chất nhất giữa Đảng và Nhân dân là gì?",
    options: [
      { text: "Quan hệ cai trị - bị trị", effect: { hp: -15, purity: -10 }, type: "wrong" },
      { text: "Tách biệt, Đảng ở trên dân", effect: { hp: -10, purity: -8 }, type: "wrong" },
      { text: "Đảng là công bộc, là đầy tớ trung thành của nhân dân", effect: { hp: 25, purity: 10 }, type: "correct" },
      { text: "Hạn chế tiếp xúc để giữ thể diện", effect: { hp: -20, purity: -15 }, type: "wrong" }
    ],
    correctAnswer: "C",
    explanation: "Đảng là đầy tớ của nhân dân"
  },
  {
    id: 12,
    question: "Nếu chính sách của Đảng và Nhà nước không mang lại lợi ích thiết thực cho nhân dân thì điều gì sẽ xảy ra?",
    options: [
      { text: "Không sao, miễn là giữ được ổn định", effect: { hp: -10, purity: -5 }, type: "wrong" },
      { text: "Vẫn chấp nhận vì dân phải biết nghe theo", effect: { hp: -8, purity: -4 }, type: "wrong" },
      { text: "Độc lập, tự do và chủ nghĩa xã hội trở nên vô nghĩa", effect: { hp: 15, purity: 8 }, type: "correct" },
      { text: "Tăng cường tuyên truyền để dân tin", effect: { hp: -5, purity: -3 }, type: "temptation" }
    ],
    correctAnswer: "C",
    explanation: "Độc lập vô nghĩa nếu dân không được ăn no, mặc ấm, hạnh phúc"
  }
];