import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Quote } from "lucide-react";
import type { MindMapNode as MindMapNodeType } from "@/data/mindMapData";

interface Props {
  node: MindMapNodeType;
  depth?: number;
  index?: number;
}

const depthColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-node-leaf text-primary-foreground",
  "bg-node-detail text-primary-foreground",
];

const depthBorderColors = [
  "border-primary",
  "border-secondary",
  "border-node-leaf",
  "border-node-detail",
];

const MindMapNode = ({ node, depth = 0, index = 0 }: Props) => {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const colorClass = depthColors[Math.min(depth, depthColors.length - 1)];
  const borderColor = depthBorderColors[Math.min(depth, depthBorderColors.length - 1)];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`${depth > 0 ? "ml-6 md:ml-8" : ""}`}
    >
      {/* Connector line */}
      {depth > 0 && (
        <div className={`absolute -ml-6 md:-ml-8 mt-5 w-4 md:w-6 h-px border-t-2 border-dashed ${borderColor} opacity-40`} />
      )}

      <div className="relative">
        {/* Node button */}
        <button
          onClick={() => (hasChildren || node.quote) && setExpanded(!expanded)}
          className={`group flex items-start gap-2 md:gap-3 w-full text-left rounded-lg transition-all duration-200
            ${depth === 0
              ? `${colorClass} px-5 py-4 text-lg md:text-xl font-bold shadow-lg`
              : `px-3 py-2.5 md:px-4 md:py-3 hover:bg-muted/60 rounded-lg`
            }
          `}
        >
          {(hasChildren || node.quote) && (
            <motion.span
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className={`mt-0.5 shrink-0 ${depth === 0 ? "text-primary-foreground" : "text-muted-foreground"}`}
            >
              <ChevronRight size={depth === 0 ? 20 : 16} />
            </motion.span>
          )}
          {!hasChildren && !node.quote && (
            <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-node-leaf opacity-60" />
          )}
          <span
            className={`${
              depth === 0
                ? "font-bold"
                : depth === 1
                ? "font-semibold text-foreground text-base md:text-lg"
                : depth === 2
                ? "font-medium text-foreground text-sm md:text-base"
                : "text-muted-foreground text-sm"
            }`}
          >
            {node.label}
          </span>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Quote */}
              {node.quote && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`ml-6 md:ml-8 mt-2 px-4 py-3 rounded-md border-l-3 ${borderColor} bg-muted/40`}
                >
                  <div className="flex gap-2 items-start">
                    <Quote size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      {node.quote}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Children */}
              {hasChildren && (
                <div className="relative mt-1 space-y-0.5">
                  {node.children!.map((child, i) => (
                    <MindMapNode
                      key={child.id}
                      node={child}
                      depth={depth + 1}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MindMapNode;
