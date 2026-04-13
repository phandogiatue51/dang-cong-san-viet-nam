import SectionWrapper from "./SectionWrapper";

const UnitySection = () => (
  <SectionWrapper
    id="doan-ket"
    title="Đoàn kết — sức mạnh sinh tồn"
    variant="muted"
  >
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-3">Đoàn kết nội bộ</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Giữ gìn sự đoàn kết <strong className="text-foreground">như giữ gìn con ngươi của mắt mình</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Dựa trên chủ nghĩa Mác – Lênin và tình đồng chí thương yêu lẫn nhau</span>
          </li>
        </ul>
      </div>
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-3">Đoàn kết quốc tế</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Chủ nghĩa quốc tế vô sản</span>
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>Giữ vững độc lập, chủ quyền, hòa bình, hữu nghị, tôn trọng lẫn nhau</span>
          </li>
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default UnitySection;
