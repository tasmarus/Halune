type Props = {
  active?: boolean;
};

export default function BotIcon({ active }: Props) {
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
      <rect x="5" y="7" width="14" height="10" rx="3" />
      <circle cx="9" cy="12" r="1.2" fill={color} stroke="none" />
      <circle cx="15" cy="12" r="1.2" fill={color} stroke="none" />
      <line x1="12" y1="4" x2="12" y2="7" />
      <circle cx="12" cy="3" r="1" fill={color} stroke="none" />
    </svg>
  );
}