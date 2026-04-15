import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const OriginSection = () => (
  <SectionWrapper id="nguon-goc" title="I. Tính tất yếu và Vai trò của Đảng Cộng sản Việt Nam">
    <div className="space-y-8">

      {/* Phần 1: Tính tất yếu */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          1. Tính tất yếu của sự lãnh đạo của Đảng
        </h3>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-muted-foreground text-lg mb-4">
          "Cách mệnh trước hết phải có đảng cách mệnh... Đảng phải vững mạnh thì cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
          <footer className="text-sm mt-2 not-italic font-medium">— Đường cách mệnh (1927)</footer>
        </blockquote>
        <p className="text-muted-foreground mb-4">
          Sự lãnh đạo của Đảng không phải ý muốn chủ quan, mà là một <strong>tất yếu khách quan</strong>, xuất phát từ nhu cầu giải phóng dân tộc và đòi hỏi thực tế của lịch sử Việt Nam.
        </p>
        <p className="text-muted-foreground">
          <strong>Nguồn gốc đặc thù:</strong> Khác với phương Tây, Đảng Cộng sản Việt Nam ra đời từ sự hội tụ của ba dòng chảy lịch sử — sự gắn bó bền chặt giữa giai cấp và dân tộc.
        </p>
      </div>

      {/* Ba dòng chảy (giữ nguyên) */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          Ba dòng chảy lịch sử hội tụ
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Chủ nghĩa Mác – Lênin", desc: "Nền tảng lý luận khoa học, kim chỉ nam hành động" },
            { title: "Phong trào công nhân", desc: "Đấu tranh giai cấp, lực lượng nòng cốt" },
            { title: "Phong trào yêu nước", desc: "Truyền thống dân tộc thấm sâu trong máu thịt" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-5 border border-border shadow-sm text-center"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 mx-auto mb-3 flex items-center justify-center">
                <span className="text-secondary font-bold">{i + 1}</span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <div className="w-1/2 rounded-3xl overflow-hidden border shadow-sm bg-card">
          <div className="h-[300px] flex items-center justify-center p-0">
            <img
              src="/images/ngaythanhlapdang.png"
              alt="Đảng Cộng sản Việt Nam thành lập"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground py-2">
            Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930. Tranh của họa sĩ Phi Hoanh (Ảnh: Bảo tàng Lịch sử Quốc gia).
          </p>
        </div>
        <div className="w-1/2 rounded-3xl overflow-hidden border shadow-sm bg-card">
          <div className="h-[300px] flex items-center justify-center p-0">
            <img
              src="/images/cachmangthang8.png"
              alt="Cách mạng tháng Tám thành công"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground py-2">
            Ảnh tư liệu ghi lại cảnh quần chúng tập trung trước Nhà hát Lớn Hà Nội trong những ngày Tổng khởi nghĩa Tháng Tám. (Ảnh: Kho lưu trữ lịch sử quốc gia)
          </p>
        </div>
      </div>

      {/* Phần 2: Vai trò của Đảng */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          2. Vai trò lãnh đạo của Đảng
        </h3>
        <ul className="space-y-3 text-muted-foreground list-disc pl-5">
          <li><strong>Nhân tố quyết định mọi thắng lợi:</strong> Đảng là điều kiện tiên quyết để "cách mệnh thành công", đảm bảo con thuyền cách mạng đi đúng hướng.</li>
          <li><strong>Sứ mệnh lãnh đạo dân tộc:</strong> Đảng được nhân dân tin tưởng trao trọng trách lãnh đạo đất nước, thực hiện mục tiêu độc lập dân tộc và hạnh phúc cho nhân dân.</li>
          <li><strong>Đội tiên phong của dân tộc:</strong> Đảng không chỉ lãnh đạo giai cấp công nhân mà còn là đội tiên phong của toàn thể dân tộc Việt Nam.</li>
          <li><strong>Người đầy tớ trung thành của nhân dân:</strong> Đảng không có lợi ích riêng, mục đích duy nhất là phụng sự Tổ quốc, phục vụ nhân dân.</li>
        </ul>
      </div>

      {/* Hình ảnh (giữ nguyên vị trí) */}


    </div>
  </SectionWrapper>
);

export default OriginSection;