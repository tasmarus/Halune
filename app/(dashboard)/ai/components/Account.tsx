"use client";

import { motion } from "framer-motion";

export default function Account() {
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
        transform: "translate(-22px, -22px)",
      }}
      className="min-h-[calc(100vh-80px)] flex items-center justify-center py-1"
    >
      <div
        className="
          w-full
          max-w-3xl
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-8
        "
      >
        <h1 className="text-[1.85rem] font-medium text-white -mt-5">
          Account
        </h1>

        <p className="mt-1 text-white/40">
          Manage your account and billing.
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <p className="text-sm text-white/50 mb-2">
              Email
            </p>

            <input
              placeholder="sam@example.com"
              className="
                w-full
                h-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                px-4
                text-white
                placeholder:text-white/40
                outline-none
                focus:border-white/20
              "
            />
          </div>

          <div>
            <p className="text-sm text-white/50 mb-2">
              Password
            </p>

            <input
              type="password"
              placeholder="••••••••••"
              className="
                w-full
                h-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                px-4
                text-white
                placeholder:text-white/40
                outline-none
                focus:border-white/20
              "
            />
          </div>

          <div>
            <p className="text-sm text-white/50 mb-2">
              Card Number
            </p>

            <input
              placeholder="•••• •••• •••• 4242"
              className="
                w-full
                h-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                px-4
                text-white
                placeholder:text-white/40
                outline-none
                focus:border-white/20
              "
            />
          </div>

          <div>
            <p className="text-sm text-white/50 mb-2">
              Subscription
            </p>

            <div
              className="
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-4
                flex
                items-center
                text-white/40
              "
            >
              Halune Pro
            </div>
          </div>
        </div>

        <div
          className="flex mt-6"
          style={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            style={{
              transform: "translate(-10px, 4px)",
            }}
            className="
              h-12
              px-8
              rounded-full
              bg-white
              text-black
              font-medium
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  );
}