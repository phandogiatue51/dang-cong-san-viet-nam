import SectionWrapper from "./SectionWrapper";

const comparisonData = [
  {
    criteria: "Động lực",
    good: "Phụng sự lợi ích quốc gia & nhân dân",
    bad: "Trục lợi ích cá nhân & phe nhóm (đặc quyền)",
  },
  {
    criteria: "Kỷ luật",
    good: "Sắt đá, tự giác, dựa trên lý tưởng",
    bad: "Lỏng lẻo, quan liêu, dựa trên uy quyền",
  },
  {
    criteria: "Tương tác với dân",
    good: "\"Đầy tớ\", học hỏi quần chúng",
    bad: "\"Làm quan\", xa rời quần chúng",
  },
  {
    criteria: "Thái độ với sai lầm",
    good: "Công khai tự phê bình, dũng cảm sửa chữa",
    bad: "Giấu giếm khuyết điểm, sợ phê bình",
  },
];

const ComparisonSection = () => (
  <SectionWrapper
    id="phan-biet"
    title="Phân biệt Đảng chân chính và Đảng thoái hóa"
    subtitle="\"Một dân tộc, một đảng… không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến nếu lòng dạ không trong sáng.\""
  >
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-3 bg-muted/50 rounded-tl-lg text-sm font-semibold text-muted-foreground w-1/5" />
            <th className="text-left p-3 bg-primary/10 text-primary font-bold text-sm">
              ✦ Đảng cách mạng chân chính
            </th>
            <th className="text-left p-3 bg-muted/50 rounded-tr-lg text-muted-foreground font-bold text-sm">
              Đảng thoái hóa
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="p-3 font-medium text-foreground text-sm">{row.criteria}</td>
              <td className="p-3 text-sm text-primary font-medium bg-primary/5">{row.good}</td>
              <td className="p-3 text-sm text-muted-foreground">{row.bad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </SectionWrapper>
);

export default ComparisonSection;
