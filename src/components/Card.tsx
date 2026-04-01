import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-bg-tertiary border border-border-subtle rounded-[10px] p-[18px] transition-colors hover:border-border-default ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
