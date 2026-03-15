export default function BuilderPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Builder</h1>
        <p className="text-sm text-white/70">
          Design and deploy your own AI application workflows with a visual editor.
        </p>
      </header>

      <div className="rounded-3xl border border-border bg-card p-8 shadow-glow">
        <p className="text-sm text-white/70">
          This is a placeholder for the Builder workspace. Start by selecting a template or creating a new
          project.
        </p>
      </div>
    </div>
  );
}
