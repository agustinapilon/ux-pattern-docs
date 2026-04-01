import Link from "next/link";
import PageTag from "@/components/PageTag";
import Card from "@/components/Card";

const categories = [
  {
    href: "/onboarding",
    title: "Onboarding",
    status: "Empty",
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
    <div className="p-9">
      <PageTag>Getting started</PageTag>
      <h1 className="text-2xl font-semibold text-text-primary mb-2">UX Pattern Library</h1>
      <p className="text-[13.5px] text-text-secondary leading-relaxed max-w-[580px]">
        A structured reference for implementing proven UX patterns in product design.
        Built for Next.js teams shipping fast.
      </p>

      <div className="h-px bg-border-subtle my-6" />

      <h2 className="flex items-center gap-2 text-[13px] font-semibold text-text-primary mb-3.5">
        <span className="block w-[3px] h-[14px] bg-accent rounded-sm" />
        Pattern categories
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className={cat.disabled ? "pointer-events-none" : ""}>
            <Card className={cat.disabled ? "opacity-40" : ""}>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-[13px] font-semibold text-text-primary">{cat.title}</h3>
                {cat.status && (
                  <span className="text-[10px] font-normal text-text-muted">{cat.status}</span>
                )}
              </div>
              <p className="text-[12px] text-text-secondary leading-relaxed">{cat.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
