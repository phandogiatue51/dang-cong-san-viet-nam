import SectionWrapper from "./SectionWrapper";

const ValuesSection = () => (
  <SectionWrapper
    id="gia-tri"
    title="Đảng là đạo đức, là văn minh"
    subtitle={'"Đảng ta là đạo đức, là văn minh." (1960)'}
    variant="muted"
  >
    <div className="grid md:grid-cols-2 gap-6">
      {/* Đạo đức */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-4">Đạo đức</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Trung thành tuyệt đối với lợi ích toàn dân tộc</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Không có mục đích tự thân, không có lợi ích riêng</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Cán bộ là "đầy tớ trung thành" của nhân dân</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">
              <strong>Năm đức tính:</strong> Cần, Kiệm, Liêm, Chính, Chí công vô tư
            </span>
          </li>
        </ul>
        <blockquote className="mt-4 text-sm italic text-muted-foreground border-l-2 border-secondary/40 pl-3">
          "Giàu sang không thể quyến rũ, nghèo khó không thể chuyển lay, uy vũ không thể khuất phục."
        </blockquote>
      </div>

      {/* Văn minh */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-xl font-bold text-primary mb-4">Văn minh</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Tiêu biểu cho lương tâm, trí tuệ và danh dự dân tộc</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Hoạt động trong khuôn khổ Hiến pháp và pháp luật</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">Quan hệ quốc tế trong sáng, hòa bình, hữu nghị</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary font-bold shrink-0">•</span>
            <span className="text-foreground">
              <strong>Tiên phong, gương mẫu:</strong> "Đi trước, về sau", "miệng ăn, mặc, ở, làm việc phải kiểu mẫu"
            </span>
          </li>
        </ul>
        <blockquote className="mt-4 text-sm italic text-muted-foreground border-l-2 border-secondary/40 pl-3">
          "Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác."
        </blockquote>
      </div>
    </div>
  </SectionWrapper>
);

export default ValuesSection;
