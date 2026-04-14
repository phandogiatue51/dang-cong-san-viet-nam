import { motion } from "framer-motion";

const ConclusionSection = () => (
  <section id="ket-luan" className="py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">VI. Kết luận về Sự Trường tồn của Đảng</h2>
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
            "Một dân tộc, một Đảng, một con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi nếu lòng dạ không trong sáng nữa..."
          </blockquote>

          {/* Tác giả */}
          <p className="text-primary-foreground/60 text-sm mt-4">
            — Hồ Chí Minh —
          </p>
          <p className="mt-5 text-amber-100/85 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Muốn giữ vai trò lãnh đạo, Đảng phải luôn sạch và vững mạnh, giữ gìn đoàn kết như giữ con ngươi của mắt mình và gắn bó máu thịt với nhân dân.
          </p>
        </div>

        {/* <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
          <h3 className="text-2xl font-bold text-foreground mb-4">VII. Những điểm chính</h3>
          <ul className="space-y-3 text-sm md:text-base text-foreground">
            <li><strong>Tính tất yếu lịch sử:</strong> Đảng là sản phẩm của sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.</li>
            <li><strong>Nền tảng đạo đức:</strong> Cần, kiệm, liêm, chính, chí công vô tư là gốc sức mạnh của người cán bộ.</li>
            <li><strong>Nguyên tắc hoạt động:</strong> Tập trung dân chủ, lãnh đạo tập thể và tự phê bình nghiêm túc là trục vận hành cốt lõi.</li>
            <li><strong>Mối quan hệ với nhân dân:</strong> Đảng là đầy tớ của nhân dân, không phải quan cách mạng; tính chính danh phụ thuộc vào việc bảo đảm độc lập, tự do, hạnh phúc cho dân tộc.</li>
            <li><strong>Chỉnh đốn nội bộ:</strong> Muốn mạnh, Đảng phải thường xuyên chống tham ô, lãng phí, quan liêu, chủ nghĩa cá nhân và đào thải phần tử thoái hóa.</li>
          </ul>
        </div> */}
      </motion.div>
    </div>
  </section>
);

export default ConclusionSection;
