import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "muted";
}

const SectionWrapper = ({ id, title, subtitle, children, variant = "default" }: Props) => (
  <section
    id={id}
    className={`py-16 md:py-24 rounded-2xl mx-4 my-8 ${variant === "muted" ? "bg-muted/30" : "bg-card/10"} border border-border/30 shadow-sm`}
  >
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
        {subtitle && <p className="text-muted-foreground mb-8">{subtitle}</p>}
        {!subtitle && <div className="h-6" />}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default SectionWrapper;
