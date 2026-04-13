import SectionWrapper from "./SectionWrapper";

const PartyPeopleSection = () => (
  <SectionWrapper
    id="dang-dan"
    title="Mối quan hệ Đảng – Nhân dân"
    subtitle="Đảng là một bộ phận của dân tộc, không phải đứng trên xã hội."
  >
    <div className="space-y-6">
      <blockquote className="text-center text-lg italic text-foreground font-medium">
        "Đảng Cộng sản Việt Nam không phải trên trời sa xuống.
        <br />
        Nó ở trong xã hội mà ra."
      </blockquote>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="font-semibold text-primary mb-3">Gắn bó máu thịt</h4>
          <p className="text-sm text-muted-foreground">
            Đảng là một bộ phận của toàn thể dân tộc. Cán bộ là "đầy tớ" chứ không phải "quan cách mạng". Không phải dán lên trán chữ "cộng sản" là dân tin — phải làm cho dân tin bằng công tác hằng ngày.
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="font-semibold text-primary mb-3">Sự ủy thác của quốc dân</h4>
          <p className="text-sm text-muted-foreground">
            "Bao giờ đồng bào cho tôi lui, thì tôi rất vui lòng lui." Tính chính danh dựa trên: <strong>Dân tin, dân yêu, dân kính, dân phục.</strong>
          </p>
        </div>
      </div>

      <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
        <h4 className="font-semibold text-primary mb-2">Lời hứa & Trách nhiệm</h4>
        <p className="text-sm text-foreground mb-3">
          Mục đích tối thượng: Giải phóng dân tộc, làm cho Tổ quốc giàu mạnh, đồng bào sung sướng.
        </p>
        <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-3">
          "Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
        </blockquote>
        <p className="text-sm text-primary font-medium">
          ⚠ Cảnh báo: Nếu Đảng hành xử như "ông quan cách mạng", nhân dân sẽ "đạp đổ" Đảng.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default PartyPeopleSection;
