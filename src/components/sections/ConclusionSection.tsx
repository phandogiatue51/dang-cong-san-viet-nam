import { motion } from "framer-motion";

const ConclusionSection = () => (
  <section id="ket-luan" className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Tổng kết</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { label: "Người cầm lái", desc: "Sứ mệnh lịch sử" },
            { label: "Đạo đức & Văn minh", desc: "Hệ giá trị cốt lõi" },
            { label: "Nguyên tắc tổ chức", desc: "Sức mạnh nội tại" },
            { label: "Cán bộ Hồng & Chuyên", desc: "Kháng thể nội xâm" },
            { label: "Nhân dân", desc: "Nguồn lực và phán xử" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-primary/5 rounded-lg p-3 text-center border border-primary/15"
            >
              <p className="font-semibold text-primary text-sm">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Tư tưởng Hồ Chí Minh không liệt kê các nguyên tắc rời rạc. Người xây dựng một hệ thống khép kín, nơi sự suy thoái của bất kỳ yếu tố nào — cán bộ thoái hóa, kỷ luật lỏng lẻo, xa rời nhân dân — cũng sẽ làm đứt gãy mối liên kết với nhân dân, dẫn đến suy vong.
        </p>

        {/* Final quote */}
        <div className="bg-primary rounded-xl p-8 text-center">
          {/* Ảnh Bác Hồ */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary/30 flex items-center justify-center overflow-hidden">
              <img
                src="/images/hochiminh.png"
                alt="Hồ Chí Minh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-primary-foreground text-lg md:text-xl italic font-medium max-w-2xl mx-auto leading-relaxed">
            "Một Đảng cách mạng chân chính... là Đảng tiêu biểu cho lương tâm, trí tuệ và danh dự của dân tộc."
          </blockquote>

          {/* Tác giả */}
          <p className="text-primary-foreground/60 text-sm mt-4">
            — Hồ Chí Minh
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ConclusionSection;
