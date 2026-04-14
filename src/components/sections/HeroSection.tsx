import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
    {/* Background ảnh con thuyền */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/images/boat2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    
    {/* Lớp phủ màu đỏ trong suốt để chữ dễ đọc */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 z-[1]" />
    
    {/* Các vòng tròn trang trí (giữ nguyên) */}
    <div className="absolute inset-0 opacity-10 z-[1]">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary-foreground/30" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full border border-primary-foreground/20" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full border border-primary-foreground/20" />
    </div>
    
    {/* Nội dung chính */}
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-10">
          <div className="w-64 h-64 rounded-full bg-secondary/50 flex items-center justify-center">
            <img
              src="/images/compass.png"
              alt="La bàn"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
          Tư tưởng Hồ Chí Minh 
          <br />
          <span>về Đảng Cộng sản Việt Nam</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl mt-6 max-w-xl mx-auto">
          Người cầm lái, Con thuyền và Đại dương
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;