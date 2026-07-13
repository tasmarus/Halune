"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
export default function Account() {

const [showCancelModal, setShowCancelModal] = useState(false);

const [showPlanModal, setShowPlanModal] = useState(false);

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

  {/* Email */}
  <div>
    <p className="text-sm text-white/50 mb-2">Email</p>

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

  {/* Password */}
  <div>
    <p className="text-sm text-white/50 mb-2">Password</p>

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

  {/* Card Number */}
  <div>
    <p className="text-sm text-white/50 mb-2">Card Number</p>

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

  {/* Subscription */}
  <div>
    <p className="text-sm text-white/50 mb-2">
      Subscription
    </p>

    <div className="relative">

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

      <div
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          flex
          items-center
          gap-3
        "
      >
        <button
  onClick={() => setShowPlanModal(true)}
  className="
            h-9
            px-5
            rounded-full
            border
            border-white/10
            bg-[#111111]
            text-white
            text-sm
            font-medium
          "
        >
          Change Plan
        </button>

        <button
  onClick={() => setShowCancelModal(true)}
          className="
            h-9
            px-5
            rounded-full
            border
            border-red-500/70
            bg-[#111111]
            text-red-500
            text-sm
            font-medium
          "
        >
          Cancel
        </button>
      </div>

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
      w-[140px]

      px-2
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

<AnimatePresence>
  {showCancelModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >

<div className="relative">

      <button
  onClick={() => setShowCancelModal(false)}
  className="
    absolute
    -top-14
    -right-14
    translate-y-6
   -translate-x-4
    w-10
    h-9
    rounded-full
    border
    border-white/10
    bg-[#111111]
    text-white/70
    hover:text-white
    hover:border-white/20
    transition-all
    duration-200
    flex
    items-center
    justify-center
  "
>
  <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M7 7L17 17M17 7L7 17"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    vectorEffect="non-scaling-stroke"
  />
</svg>
</button>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
  relative
  h-[180px]
  w-[430px]
  rounded-3xl
  border
  border-white/10
  bg-[#0E0E0E]
  p-8
"
        >
        <h2 className="text-xl font-medium text-white">
          Cancel Subscription
        </h2>

        <p className="mt-3 text-white/50 leading-relaxed">
          Are you sure you want to cancel your Halune Pro subscription?
        </p>

        <div className="flex justify-end mt-8">
          <button
          style={{
  transform: "translateY(-38px)",
}}
            className="
              h-9
              px-5
              rounded-full
              border
              border-red-500/70
              text-red-500
              font-medium
            "
          >
            Cancel
          </button>
                </div>
      </motion.div>

      </div>

      </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {showPlanModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="relative">

        {/* Close button */}
        <button
          onClick={() => setShowPlanModal(false)}
          className="
            absolute
            -top-14
            -right-11
            translate-y-6
          -translate-x-0.5
            w-10
            h-9
            rounded-full
            border
            border-white/10
            bg-[#111111]
            text-white/70
            hover:text-white
            hover:border-white/20
            transition-all
            duration-200
            flex
            items-center
            justify-center
          "
        >
          ✕
        </button>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-[950px]
            h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-[#0E0E0E]
            p-10
          "
        >

          <h1 className="text-4xl font-medium text-white text-center">
            Choose your plan
          </h1>

          <p className="text-center text-white/40 mt-3">
            Upgrade or downgrade your Halune subscription.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-8">

 <div
 className="
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  h-[350px]
  px-7
  pt-4
  pb-7
  flex
  flex-col
"
>
<h2 className="text-[1.7rem] font-semibold text-white -mt-2">
      Free
  </h2>

  <div className="mt-0.5 flex items-end gap-1">
    <span className="text-[2.8rem] font-semibold text-white">
      $0
    </span>

<span className="text-white/50 mb-[7px]">
      / month
    </span>
  </div>

  <button
  style={{
  transform: "translateY(-36px)",
}}
    className="
      mt-10
      h-11
      rounded-full
      border
      border-white/10
      bg-white/5
      text-white/40
      font-medium
      cursor-default
    "
  >
    Current Plan
  </button>

<div
  style={{
    transform: "translateY(-26px)",
  }}
  className="mt-1 space-y-4 text-[14px] text-white/80"
>
<div className="flex items-center gap-3">
  <CheckCircle2
    size={16}
    className="text-white/35 shrink-0"
    strokeWidth={2}
  />
  <span>Browse AI Marketplace</span>
</div>

<div className="flex items-center gap-3">
  <CheckCircle2
    size={16}
    className="text-white/35 shrink-0"
    strokeWidth={2}
  />
  <span>Build AI Apps</span>
</div>

<div className="flex items-center gap-3">
  <CheckCircle2
    size={16}
    className="text-white/35 shrink-0"
    strokeWidth={2}
  />
  <span>Community Templates</span>
</div>

<div className="flex items-center gap-3">
  <CheckCircle2
    size={16}
    className="text-white/35 shrink-0"
    strokeWidth={2}
  />
  <span>Basic Analytics</span>
</div>

<div className="flex items-center gap-3">
  <CheckCircle2
    size={16}
    className="text-white/35 shrink-0"
    strokeWidth={2}
  />
  <span>Launch 3 AI apps</span>
</div>
  </div>
</div>


  <div
 className="
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  h-[350px]
  px-7
  pt-4
  pb-7
  flex
  flex-col
"
>
<h2 className="text-[1.7rem] font-semibold text-white -mt-2">
      Pro
  </h2>

  <div className="mt-0.5 flex items-end gap-1">
    <span className="text-[2.8rem] font-semibold text-white">
      $10
    </span>

<span className="text-white/50 mb-[7px]">
      / month
    </span>
  </div>

  <button
  style={{
  transform: "translateY(-36px)",
}}
    className="
      mt-10
      h-11
      rounded-full
      border
      border-white
      bg-white
      text-black
      font-medium
      cursor-default
    "
  >
    Upgrade to Pro
  </button>

  <div
    style={{
      transform: "translateY(-28px)",
    }}
    className="mt-1 space-y-4 text-[15px] text-white/80"
  >
    <div className="text-white/80 font-medium mb-2">
  Everything in Free
</div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>30 AI generations / day</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Pro Templates</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Pro Analytics</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Launch 10 AI apps</span>
    </div>
  </div>
</div>

   <div
 className="
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  h-[350px]
  px-7
  pt-4
  pb-7
  flex
  flex-col
"
>
<h2 className="text-[1.7rem] font-semibold text-white -mt-2">
      Premium
  </h2>

  <div className="mt-0.5 flex items-end gap-1">
    <span className="text-[2.8rem] font-semibold text-white">
      $30
    </span>

<span className="text-white/50 mb-[7px]">
      / month
    </span>
  </div>

  <button
  style={{
  transform: "translateY(-36px)",
}}
    className="
      mt-10
      h-11
      rounded-full
      border
      border-white
      bg-white
      text-black
      font-medium
      cursor-default
    "
  >
    Upgrade to Premium
  </button>

  <div
    style={{
      transform: "translateY(-28px)",
    }}
    className="mt-1 space-y-4 text-[15px] text-white/80"
  >
    <div className="text-white/80 font-medium mb-2">
  Everything in Pro
</div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Unlimited AI generations</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Premium templates</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Unlimited cloud storage</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-white/35 shrink-0" />
      <span>Launch 30 AI apps</span>
    </div>
  </div>
</div>

</div>

        </motion.div>

      </div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.div>
  );
}