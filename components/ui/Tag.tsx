import { motion } from "framer-motion";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium text-foreground border border-border ${className}`}
    >
      {children}
    </motion.span>
  );
}
