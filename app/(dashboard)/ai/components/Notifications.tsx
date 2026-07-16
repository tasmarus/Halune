export default function Notifications() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        <h1 className="text-3xl font-semibold text-white">
          Notifications
        </h1>

        <p className="mt-2 text-white/45">
          Stay up to date with everything happening in your Halune account.
        </p>

        <div className="mt-8 rounded-3xl border border-dashed border-white/10 bg-[#111111] px-8 py-20 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(255,255,255)"
              strokeOpacity="0.4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>

          <h2 className="mt-6 text-2xl font-medium text-white">
            No Notifications
          </h2>

          <p className="mt-3 mx-auto max-w-md text-white/45 leading-7">
            You're all caught up. Notifications about app updates,
            marketplace activity, account changes and important
            platform announcements will appear here.
          </p>

        </div>

      </div>
    </div>
  );
}