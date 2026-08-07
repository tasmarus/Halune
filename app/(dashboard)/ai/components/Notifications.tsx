export default function Notifications() {
  return (
    <div
  className="
  relative
  mt-4
  w-[980px]
  min-h-[485px]
  mx-auto
  rounded-[28px]
  border
  border-white/10
  bg-[#0E0E0E]
  px-10
  pt-5
  pb-1
"
>

        <h1
  style={{ transform: "translateY(12px)" }}
  className="text-[1.85rem] font-medium text-white -mt-5 text-center"
>
          Notifications
        </h1>

        <p
  style={{ transform: "translateY(12px)" }}
  className="-mt-1 text-center text-white/40"
>
          Stay up to date with everything happening in your Halune account.
        </p>

    <div
  className="
    flex
    flex-col
    items-center
    justify-center
    text-center
    min-h-[340px]
  "
>

          

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
  );
}