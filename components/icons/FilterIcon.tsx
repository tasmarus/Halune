type Props = {
  className?: string;
};

export default function FilterIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
    >
      {/* TOP */}
      <line x1="4" y1="6" x2="7" y2="6" />
      <line x1="11" y1="6" x2="20" y2="6" />
      <circle cx="9" cy="6" r="2" fill="none" />

      {/* MIDDLE */}
      <line x1="4" y1="12" x2="13" y2="12" />
      <line x1="17" y1="12" x2="20" y2="12" />
      <circle cx="15" cy="12" r="2" fill="none" />

      {/* BOTTOM */}
      <line x1="4" y1="18" x2="9" y2="18" />
      <line x1="13" y1="18" x2="20" y2="18" />
      <circle cx="11" cy="18" r="2" fill="none" />
    </svg>
  );
}