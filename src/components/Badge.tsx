type BadgeVariant = "low" | "medium" | "high" | "blue" | "green" | "amber";

interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  low: "text-[#9ab3c8] border-[#9ab3c8]/30 bg-[#9ab3c8]/[0.08] before:bg-[#9ab3c8]",
  medium: "text-warning border-warning/30 bg-warning/[0.08] before:bg-warning",
  high: "text-danger border-danger/30 bg-danger/[0.08] before:bg-danger",
  blue: "text-tag-text border-accent/30 bg-tag-bg",
  green: "text-success border-success/30 bg-success/[0.08]",
  amber: "text-warning border-warning/30 bg-warning/[0.08]",
};

export default function Badge({ children, variant = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-[3px] rounded-full text-[10px] font-medium border mr-1
        before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:flex-shrink-0
        ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
