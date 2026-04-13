import { motion } from "framer-motion";
import { mindMapData } from "@/data/mindMapData";
import MindMapNode from "@/components/MindMapNode";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={24} />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              Tư tưởng Hồ Chí Minh
              <br />
              <span className="text-primary">về Đảng Cộng sản Việt Nam</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Bản đồ tư duy tổng hợp — Nhấn vào từng nhánh để khám phá chi tiết
            </p>
          </motion.div>
        </div>
      </header>

      {/* Mind Map */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-2"
        >
          <MindMapNode node={mindMapData} />
        </motion.div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center border-t border-border pt-8"
        >
          <blockquote className="text-muted-foreground italic text-sm md:text-base max-w-lg mx-auto">
            "Một Đảng cách mạng chân chính... là Đảng tiêu biểu cho lương tâm, trí tuệ và danh dự của dân tộc."
          </blockquote>
          <p className="text-xs text-muted-foreground/60 mt-2">— Hồ Chí Minh</p>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
