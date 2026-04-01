"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    section: "Getting Started",
    links: [
      {
        href: "/",
        label: "Overview",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="2" y="2" width="5" height="5" rx="1" />
            <rect x="9" y="2" width="5" height="5" rx="1" />
            <rect x="2" y="9" width="5" height="5" rx="1" />
            <rect x="9" y="9" width="5" height="5" rx="1" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "Patterns",
    links: [
      {
        href: "/onboarding",
        label: "Onboarding",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M8 2v12M2 8h12" strokeLinecap="round" />
            <circle cx="8" cy="8" r="6" />
          </svg>
        ),
      },
      {
        href: "/payments",
        label: "Payments",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="1" y="4" width="14" height="9" rx="1.5" />
            <path d="M1 7h14" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        href: "/system-states",
        label: "System States & Feedback",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 5v3.5l2 2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "Reference",
    links: [
      {
        href: "/guidelines",
        label: "UX Guidelines",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3 2h8l2 2v10H3V2z" />
            <path d="M6 6h5M6 9h5M6 12h3" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        href: "/changelog",
        label: "Changelog",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 4.5V8l2.5 1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 min-w-[240px] bg-bg-secondary border-r border-border-subtle flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="px-[18px] pt-5 pb-3 border-b border-border-subtle">
        <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-accent" />
          UX Patterns
        </div>
        <p className="text-[10px] text-text-muted mt-1">v2.4.1 — Next.js</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {navItems.map((group) => (
          <div key={group.section} className="pt-4 pb-2">
            <p className="px-[18px] pb-2 text-[10px] font-medium tracking-[0.1em] uppercase text-text-muted">
              {group.section}
            </p>
            {group.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-[18px] py-[7px] text-[13px] transition-all border-l-2 ${
                    isActive
                      ? "text-text-primary bg-accent/10 border-accent"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03] border-transparent"
                  }`}
                >
                  <span className={`flex-shrink-0 ${isActive ? "opacity-100" : "opacity-60"}`}>
                    {link.icon}
                  </span>
                  <span className="flex-1">{link.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-[18px] py-3.5 border-t border-border-subtle">
        <p className="text-[11px] text-text-muted">Last updated: Apr 01, 2026</p>
      </div>
    </aside>
  );
}
