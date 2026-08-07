"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({
  children,
}: PageWrapperProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: "transform, opacity",
        transform: "translate(-22px, -22px)",
      }}
      className="min-h-[calc(100vh-80px)] flex items-center justify-center py-1"
    >
      {children}
    </motion.div>
  );
}