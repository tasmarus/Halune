"use client";

import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";

import { useEffect } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/ai");
    router.prefetch("/");

    const warmup = async () => {
      try {
        await fetch("/ai");
      } catch {}
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(warmup);
    } else {
      setTimeout(warmup, 50);
    }
  }, [router]);

  const isAI = pathname === "/ai";
  const activeIndex = isAI ? 1 : 0;

  const BUTTON_WIDTH = 72;

  return (
    <div
      className="fixed z-[9999]"
      style={{
        left: "50%",
        bottom: "24px",
        transform: "translateX(-50%)",
        WebkitTransform: "translateX(-50%)",
        willChange: "auto",
        contain: "layout style paint",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        className="
          relative
          px-2
          py-1
          rounded-full
          border
          border-white/10
          bg-black
          shadow-xl
          overflow-hidden
        "
      >
        <div
          className="relative flex items-center"
          style={{
            width: "144px",
            minWidth: "144px",
            maxWidth: "144px",
          }}
        >
          {/* ACTIVE PILL */}
          <div
            className="absolute rounded-full bg-white/10"
            style={{
              top: "1.5px",
              bottom: "1.5px",
              width: `${BUTTON_WIDTH + 6}px`,
              transform: `translateX(${activeIndex * BUTTON_WIDTH - 3}px)`,
              transition:
                "transform 280ms cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* HOME */}
          <div className="w-[72px] h-[36px] shrink-0 flex items-center justify-center">
            <Link
              href="/"
              prefetch={true}
              scroll={false}
              onMouseEnter={() => {
                router.prefetch("/");
              }}
              onTouchStart={() => {
                router.prefetch("/");
              }}
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
              className="
                relative
                z-10
                w-full
                h-full
                flex
                items-center
                justify-center
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={activeIndex === 0 ? "#fff" : "#9ca3af"}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 -translate-y-[1px]"
              >
                <path d="M6.8 11 L12 6.8 L17.2 11" />
                <path d="M7.2 11 V18 Q7.2 19.6 8.8 19.6 H15.2 Q16.8 19.6 16.8 18 V11" />
              </svg>
            </Link>
          </div>

          {/* ROBOT */}
          <div className="w-[72px] h-[36px] shrink-0 flex items-center justify-center">
            <Link
  href="/ai"
  prefetch={true}
  scroll={false}
  onMouseEnter={() => {
    router.prefetch("/ai");
  }}
  onTouchStart={() => {
    router.prefetch("/ai");
  }}
  onClick={(e) => {
    e.preventDefault();
    router.push("/ai");
  }}
  className="
    relative
    z-10
    w-full
    h-full
    flex
    items-center
    justify-center
  "
>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={activeIndex === 1 ? "#fff" : "#9ca3af"}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
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
                  fill={activeIndex === 1 ? "#fff" : "#9ca3af"}
                  stroke="none"
                />

                <rect
                  x="13.2"
                  y="11"
                  width="1.6"
                  height="4.5"
                  rx="1"
                  fill={activeIndex === 1 ? "#fff" : "#9ca3af"}
                  stroke="none"
                />

                <line x1="12" y1="5" x2="12" y2="7.2" />

                <circle
                  cx="12"
                  cy="4"
                  r="1"
                  fill={activeIndex === 1 ? "#fff" : "#9ca3af"}
                  stroke="none"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}