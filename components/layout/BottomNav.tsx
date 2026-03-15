"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot } from "lucide-react";

function HouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 9 12 2 21 9" />
      <path d="M3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
    </svg>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const isMarketplace = pathname?.startsWith("/dashboard/marketplace");
  const isBuilder = pathname?.startsWith("/dashboard/builder");
  const highlightSide = isMarketplace ? "left-0" : isBuilder ? "right-0" : "hidden";

  return (
    <div className="fixed inset-x-0 bottom-6 flex justify-center px-4">
      <div className="relative flex h-12 w-[140px] overflow-hidden rounded-full bg-black/40 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/10 backdrop-blur-xl">
        <div
          className={`absolute inset-y-0 w-1/2 rounded-full bg-white/20 transition-all duration-300 ${highlightSide} -z-10`}
        />

        <Link
          href="/dashboard/marketplace"
          className="relative flex flex-1 items-center justify-center transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105"
          aria-label="Marketplace"
        >
          <HouseIcon className="h-5 w-5 text-white/80" />
        </Link>

        <Link
          href="/dashboard/builder"
          className="relative flex flex-1 items-center justify-center transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105"
          aria-label="Builder"
        >
          <Bot className="h-5 w-5 text-white/80" />
        </Link>
      </div>
    </div>
  );
}
