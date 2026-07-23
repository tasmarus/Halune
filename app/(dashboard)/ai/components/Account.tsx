"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
export default function Account() {

const [cardVisible, setCardVisible] = useState(true);

const [currentPlan, setCurrentPlan] = useState<"Free" | "Pro" | "Premium">("Free");

const [showBilling, setShowBilling] = useState(false);
const [billingPlan, setBillingPlan] = useState<"Free" | "Pro" | "Premium" | null>(null);

const [page, setPage] = useState<
  "account" | "plans" | "billing"
>("account");


  return (
    <>
    {page === "account" && (
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


      <motion.div
  animate={{
    opacity: cardVisible ? 1 : 0,
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
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
  onClick={() => {
  setCardVisible(false);

  setTimeout(() => {
    setPage("plans");
    setCardVisible(true);
  }, 450);
}}
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
  onClick={() => {
  setCardVisible(false);

  setTimeout(() => {
    setShowBilling(true);
  }, 450);
}}
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

          </motion.div>

                </motion.div>
    )}

      {page === "plans" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: cardVisible ? 1 : 0 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-[950px]
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

  {/* FREE CARD */}

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
    onClick={() => {
      if (currentPlan !== "Free") {
        setCardVisible(false);

        setTimeout(() => {
          setBillingPlan("Free");
          setPage("billing");
          setCardVisible(true);
        }, 450);
      }
    }}
    disabled={currentPlan === "Free"}
    style={{
      transform: "translateY(-36px)",
    }}
    className={`
      mt-10
      h-11
      rounded-full
      border
      font-medium
      transition-all
      duration-200
      ${
        currentPlan === "Free"
          ? "border-white/10 bg-white/5 text-white/40 cursor-default"
          : "border-white/10 bg-white text-black hover:scale-[1.02] active:scale-[0.98]"
      }
    `}
  >
    {currentPlan === "Free"
      ? "Current Plan"
      : "Downgrade to Free"}
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

  {/* PRO CARD */}

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
    onClick={() => {
      if (currentPlan !== "Pro") {
        setCardVisible(false);

        setTimeout(() => {
          setBillingPlan("Pro");
          setPage("billing");
          setCardVisible(true);
        }, 450);
      }
    }}
    disabled={currentPlan === "Pro"}
    style={{
      transform: "translateY(-36px)",
    }}
    className={`
      mt-10
      h-11
      rounded-full
      border
      font-medium
      transition-all
      duration-200
      ${
        currentPlan === "Pro"
          ? "border-white/10 bg-white/5 text-white/40 cursor-default"
          : "border-white/10 bg-white text-black hover:scale-[1.02] active:scale-[0.98]"
      }
    `}
  >
    {currentPlan === "Pro"
      ? "Current Plan"
      : currentPlan === "Free"
      ? "Upgrade to Pro"
      : "Downgrade to Pro"}
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
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>30 AI generations / day</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Pro Templates</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Pro Analytics</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Launch 10 AI apps</span>
    </div>
  </div>
</div>

  {/* PREMIUM CARD */}

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
    onClick={() => {
      if (currentPlan !== "Premium") {
        setCardVisible(false);

        setTimeout(() => {
          setBillingPlan("Premium");
          setPage("billing");
          setCardVisible(true);
        }, 450);
      }
    }}
    disabled={currentPlan === "Premium"}
    style={{
      transform: "translateY(-36px)",
    }}
    className={`
      mt-10
      h-11
      rounded-full
      border
      font-medium
      transition-all
      duration-200
      ${
        currentPlan === "Premium"
          ? "border-white/10 bg-white/5 text-white/40 cursor-default"
          : "border-white/10 bg-white text-black hover:scale-[1.02] active:scale-[0.98]"
      }
    `}
  >
    {currentPlan === "Premium"
      ? "Current Plan"
      : "Upgrade to Premium"}
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
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Unlimited AI generations</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Premium templates</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Unlimited cloud storage</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2
        size={16}
        className="text-white/35 shrink-0"
      />
      <span>Launch 30 AI apps</span>
    </div>
  </div>
</div>



</div>
        </motion.div>
      )}

      {page === "billing" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: cardVisible ? 1 : 0,
    }}
    transition={{ duration: 0.45 }}
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
        rounded-[28px]
        border
        border-white/10
        bg-[#0E0E0E]
        px-10
        pt-5
        pb-1
      "
    >
      <h1 className="text-4xl font-medium text-white text-center">
  Billing
</h1>

<p className="text-center text-white/40 mt-3">
  Complete your subscription.
</p>

<div className="mt-5 text-center">
  <span className="text-white/45">
    Selected plan:
  </span>

  <span className="ml-2 text-white font-medium">
    {billingPlan}
  </span>
</div>

<div
  className="
    mt-10
    h-[420px]
    overflow-y-auto
    custom-scrollbar
    pr-4
    flex
    flex-col
  "
>

  <div>
  <label className="block mb-2 text-white/60 text-sm">
    Email
  </label>

  <input
    placeholder="sam@example.com"
    className="
      h-12
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/[0.04]
      px-5
      text-white
      outline-none
      focus:border-white/20
    "
  />
</div>

<div className="mt-7">
  <label className="block mb-2 text-white/60 text-sm">
    Card Number
  </label>

  <input
    placeholder="•••• •••• •••• 4242"
    className="
      h-12
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/[0.04]
      px-5
      text-white
      outline-none
      focus:border-white/20
    "
  />
</div>

<div className="mt-7 grid grid-cols-2 gap-6">
  <div>
    <label className="block mb-2 text-white/60 text-sm">
      Expiration
    </label>

    <input
      placeholder="MM / YY"
      className="
        h-12
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        px-5
        text-white
        outline-none
      "
    />
  </div>

  <div>
    <label className="block mb-2 text-white/60 text-sm">
      CVC
    </label>

    <input
      placeholder="123"
      className="
        h-12
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        px-5
        text-white
        outline-none
      "
    />
  </div>
</div>

<div className="mt-7">
  <label className="block mb-2 text-white/60 text-sm">
    Name on Card
  </label>

  <input
    placeholder="John Smith"
    className="
      h-12
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/[0.04]
      px-5
      text-white
      outline-none
    "
  />
</div>

  <div
  className="
    mt-10
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    px-6
    py-5
  "
>
  <h2 className="text-white text-lg font-medium">
    Order Summary
  </h2>

  <div className="mt-6 space-y-4 text-[15px]">

    <div className="flex justify-between">
      <span className="text-white/45">
        Plan
      </span>

      <span className="text-white/70">
        {billingPlan}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-white/45">
        Price
      </span>

      <span className="text-white/70">
        {billingPlan === "Premium"
          ? "$30.00"
          : billingPlan === "Pro"
          ? "$10.00"
          : "$0.00"}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-white/45">
        Tax
      </span>

      <span className="text-white/40">
        —
      </span>
    </div>

    <div className="my-4 border-t border-white/10" />

    <div className="flex justify-between text-[16px]">
      <span className="text-white/70 font-medium">
        Total
      </span>

      <span className="text-white/70 font-medium">
        {billingPlan === "Premium"
          ? "$30.00 / month"
          : billingPlan === "Pro"
          ? "$10.00 / month"
          : "$0.00"}
      </span>
    </div>
  </div>
</div>

<div className="mt-4 mb-4 flex justify-center">

  <button
    className="
      h-11
      px-4
      rounded-full
      bg-white
      text-black
      font-medium
      transition-all
      duration-200
      hover:scale-[1.02]
      active:scale-[0.98]
    "
  >
    Complete Purchase
  </button>

</div>

<button
  onClick={() => {
    setCardVisible(false);

    setTimeout(() => {
      setPage("plans");
      setCardVisible(true);
    }, 450);
  }}
  className="
    absolute
    top-1
    right-1
    w-11
    h-11
    rounded-full
    border
    border-white/10
    bg-[#111111]
    text-white/70
    hover:text-white
    hover:border-white/20
    transition-all
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
      d="M7 7L17 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
    />
    <path
      d="M17 7L7 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
    />
  </svg>
</button>

</div>
    </div>
  </motion.div>
)}

    </>
  );
}