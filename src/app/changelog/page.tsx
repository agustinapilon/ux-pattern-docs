import EmptyPage from "@/components/EmptyPage";

export default function ChangelogPage() {
  return (
    <EmptyPage
      title="Changelog"
      description="Version history will appear here once content is added."
      icon={
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="8" r="6" />
          <path d="M8 4.5V8l2.5 1.5" strokeLinecap="round" />
        </svg>
      }
    />
  );
}
