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
    </header>
  );
}
