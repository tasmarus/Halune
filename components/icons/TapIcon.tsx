type Props = {
  className?: string;
};

export default function TapIcon({ className }: Props) {
  return (
    <img
      src="/icons/tap.png"
      alt="tap"
      className={className}
    />
  );
}