import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
