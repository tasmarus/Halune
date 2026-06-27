import { mockApps } from "@/data/mockApps";
import AppCard from "@/components/ui/AppCard";

export default function MarketplacePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">

      {/* MOST POPULAR */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Most Popular</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockApps.slice(0, 3).map((app: any) => (
            <AppCard
              key={app.id}
              title={app.name || app.title}
              author={app.creator || app.author}
              description={app.desc || app.description}
              clicks={app.clicks ?? 0}
              likes={app.likes ?? 0}
            />
          ))}
        </div>
      </section>

      {/* RECOMMENDED */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Recommended For You</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockApps.slice(3).map((app: any) => (
            <AppCard
              key={app.id}
              title={app.name || app.title}
              author={app.creator || app.author}
              description={app.desc || app.description}
              clicks={app.clicks ?? 0}
              likes={app.likes ?? 0}
            />
          ))}
        </div>
      </section>

    </div>
  );
}