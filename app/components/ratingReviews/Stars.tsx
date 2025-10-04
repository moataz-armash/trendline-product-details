import StarIcon from "./StarIcon";

export default function Stars({
  count = 5,
  size = 16,
  className = "",
}: {
  count?: number;
  size?: number;
  className?: string;
}) {
  // filled = count (e.g., 4) ; remaining empty use brand-500 (semi)
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          size={size}
          fill={i < count ? "var(--color-brand-800)" : "var(--color-brand-500)"}
        />
      ))}
    </div>
  );
}
