"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Settings() {

const [showButtonsHelp, setShowButtonsHelp] = useState(false);
const [selectedSection, setSelectedSection] =
  useState("Navigation");

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
          Settings
        </h1>

        <p className="mt-1 text-white/40">
          Help, privacy and legal information.
        </p>

        <div className="mt-8 flex flex-col gap-4">

          {/* Buttons Explained */}
          <div
            className="
              flex
              items-center
              justify-between
              px-6
              py-5
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div>
              <h2 className="text-white text-lg font-medium">
                Buttons Explained
              </h2>

              <p className="mt-1 text-sm text-white/45">
                Learn what every button and feature in Halune does.
              </p>
            </div>

            <button
  onClick={() => setShowButtonsHelp(true)}
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
                transition-all
                duration-200
                hover:border-white/20
              "
            >
              View
            </button>
          </div>

          {/* Privacy Policy */}
          <div
            className="
              flex
              items-center
              justify-between
              px-6
              py-5
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div>
              <h2 className="text-white text-lg font-medium">
                Privacy Policy
              </h2>

              <p className="mt-1 text-sm text-white/45">
                Learn how Halune stores, protects and processes your data.
              </p>
            </div>

            <button
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
                transition-all
                duration-200
                hover:border-white/20
              "
            >
              View
            </button>
          </div>

          {/* Legal */}
          <div
            className="
              flex
              items-center
              justify-between
              px-6
              py-5
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div>
              <h2 className="text-white text-lg font-medium">
                Legal
              </h2>

              <p className="mt-1 text-sm text-white/45">
                Read our terms of service, licenses and legal notices.
              </p>
            </div>

            <button
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
                transition-all
                duration-200
                hover:border-white/20
              "
            >
              View
            </button>
          </div>

        </div>
      </div>
      <AnimatePresence>
  {showButtonsHelp && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <button
        onClick={() => setShowButtonsHelp(false)}
        style={{
  transform: "translateY(-19px)",
}}
        className="
          absolute
          top-1
          right-14
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

      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          w-[1000px]
          h-[600px]
          rounded-3xl
          border
          border-white/10
          bg-[#0E0E0E]
          p-10
        "
      >
        <h1 className="text-4xl font-semibold text-white">
  Buttons Explained
</h1>

<p className="mt-3 text-white/45">
  Learn what every button and action inside Halune does.
</p>

<div className="mt-8 flex gap-6 h-[440px]">

  {/* Navigation */}
  <div
  className="
    w-54
    h-[200px]
    self-center
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-4
    flex
    flex-col
    gap-2
  "
>
    <button
  onClick={() => setSelectedSection("Navigation")}
  className={`
    h-11
    rounded-2xl
    text-left
    px-4
    transition-all
    ${
      selectedSection === "Navigation"
        ? "bg-white/10 text-white"
        : "text-white/50 hover:bg-white/5"
    }
  `}
>
  Navigation
</button>

    

    <button
  onClick={() => setSelectedSection("Home")}
  className={`
    h-11
    rounded-2xl
    text-left
    px-4
    transition-all
    ${
      selectedSection === "Home"
        ? "bg-white/10 text-white"
        : "text-white/50 hover:bg-white/5"
    }
  `}
>
  Home
</button>

    <button
  onClick={() => setSelectedSection("Builder")}
  className={`
    h-11
    rounded-2xl
    text-left
    px-4
    transition-all
    ${
      selectedSection === "Builder"
        ? "bg-white/10 text-white"
        : "text-white/50 hover:bg-white/5"
    }
  `}
>
  Builder
</button>

    <button
  onClick={() => setSelectedSection("Analytics")}
  className={`
    h-11
    rounded-2xl
    text-left
    px-4
    transition-all
    ${
      selectedSection === "Analytics"
        ? "bg-white/10 text-white"
        : "text-white/50 hover:bg-white/5"
    }
  `}
>
  Analytics
    </button>

  </div>

  {/* Content */}
<div
  className="
    h-[435px]
    flex-1
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-8
    overflow-y-auto custom-scrollbar
  "
>
    <h2 className="text-2xl font-semibold text-white">
  {selectedSection}
</h2>

<p className="mt-2 text-white/45">
  Learn what every navigation control button inside Halune does.
</p>

<div className="mt-8 space-y-4">

  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Returns you to the main dashboard from anywhere in Halune.
  </p>

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 -translate-y-[1px] text-white"
    >
      <path d="M6.6 11 L12 6.2 L17.4 11" />
      <path d="M6.6 11 V18 Q6.6 19.6 8.4 19.6 H15.6 Q17.4 19.6 17.4 18 V11" />
    </svg>
  </div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Opens the AI Assistant where you can chat, build AI apps and use Halune's AI features.
  </p>

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white"
    >
      <rect
        x="6.2"
        y="7.2"
        width="11.6"
        height="11.6"
        rx="3"
      />

      <line x1="4.8" y1="13" x2="6.2" y2="13" />
      <line x1="17.8" y1="13" x2="19.2" y2="13" />

      <rect
        x="9.2"
        y="11"
        width="1.6"
        height="4.5"
        rx="1"
        fill="currentColor"
        stroke="none"
      />

      <rect
        x="13.2"
        y="11"
        width="1.6"
        height="4.5"
        rx="1"
        fill="currentColor"
        stroke="none"
      />

      <path
        d="M12 3.6V6.95"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="3.6"
        r="0.9"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  </div>
</div>

  {/* Dashboard */}
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
    <p className="max-w-[70%] text-white/80 leading-7">
      Opens your main dashboard where you can manage your AI workspace,
      analytics and recently used tools.
    </p>

    <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
      Dashboard
    </button>
  </div>

  {/* Templates */}
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
    <p className="max-w-[70%] text-white/80 leading-7">
      Opens the Templates page where you can browse and launch AI templates.
    </p>

    <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
      Templates
    </button>
  </div>

  {/* Account */}
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
    <p className="max-w-[70%] text-white/80 leading-7">
      Opens your Account page where you can manage your profile,
      subscription and billing.
    </p>

    <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
      Account
    </button>
  </div>

  {/* Settings */}
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
    <p className="max-w-[70%] text-white/80 leading-7">
      Opens Settings where you can access help, privacy and legal information.
    </p>

    <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
      Settings
    </button>
  </div>

  {/* Notifications */}
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
    <p className="max-w-[70%] text-white/80 leading-7">
      Opens Notifications where you can access all of your received notifications.
    </p>

    <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
      Notifications
    </button>
  </div>

</div>
  </div>

</div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
}