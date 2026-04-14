import SectionWrapper from "./SectionWrapper";

const CadreSection = () => (
  <SectionWrapper
    id="can-bo"
    title="V. Xây dựng Đội ngũ Cán bộ và Chỉnh đốn Nội bộ"
    subtitle={'"Cán bộ là cái gốc của mọi công việc. Muốn việc thành công hay thất bại đều do cán bộ tốt hay kém."'}
  >
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-emerald-700/25 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-7 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-700/80 mb-3">Phẩm chất cán bộ</p>
        <h3 className="text-xl font-bold text-emerald-900 mb-4">Phẩm chất phải có của cán bộ</h3>
        <ul className="space-y-3 text-sm md:text-base text-emerald-950/90">
          <li className="flex gap-2"><span className="text-emerald-600">●</span><span>Đặt lợi ích của Đảng, của dân tộc lên trên lợi ích cá nhân.</span></li>
          <li className="flex gap-2"><span className="text-emerald-600">●</span><span>Sẵn sàng hy sinh lợi ích riêng cho mục tiêu chung.</span></li>
          <li className="flex gap-2"><span className="text-emerald-600">●</span><span>Không ngừng học tập, nâng cao trình độ và đạo đức cách mạng.</span></li>
        </ul>
        <blockquote className="mt-5 border-l-4 border-emerald-600 pl-4 italic text-emerald-800/90 text-sm md:text-base">
          "Giàu sang không thể quyến rũ, nghèo khó không thể chuyển lay, uy vũ không thể khuất phục."
        </blockquote>
      </div>

      <div className="rounded-2xl border border-emerald-600/30 bg-white p-6 md:p-7 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-700/80 mb-3">Quản lý cán bộ</p>
        <h3 className="text-xl font-bold text-emerald-900 mb-4">5 nhiệm vụ then chốt</h3>
        <div className="space-y-3">
        {[
            "1. Hiểu và đánh giá đúng cán bộ.",
            "2. Đào tạo và giáo dục cán bộ có hiệu quả.",
            "3. Bổ nhiệm và sử dụng cán bộ đúng sở trường.",
            '4. Phối hợp hài hòa cán bộ trẻ với cán bộ cũ; đồng thời phải "kết hợp cán bộ cấp trên phái đến và cán bộ địa phương; phải chống bệnh địa phương cục bộ"',
            "5. Thường xuyên kiểm tra, giám sát để giúp đỡ và ngăn ngừa sai lầm.",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-emerald-950 text-sm md:text-base">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default CadreSection;
