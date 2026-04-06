"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    section: "Getting Started",
    links: [{ href: "/", label: "Overview" }],
  },
  {
    section: "Patterns",
    links: [
      { href: "/onboarding", label: "Onboarding" },
      { href: "/payments", label: "Payments" },
      { href: "/system-states", label: "System States & Feedback" },
    ],
  },
  {
    section: "Reference",
    links: [
      { href: "/guidelines", label: "UX Guidelines" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[232px] min-w-[232px] bg-bg-secondary border-r border-border-subtle flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="px-4 pt-5 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <span className="text-[13px] font-semibold text-text-primary tracking-tight">UX Patterns</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3">
        {navItems.map((group) => (
          <div key={group.section} className="pt-5 first:pt-2">
            <p className="px-2 pb-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-text-muted/70">
              {group.section}
            </p>
            {group.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-2 py-[7px] rounded-md text-[13px] transition-all mb-0.5 ${
                    isActive
                      ? "text-text-primary bg-accent/10 font-medium"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="leading-snug">{link.label}</span>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3.5 border-t border-border-subtle">
        <p className="text-[11px] text-text-muted">Last updated: Apr 01, 2026</p>
      </div>
    </aside>
  );
}
