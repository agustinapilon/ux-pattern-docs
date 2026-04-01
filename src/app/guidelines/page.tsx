import EmptyPage from "@/components/EmptyPage";

export default function GuidelinesPage() {
  return (
    <EmptyPage
      title="UX Guidelines"
      description="This page is empty. Add guidelines and principles to document here."
      icon={
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M3 2h8l2 2v10H3V2z" />
          <path d="M6 6h5M6 9h5M6 12h3" strokeLinecap="round" />
        </svg>
      }
    />
  );
}
