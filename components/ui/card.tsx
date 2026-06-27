"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface AppCardProps {
  title: string;
  author: string;
  description: string;
  likes?: number;
  clicks?: number;
}

export function AppCard({
  title,
  author,
  description,
  likes = 2100,
  clicks = 11300,
}: AppCardProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likes);

  function toggleLike() {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  return (
    <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">

      {/* IMAGE */}
      <div className="relative h-44 w-full bg-neutral-800">

        {/* HEART */}
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/40"
        >
          <Heart
            className={`h-5 w-5 stroke-[2.2] transition-all duration-200 ${
              liked
                ? "fill-red-500 text-red-500 scale-110"
                : "text-neutral-400"
            }`}
          />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <h3 className="text-white font-medium">{title}</h3>

        <p className="text-sm text-neutral-400">by {author}</p>

        <p className="text-sm text-neutral-400">{description}</p>

        {/* STATS */}
        <div className="flex items-center gap-4 text-sm text-neutral-400 pt-1">

          {/* TAP ICON */}
          <div className="flex items-center gap-1">
            <Image
              src="/icons/tap.png"
              alt="clicks"
              width={16}
              height={16}
              className="opacity-70"
            />
            <span>{(clicks / 1000).toFixed(1)}K</span>
          </div>

          {/* HEART COUNT */}
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4 stroke-[2.2]" />
            <span>{(count / 1000).toFixed(1)}K</span>
          </div>
        </div>

        <button className="mt-2 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
          ▶ Open App
        </button>
      </div>
    </div>
  );
}