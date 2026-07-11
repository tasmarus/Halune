"use client";

import {
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
  Line,
  YAxis,
  Tooltip,
} from "recharts";

import {
  useEffect,
  useState,
  useRef,
} from "react";

import { Settings, User, Home, BookOpen, Bell } from "lucide-react";

import { useRouter } from "next/navigation";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import Sidebar from "./components/Sidebar";

import Dashboard from "./components/Dashboard";

const data = [
  { value: 0 },
  { value: 400 },
  { value: 650 },
  { value: 900 },
  { value: 1100 },
  { value: 1400 },
];

function useCountUp(
  target: number,
  start: boolean,
  duration = 900
) {
  
  const [value, setValue] =
    useState<number | null>(null);

  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;

    started.current = true;

    let startTime: number;

    const animate = (t: number) => {
      if (!startTime) startTime = t;

      const progress = Math.min(
        (t - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setValue(target * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, start, duration]);

  return value;
}

export default function AIPage() {
  const router = useRouter();

  const [showPreviewText, setShowPreviewText] = useState(false);
  
  const [mounted, setMounted] = useState(false);

  const [showApps, setShowApps] = useState(false);
  const [isClosingApps, setIsClosingApps] = useState(false);
  const [previewExpanded, setPreviewExpanded] = useState(false);
  const [isClosingPreview, setIsClosingPreview] = useState(false);
  const [showLaunchMenu, setShowLaunchMenu] = useState(false);
  const [showLaunchCard, setShowLaunchCard] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [appName, setAppName] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const canLaunchApp =
  thumbnail !== null &&
  appName.trim().length > 0 &&
  price.trim().length > 0 &&
  tag.trim().length > 0;

  const [activeSection, setActiveSection] = useState<
  | "dashboard"
  | "templates"
  | "account"
  | "settings"
  | "notifications"
>("dashboard");

  const [graphVisible, setGraphVisible] =
    useState(false);

  const [showDot, setShowDot] =
    useState(false);

  const initialized = useRef(false);

const [gridVisible, setGridVisible] = useState(false);

const [builderOpen, setBuilderOpen] =
  useState(false);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // Ignore typing inside inputs/textareas
    const target = e.target as HTMLElement;

    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable
    ) {
      return;
    }

    if (builderOpen) return;

    switch (e.key.toLowerCase()) {
  case "d":
    setActiveSection("dashboard");
    break;

  case "t":
    setActiveSection("templates");
    break;

  case "a":
    setActiveSection("account");
    break;

  case "s":
    setActiveSection("settings");
    break;

  case "n":
    setActiveSection("notifications");
    break;
}
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [router, builderOpen]);

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;

    requestAnimationFrame(() => {
      setMounted(true);

      setGridVisible(true);

      setTimeout(() => {
        requestAnimationFrame(() => {
          setGraphVisible(true);
        });
      }, 16);
    });

    const dotTimer = setTimeout(() => {
      setShowDot(true);
    }, 1410);

    return () => {
      clearTimeout(dotTimer);
    };
  }, []);

  const stats = [
    {
      label: "Income",
      type: "money",
      percent: 5.3,
      positive: true,
    },
    {
      label: "Likes",
      type: "number",
      percent: 2.1,
      positive: true,
    },
    {
      label: "Clicks",
      type: "number",
      percent: -1.4,
      positive: false,
    },
    {
      label: "Conversion",
      type: "percent",
      percent: 0.4,
      positive: true,
    },
  ];

  const animatedValues = [
    useCountUp(17160, mounted),
    useCountUp(12481, mounted),
    useCountUp(48902, mounted),
    useCountUp(9.8, mounted),
  ];

  return (
    <div className="flex min-h-screen w-full bg-black text-white">

<Sidebar
  builderOpen={builderOpen}
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>

      {/* MAIN */}
      <div className="flex-1 p-6 overflow-y-auto">

{activeSection === "templates" && (
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
)}

{activeSection === "account" && (
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
              text-white/40
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
              text-white/40
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
              text-white/40
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
          px-3
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
)}

{activeSection === "settings" && (
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
  className="h-full flex items-center justify-center"
>
    <div className="text-center">
      <h1 className="text-3xl font-medium text-white">
        Settings
      </h1>

      <p className="mt-2 text-white/40">
        Settings page coming soon.
      </p>
    </div>
  </motion.div>
)}

{activeSection === "notifications" && (
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
  className="h-full flex items-center justify-center"
>
    <div className="text-center">
      <h1 className="text-3xl font-medium text-white">
        Notifications
      </h1>

      <p className="mt-2 text-white/40">
        Notifications page coming soon.
      </p>
    </div>
  </motion.div>
)}
      {/* CHAT */}

{activeSection === "dashboard" && !builderOpen && (
 <div className="mb-8">
  <button
    onClick={() => setBuilderOpen(true)}
    className="
      w-full
      h-[110px]
      rounded-2xl
      border
      border-white/10
      bg-white/5
      hover:bg-white/[0.07]
      transition-all
      duration-300
      flex
      items-center
      justify-center
      cursor-pointer
    "
    style={{
  transform: mounted
    ? "translateY(0)"
    : "translateY(-12px)",

  opacity: mounted
    ? 1
    : 0,

  transition:
    "all 0.5s cubic-bezier(0.22,1,0.36,1)",
}}
  >
    <div className="text-center">
      <div className="text-xl font-medium text-white">
        AI App Builder
      </div>

      <div className="text-sm text-white/40 mt-1">
        Build and customize apps with AI
      </div>
    </div>
  </button>
</div>

        )}

    

        {activeSection === "dashboard" && builderOpen && (
  <motion.div
    initial={{
      opacity: 0,
      y: 18,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="flex flex-col items-center gap-6 pt-24"
  >

    {/* PREVIEW */}
    <div
  className="relative"
  style={{
    width: "1000px",
    height: "420px",
  }}
>
    
    <motion.div
  layoutId="builderPreview"
  animate={{
  opacity: cardVisible ? 1 : 0,
}}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
    layout: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className="
    absolute
    inset-0
    w-[1000px]
    h-[420px]
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    overflow-visible
    flex
    items-center
    justify-center
  "
  style={{
    pointerEvents: showLaunchCard ? "none" : "auto",
  }}
>
  {!showLaunchMenu ? (
  <motion.div
    animate={{
      opacity: showPreviewText ? 0 : 1,
    }}
    transition={{
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="text-white/40 text-4xl"
  >
    App Builder Page
  </motion.div>
) : (
  <>
    <div className="w-full h-full p-6 pt-2 flex flex-col">

  <div className="mb-5">

    <input
  id="thumbnail-upload"
  type="file"
  accept="image/png,image/jpeg,image/jpg,image/webp"
  className="hidden"
  onChange={(e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setThumbnail(file);
  setThumbnailUrl(URL.createObjectURL(file));
}}
/>

    <div
    onClick={() => {
  document.getElementById("thumbnail-upload")?.click();
}}
      className="
        relative
        w-[190px]
        h-[100px]
        mx-auto mt-4
        scale-[1.2]
        rounded-2xl
        border
        border-solid
        border-white/10
        flex
        flex-col
        items-center
        justify-center
        gap-2
        cursor-pointer
      "
    >
      {thumbnailUrl ? (
  <>
    <button
      onClick={(e) => {
        e.stopPropagation();
        setThumbnail(null);
        setThumbnailUrl("");
      }}
      className="
        absolute
        -top-5
        -right-4
        w-5
        h-5
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
        z-10
      "
    >
      <svg
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  style={{
    transform: "translateY(0.5px)",
  }}
>
  <path
    d="M7 7L17 17M17 7L7 17"
    stroke="rgb(255,255,255)"
    strokeOpacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </button>

    <img
      src={thumbnailUrl}
      alt="Thumbnail"
      className="
        w-full
        h-full
        object-cover
        rounded-2xl
        select-none
        pointer-events-none
      "
      draggable={false}
    />
  </>
) : (
  <>
    <svg
      width="46"
      height="46"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 6V18M6 12H18"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <div
      className="
        text-white/40
        text-sm
        select-none
      "
    >
      Upload Thumbnail.
    </div>
  </>
)}
    </div>

  </div>

  <div className="flex flex-col gap-8 mt-4">

  <div>
  <input
  value={appName}
  onChange={(e) => setAppName(e.target.value)}
  placeholder="App Name"
  className="
    w-full
    h-10
    rounded-2xl
    bg-white/5
    border
    border-white/10
    px-4
    text-white/40
    placeholder:text-white/40
    outline-none
  "
/>
</div>

  <div>
  <input
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  placeholder="Price"
  className="
    w-full
    h-10
    rounded-2xl
    bg-white/5
    border
    border-white/10
    px-4
    text-white/40
    placeholder:text-white/40
    outline-none
  "
/>
</div>

  <div>
  <input
  value={tag}
  onChange={(e) => setTag(e.target.value)}
  placeholder="#"
  className="
    w-full
    h-10
    rounded-2xl
    bg-white/5
    border
    border-white/10
    px-4
    text-white/40
    placeholder:text-white/40
    outline-none
  "
/>
</div>

<div className="flex justify-center -mt-3">

  <button
  disabled={!canLaunchApp}
  className={`
    w-16
    h-10
    rounded-full
    flex
    items-center
    justify-center
    overflow-hidden
    transition-all
    duration-200
    ${
      canLaunchApp
        ? "bg-white hover:scale-105 active:scale-95 cursor-pointer"
        : "bg-white/20 cursor-not-allowed"
    }
  `}
>
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

</div>
  </>
)}
</motion.div>



{(showApps || isClosingApps) && (
  <div
    style={{
  animation: isClosingApps
    ? "appsMenuOut 0.32s cubic-bezier(0.22,1,0.36,1) forwards"
    : "appsMenuIn 0.32s cubic-bezier(0.22,1,0.36,1) forwards",
}}

  className="
    absolute
    top-16
    left-[-228px]
 w-50
 rounded-[32px]
    border
    bg-white/5
    border-white/10
    overflow-visible
    p-6

  "
>
    <div className="flex flex-col gap-3 mb-4">
      <h3 className="text-white/40 text-lg font-medium">
  My Apps
</h3>

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

    <div className="text-white/40 text-sm">
  No apps created yet.
</div>
  </div>
)}

<button
  onClick={() => {
  if (showApps) {
    setIsClosingApps(true);

    setTimeout(() => {
      setShowApps(false);
      setIsClosingApps(false);
    }, 320);
  } else {
    setShowApps(true);
  }
}}
  className="
    absolute
    top-5
    -left-16
    w-11
    h-11
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
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="3" width="7" height="7" rx="2" />
  <rect x="14" y="3" width="7" height="7" rx="2" />
  <rect x="3" y="14" width="7" height="7" rx="2" />
  <rect x="14" y="14" width="7" height="7" rx="2" />
</svg>
</button>

<button
  onClick={() => router.push("/builder")}
  className="
    absolute
    -top-[55px]
    left-[24px]
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

<button
  onClick={() => {
    console.log("UNDO");
  }}
  className="
    absolute
    -top-[55px]
    left-[95px]
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
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    opacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
  transform: "translateY(1.5px)"
}}
  >
    <path d="M8 8L3 12L8 16" />
    <path d="M4 12H15C18 12 19 11 19 8" />
<path d="M19 8V7" />
  </svg>
</button>

<button
  onClick={() => {
    console.log("REDO");
  }}
  className="
    absolute
    -top-[55px]
    left-[166px]
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
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    opacity="0.4"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
  transform: "translate(-0.5px, -1px)",
}}
  >
    <path d="M16 8L21 12L16 16" />
    <path d="M20 12H9C6 12 5 13 5 16" />
    <path d="M5 16V17" />
  </svg>
</button>

<button
  onClick={() => {
  // Fade the whole card out
  setCardVisible(false);

  setTimeout(() => {
    // Swap the UI while invisible
    setShowLaunchMenu(!showLaunchMenu);

    // Fade the whole card back in
    setCardVisible(true);
  }, 450);
}}
  className="
    absolute
    -bottom-9
    -right-12
    w-11
    h-11
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
  width="23"
  height="23"
  viewBox="0 0 24 24"
  fill="none"
  style={{
    transform: "translateY(0.6px)",
  }}
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
</button>

<button
onClick={() => {
  setShowPreviewText(true);
  setPreviewExpanded(true);
}}
  className="
    absolute
    -top-11
    -right-12
    w-11
    h-11
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
  strokeLinejoin="round"
  className="text-white/40"
>
  <path d="M16 2H22V8" />
<path d="M22 2L15 9" />

<path d="M2 16V22H8" />
<path d="M2 22L9 15" />
</svg>
</button>

</div>

    {/* ORIGINAL CHATBAR */}
    <div className="w-[900px] mt-1">
      
    {/* CHAT */}
        <div className="mb-8">
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              flex
              items-center
              justify-between
            "
          >
            <div className="flex items-center gap-4">

              <button
  className="
    w-[24px]
    h-[24px]
    flex
    items-center
    justify-center
    text-[#B8B8B8]
  "
>
  <svg
    className="
      transition-transform
      duration-200
      ease-out
      hover:scale-125
    "
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="rgb(255,255,255)"
      opacity="0.4"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

              <button
                className="
                  w-[24px]
                  h-[24px]
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  transition-transform
                  duration-150
                  ease-out
                "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(255,255,255)"
                  opacity="0.4"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
              </button>

            </div>

            <input
  value={chatInput}
  onChange={(e) => setChatInput(e.target.value)}
  placeholder="Ask me anything..."
  className="
    flex-1
    mx-4
    bg-transparent
    outline-none
    text-white
    placeholder:text-white/40
    text-[15px]
  "
/>

            <div className="flex items-center gap-4">

              <button
                className="
                  hover:scale-110
                  transition-transform
                  duration-150
                  ease-out
                "
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="rgb(255,255,255)"
                  opacity="0.4"
                  strokeWidth="2"
                >
                  <rect
                    x="9"
                    y="2"
                    width="6"
                    height="12"
                    rx="3"
                  />

                  <path d="M5 10v2a7 7 0 0014 0v-2" />
                </svg>
              </button>

              <button
  disabled={chatInput.trim().length === 0}
  className={`
    w-14
    h-10
    rounded-full
    flex
    items-center
    justify-center
    overflow-hidden
    transition-all
    duration-200
    ${
      chatInput.trim().length > 0
        ? "bg-white hover:scale-105 active:scale-95 cursor-pointer"
        : "bg-white/20 cursor-not-allowed"
    }
  `}
>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
  transform: mounted
    ? "translateY(0)"
    : "translateY(52px)",

  opacity: mounted
    ? 1
    : 0,

  transition:
    "all 1.25s cubic-bezier(0.16,1,0.3,1)",
}}
                >
                  <path d="M12 5v12" />

                  <path d="M7 10l5-5 5 5" />
                </svg>
              </button>

            </div>
          </div>
        </div>

    </div>

  </motion.div>
)}

        {/* ANALYTICS */}
{activeSection === "dashboard" && !builderOpen && (
<div>

          <h2 className="text-lg mb-4">
            Analytics
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-14">

            {stats.map((stat, i) => {
              const val = animatedValues[i];

              const format = () => {
                if (val === null)
                  return "";

                if (
                  stat.type === "money"
                ) {
                  return `$${Math.floor(
                    val
                  ).toLocaleString()}`;
                }

                if (
                  stat.type === "percent"
                ) {
                  return `${val.toFixed(
                    1
                  )}%`;
                }

                return Math.floor(
                  val
                ).toLocaleString();
              };

              return (
                <div
                  key={i}
                  className="
                    h-[95px]
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    flex
                    flex-col
                    justify-between
                  "
                >
                  <p className="text-xs text-white/50">
                    {stat.label}
                  </p>

                  <p className="text-lg tabular-nums">
                    {format()}
                  </p>

                  <p
                    className={`text-sm ${
                      stat.positive
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                    style={{
                      transform: mounted
                        ? "translateY(0)"
                        : "translateY(12px)",

                      opacity: mounted
                        ? 1
                        : 0,

                      transition:
  "all 0.8s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {mounted &&
                      `${stat.percent > 0 ? "+" : ""}${stat.percent}% vs last month`}
                  </p>
                </div>
              );
            })}

          </div>

          {/* GRAPH */}


          
          <div
            className="
              relative
              h-[340px]
              rounded-2xl
              border
              border-white/10
              bg-white/5
              overflow-hidden
            "
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart
                data={data}
                margin={{
                  top: 38,
                  right: 16,
                  left: 18,
                  bottom: 38,
                }}
              >

                <YAxis
                  domain={[0, 1400]}
                  hide
                />

                <Tooltip
  trigger="click"
  cursor={false}
  content={() => null}
  wrapperStyle={{ display: "none" }}
  itemStyle={{ display: "none" }}
  labelStyle={{ display: "none" }}
/>

                {gridVisible && (
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    vertical={false}
                    horizontal
                  />
               )}

                <defs>

                  <linearGradient
  id="area"
  x1="0"
  y1="0"
  x2="0"
  y2="1"
>
  <stop
    offset="0%"
    stopColor="#7202fa"
    stopOpacity={0.64}
  />

  <stop
    offset="25%"
    stopColor="#7202fa"
    stopOpacity={0.6}
  />

  <stop
    offset="50%"
    stopColor="#7202fa"
    stopOpacity={0.46}
  />

  <stop
    offset="75%"
    stopColor="#7202fa"
    stopOpacity={0.24}
  />

  <stop
    offset="92%"
    stopColor="#7202fa"
    stopOpacity={0.09}
  />

  <stop
    offset="100%"
    stopColor="#7202fa"
    stopOpacity={0}
  />
</linearGradient>
                </defs>

                {graphVisible && (
                  <>
                    <Area
                    type="monotone"
  dataKey="value"
  baseValue={-180}
  stroke="none"
  fill="url(#area)"
  fillOpacity={1}
 style={{
  maskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.08) 0.4%, rgba(0,0,0,0.18) 1%, rgba(0,0,0,0.35) 2%, rgba(0,0,0,0.6) 3.5%, rgba(0,0,0,0.85) 5.5%, black 8%, black 100%)",

  WebkitMaskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.08) 0.4%, rgba(0,0,0,0.18) 1%, rgba(0,0,0,0.35) 2%, rgba(0,0,0,0.6) 3.5%, rgba(0,0,0,0.85) 5.5%, black 8%, black 100%)",
}}
  isAnimationActive
  animationBegin={0}
  animationDuration={1400}
  animationEasing="ease-out"
/>
            
<Line
  type="monotone"
  dataKey="value"
  stroke="#8202fa"
  strokeWidth={3}
  dot={false}
  isAnimationActive
  animationBegin={0}
  animationDuration={1400}
  animationEasing="ease-out"
  style={{
    transform: "translateY(-1px)",
  }}
/>

                  </>
                )}

              </AreaChart>
            </ResponsiveContainer>

              <div
  className="
    absolute
    inset-0
    pointer-events-none
  "
  style={{
    background:
      "radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.08) 85%, rgba(0,0,0,0.18) 100%)"
  }}
/>

            {showDot && (
              <div
                className="absolute"
                style={{
                  top: "31px",
                  right: "16px",
                }}
              >
                <div className="w-[12px] h-[12px] rounded-full bg-white animate-dotPop" />
              </div>
            )}
                    </div>

                </div>

)}
      
      </div>

<AnimatePresence>
  {previewExpanded && (
  <motion.div
  className="
    fixed
    inset-0
    z-[999]
    flex
    items-center
    justify-center
  "
>
    <motion.div
  layoutId="builderPreview"
  initial={false}
  exit={{ opacity: 1 }}
  transition={{
    layout: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className={`
  w-[92vw]
  h-[78vh]
  rounded-[32px]
  border
  border-white/10
  bg-[#0F0F0F]
  backdrop-blur-xl
  flex
  items-center
  justify-center
  relative
 
`}
>

<button
  onClick={() => {
setIsClosingPreview(true);

  setTimeout(() => {
    setPreviewExpanded(false);

    setTimeout(() => {
  setShowPreviewText(false);
}, 360);

    // setTimeout(() => {
//   setShowPreviewText(true);
// }, 450);

    setTimeout(() => {
      setIsClosingPreview(false);
    }, 50);
  },0);
}}
  className="
    absolute
    -top-9
    -right-12
    w-11
    h-11
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
  strokeLinejoin="round"
  className="text-white/40"
>
  {/* top-right arrow pointing inward */}
  <path d="M15 3V9H21" />
  <path d="M15 9L22 2" />

  <path d="M9 15L3 15" />
<path d="M9 15L9 21" />
<path d="M9 15L2 22" />
</svg>
</button>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{
  opacity: isClosingPreview ? 0 : 1
}}
  exit={{ opacity: 0 }}

  transition={{
  duration: 0.2,
  delay: isClosingPreview ? 0 : 0.45,
}}

  className="text-white/40 text-4xl"
>
  App Builder Page
</motion.div>

    </motion.div>
  </motion.div>
)}

</AnimatePresence>

      <style jsx>{`

      @keyframes appsMenuIn {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  @keyframes appsMenuOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-24px);
  }
}

@keyframes builderZoomOut {
  from {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }

  to {
    opacity: 1;
    transform: translateY(-20px) scale(0.96);
  }
}

.animate-builderZoomOut {
  animation: builderZoomOut 0.26s ease forwards;
}

@keyframes builderZoomIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }
}

.animate-builderZoomIn {
  animation: builderZoomIn 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

        @keyframes dotPop {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }

          60% {
            transform: scale(1.1);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-dotPop {
          animation: dotPop 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
}