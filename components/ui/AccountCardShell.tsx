"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AccountCardShellProps {
  title: string;
  subtitle: string;
  onClose: () => void;
  visible?: boolean;
  children: ReactNode;
}

export default function AccountCardShell({
  title,
  subtitle,
  onClose,
  visible = true,
  children,
}: AccountCardShellProps) {
  return (
    <>
      {/* Close Button */}
      <div
        className="
          fixed
          z-[100]
          top-4
          right-[82px]
        "
      >
        <button
          onClick={onClose}
          className="
            w-11
            h-9
            rounded-full
            border
            border-white/10
            bg-white/5
            flex
            items-center
            justify-center
            hover:bg-white/[0.08]
            transition-all
            duration-200
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(255,255,255)"
            opacity="0.4"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          willChange: "transform",
        }}
        className="
          w-full
          flex
          justify-center
          items-start
          pt-4
          pb-36
        "
      >
        <div
          className="
            relative
            w-[980px]
            min-h-[485px]
            rounded-[28px]
            border
            border-white/10
            bg-[#0E0E0E]
            px-10
            pt-5
            pb-1
          "
        >
          <h1
            style={{ transform: "translateY(12px)" }}
            className="text-[1.85rem] font-medium text-white -mt-5"
          >
            {title}
          </h1>

          <p
            style={{ transform: "translateY(12px)" }}
            className="mt-1 text-white/40"
          >
            {subtitle}
          </p>

          {children}
        </div>
      </motion.div>
    </>
  );
}