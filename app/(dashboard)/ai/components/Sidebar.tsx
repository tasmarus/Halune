"use client";

import { BookOpen, Settings, User } from "lucide-react";

type SidebarProps = {
  builderOpen: boolean;
  activeSection:
    | "dashboard"
    | "templates"
    | "account"
    | "settings"
    | "notifications";

  setActiveSection: (
    section:
      | "dashboard"
      | "templates"
      | "account"
      | "settings"
      | "notifications"
  ) => void;
};

export default function Sidebar({
  builderOpen,
  activeSection,
  setActiveSection,
}: SidebarProps) {
  return (
  <>
  {/* SIDEBAR */}
{!builderOpen && (
<div className="w-64 border-r border-white/10 p-4 flex flex-col justify-between shrink-0">
        <div>
          <h1 className="text-xl mb-6">
            Halune
          </h1>

          <div className="mb-5">
  <div
    className="
      h-11
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-3
      flex
      items-center
      justify-between
      mb-5
    "
  >
    <div className="flex items-center gap-2">
      <svg
        width="16"
        height="16"
         className="shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#737373"
        strokeWidth="2"
        strokeLinecap="round"
strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4-4" />
      </svg>

      <span className="text-sm text-white/40">
        Search...
      </span>
    </div>

    <div className="flex items-center gap-1">
      

      <div
        className="
          h-6
          min-w-[24px]
          px-2
          rounded-md
          border
          border-white/10
          bg-white/[0.03]
          text-[11px]
          text-white/50
          flex
          items-center
          justify-center
        "
      >
        F
      </div>
    </div>
  </div>
  {[
    {
      label: "Dashboard",
      key: "D",
      icon: (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#737373"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 10.5L12 4.5L19 10.5V18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V10.5Z" />
    <path d="M10 16.5H14" />
  </svg>
),
    },
    {
      label: "Templates",
      key: "T",
      icon: (
  <BookOpen 
  size={15} 
  strokeWidth={2} 
  stroke="#737373"
  />
),
    },
    {
      label: "Account",
      key: "A",
      icon: (
  <User
    size={15}
    strokeWidth={2}
    stroke="#737373"
  />
),
    },
    {
      label: "Settings",
      key: "S",
      icon: (
  <Settings
    size={15}
    strokeWidth={2}
    stroke="#737373"
  />
)
    },
    {
      label: "Notifications",
      key: "N",
      icon: (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#737373"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
    <path d="M9.2 18.8h5.6c0 1.7-1.1 2.8-2.8 2.8s-2.8-1.1-2.8-2.8z" fill="#737373" stroke="none" />
  </svg>
),
    }
  ].map((item) => (
    <button
  key={item.label}
  onClick={() => {
  switch (item.label) {
    case "Dashboard":
      setActiveSection("dashboard");
      break;

    case "Templates":
      setActiveSection("templates");
      break;

    case "Account":
      setActiveSection("account");
      break;

    case "Settings":
      setActiveSection("settings");
      break;

    case "Notifications":
      setActiveSection("notifications");
      break;
  }
}}
      className="
        w-full
        h-11
        px-3
        rounded-2xl
        text-white/40
        hover:bg-white/5
        hover:text-white/70
        transition-all
        flex
        items-center
        justify-between
        group
      "
    >
      <div className="flex items-center gap-2">
  <div className="w-5.2 h-5.2 flex items-center justify-center shrink-0">
  {item.label === "Dashboard" ? (
  <div className="scale-105 relative -left-[1px]">
    {item.icon}
  </div>
) : (
  item.icon
)}
</div>

  <span
  className={
  item.label === "Templates"
    ? "text-[14px] relative top-[-1.4px]"
    : item.label === "Dashboard"
    ? "text-[14px] relative top-[1px] -left-[3.5px]"
    : item.label === "Notifications"
? "text-[14px] relative top-[-1px]"

: item.label === "Account"
? "text-[14px] relative top-[-0.5px]"

: item.label === "Settings"
? "text-[14px] relative top-[-0.7px]"

: "text-[14px]"
}
>
  {item.label}
</span>
</div>

      <div
        className="
          text-[11px]
          text-white/35
          border
          border-white/10
          rounded-md
          px-2
          py-[2px]
          group-hover:text-white/60
          transition
        "
      >
        {item.key}
      </div>
    </button>
    ))}
</div>

</div>

<div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-sm text-white/40 mb-2">
            Boost to Pro!
          </p>

          <button
            className="
              w-full
              py-2
              rounded-lg
              bg-purple-700
              hover:bg-purple-600
              transition
            "
style={{
    backgroundColor: "#7202fa",
  }}

          >
            Upgrade
          </button>
        </div>
      </div>
            )}

    </>
  );
}