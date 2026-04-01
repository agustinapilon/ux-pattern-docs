"use client";

import { usePathname } from "next/navigation";

const breadcrumbMap: Record<string, string> = {
  "/": "overview",
  "/onboarding": "patterns / onboarding",
  "/payments": "patterns / payments",
  "/system-states": "patterns / system-states-and-feedback",
  "/guidelines": "reference / ux-guidelines",
  "/changelog": "reference / changelog",
};

export default function Topbar() {
  const pathname = usePathname();
  const crumb = breadcrumbMap[pathname] ?? pathname.replace("/", "");

  return (
    <header className="flex items-center justify-between px-7 py-3.5 border-b border-border-subtle bg-bg-secondary sticky top-0 z-10">
      <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
        <span>docs</span>
        <span className="text-border-default">/</span>
        <span className="text-text-secondary">{crumb}</span>
      </div>
      <div className="flex gap-2">
        <button className="text-[11px] px-3 py-[5px] rounded-md border border-border-default bg-white/[0.04] text-text-secondary hover:bg-white/[0.08] hover:text-text-primary transition-all">
          Edit page
        </button>
        <button className="text-[11px] px-3 py-[5px] rounded-md bg-accent text-white border border-accent hover:bg-accent-light transition-all">
          View on GitHub
        </button>
      </div>
    </header>
  );
}
