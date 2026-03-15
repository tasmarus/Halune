import type { SVGProps } from "react";
import { Search, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <line x1="5" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="6" r="2.5" fill="currentColor" />

      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />

      <line x1="5" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="18" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const iconBtn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105";

  return (
    <header className="sticky top-0 z-20 flex items-center justify-center bg-zinc-950/80 px-4 py-4 backdrop-blur-xl">
      <div className="flex w-full max-w-2xl items-center gap-2">
        <button type="button" aria-label="Settings" className={iconBtn}>
          <Settings className="h-5 w-5" />
        </button>
        <button type="button" aria-label="Profile" className={iconBtn}>
          <User className="h-5 w-5" />
        </button>

        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <Input placeholder="Search..." className="pl-11 pr-4" />
        </div>

        <button type="button" aria-label="Filters" className={iconBtn}>
          <FilterIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
