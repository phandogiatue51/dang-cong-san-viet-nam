import { MilestoneQuestion } from "./models";

export const milestoneQuestions: MilestoneQuestion[] = [
    {
        year: 1930,
        event: "Thành lập Đảng Cộng sản Việt Nam",
        question: "Đảng vừa thành lập, cần chọn hướng đi nào?",
        options: [
            {
                text: "Chạy theo phong trào, không có chiến lược rõ ràng",
                effect: { hp: -10, purity: -5 },
                type: "wrong"
            },
            {
                text: "Xây dựng nền tảng lý luận vững chắc, tổ chức chặt chẽ",
                effect: { hp: 15, purity: 10 },
                type: "correct"
            },
            {
                text: "Dựa dẫm vào sự giúp đỡ từ bên ngoài",
                effect: { hp: -15, purity: -10 },
                type: "corrupt"
            },
            {
                text: "Hoạt động bí mật, tránh tiếp xúc quần chúng",
                effect: { hp: -20, purity: -8 },
                type: "wrong"
            }
        ],
        correctAnswer: "B",
        explanation: "Bác Hồ dạy: 'Phải xây dựng Đảng vững mạnh từ gốc'",
        image: "/images/ngaythanhlapdang.png",
        imageCaption: "Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930. Ảnh chụp lại tranh của họa sĩ Phi Hoanh (Ảnh: Bảo tàng Lịch sử Quốc gia)."
    },
    {
        year: 1945,
        event: "Cách mạng Tháng Tám thành công",
        question: "Cách mạng Tháng Tám thành công, việc đầu tiên cần làm là gì?",
        options: [
            {
                text: "Tập trung củng cố quyền lực",
                effect: { hp: -5, purity: -5 },
                type: "temptation"
            },
            {
                text: "Lo cho dân ăn no, mặc ấm",
                effect: { hp: 20, purity: 10 },
                type: "correct"
            },
            {
                text: "Mở rộng quan hệ quốc tế",
                effect: { hp: 0, purity: 0 },
                type: "neutral"
            },
            {
                text: "Trừng trị kẻ thù cũ",
                effect: { hp: -10, purity: -5 },
                type: "wrong"
            }
        ],
        correctAnswer: "B",
        explanation: "Nước độc lập mà dân không được hưởng hạnh phúc thì vô nghĩa",
        image: "/images/cachmangthang8.png",
        imageCaption: "Ảnh tư liệu ghi lại cảnh quần chúng tập trung trước Nhà hát Lớn Hà Nộitrong những ngày Tổng khởi nghĩa Tháng Tám, nguồn gốc từ kho lưu trữ lịch sử quốc gia"
    },
    {
        year: 1954,
        event: "Chiến thắng Điện Biên Phủ",
        question: "Bài học lớn nhất từ chiến thắng Điện Biên Phủ là gì?",
        options: [
            { text: "Sức mạnh quân sự là quyết định", effect: { hp: -10, purity: -5 }, type: "wrong" },
            { text: "Đoàn kết toàn dân, tự lực cánh sinh", effect: { hp: 20, purity: 15 }, type: "correct" },
            { text: "Phải có viện trợ mới thắng", effect: { hp: -15, purity: -10 }, type: "corrupt" },
            { text: "Chờ thời cơ quốc tế", effect: { hp: -5, purity: -5 }, type: "temptation" }
        ],
        correctAnswer: "B",
        explanation: "Điện Biên Phủ là chiến thắng của ý chí độc lập, tự chủ",
        image: "/images/dienbienphu.png",
        imageCaption: "Ảnh cắm cờ trên nóc hầm De Castries ngày 7/5/1954, nguồn gốc từ tư liệu lịch sử của Thông tấn xã Việt Nam và Bảo tàng Lịch sử Quân sự Việt Nam"
    },
    {
        year: 1969,
        event: "Bác Hồ đi xa",
        question: "Di chúc của Bác nhấn mạnh điều gì trước tiên?",
        options: [
            {
                text: "Phát triển kinh tế",
                effect: { hp: 0, purity: 0 },
                type: "neutral"
            },
            {
                text: "Xây dựng Đảng trong sạch, vững mạnh",
                effect: { hp: 25, purity: 15 },
                type: "correct"
            },
            {
                text: "Mở rộng chiến tranh",
                effect: { hp: -20, purity: -10 },
                type: "wrong"
            },
            {
                text: "Để lại quyền lực cho tập thể",
                effect: { hp: 10, purity: 5 },
                type: "correct"
            }
        ],
        correctAnswer: "B",
        explanation: "Đảng phải giữ gìn sự đoàn kết, trong sạch, vững mạnh",
        image: "/images/ngaymathochiminh.png",
        imageCaption: "Ảnh lễ tang Chủ tịch Hồ Chí Minh tháng 9/1969, nguồn gốc từ tư liệu ảnh của Thông tấn xã Việt Nam và Bảo tàng Hồ Chí Minh"
    },
    {
        year: 1975,
        event: "Thống nhất đất nước",
        question: "Sau chiến tranh, ưu tiên số một là gì?",
        options: [
            {
                text: "Khôi phục sản xuất, ổn định đời sống",
                effect: { hp: 20, purity: 10 },
                type: "correct"
            },
            {
                text: "Củng cố bộ máy chính quyền",
                effect: { hp: 5, purity: 0 },
                type: "neutral"
            },
            {
                text: "Chạy theo thành tích, số lượng",
                effect: { hp: -15, purity: -10 },
                type: "temptation"
            },
            {
                text: "Mở cửa toàn diện, kể cả giá nào",
                effect: { hp: -25, purity: -20 },
                type: "corrupt"
            }
        ],
        correctAnswer: "A",
        explanation: "Dân đói, dân khổ thì Đảng có lỗi. Phải lo cho dân trước",
        image: "/images/thongnhatdatnuoc.png",
        imageCaption: "Ảnh xe tăng Quân Giải phóng tiến vào Dinh Độc Lập ngày 30/4/1975, nguồn gốc từ tư liệu ảnh của Thông tấn xã Việt Nam và Bảo tàng Lịch sử Quân sự Việt Nam."
    },
    {
        year: 2001,
        event: "Đại hội IX - Đổi mới toàn diện",
        question: "Mở cửa kinh tế, nhưng nảy sinh tham nhũng. Chọn hướng xử lý nào?",
        options: [
            {
                text: "Mở cửa bằng mọi giá",
                effect: { hp: -20, purity: -15 },
                type: "corrupt"
            },
            {
                text: "Vừa mở cửa, vừa siết chặt kỷ luật",
                effect: { hp: 15, purity: 10 },
                type: "correct"
            },
            {
                text: "Đóng cửa, giữ an toàn",
                effect: { hp: -10, purity: 0 },
                type: "wrong"
            },
            {
                text: "Cho phép tham nhũng để kích thích",
                effect: { hp: -30, purity: -25 },
                type: "corrupt"
            }
        ],
        correctAnswer: "B",
        explanation: "Đổi mới nhưng không đánh đổi đạo đức, kỷ cương",
        image: "/images/congcuocdoimoi.png",
        imageCaption: "Đại hội IX Đảng Cộng sản Việt Nam (2001), đánh dấu bước phát triển mới của công cuộc đổi mới, khẳng định đường lối xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa. Nguồn gốc từ TTXVN và Bảo tàng Lịch sử Quốc gia"
    },
    {
        year: 2026,
        event: "Kỷ niệm 96 năm thành lập Đảng cộng sản Việt Nam",
        question: "Nhìn lại chặng đường 96 năm thành lập Đảng cộng sản Việt Nam, bài học quan trọng nhất là?",
        options: [
            {
                text: "Phát triển kinh tế là trên hết",
                effect: { hp: 0, purity: -5 },
                type: "neutral"
            },
            {
                text: "Lấy dân làm gốc, Đảng phải trong sạch",
                effect: { hp: 30, purity: 20 },
                type: "correct"
            },
            {
                text: "Công nghệ là chìa khóa",
                effect: { hp: 0, purity: 0 },
                type: "neutral"
            },
            {
                text: "Quan hệ quốc tế quyết định",
                effect: { hp: -10, purity: -5 },
                type: "wrong"
            }
        ],
        correctAnswer: "B",
        explanation: "Mất lòng dân là mất tất cả. Đảng phải gắn bó với dân",
        image: "/images/96namthanhlapdang.png",
        imageCaption: "Poster tuyên truyền kỷ niệm 96 năm ngày thành lập Đảng (2026), nguồn: trang thông tin điện tử huyện Thường Tín, Hà Nội."
    }
];
