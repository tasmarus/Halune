import Link from "next/link";
import { BarChart2, Home, Rocket, Wand2 } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/marketplace", label: "Marketplace", icon: Rocket },
  { href: "/builder", label: "Builder", icon: Wand2 },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col gap-6 border-r border-border bg-background/80 px-6 py-8 backdrop-blur-md md:flex">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-primary/20 ring-1 ring-white/10" />
        <div>
          <p className="text-sm font-semibold">Halune</p>
          <p className="text-xs text-white/60">AI Marketplace</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <item.icon className="h-5 w-5 text-white/60 transition group-hover:text-white" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-medium text-white/70">Pro tip</p>
        <p className="text-sm text-white/60">
          Use the builder to compose new AI apps — then publish them to the marketplace.
        </p>
      </div>
    </aside>
  );
}
