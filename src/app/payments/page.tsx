import EmptyPage from "@/components/EmptyPage";

export default function PaymentsPage() {
  return (
    <EmptyPage
      title="Payments"
      description="This page is empty. Connect a Figma frame to start documenting payment patterns."
      icon={
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="1" y="4" width="14" height="9" rx="1.5" />
          <path d="M1 7h14" strokeLinecap="round" />
        </svg>
      }
    />
  );
}
