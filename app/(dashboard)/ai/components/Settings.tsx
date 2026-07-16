"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search,Settings as SettingsIcon, User,Heart, Eye, Mic, SendHorizontal, } from "lucide-react";
import FilterIcon from "@/components/icons/FilterIcon";
import TapIcon from "@/components/icons/TapIcon";

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
  onClick={() => {
  setSelectedSection("Navigation");
  setShowButtonsHelp(true);
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
  onClick={() => {
    setSelectedSection("Privacy Policy");
    setShowButtonsHelp(true);
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
  onClick={() => {
    setSelectedSection("Legal");
    setShowButtonsHelp(true);
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
  {selectedSection === "Legal"
    ? "Legal"
    : selectedSection === "Privacy Policy"
    ? "Privacy Policy"
    : "Buttons Explained"}
</h1>

<p className="mt-3 text-white/45">
  {selectedSection === "Legal"
    ? "Important legal information, platform terms and user responsibilities."
    : selectedSection === "Privacy Policy"
    ? "Learn how Halune collects, stores and protects your information."
    : "Learn what every button and action inside Halune does."}
</p>

<div className="mt-8 flex gap-6 h-[440px]">

  {selectedSection !== "Privacy Policy" &&
 selectedSection !== "Legal" && (
  <div
    className="
      w-54
      h-[170px]
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
  </div>
)}

{/* Content */}
<div
  className={`
    ${
      selectedSection === "Privacy Policy" ||
selectedSection === "Legal"
  ? "w-full h-[435px]"
  : "flex-1 h-[435px]"
    }
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-8
    overflow-y-auto
    custom-scrollbar
  `}
>
    
{selectedSection === "Navigation" && (
  <>
    <h2 className="text-2xl font-semibold text-white">
      Navigation
    </h2>

    <p className="mt-2 text-white/45">
      Learn what every navigation control inside Halune does.
    </p>

    <div className="mt-8 space-y-4">

      {/* Home */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Returns you to the main dashboard from anywhere inside Halune.
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

      {/* AI */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Opens the AI Assistant where you can chat, build AI apps and access Halune's AI features.
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
      d="M12 3.6V6.25"
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
  <p className="max-w-[72%] text-white/80 leading-7">
    Opens your Dashboard where you can manage your workspace, analytics and recently used AI tools.
  </p>

  <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
    Dashboard
  </button>
</div>

      {/* Templates */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Opens the Templates page where you can browse and launch AI templates.
        </p>

        <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
          Templates
        </button>
      </div>

      {/* Account */}
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Opens your Account page where you can edit your profile, subscription and billing information.
  </p>

  <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
    Account
  </button>
</div>

{/* Settings */}
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Opens Settings where you can access help, privacy policy and legal information.
  </p>

  <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
    Settings
  </button>
</div>

      {/* Notifications */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Opens your notification center.
        </p>

        <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
          Notifications
        </button>
      </div>

    </div>
  </>
)}

{selectedSection === "Home" && (
  <>
    <h2 className="text-2xl font-semibold text-white">
      Home
    </h2>

    <p className="mt-2 text-white/45">
      Learn what every control on the Home page does.
    </p>

    <div className="mt-8 space-y-4">

            {/* Search */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Search AI apps, templates and creators instantly.
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <Search className="w-5 h-5 text-neutral-400" />
</div>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Filter the marketplace by category.
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <FilterIcon className="w-5 h-5 text-neutral-400" />
</div>
      </div>

      {/* Likes */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Shows how many users have liked an AI app.
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <Heart
    className="w-5 h-5 text-[#ff2d55] fill-[#ff2d55]"
  />
</div>
</div>
      </div>

      {/* Views */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Displays how many times an AI app has been viewed.
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <TapIcon className="w-5 h-5 opacity-80 text-white" />
</div>
</div>
      </div>

      {/* Profile */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Opens your public profile.
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <User className="w-5 h-5 text-neutral-400" />
</div>
      </div>

      {/* Settings */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
        <p className="max-w-[72%] text-white/80 leading-7">
          Opens the quick settings menu.
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <SettingsIcon className="w-5 h-5 text-neutral-400" />
</div>
      </div>
      

    </div>
  </>
)}

{selectedSection === "Builder" && (
<>
  <h2 className="text-2xl font-semibold text-white">
    Builder
  </h2>

  <p className="mt-2 text-white/45">
    Learn what every control inside the AI App Builder does.
  </p>

  <div className="mt-8 space-y-4">

    {/* My Apps */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Opens your collection of AI applications that you have created.
      </p>

      <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 text-sm font-medium cursor-default">
  My Apps
</button>
    </div>

    {/* Create App */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Starts creating a new AI application.
      </p>

     <button
        className="
          px-4
          py-2
          rounded-xl
          bg-white
          text-black
          text-sm
          font-medium
        "
      >
        Create App
      </button>
    </div>

    {/* Upload App */}
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Uploads an existing AI application to continue editing or publish it on Halune.
  </p>

  <button
  className="
    h-10
    w-15
    px-3.5
    rounded-full
    border
    border-white/10
    bg-[#1B1B1B]
    text-white/60
    text-sm
    font-medium
    transition-all
    duration-200
    hover:bg-[#222222]
    hover:text-white/80
    hover:border-white/20
  "
>
  Upload App
</button>
</div>

    {/* Close */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Closes the Builder and returns to the previous page.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  style={{
    transform: "translateY(0.5px)",
  }}
>
  <path
    d="M7 7L17 17L12 12L17 7L7 17"
    stroke="rgb(255,255,255)"
    strokeOpacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
    </div>

    {/* Undo */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Reverts your most recent Builder action.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    opacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: "translateY(1.5px)" }}
  >
    <path d="M8 8L3 12L8 16" />
    <path d="M4 12H15C18 12 19 11 19 8" />
    <path d="M19 8V7" />
  </svg>
</div>

</div>
    </div>

    {/* Redo */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Restores the last action that was undone.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    opacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: "translate(-0.5px,-1px)" }}
  >
    <path d="M16 8L21 12L16 16" />
    <path d="M20 12H9C6 12 5 13 5 16" />
    <path d="M5 16V17" />
  </svg>
</div>

</div>
    </div>

    {/* Preview */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Switches between the application preview and the launch configuration.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: "translateY(0.6px)" }}
  >
    <circle
      cx="12"
      cy="12"
      r="9.7"
      stroke="rgb(255,255,255)"
      strokeOpacity="0.4"
      strokeWidth="2.5"
    />

    <path
      d="M8 14L12 9.5L16 14"
      stroke="rgb(255,255,255)"
      strokeOpacity="0.4"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

</div>
    </div>

    {/* Expand Preview */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Opens the application preview in a larger window.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    opacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 2H22V8" />
    <path d="M22 2L15 9" />

    <path d="M2 16V22H8" />
    <path d="M2 22L9 15" />
  </svg>
</div>

</div>
    </div>

    {/* Restore Preview */}
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Reverts the application preview to its original size.
  </p>

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    opacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3V9H21" />
    <path d="M15 9L22 2" />

    <path d="M9 15H3" />
    <path d="M9 15V21" />
    <path d="M9 15L2 22" />
  </svg>
</div>
</div>

    {/* Upload Thumbnail */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Uploads a thumbnail image that represents your application.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M12 6V12H18H12V18V12H6H12"
    stroke="rgb(255,255,255)"
    strokeOpacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
    </div>

    {/* Remove Thumbnail */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Removes the currently selected thumbnail image.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  style={{
    transform: "translateY(0.5px)",
  }}
>
  <path
    d="M7 7L17 17L12 12L17 7L7 17"
    stroke="rgb(255,255,255)"
    strokeOpacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
    </div>

    {/* Publish Application */}
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Publishes your application to the Halune Marketplace.
  </p>

  <button className="w-16 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v12" />
      <path d="M7 10l5-5 5 5" />
    </svg>
  </button>
</div>

    {/* Attachment */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Uploads files that the AI can use while responding.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M12 6V12H18H12V18V12H6H12"
    stroke="rgb(255,255,255)"
    strokeOpacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
    </div>

    {/* Vision */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Lets the AI analyze uploaded images.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <Eye className="w-5 h-5 text-white/40" />
</div>
    </div>

    {/* Microphone */}
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <p className="max-w-[72%] text-white/80 leading-7">
        Records your voice instead of typing.
      </p>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
  <Mic className="w-5 h-5 text-white/40" />
</div>
    </div>

    {/* Send Message */}
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
  <p className="max-w-[72%] text-white/80 leading-7">
    Sends your message to the AI Assistant.
  </p>

  <button className="w-14 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v12" />
      <path d="M7 10l5-5 5 5" />
    </svg>
  </button>
</div>

  </div>
</>
)}

{selectedSection === "Privacy Policy" && (
<>

  <div className="mt-8 space-y-8">

    <section>
      <h3 className="text-white text-lg font-medium">
        1. Information We Collect
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Halune may collect information you provide directly, including your
        account details, profile information, AI applications, prompts,
        uploaded files, billing information and support requests. Basic
        technical information such as browser type, device information,
        operating system and IP address may also be collected automatically.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        2. How We Use Your Information
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        We use your information to operate Halune, provide AI services,
        improve application performance, protect accounts, process payments,
        detect abuse, provide customer support and develop new features.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        3. GDPR Legal Basis
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Where the General Data Protection Regulation (GDPR) applies, personal
        data is processed only where a valid legal basis exists, including
        performance of a contract, legitimate interests, compliance with legal
        obligations or user consent where required.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        4. Data Storage & Security
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Halune uses appropriate technical and organizational measures to
        protect personal information against unauthorized access, alteration,
        disclosure and destruction. While no internet service can guarantee
        absolute security, reasonable safeguards are continuously maintained.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        5. Cookies & Local Storage
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Cookies and similar technologies may be used to remember preferences,
        maintain secure sessions, improve performance and analyze usage. Users
        may disable cookies through their browser settings, although certain
        functionality may become unavailable.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        6. Third-Party Services
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Halune may integrate third-party services including authentication,
        payment providers, AI model providers, analytics services and cloud
        hosting. These providers process information only as necessary to
        deliver their services and remain responsible for their own privacy
        practices.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        7. International Data Transfers
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Where information is transferred outside the European Economic Area,
        appropriate safeguards such as Standard Contractual Clauses or other
        legally recognized mechanisms are implemented where required.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        8. Your Rights
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Depending on applicable law, users may request access, correction,
        deletion, restriction of processing, data portability or object to
        certain processing activities. Users may also withdraw consent where
        consent is the legal basis for processing.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        9. Data Retention
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Personal information is retained only for as long as necessary to
        provide services, comply with legal obligations, resolve disputes and
        enforce agreements.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        10. Children's Privacy
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Halune is not intended for children under the minimum age required by
        applicable law. Personal information from children is not knowingly
        collected.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        11. Contact
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Questions regarding privacy or data protection may be submitted through
        Halune support or the official company contact information provided on
        the website.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        12. Policy Updates
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        This Privacy Policy may be updated periodically. Continued use of
        Halune following any update constitutes acceptance of the revised
        policy where permitted by applicable law.
      </p>
    </section>

  </div>
</>
)}

{selectedSection === "Legal" && (
<>



  <div className="mt-8 space-y-8">

    <section>
      <h3 className="text-white text-lg font-medium">
        1. Terms of Service
      </h3>


      <p className="mt-3 text-white/70 leading-7">
        By accessing or using Halune, you agree to comply with these Terms of
        Service and all applicable laws and regulations. If you do not agree
        with these Terms, you must discontinue use of the platform.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        2. User Accounts
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
        Halune reserves the right to suspend or terminate accounts involved in
        fraudulent or abusive activity.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        3. Acceptable Use
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Users may not upload, generate or distribute unlawful, harmful,
        deceptive, infringing or malicious content. Any attempt to interfere
        with Halune's infrastructure, security or availability is strictly
        prohibited.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        4. Intellectual Property
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Users retain ownership of content they create and publish. Halune
        retains ownership of the platform, interface, branding, software,
        source code and all proprietary technologies used to provide the
        service.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        5. Marketplace Content
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Applications published to the Halune Marketplace remain the
        responsibility of their creators. Halune reserves the right to remove
        or restrict content that violates these Terms, applicable law or
        platform policies.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        6. AI Generated Content
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        AI-generated responses may contain inaccuracies and should not be
        considered legal, financial, medical or professional advice. Users are
        responsible for independently verifying information before relying on
        it.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        7. Payments & Subscriptions
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Paid features, subscriptions and marketplace purchases are governed by
        their applicable pricing, billing and cancellation policies. Failure to
        complete payment may result in suspension of premium features.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        8. Limitation of Liability
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        To the maximum extent permitted by applicable law, Halune shall not be
        liable for indirect, incidental, consequential or special damages
        arising from use of the platform or any AI-generated output.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        9. Account Suspension & Termination
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Halune may suspend or permanently terminate accounts that violate these
        Terms, applicable laws or platform policies, or that present a security
        risk to the platform or its users.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        10. Governing Law
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        These Terms are governed by the laws of Hungary together with
        applicable European Union legislation, including mandatory consumer
        protection and data protection requirements where applicable.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        11. Changes to These Terms
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Halune may update these Terms periodically. Continued use of the
        platform after revised Terms become effective constitutes acceptance of
        the updated version unless otherwise required by applicable law.
      </p>
    </section>

    <section>
      <h3 className="text-white text-lg font-medium">
        12. Contact
      </h3>

      <p className="mt-3 text-white/70 leading-7">
        Questions regarding these Terms or other legal matters may be submitted
        through Halune Support or the official company contact information
        provided within the platform or on the official website.
      </p>
    </section>

  </div>
</>
)}
    
  </div>

</div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
}