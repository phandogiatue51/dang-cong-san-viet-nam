import SectionWrapper from "./SectionWrapper";

const ValuesSection = () => (
  <SectionWrapper
    id="gia-tri"
    title='II. Đảng trong sạch, vững mạnh'
    subtitle={'"Đảng ta là đạo đức, là văn minh." (1960)'}
    variant="muted"
  >
    <img
      src="/images/daoducvanminh.png"
      alt="Đảng gắn bó với nhân dân"
      className="w-full h-56 md:h-72 object-cover rounded-2xl border border-border mb-6"
    />
    {/* 2 cột cho Đạo đức và Văn minh */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Đạo đức - Gốc của Đảng */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-4">Đạo đức - Gốc của Đảng</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Đảng không phải tổ chức để "làm quan" hay hưởng đặc quyền</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Ngoài lợi ích của dân tộc, Tổ quốc, Đảng không có lợi ích nào khác</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Đảng "sẵn sàng vui vẻ làm trâu ngựa, làm tôi tớ trung thành" cho nhân dân</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">
              <strong>Năm đức tính của đảng viên:</strong> Cần, Kiệm, Liêm, Chính, Chí công vô tư
            </span>
          </li>
        </ul>
        <blockquote className="mt-4 text-sm italic text-muted-foreground border-l-2 border-secondary/40 pl-3">
          "Giàu sang không thể quyến rũ, nghèo khó không thể chuyển lay, uy lực không thể khuất phục."
        </blockquote>
      </div>

      {/* Văn minh - Trí tuệ và Tiên phong */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-4">Văn minh - Trí tuệ và Tiên phong</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Đảng đại diện cho lương tâm, trí tuệ và danh dự của toàn dân tộc</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật, không có đặc quyền</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">
              <strong>Tiên phong, gương mẫu:</strong> "Đảng viên đi trước, làng nước theo sau"
            </span>
          </li>
        </ul>
        <blockquote className="mt-4 text-sm italic text-muted-foreground border-l-2 border-secondary/40 pl-3">
          "Đảng viên phải là người tiên phong, gương mẫu trong cả công tác và đời sống hằng ngày."
        </blockquote>
      </div>
    </div>

    {/* Phần 2.3: Xây dựng Đảng trong sạch, vững mạnh - Chiếm full width */}
    <div className="mt-6 bg-card rounded-xl p-6 border border-border shadow-sm">
      <h3 className="text-xl font-bold text-primary mb-4">Xây dựng Đảng thật sự Trong sạch, Vững mạnh</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-secondary mb-2">Chống "Giặc nội xâm"</h4>
          <p className="text-foreground mb-3">
            Trong sạch nghĩa là phải kiên quyết đấu tranh chống lại chủ nghĩa cá nhân, tham ô,
            lãng phí và quan liêu. Đây là "giặc nội xâm" - kẻ địch bên trong phá hoại từ trong
            phá ra, còn đáng sợ hơn cả giặc ngoại xâm.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-secondary mb-2">Cơ chế "Rửa mặt hằng ngày"</h4>
          <p className="text-foreground mb-3">
            Đảng phải thực hiện tự phê bình và phê bình thường xuyên "như mỗi ngày phải rửa mặt".
            Đây là "thang thuốc" tốt nhất để phần tốt trong mỗi con người nảy nở như hoa mùa xuân
            và phần xấu bị mất dần đi.
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm italic text-muted-foreground border-l-2 border-secondary/40 pl-3">
        "Để xứng đáng là người lãnh đạo, Đảng phải luôn thật sự trong sạch."
      </blockquote>
    </div>
  </SectionWrapper>
);

export default ValuesSection;