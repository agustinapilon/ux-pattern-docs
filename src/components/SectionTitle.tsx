import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  accentColor?: string;
}

export default function SectionTitle({ children, accentColor = "bg-orange" }: SectionTitleProps) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-3.5">
      <span className={`block w-[3px] h-[14px] ${accentColor} rounded-sm flex-shrink-0`} />
      {children}
    </h2>
  );
}
