interface PageTagProps {
  children: string;
}

export default function PageTag({ children }: PageTagProps) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] uppercase text-tag-text bg-tag-bg px-2.5 py-1 rounded mb-3">
      <span className="w-[5px] h-[5px] rounded-full bg-accent" />
      {children}
    </div>
  );
}
