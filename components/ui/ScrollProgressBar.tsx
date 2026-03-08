"use client";

import { useSyncExternalStore } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const emptySubscribe = () => () => {};

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-60"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
