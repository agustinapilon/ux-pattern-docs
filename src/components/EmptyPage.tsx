import { ReactNode } from "react";

interface EmptyPageProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function EmptyPage({ title, description, icon }: EmptyPageProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full gap-3 p-10">
      <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border-default flex items-center justify-center text-text-muted">
        {icon}
      </div>
      <p className="text-[15px] font-medium text-text-secondary">{title}</p>
      <p className="text-xs text-text-muted text-center max-w-[260px] leading-relaxed">
        {description}
      </p>
      <span className="text-[10px] font-medium px-3 py-1 rounded-full border border-border-default text-text-muted">
        No content yet
      </span>
    </div>
  );
}
