import Badge from "@/components/Badge";

function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-2.5 text-xl font-semibold text-text-primary mb-6">
      <span className="block w-[3px] h-[18px] bg-orange rounded-sm flex-shrink-0" />
      {children}
    </h2>
  );
}

export default function SystemStatesPage() {
  return (
    <div className="px-10 pt-14 pb-16 w-full">

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="mb-14">
        <h1 className="text-5xl font-semibold tracking-tight text-text-primary leading-[1.15] mb-5">
          System States &amp; Feedback
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
          Defines how the product communicates system events and their impact on the user. It
          establishes shared criteria for clarity, interruption, and action across different product
          experiences.
        </p>
      </div>

      <div className="h-px bg-border-subtle mb-14" />

      {/* ── Strategic Value ────────────────────────────────── */}
      <section className="mb-14">
        <SectionHeader>Strategic Value</SectionHeader>
        <h3 className="text-lg font-semibold text-text-primary mb-3">
          Why This Pattern Matters
        </h3>
        <p className="text-base text-text-secondary leading-relaxed mb-7">
          Well-designed states help users understand what is happening, recover from errors, and
          confidently continue their tasks.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              title: "Improved clarity",
              text: "Users understand what is happening and what to do next.",
            },
            {
              title: "Better error recovery",
              text: "Clear feedback helps users resolve issues faster.",
            },
            {
              title: "Consistent experiences",
              text: "Similar situations are communicated consistently across products.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-bg-quaternary border border-border-subtle rounded-xl p-5"
            >
              <p className="text-sm font-semibold text-text-primary mb-2">{b.title}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-14" />

      {/* ── Decision Framework ─────────────────────────────── */}
      <section className="mb-14">
        <SectionHeader>Decision Framework</SectionHeader>
        <p className="text-base text-text-secondary leading-relaxed mb-7">
          This framework helps identify the correct system state and the appropriate level of
          feedback.
        </p>

        <p className="text-sm font-semibold text-text-primary mb-3">
          1. Identify the system state
        </p>
        <p className="text-base text-text-secondary leading-relaxed mb-4">
          First determine what is happening in the system. This helps identify the appropriate
          state pattern.
        </p>
        <pre className="bg-black/30 border border-border-default rounded-xl px-5 py-4 text-sm text-[#b8c4e0] leading-[1.8] overflow-x-auto mb-8 whitespace-pre">
{`Is the user waiting for a system response?
  |
  → Yes → Loading state

  → No
      |
      → Is there no data yet?
              → Empty state

      → Did something fail?
              → Error state

      → Did the action complete successfully?
              → Success state`}
        </pre>

        <p className="text-sm font-semibold text-text-primary mb-3">
          2. Determine the Feedback Severity
        </p>
        <p className="text-base text-text-secondary leading-relaxed mb-5">
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
              className="text-base text-text-secondary bg-bg-quaternary border border-border-subtle rounded-lg px-4 py-3"
            >
              {q}
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-14" />

      {/* ── Principles ─────────────────────────────────────── */}
      <section className="mb-14">
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
              className={`py-5 pr-8 ${p.borderLeft ? "pl-8 border-l border-border-subtle" : ""} ${
                !p.lastRow ? "border-b border-border-subtle" : ""
              }`}
            >
              <p className="text-base font-semibold text-text-primary mb-2">
                {p.num} {p.title}
              </p>
              <p className="text-base text-text-secondary leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-14" />

      {/* ── UX Guidelines ──────────────────────────────────── */}
      <section className="mb-14">
        <SectionHeader>UX Guidelines</SectionHeader>
        <div className="grid grid-cols-2 gap-4">
          {/* Do */}
          <div className="bg-success/[0.05] border border-success/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
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
              <div key={item} className="flex items-start gap-2.5 mb-3 text-base text-text-secondary">
                <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
          {/* Don't */}
          <div className="bg-danger/[0.05] border border-danger/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
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
              <div key={item} className="flex items-start gap-2.5 mb-3 text-base text-text-secondary">
                <span className="text-danger mt-0.5 flex-shrink-0">✕</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-border-subtle mb-14" />

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

    </div>
  );
}
