import Badge from "@/components/Badge";
import PageTag from "@/components/PageTag";

function SectionHeader({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] uppercase text-tag-text bg-tag-bg px-2.5 py-1 rounded mb-6">
      <span className="w-[5px] h-[5px] rounded-full bg-accent" />
      {children}
    </div>
  );
}

export default function SystemStatesPage() {
  return (
    <div className="px-10 pt-14 pb-20 w-full max-w-4xl">

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="mb-16">
        <PageTag>Patterns</PageTag>
        <h1 className="text-[32px] font-semibold tracking-tight text-text-primary leading-[1.25] mt-3 mb-4">
          System States &amp; Feedback
        </h1>
        <p className="text-base text-text-secondary leading-[1.75] max-w-xl">
          Defines how the product communicates system events and their impact on the user. Establishes
          shared criteria for clarity, interruption, and action across different product experiences.
        </p>
      </div>

      <div className="h-px bg-border-subtle mb-16" />

      {/* ── Strategic Value ────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader>Strategic Value</SectionHeader>
        <h3 className="text-lg font-semibold text-text-primary mb-3">
          Why This Pattern Matters
        </h3>
        <p className="text-base text-text-secondary leading-[1.75] max-w-xl mb-8">
          Well-designed states help users understand what is happening, recover from errors, and
          confidently continue their tasks.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M8 2v12M2 8h12" />
                </svg>
              ),
              title: "Improved clarity",
              text: "Users understand what is happening and what to do next.",
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5" />
                  <path d="M13.5 2.5v3.5h-3.5" />
                </svg>
              ),
              title: "Better error recovery",
              text: "Clear feedback helps users resolve issues faster.",
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2l1.8 3.6L14 6.2l-3 2.9.7 4.1L8 11.1 4.3 13.2l.7-4.1-3-2.9 4.2-.6z" />
                </svg>
              ),
              title: "Consistent experiences",
              text: "Similar situations are communicated consistently across products.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-bg-quaternary border border-border-subtle rounded-xl p-6"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                {b.icon}
              </div>
              <p className="text-sm font-semibold text-text-primary mb-2">{b.title}</p>
              <p className="text-sm text-text-secondary leading-[1.7]">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-16" />

      {/* ── Decision Framework ─────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader>Decision Framework</SectionHeader>
        <p className="text-base text-text-secondary leading-[1.75] max-w-xl mb-8">
          This framework helps identify the correct system state and the appropriate level of
          feedback.
        </p>

        <p className="text-sm font-semibold text-text-primary mb-3">
          1. Identify the system state
        </p>
        <p className="text-base text-text-secondary leading-[1.75] mb-4">
          First determine what is happening in the system. This helps identify the appropriate
          state pattern.
        </p>
        {/* Decision flow diagram */}
        <div className="border border-border-subtle rounded-xl p-5 mb-8 bg-bg-quaternary/40 max-w-xl">

          {/* Root question */}
          <div className="flex items-start gap-3 pb-4 mb-4 border-b border-border-subtle">
            <div className="w-6 h-6 rounded-md bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-accent">?</span>
            </div>
            <p className="text-sm font-semibold text-text-primary leading-snug pt-0.5">
              Is the user waiting for a system response?
            </p>
          </div>

          {/* YES branch */}
          <div className="flex items-center gap-3 mb-4 pl-2">
            <span className="text-[10px] font-bold text-success uppercase tracking-widest w-6">Yes</span>
            <span className="text-text-muted text-xs">→</span>
            <div className="flex items-center gap-2 bg-success/[0.07] border border-success/20 rounded-lg px-3.5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
              <p className="text-xs font-semibold text-success">Loading state</p>
            </div>
          </div>

          {/* NO branch */}
          <div className="pl-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest w-6">No</span>
              <span className="text-text-muted text-xs">→</span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <div className="flex flex-col gap-2.5 pl-[38px] border-l border-border-subtle ml-[11px]">
              {[
                { q: "Is there no data yet?",                label: "Empty state",   color: "text-accent",  bg: "bg-accent/[0.07] border-accent/20" },
                { q: "Did something fail?",                   label: "Error state",   color: "text-danger",  bg: "bg-danger/[0.07] border-danger/20" },
                { q: "Did the action complete successfully?", label: "Success state", color: "text-success", bg: "bg-success/[0.07] border-success/20" },
              ].map(({ q, label, color, bg }) => (
                <div key={label} className="flex items-center gap-3">
                  <p className="text-xs text-text-secondary flex-1 leading-snug">{q}</p>
                  <span className="text-text-muted text-xs flex-shrink-0">→</span>
                  <div className={`border rounded-md px-2.5 py-1 flex-shrink-0 ${bg}`}>
                    <p className={`text-[11px] font-semibold whitespace-nowrap ${color}`}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-sm font-semibold text-text-primary mb-3">
          2. Determine the Feedback Severity
        </p>
        <p className="text-base text-text-secondary leading-[1.75] mb-5">
          Once the state is identified, determine how strongly the system should communicate the
          feedback.{" "}
          <strong className="text-text-primary font-medium">
            It includes guiding questions such as:
          </strong>
        </p>
        <div className="flex flex-col gap-2">
          {[
            "Is there an irreversible loss?",
            "Is there a technical or business impact?",
            "Does it require mandatory action?",
            "Can the user continue?",
            "Is it a blocking validation?",
          ].map((q) => (
            <div
              key={q}
              className="text-base text-text-secondary leading-[1.75] bg-bg-quaternary border border-border-subtle rounded-lg px-5 py-3.5"
            >
              {q}
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-16" />

      {/* ── Principles ─────────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader>Principles</SectionHeader>
        <div className="grid grid-cols-2 gap-0">
          {[
            {
              num: "1.",
              title: "Interruption is a strategic decision",
              text: "Not every system state should interrupt the user. The level of visibility should match the impact and urgency of the situation.",
            },
            {
              num: "4.",
              title: "Visibility should reflect the level of impact",
              text: "The more critical the situation, the more prominent the feedback should be.",
              borderLeft: true,
            },
            {
              num: "2.",
              title: "Feedback should be clear and actionable",
              text: "Every state should communicate what happened and what the user can do next.",
            },
            {
              num: "5.",
              title: "Consistency builds trust",
              text: "Similar situations should be communicated in consistent ways across products and flows.",
              borderLeft: true,
            },
            {
              num: "3.",
              title: "Design beyond the happy path",
              text: "Experiences should anticipate errors, edge cases, and unexpected scenarios.",
              lastRow: true,
            },
            {
              num: "6.",
              title: "Patterns should adapt to context",
              text: "The same principles apply across products, but the implementation may vary depending on the product type (B2B, technical systems, or consumer products).",
              borderLeft: true,
              lastRow: true,
            },
          ].map((p) => (
            <div
              key={p.num}
              className={`py-6 pr-8 ${p.borderLeft ? "pl-8 border-l border-border-subtle" : ""} ${
                !p.lastRow ? "border-b border-border-subtle" : ""
              }`}
            >
              <p className="text-sm font-semibold text-text-primary mb-2">
                {p.num} {p.title}
              </p>
              <p className="text-base text-text-secondary leading-[1.75]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-16" />

      {/* ── UX Guidelines ──────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader>UX Guidelines</SectionHeader>
        <div className="grid grid-cols-2 gap-4">
          {/* Do */}
          <div className="bg-success/[0.05] border border-success/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm font-semibold text-success">Do</span>
            </div>
            {[
              "Show clear and actionable feedback.",
              "Use the appropriate level of interruption based on the impact.",
              "Prioritize clarity over aesthetics.",
              "Anticipate states outside the happy path.",
              "Adapt the pattern according to the product context.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 mb-3.5 text-base text-text-secondary leading-[1.75]">
                <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
          {/* Don't */}
          <div className="bg-danger/[0.05] border border-danger/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-danger" />
              <span className="text-sm font-semibold text-danger">Don&apos;t</span>
            </div>
            {[
              'Use modals for every state.',
              'Display generic messages like "Something went wrong."',
              "Leave the user without system feedback.",
              "Design only for the happy path.",
              "Introduce different patterns for similar states.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 mb-3.5 text-base text-text-secondary leading-[1.75]">
                <span className="text-danger mt-0.5 flex-shrink-0">✕</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-16" />

      {/* ── State Types Table ───────────────────────────────── */}
      <section>
        <SectionHeader>State types</SectionHeader>
        <div className="border border-border-subtle rounded-xl overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-white/[0.03]">
                <th className="text-left px-5 py-3.5 text-xs font-medium text-text-secondary border-b border-border-subtle w-[160px]">
                  State Type
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-text-secondary border-b border-border-subtle">
                  Purpose
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-text-secondary border-b border-border-subtle w-[210px]">
                  Interruption Level
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-text-secondary border-b border-border-subtle">
                  Typical Feedback Pattern
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Loading",
                  purpose: "Inform the user that the system is processing or retrieving data.",
                  levels: [{ label: "Low", variant: "low" as const }],
                  feedback: "Spinner, skeleton, or progress indicator.",
                },
                {
                  name: "Empty state",
                  purpose: "Explain why there is no content and suggest the next step.",
                  levels: [{ label: "Low", variant: "low" as const }],
                  feedback: "Informational message with optional guidance or CTA.",
                },
                {
                  name: "Success",
                  purpose: "Confirm that an action was completed successfully.",
                  levels: [{ label: "Low", variant: "low" as const }],
                  feedback: "Inline confirmation or toast message.",
                },
                {
                  name: "Human error",
                  purpose: "Help the user correct a mistake or invalid input.",
                  levels: [
                    { label: "Medium", variant: "medium" as const },
                    { label: "Low", variant: "low" as const },
                  ],
                  feedback: "Inline validation or contextual error message.",
                },
                {
                  name: "Technical error",
                  purpose: "Inform the user that the system failed due to a technical issue.",
                  levels: [
                    { label: "Medium", variant: "medium" as const },
                    { label: "High", variant: "high" as const },
                  ],
                  feedback: "Error message with guidance or retry action.",
                },
                {
                  name: "Blocking validation",
                  purpose:
                    "Prevent the user from continuing until required information is corrected.",
                  levels: [{ label: "Medium", variant: "medium" as const }],
                  feedback: "Field validation with clear explanation and required action.",
                },
                {
                  name: "Destructive action",
                  purpose:
                    "Prevent accidental actions that could result in irreversible changes or data loss.",
                  levels: [{ label: "High", variant: "high" as const }],
                  feedback: "Confirmation modal or interruption requiring explicit confirmation.",
                },
              ].map((row, i, arr) => (
                <tr key={row.name} className="hover:bg-white/[0.015] transition-colors">
                  <td
                    className={`px-5 py-4 font-medium text-text-primary align-top leading-relaxed ${
                      i < arr.length - 1 ? "border-b border-border-subtle" : ""
                    }`}
                  >
                    {row.name}
                  </td>
                  <td
                    className={`px-5 py-4 text-text-secondary align-top leading-relaxed ${
                      i < arr.length - 1 ? "border-b border-border-subtle" : ""
                    }`}
                  >
                    {row.purpose}
                  </td>
                  <td
                    className={`px-5 py-4 align-top ${
                      i < arr.length - 1 ? "border-b border-border-subtle" : ""
                    }`}
                  >
                    {row.levels.map((l) => (
                      <Badge key={l.label} variant={l.variant}>
                        {l.label}
                      </Badge>
                    ))}
                  </td>
                  <td
                    className={`px-5 py-4 text-text-secondary align-top leading-relaxed ${
                      i < arr.length - 1 ? "border-b border-border-subtle" : ""
                    }`}
                  >
                    {row.feedback}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-16" />

      {/* ── Market References ──────────────────────────────── */}
      <section className="mb-4">
        <SectionHeader>Market references</SectionHeader>
        <p className="text-base text-text-secondary leading-[1.75] max-w-xl mb-8">
          Real-world products that exemplify this pattern:
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-[480px]">

          {/* Slack */}
          <div className="bg-bg-quaternary border border-border-subtle rounded-xl overflow-hidden">
            <div className="h-28 flex items-center justify-center" style={{ backgroundColor: "#4A154B" }}>
              {/* Slack logo — 4-arm pinwheel */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4"  y="26" width="22" height="12" rx="6" fill="#36C5F0"/>
                <rect x="38" y="26" width="22" height="12" rx="6" fill="#ECB22E"/>
                <rect x="26" y="4"  width="12" height="22" rx="6" fill="#E01E5A"/>
                <rect x="26" y="38" width="12" height="22" rx="6" fill="#2EB67D"/>
                <rect x="26" y="26" width="12" height="12" rx="2" fill="white" opacity="0.15"/>
              </svg>
            </div>
            <div className="p-5">
              <p className="text-base font-semibold text-text-primary mb-2">Slack</p>
              <p className="text-sm text-text-secondary leading-[1.7]">
                Displays feedback during connection issues, message sending, or workspace loading,
                showing states such as connecting, retrying, and connection errors.
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-bg-quaternary border border-border-subtle rounded-xl overflow-hidden">
            <div className="h-28 flex items-center justify-center bg-[#0d1117]">
              <svg width="72" height="72" viewBox="0 0 98 96" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M49 0C21.9 0 0 22 0 49.2c0 21.7 13.9 40.1 33.2 46.6 2.4.5 3.3-1.1 3.3-2.4v-8.4c-13.5 3-16.3-6.5-16.3-6.5-2.2-5.6-5.4-7.1-5.4-7.1-4.4-3 .3-3 .3-3 4.9.4 7.4 5 7.4 5 4.3 7.4 11.3 5.3 14 4 .4-3.1 1.7-5.3 3-6.5-10.7-1.2-22-5.4-22-24 0-5.3 1.9-9.6 5-13-.5-1.2-2.2-6.2.5-12.9 0 0 4.1-1.3 13.4 5 3.9-1.1 8-1.6 12.2-1.6 4.1 0 8.3.5 12.2 1.6 9.3-6.4 13.3-5 13.3-5 2.7 6.7 1 11.7.5 12.9 3.1 3.4 5 7.7 5 13 0 18.7-11.3 22.8-22.1 24 1.7 1.5 3.3 4.5 3.3 9.1v13.4c0 1.3.9 2.9 3.4 2.4C84.1 89.3 98 70.9 98 49.2 98 22 76.1 0 49 0z"/>
              </svg>
            </div>
            <div className="p-5">
              <p className="text-base font-semibold text-text-primary mb-2">GitHub</p>
              <p className="text-sm text-text-secondary leading-[1.7]">
                Uses clear loading, error, and retry states when fetching repositories,
                issues, or pull requests, helping users recover from failed requests.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
