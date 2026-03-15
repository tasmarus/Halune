"use client";

import Link from "next/link";
import { Heart, Play } from "lucide-react";
import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppMeta } from "@/data/mockApps";

type AppCardProps = {
  app: AppMeta;
};

function formatCompactNumber(value: number) {
  return Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
}

function ClickIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="rotate-6"
      {...props}
    >
      <path d="M10 2c0-1.1.9-2 2-2s2 .9 2 2v5h2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-1v3l-4-2-4 2v-3H8c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2V2Z" />
      <circle cx="9" cy="3" r="1" />
      <circle cx="15" cy="3" r="1" />
    </svg>
  );
}

export function AppCard({ app }: AppCardProps) {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(app.likes);

  const toggleLike = () => {
    setLiked((prev) => {
      setLikes((prevLikes) => prevLikes + (prev ? -1 : 1));
      return !prev;
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/30 to-indigo-500/10">
        <img
          src={app.image}
          alt={app.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <button
          type="button"
          onClick={toggleLike}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/70 transition-colors hover:bg-black/50"
          aria-label={liked ? "Unlike" : "Like"}
          aria-pressed={liked}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${liked ? "text-red-500" : "text-white/70"}`}
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
          />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
          <p className="text-sm font-semibold text-white">{app.name}</p>
          <p className="text-xs text-white/70">by {app.creator}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <p className="text-sm text-white/70">{app.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-5 text-xs font-medium text-white/60">
            <span className="flex items-center gap-1">
              <ClickIcon className="h-4 w-4" />
              {formatCompactNumber(app.runs)}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" stroke="currentColor" />
              {formatCompactNumber(likes)}
            </span>
          </div>
          <Link href={`/marketplace/${app.id}`} className="block">
            <Button size="sm" variant="secondary">
              <Play className="h-4 w-4" />
              Open App
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
