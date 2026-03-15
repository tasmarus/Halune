import { notFound } from "next/navigation";
import { mockApps } from "@/data/mockApps";

type PageProps = {
  params: { appId: string };
};

export default function AppDetailPage({ params }: PageProps) {
  const app = mockApps.find((item) => item.id === params.appId);

  if (!app) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{app.name}</h1>
        <p className="text-sm text-white/70">Created by {app.creator}</p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-glow">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-3 text-sm text-white/70">{app.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-glow">
          <p className="text-sm text-white/70">
            Runs: <span className="font-semibold text-white">{app.runs.toLocaleString()}</span>
          </p>
          <p className="mt-4 text-sm text-white/70">More details and integration points will be available soon.</p>
        </div>
      </section>
    </div>
  );
}
