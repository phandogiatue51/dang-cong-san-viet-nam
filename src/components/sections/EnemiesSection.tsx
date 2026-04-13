import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { AlertTriangle } from "lucide-react";

const enemies = [
  {
    title: "Chủ nghĩa cá nhân",
    desc: "\"Căn bệnh mẹ\" — đặt lợi ích riêng lên trên lợi ích Đảng và dân tộc.",
  },
  {
    title: "Quan liêu, mệnh lệnh",
    desc: "Xa rời thực tế, coi thường tập thể, khinh quần chúng.",
  },
  {
    title: "Độc đoán, chuyên quyền",
    desc: "Mất đoàn kết, thiếu tính tổ chức và kỷ luật.",
  },
  {
    title: "Tham danh, trục lợi",
    desc: "Biến chất về lối sống, hủ hóa, lãng phí — tham ô, lãng phí, quan liêu là \"giặc nội xâm\".",
  },
];

const EnemiesSection = () => (
  <SectionWrapper
    id="noi-xam"
    title="Nhận diện \"giặc nội xâm\""
    variant="muted"
  >
    <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-muted-foreground mb-8">
      "Mỗi kẻ địch bên trong là một bạn đồng minh của kẻ địch bên ngoài... Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra."
    </blockquote>

    <div className="grid md:grid-cols-2 gap-4">
      {enemies.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-3 bg-card rounded-xl p-5 border border-destructive/20"
        >
          <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
          <div>
            <h4 className="font-semibold text-foreground">{e.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EnemiesSection;
