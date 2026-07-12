"use client";

import { motion } from "framer-motion";

export default function Templates() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: "transform, opacity",
      }}
      className="
        h-full
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center">
        <h1 className="text-3xl font-medium text-white">
          Templates
        </h1>

        <p className="mt-1 text-white/40">
          Templates page coming soon.
        </p>
      </div>
    </motion.div>
  );
}