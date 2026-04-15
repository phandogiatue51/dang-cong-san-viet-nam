import { motion } from "framer-motion";
import {
  Compass,
  GitBranch,
  Users,
  RefreshCcw,
  ShieldCheck,
  Wrench,
  Handshake,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

type Principle = {
  num: string;
  title: string;
  summary: string;
  detail: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    num: "01",
    title: "Chủ nghĩa Mác – Lênin",
    summary: "Nền tảng tư tưởng và kim chỉ nam cho hành động.",
    detail:
      "Phải vận dụng sáng tạo cho phù hợp với điều kiện, hoàn cảnh, từng lúc, từng nơi; không được giáo điều.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Tập trung dân chủ",
    summary: "Cá nhân phục tùng tổ chức, thiểu số phục tùng đa số.",
    detail:
      "Khuyến khích thảo luận rộng rãi, sau đó thống nhất ý chí và hành động để tạo sức mạnh chung.",
    icon: GitBranch,
  },
  {
    num: "03",
    title: "Tập thể lãnh đạo, cá nhân phụ trách",
    summary: "Tập thể lãnh đạo là dân chủ, cá nhân phụ trách là tập trung.",
    detail:
      "Ngăn ngừa độc đoán, chuyên quyền; đồng thời tránh dựa dẫm, đùn đẩy trách nhiệm.",
    icon: Users,
  },
  {
    num: "04",
    title: "Tự phê bình và phê bình",
    summary: "Như rửa mặt hằng ngày, như thuốc đắng dã tật.",
    detail:
      "Phải trung thực, kiên quyết và thực hiện trên tinh thần tình đồng chí thương yêu lẫn nhau.",
    icon: RefreshCcw,
  },
  {
    num: "05",
    title: "Kỷ luật nghiêm minh",
    summary: "Kỷ luật vừa nghiêm khắc, vừa tự giác.",
    detail:
      "Sức mạnh của Đảng đến từ sự thống nhất ý chí và hành động trong toàn tổ chức.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Thường xuyên tự chỉnh đốn",
    summary: "Đảng không có mục đích tự thân, quyền lực do nhân dân giao phó.",
    detail:
      "Phải không ngừng tự chỉnh đốn, loại bỏ phần tử hủ hóa để luôn lớn mạnh trước mọi thử thách lịch sử.",
    icon: Wrench,
  },
  {
    num: "07",
    title: "Đoàn kết, thống nhất trong Đảng",
    summary: "Điều kiện cốt lõi để xây dựng đại đoàn kết toàn dân tộc.",
    detail:
      "Cán bộ, đảng viên phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.",
    icon: Handshake,
  },
  {
    num: "08",
    title: "Liên hệ mật thiết với nhân dân",
    summary: "Đảng là một bộ phận của dân tộc, gắn bó máu thịt với nhân dân.",
    detail:
      "Đảng không phải trên trời sa xuống, mọi hoạt động đều vì độc lập, tự do, ấm no và hạnh phúc của nhân dân.",
    icon: HeartHandshake,
  },
];

const PrinciplesSection = () => (
  <SectionWrapper
    id="nguyen-tac"
    title="III. Các Nguyên tắc Hoạt động Cốt lõi"
    subtitle="Sức mạnh của Đảng được duy trì thông qua việc tuân thủ nghiêm ngặt các nguyên tắc tổ chức bắt nguồn từ lý luận Lênin và được vận dụng phù hợp với thực tiễn Việt Nam."
    variant="muted"
  >
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card mb-6">
      <img
        src="/images/bachovabodoi.png"
        alt="Biểu tượng định hướng tổ chức"
        className="w-full h-86 md:h-56 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/45 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        {[
          "Tập trung dân chủ",
          "Kỷ luật tự giác",
          "Tự chỉnh đốn",
        ].map((label) => (
          <span
            key={label}
            className="text-xs md:text-sm text-primary-foreground bg-primary/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary-foreground/20"
          >
            {label}
          </span>
        ))}
      </div>
    </div>

    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {principles.map((p, i) => (
        <motion.div
          key={p.num}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group relative min-h-56 bg-card rounded-xl p-5 border border-border shadow-sm overflow-hidden"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <span className="text-2xl font-bold text-secondary/40 shrink-0">{p.num}</span>
            <p.icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground leading-snug">{p.title}</h4>
            <p className="text-sm text-muted-foreground">{p.summary}</p>
            <p className="text-xs text-muted-foreground/90 md:hidden leading-relaxed">{p.detail}</p>
          </div>

          <div className="hidden md:block absolute inset-0 bg-primary text-primary-foreground p-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-90">Chi tiết</p>
              <p.icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h5 className="font-semibold mb-2 leading-snug">{p.title}</h5>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">{p.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PrinciplesSection;
