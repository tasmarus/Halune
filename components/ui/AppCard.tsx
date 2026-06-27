"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import TapIcon from "@/components/icons/TapIcon";

function formatNumber(num: number) {
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

type Props = {
  title: string;
  author: string;
  description: string;
  clicks: number;
  likes: number;
};

export default function AppCard({
  title,
  author,
  description,
  clicks,
  likes,
}: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 transition-transform duration-300 hover:scale-[1.02]">

      <div className="h-40 bg-gradient-to-br from-neutral-800 to-neutral-900" />

      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm"
      >
        <Heart
          className={`w-5 h-5 transition-all duration-200 ${
            liked
              ? "text-[#ff2d55] fill-[#ff2d55] scale-110"
              : "text-neutral-400"
          }`}
        />
      </button>

      <div className="p-4 space-y-2">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-sm text-neutral-400">by {author}</p>
        <p className="text-sm text-neutral-300">{description}</p>

        <div className="flex items-center gap-4 text-sm text-neutral-400 pt-2">
          <div className="flex items-center gap-1">
            <TapIcon className="w-4 h-4 opacity-80" />
            {formatNumber(clicks)}
          </div>

          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-[#ff2d55] fill-[#ff2d55]" />
            {formatNumber(likes)}
          </div>
        </div>

        <button className="mt-3 px-4 py-2 rounded-full bg-neutral-700 text-sm hover:bg-neutral-600 transition">
          ▶ Open App
        </button>
      </div>
    </div>
  );
}