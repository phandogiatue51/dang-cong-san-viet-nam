import SectionWrapper from "./SectionWrapper";

const CadreSection = () => (
  <SectionWrapper
    id="can-bo"
    title="Xây dựng đội ngũ cán bộ, đảng viên"
    subtitle={'"Cán bộ là cái gốc của mọi công việc. Muốn việc thành công hay thất bại đều do cán bộ tốt hay kém."'}
  >
    <div className="grid md:grid-cols-2 gap-6">
      {/* Vừa Hồng */}
      <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">H</span>
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg">HỒNG</h3>
            <p className="text-xs text-muted-foreground">Đạo đức cách mạng — Là GỐC</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-foreground">
          <li>• Tuyệt đối trung thành với Đảng và nhân dân</li>
          <li>• Rèn luyện Cần, Kiệm, Liêm, Chính, Chí công vô tư</li>
          <li>• Gắn bó mật thiết với quần chúng</li>
          <li>• Tiên phong, gương mẫu: "đi trước, về sau"</li>
        </ul>
        <blockquote className="mt-4 text-xs italic text-muted-foreground border-l-2 border-primary/30 pl-3">
          "Giàu sang không thể quyến rũ, nghèo khó không thể chuyển lay, uy vũ không thể khuất phục."
        </blockquote>
      </div>

      {/* Vừa Chuyên */}
      <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
            <span className="text-secondary font-bold text-lg">C</span>
          </div>
          <div>
            <h3 className="font-bold text-secondary text-lg">CHUYÊN</h3>
            <p className="text-xs text-muted-foreground">Năng lực, trí tuệ — Công cụ hiện thực hóa</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-foreground">
          <li>• Không ngừng học tập nâng cao trình độ</li>
          <li>• Có tinh thần trách nhiệm và sáng tạo</li>
          <li>• Dám nghĩ, dám làm, năng động</li>
          <li>• Đào tạo, đánh giá, sử dụng đúng sở trường</li>
        </ul>
        <p className="mt-4 text-xs text-muted-foreground italic">
          Đạo đức là nền tảng dẫn hướng, nhưng thiếu năng lực thì lý tưởng mãi chỉ là ảo tưởng.
        </p>
      </div>
    </div>

    {/* Công tác cán bộ */}
    <div className="mt-8 bg-card rounded-xl p-6 border border-border">
      <h3 className="font-semibold text-foreground mb-4">Công tác cán bộ</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          "Hiểu và đánh giá đúng",
          "Đào tạo, giáo dục hiệu quả",
          "Bổ nhiệm đúng sở trường",
          "Kiểm tra, giám sát thường xuyên",
        ].map((item, i) => (
          <div key={i} className="bg-muted/40 rounded-lg p-3 text-center">
            <span className="text-secondary font-bold text-lg">{i + 1}</span>
            <p className="text-xs text-muted-foreground mt-1">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default CadreSection;
