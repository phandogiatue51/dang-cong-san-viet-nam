import { useState } from "react";
import { mindMapData, type MindMapNode } from "@/data/mindMapData";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const MindMapSection = () => {
  const mainBranches = mindMapData.children || [];

  return (
    <SectionWrapper
      id="mind-map"
      title="Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam"
      subtitle="Nhấn vào từng nhánh để khám phá chi tiết"
      variant="muted"
    >
      <div className="space-y-8">
        {mainBranches.map((branch) => (
          <div key={branch.id} className="last:border-0 rounded-3xl p-6 border border-border bg-muted/30">

            {/* Tiêu đề nhánh chính */}
            <h3 className="text-xl font-bold text-primary mb-4">
              {branch.label}
            </h3>

            {/* Danh sách các mục con */}
            <div className="space-y-3 pl-4">
              {branch.children?.map((child) => (
                <BranchItem key={child.id} node={child} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// Component cho từng mục con (có thể click để xem chi tiết)
const BranchItem = ({ node }: { node: MindMapNode }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = node.quote || (node.children && node.children.length > 0);

  return (
    <div>
      {/* Mục con - dạng dòng có thể click */}
      <button
        onClick={() => hasDetails && setExpanded(!expanded)}
        className={`flex items-center gap-2 w-full text-left group ${hasDetails ? "cursor-pointer" : "cursor-default"
          }`}
      >
        {hasDetails && (
          <motion.span
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted-foreground shrink-0"
          >
            <ChevronRight size={16} />
          </motion.span>
        )}
        {!hasDetails && (
          <span className="w-4 h-4 shrink-0" />
        )}
        <span className="text-foreground group-hover:text-primary transition-colors">
          {node.label}
        </span>
      </button>

      {/* Chi tiết hiện ra khi nhấn */}
      <AnimatePresence>
        {expanded && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-6 mt-2 space-y-3"
          >
            {/* Quote nếu có */}
            {node.quote && (
              <div className="border-l-3 border-secondary pl-3 py-1">
                <p className="text-sm text-muted-foreground italic">
                  {node.quote}
                </p>
              </div>
            )}

            {/* Children sâu hơn nếu có */}
            {node.children && node.children.length > 0 && (
              <div className="space-y-2">
                {node.children.map((child) => (
                  <BranchItem key={child.id} node={child} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MindMapSection;