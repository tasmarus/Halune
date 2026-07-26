"use client";

import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function CustomScrollbar({
  children,
  className = "",
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}