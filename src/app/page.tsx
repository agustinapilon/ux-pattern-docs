import Link from "next/link";
import PageTag from "@/components/PageTag";
import Card from "@/components/Card";

const categories = [
  {
    href: "/onboarding",
    title: "Onboarding",
    status: "Documented",
    description: "Patterns for guiding new users from sign-up to first value.",
  },
  {
    href: "/payments",
    title: "Payments",
    status: "Empty",
    description: "Checkout flows, subscriptions and billing portal patterns.",
  },
  {
    href: "/system-states",
    title: "System States & Feedback",
    status: "Documented",
    description: "Loading, empty, error and success state patterns.",
  },
  {
    href: "#",
    title: "Coming soon",
    status: null,
    description: "Navigation, forms, data tables and settings patterns.",
    disabled: true,
  },
];

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="px-10 pt-14 pb-14 border-b border-border-subtle max-w-4xl">
        <PageTag>Getting started</PageTag>

        <h1 className="text-[32px] font-semibold tracking-tight text-text-primary leading-[1.25] mt-3 mb-4 max-w-xl">
          UX Pattern Library
        </h1>

        <p className="text-base text-text-secondary leading-[1.75] max-w-lg mb-8">
          A structured reference for implementing proven UX patterns in product design.
          Built for Next.js teams shipping fast.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="/system-states"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Browse patterns
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="#categories"
            className="inline-flex items-center gap-2 bg-bg-tertiary hover:bg-bg-quaternary border border-border-subtle text-text-primary text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            View all categories
          </Link>
        </div>
      </div>

      {/* Categories section */}
      <div id="categories" className="px-10 py-12 max-w-4xl">
        <h2 className="flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-text-muted mb-6">
          <span className="block w-[3px] h-[13px] bg-accent rounded-sm" />
          Pattern categories
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={cat.disabled ? "pointer-events-none" : "group"}
            >
              <Card className={`h-full transition-all duration-200 ${cat.disabled ? "opacity-35" : "group-hover:border-border-default group-hover:bg-bg-quaternary"}`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold text-text-primary leading-snug">{cat.title}</h3>
                  {cat.status && (
                    <span
                      className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                        cat.status === "Documented"
                          ? "text-success border-success/25 bg-success/10"
                          : "text-text-muted border-border-subtle bg-bg-quaternary"
                      }`}
                    >
                      {cat.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary leading-[1.7]">{cat.description}</p>

                {!cat.disabled && (
                  <div className="mt-4 flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
