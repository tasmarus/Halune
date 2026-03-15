"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="flex items-center justify-between px-6 py-6">
        <div className="text-lg font-semibold tracking-wide">Halune</div>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white border-none outline-none ring-0 transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105 focus:outline-none focus:ring-0"
          >
            About
          </Link>
          <button
            type="button"
            onClick={() => router.push("/marketplace")}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white border-none outline-none ring-0 transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105 focus:outline-none focus:ring-0"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => router.push("/marketplace")}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white border-none outline-none ring-0 transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105 focus:outline-none focus:ring-0"
          >
            Sign Up
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          AI Marketplace
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
          The marketplace for AI applications.
        </p>

        <div className="mt-2">
          <button
            type="button"
            onClick={() => router.push("/marketplace")}
            className="rounded-full bg-[#8b5cf6] px-8 py-3 text-base font-semibold text-white border-none outline-none ring-0 transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105 focus:outline-none focus:ring-0"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
