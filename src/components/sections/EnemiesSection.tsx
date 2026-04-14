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
    title={'Nhận diện "Kẻ thù nội xâm"'}
    subtitle="Chống tham ô, lãng phí, quan liêu và bệnh mẹ chủ nghĩa cá nhân là điều kiện sống còn của công cuộc chỉnh đốn."
    variant="muted"
  >
    <blockquote className="border-l-4 border-destructive pl-4 py-2 italic text-muted-foreground mb-8">
      "Mỗi kẻ địch bên trong là một bạn đồng minh của kẻ địch bên ngoài... Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra."
    </blockquote>

    <div className="rounded-2xl border border-red-700/55 bg-[linear-gradient(135deg,rgba(15,15,15,0.97),rgba(85,12,17,0.95))] p-6 md:p-8 mb-7 shadow-[0_24px_60px_rgba(80,10,15,0.35)]">
      <div className="flex items-start gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-red-600/25 border border-red-500/40 flex items-center justify-center shrink-0">
          <AlertTriangle className="text-red-300" size={20} />
        </div>
        <div>
          <h4 className="text-red-100 font-bold text-lg">Khu vực cảnh báo nội xâm</h4>
          <p className="text-red-100/85 text-sm mt-1">
            Những biểu hiện này âm thầm phá hủy tổ chức từ bên trong và nguy hiểm hơn giặc ngoại xâm.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {[
          "Tham ô",
          "Lãng phí",
          "Quan liêu",
          "Bệnh mẹ - Chủ nghĩa cá nhân",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-red-700/70 border border-red-300/35 px-3 py-1.5 text-sm text-red-50 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-red-400/35 bg-black/25 p-4">
          <h5 className="text-red-100 font-semibold mb-2">Biểu hiện thường gặp</h5>
          <ul className="space-y-2 text-sm text-red-50/90">
            <li>• Đặt quyền lợi cá nhân lên trên tập thể.</li>
            <li>• Né tránh tự phê bình, ngại sửa sai.</li>
            <li>• Xa rời nhân dân, hành chính hóa lãnh đạo.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-400/35 bg-black/25 p-4">
          <h5 className="text-red-100 font-semibold mb-2">Yêu cầu chỉnh đốn</h5>
          <p className="text-sm text-red-50/90 leading-relaxed">
            Đảng phải thường xuyên tự chỉnh đốn, nhất là sau những thắng lợi lớn, để loại bỏ phần tử hủ hóa và ngăn ngừa tự mãn, tự kiêu, thoái hóa.
          </p>
        </div>
      </div>
    </div>

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
