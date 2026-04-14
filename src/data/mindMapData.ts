export interface MindMapNode {
  id: string;
  label: string;
  quote?: string;
  children?: MindMapNode[];
}

export const mindMapData: MindMapNode = {
  id: "root",
  label: "",
  children: [
    {
      id: "1",
      label: "1. Tính tất yếu và vai trò lãnh đạo",
      children: [
        {
          id: "1a",
          label: "Cách mạng muốn thành công phải có Đảng",
          quote: "\"Cách mệnh trước hết phải có đảng cách mệnh... Đảng phải vững mạnh thì cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.\" — Đường cách mệnh (1927)",
        },
        {
          id: "1b",
          label: "Người cầm lái con thuyền cách mạng",
          quote: "Đảng là người dẫn đường, chỉ lối cho nhân dân đấu tranh giành độc lập, tự do.",
        },
        {
          id: "1c",
          label: "Sản phẩm của ba dòng chảy lịch sử",
          children: [
            { id: "1c1", label: "Chủ nghĩa Mác – Lênin" },
            { id: "1c2", label: "Phong trào công nhân" },
            { id: "1c3", label: "Phong trào yêu nước Việt Nam" },
          ],
          quote: "Khác với phương Tây, ĐCSVN ra đời từ sự kết hợp đặc thù của ba yếu tố — sự gắn bó bền chặt giữa giai cấp và dân tộc.",
        },
        {
          id: "1d",
          label: "Lãnh đạo giải phóng dân tộc & xây dựng CNXH",
          quote: "Giải quyết mâu thuẫn căn bản: toàn thể dân tộc đấu tranh chống đế quốc.",
        },
      ],
    },
    {
      id: "2",
      label: "2. Sự trong sạch và sức mạnh của Đảng",
      children: [
        {
          id: "2a",
          label: "Đảng là đạo đức, là văn minh",
          quote: "\"Đảng ta là đạo đức, là văn minh.\" (1960)",
          children: [
            {
              id: "2a1",
              label: "Đạo đức cách mạng là \"gốc\"",
              quote: "Cần, Kiệm, Liêm, Chính, Chí công vô tư — năm đức tính cốt lõi của người cán bộ.",
            },
            {
              id: "2a2",
              label: "Không có lợi ích riêng ngoài lợi ích nhân dân",
              quote: "\"Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác.\"",
            },
            {
              id: "2a3",
              label: "Là đầy tớ trung thành của nhân dân",
              quote: "Cán bộ là \"đầy tớ\" chứ không phải \"quan cách mạng\". Phải tiên phong, gương mẫu: \"đi trước, về sau\".",
            },
          ],
        },
        {
          id: "2b",
          label: "Nguyên tắc hoạt động",
          children: [
            {
              id: "2b1",
              label: "Chủ nghĩa Mác – Lênin là nền tảng tư tưởng",
              quote: "\"Kim chỉ nam\" cho mọi hành động. Vận dụng sáng tạo, không giáo điều.",
            },
            {
              id: "2b2",
              label: "Tập trung dân chủ",
              quote: "Dân chủ là để thu thập trí tuệ; Tập trung là để tạo ra sức mạnh. Không có dân chủ → độc đoán; Không có tập trung → vô chính phủ.",
            },
            {
              id: "2b3",
              label: "Lãnh đạo tập thể, trách nhiệm cá nhân",
              quote: "Ngăn ngừa độc đoán, chuyên quyền. Cá nhân phụ trách trong khuôn khổ tập thể.",
            },
            {
              id: "2b4",
              label: "Tự phê bình và phê bình",
              quote: "\"Như mỗi ngày phải rửa mặt\" — \"thuốc đắng dã tật\". Phải thật thà, trên tinh thần tình đồng chí yêu thương lẫn nhau.",
            },
            {
              id: "2b5",
              label: "Kỷ luật nghiêm minh, tự giác",
              quote: "Sức mạnh đến từ sự thống nhất ý chí và hành động. Kỷ luật sắt nhưng tự giác.",
            },
            {
              id: "2b6",
              label: "Thường xuyên tự đổi mới, tự chỉnh đốn",
              quote: "Là quy luật sinh tồn. Đặc biệt quan trọng sau thắng lợi lớn để chống tự mãn và tha hóa.",
            },
          ],
        },
        {
          id: "2c",
          label: "Đoàn kết nội bộ",
          children: [
            {
              id: "2c1",
              label: "Giữ gìn đoàn kết như giữ gìn con ngươi của mắt",
            },
            {
              id: "2c2",
              label: "Dựa trên chủ nghĩa Mác – Lênin và tình đồng chí",
            },
          ],
        },
        {
          id: "2d",
          label: "Đoàn kết quốc tế",
          children: [
            { id: "2d1", label: "Chủ nghĩa quốc tế vô sản" },
            {
              id: "2d2",
              label: "Giữ vững độc lập, chủ quyền",
              quote: "Quan hệ quốc tế trong sáng, hòa bình, hữu nghị, tôn trọng độc lập lẫn nhau.",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      label: "3. Xây dựng đội ngũ cán bộ, đảng viên",
      children: [
        {
          id: "3a",
          label: "Yêu cầu đối với cán bộ",
          quote: "\"Vừa Hồng, vừa Chuyên\" — Đạo đức là nền tảng, năng lực là công cụ hiện thực hóa.",
          children: [
            { id: "3a1", label: "Tuyệt đối trung thành với Đảng" },
            {
              id: "3a2",
              label: "Rèn luyện đạo đức cách mạng",
              quote: "\"Giàu sang không thể quyến rũ, nghèo khó không thể chuyển lay, uy vũ không thể khuất phục.\"",
            },
            { id: "3a3", label: "Không ngừng học tập, nâng cao trình độ" },
            { id: "3a4", label: "Gắn bó mật thiết với quần chúng" },
            { id: "3a5", label: "Có tinh thần trách nhiệm và sáng tạo" },
            {
              id: "3a6",
              label: "Kiên quyết chống \"giặc nội xâm\"",
              quote: "Tham nhũng, lãng phí, quan liêu — \"Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra.\" Chủ nghĩa cá nhân là \"căn bệnh mẹ\".",
            },
          ],
        },
        {
          id: "3b",
          label: "Công tác cán bộ",
          quote: "\"Cán bộ là cái gốc của mọi công việc. Muốn việc thành công hay thất bại đều do cán bộ tốt hay kém.\"",
          children: [
            { id: "3b1", label: "Hiểu và đánh giá đúng cán bộ" },
            { id: "3b2", label: "Đào tạo, giáo dục có hiệu quả" },
            { id: "3b3", label: "Bổ nhiệm, sử dụng đúng sở trường" },
            { id: "3b4", label: "Thường xuyên kiểm tra, giám sát, giúp đỡ" },
          ],
        },
      ],
    },
  ],
};
