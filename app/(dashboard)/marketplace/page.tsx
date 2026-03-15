import { mockApps } from "@/data/mockApps";
import { AppCard } from "@/components/marketplace/AppCard";

export default function MarketplacePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Most Popular</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockApps.slice(0, 3).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Recommended For You</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockApps.slice(3).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}
