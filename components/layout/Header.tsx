import { Search, Settings, User } from "lucide-react";
import FilterIcon from "@/components/icons/FilterIcon";

export function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl flex items-center justify-center px-6 py-4 gap-3">

        {/* LEFT ICONS */}
        <div className="flex items-center gap-2">
          <button className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition transform hover:scale-110 hover:bg-white/10">
            <Settings className="w-5 h-5 text-neutral-400" />
          </button>

          <button className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition transform hover:scale-110 hover:bg-white/10">
            <User className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
          <input
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 placeholder:text-neutral-400 outline-none"
          />
        </div>

        {/* FILTER */}
        <button className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition transform hover:scale-110 hover:bg-white/10">
          <FilterIcon className="w-5 h-5 text-neutral-400" />
        </button>

      </div>
    </div>
  );
}