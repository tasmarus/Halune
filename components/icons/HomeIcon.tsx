type Props = {
  active?: boolean;
};

export default function HomeIcon({ active }: Props) {
  const color = active ? "#ffffff" : "#9ca3af";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M3 10.5L12 4l9 6.5" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}