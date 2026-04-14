import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const OriginSection = () => (
  <SectionWrapper id="nguon-goc" title="Người cầm lái có vững, thuyền mới chạy">
    <div className="space-y-8">
      <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-muted-foreground text-lg">
        "Cách mệnh trước hết phải có đảng cách mệnh... Đảng phải vững mạnh thì cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
        <footer className="text-sm mt-2 not-italic font-medium">— Đường cách mệnh (1927)</footer>
      </blockquote>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          Nguồn gốc đặc thù: Ba dòng chảy lịch sử hội tụ
        </h3>
        <p className="text-muted-foreground mb-6">
          Khác với phương Tây, sự ra đời của Đảng Cộng sản Việt Nam không chỉ là kết quả của phong trào công nhân, mà là sự hội tụ của ba dòng chảy lịch sử — sự gắn bó bền chặt giữa giai cấp và dân tộc.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Chủ nghĩa Mác – Lênin", desc: "Nền tảng lý luận khoa học" },
            { title: "Phong trào công nhân", desc: "Đấu tranh giai cấp" },
            { title: "Phong trào yêu nước", desc: "Truyền thống dân tộc Việt Nam" },
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
        <div className="flex justify-center mt-10 border shadow-sm rounded-3xl bg-card">
          <div className="w-86 h-86 flex items-center justify-center p-6">
            <img
              src="/images/partyestablishment.png"
              alt="Đảng Cộng sản Việt Nam thành lập"
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default OriginSection;
