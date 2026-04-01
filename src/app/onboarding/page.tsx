import EmptyPage from "@/components/EmptyPage";

export default function OnboardingPage() {
  return (
    <EmptyPage
      title="Onboarding"
      description="This page is empty. Connect a Figma frame to start documenting onboarding patterns."
      icon={
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M8 2v12M2 8h12" strokeLinecap="round" />
          <circle cx="8" cy="8" r="6" />
        </svg>
      }
    />
  );
}
