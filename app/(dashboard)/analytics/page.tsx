import { DollarSign, Heart, MousePointer, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "Income",
    value: "$19.8K",
    change: "+13%",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Likes",
    value: "12.4K",
    change: "+9%",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Clicks",
    value: "43.1K",
    change: "+7%",
    icon: MousePointer,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Conversion",
    value: "3.8%",
    change: "+2%",
    icon: TrendingUp,
    color: "from-yellow-400 to-orange-400",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-sm text-white/70">
          Track usage performance and engagement across your AI applications.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border border-border p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-white/80">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div
                className={`rounded-full bg-gradient-to-br ${stat.color} p-3 text-white shadow-lg shadow-black/20`}
              >
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">Trend: {stat.change}</p>
          </Card>
        ))}
      </section>

      <section className="rounded-3xl border border-border bg-card p-8 shadow-glow">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Engagement Overview</h2>
            <p className="text-sm text-white/70">
              A placeholder for the performance chart (coming soon).
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
              Last 30 days
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
              Weekly view
            </span>
          </div>
        </div>

        <div className="mt-6 h-[320px] rounded-2xl bg-gradient-to-br from-purple-700/30 via-indigo-700/20 to-transparent" />
      </section>
    </div>
  );
}
