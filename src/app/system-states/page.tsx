import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";

export default function SystemStatesPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-semibold text-text-primary mb-1.5">
          System States &amp; Feedback
        </h1>
        <p className="text-[13px] text-text-secondary leading-relaxed max-w-[700px]">
          Defines how the product communicates system events and their impact on the user. It
          establishes shared criteria for clarity, interruption, and action across different product
          experiences.
        </p>
      </div>

      {/* Strategic Value + Decision Framework */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* Strategic Value */}
        <Card>
          <SectionTitle>Strategic Value</SectionTitle>
          <h3 className="text-[13px] font-semibold text-text-primary mb-1.5">
            Why This Pattern Matters
          </h3>
          <p className="text-[12.5px] text-text-secondary leading-relaxed mb-4">
            Well-designed states help users understand what is happening, recover from errors, and
            confidently continue their tasks.
          </p>
          <div className="grid grid-cols-3 gap-2.5">
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
                className="bg-bg-quaternary border border-border-subtle rounded-lg p-3.5"
              >
                <p className="text-[12px] font-semibold text-text-primary mb-1">{b.title}</p>
                <p className="text-[11.5px] text-text-secondary leading-[1.5]">{b.text}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Decision Framework */}
        <Card>
          <SectionTitle>Decision Framework</SectionTitle>
          <p className="text-[12.5px] text-text-secondary leading-relaxed mb-4">
            This framework helps identify the correct system state and the appropriate level of
            feedback.
          </p>
          <p className="text-[11px] font-semibold text-text-primary mb-2">
            1. Identify the system state
          </p>
          <p className="text-[12px] text-text-secondary leading-relaxed mb-3">
            First determine what is happening in the system. This helps identify the appropriate
            state pattern.
          </p>
          <pre className="bg-black/30 border border-border-default rounded-md px-3.5 py-3 text-[11px] text-[#b8c4e0] leading-[1.7] overflow-x-auto mb-4 whitespace-pre">
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
          <p className="text-[11px] font-semibold text-text-primary mb-2">
            2. Determine the Feedback Severity
          </p>
          <p className="text-[12px] text-text-secondary leading-relaxed mb-3">
            Once the state is identified, determine how strongly the system should communicate the
            feedback.
            <br />
            <strong className="text-text-primary font-medium">
              It includes guiding questions such as:
            </strong>
          </p>
          <div className="flex flex-col gap-1.5">
            {[
              "Is there an irreversible loss?",
              "Is there a technical or business impact?",
              "Does it require mandatory action?",
              "Can the user continue?",
              "Is it a blocking validation?",
            ].map((q) => (
              <div
                key={q}
                className="text-[12px] text-text-secondary bg-bg-quaternary border border-border-subtle rounded-md px-3 py-[7px]"
              >
                {q}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Principles */}
      <Card className="mb-6">
        <SectionTitle>Principles</SectionTitle>
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
              className={`py-3 pr-6 ${p.borderLeft ? "pl-6 border-l border-border-subtle" : ""} ${
                !p.lastRow ? "border-b border-border-subtle" : ""
              }`}
            >
              <p className="text-[12px] font-semibold text-text-primary mb-1.5">
                {p.num} {p.title}
              </p>
              <p className="text-[12px] text-text-secondary leading-[1.55]">{p.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* UX Guidelines */}
      <Card className="mb-6">
        <SectionTitle>UX Guidelines</SectionTitle>
        <div className="grid grid-cols-2 gap-3">
          {/* Do */}
          <div className="bg-success/[0.05] border border-success/20 rounded-lg p-3.5">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-[7px] h-[7px] rounded-full bg-success" />
              <span className="text-[11px] font-semibold text-success">Do</span>
            </div>
            {[
              "Show clear and actionable feedback.",
              "Use the appropriate level of interruption based on the impact.",
              "Prioritize clarity over aesthetics.",
              "Anticipate states outside the happy path.",
              "Adapt the pattern according to the product context.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 mb-1.5 text-[12px] text-text-secondary">
                <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
          {/* Don't */}
          <div className="bg-danger/[0.05] border border-danger/20 rounded-lg p-3.5">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-[7px] h-[7px] rounded-full bg-danger" />
              <span className="text-[11px] font-semibold text-danger">Don&apos;t</span>
            </div>
            {[
              'Use modals for every state.',
              'Display generic messages like "Something went wrong."',
              "Leave the user without system feedback.",
              "Design only for the happy path.",
              "Introduce different patterns for similar states.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 mb-1.5 text-[12px] text-text-secondary">
                <span className="text-danger mt-0.5 flex-shrink-0">✕</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* State Types Table */}
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-3.5">
          <span className="block w-[3px] h-[14px] bg-orange rounded-sm" />
          State types
        </h2>
        <div className="bg-bg-tertiary border border-border-subtle rounded-[10px] overflow-hidden">
          <table className="w-full text-[12.5px] border-collapse">
            <thead>
              <tr className="bg-white/[0.03]">
                <th className="text-left px-4 py-3 text-[11px] font-medium text-text-secondary border-b border-border-subtle w-[150px]">
                  State Type
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-medium text-text-secondary border-b border-border-subtle">
                  Purpose
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-medium text-text-secondary border-b border-border-subtle w-[200px]">
                  Interruption Level
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-medium text-text-secondary border-b border-border-subtle">
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
                <tr
                  key={row.name}
                  className="hover:bg-white/[0.015] transition-colors"
                >
                  <td
                    className={`px-4 py-3.5 font-medium text-text-primary align-top leading-relaxed ${
                      i < arr.length - 1 ? "border-b border-border-subtle" : ""
                    }`}
                  >
                    {row.name}
                  </td>
                  <td
                    className={`px-4 py-3.5 text-text-secondary align-top leading-relaxed ${
                      i < arr.length - 1 ? "border-b border-border-subtle" : ""
                    }`}
                  >
                    {row.purpose}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top ${
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
                    className={`px-4 py-3.5 text-text-secondary align-top leading-relaxed ${
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
      </div>
    </div>
  );
}
