import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const principles = [
  {
    num: "01",
    title: "Chủ nghĩa Mác – Lênin là nền tảng tư tưởng",
    desc: "\"Kim chỉ nam\" cho mọi hành động. Vận dụng sáng tạo, không giáo điều.",
  },
  {
    num: "02",
    title: "Tập trung dân chủ",
    desc: "Dân chủ để thu thập trí tuệ; Tập trung để tạo sức mạnh. Không dân chủ → độc đoán. Không tập trung → vô chính phủ.",
  },
  {
    num: "03",
    title: "Lãnh đạo tập thể, trách nhiệm cá nhân",
    desc: "Ngăn ngừa độc đoán, chuyên quyền. Cá nhân phụ trách trong khuôn khổ tập thể.",
  },
  {
    num: "04",
    title: "Tự phê bình và phê bình",
    desc: "\"Như mỗi ngày phải rửa mặt\", \"thuốc đắng dã tật\". Phải thật thà, trên tinh thần tình đồng chí.",
  },
  {
    num: "05",
    title: "Kỷ luật nghiêm minh, tự giác",
    desc: "Sức mạnh từ sự thống nhất ý chí và hành động. Kỷ luật sắt nhưng tự giác.",
  },
  {
    num: "06",
    title: "Thường xuyên tự đổi mới, tự chỉnh đốn",
    desc: "Quy luật sinh tồn. Đặc biệt quan trọng sau thắng lợi lớn để chống tự mãn và tha hóa.",
  },
];

const PrinciplesSection = () => (
  <SectionWrapper
    id="nguyen-tac"
    title="Những nguyên tắc nền tảng"
    subtitle="Sức mạnh của Đảng được duy trì thông qua việc tuân thủ nghiêm ngặt các nguyên tắc tổ chức."
    variant="muted"
  >
    <div className="grid md:grid-cols-2 gap-4">
      {principles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-xl p-5 border border-border shadow-sm"
        >
          <div className="flex gap-4">
            <span className="text-2xl font-bold text-secondary/40 shrink-0">{p.num}</span>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PrinciplesSection;
