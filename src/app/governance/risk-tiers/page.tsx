import Link from "next/link";
import { AlertTriangle, Shield, CheckCircle2 } from "lucide-react";

const tiers = [
  {
    id: "tier-1",
    name: "Tier 1: Low Risk",
    color: "green",
    borderColor: "border-l-green-500",
    bgColor: "bg-green-50",
    badgeBg: "bg-green-100 text-green-700",
    impact: "Information, insights, or recommendations only",
    autonomy: "No system action; human always decides",
    oversight: "Standard monitoring, documented assumptions",
    reviewRequired: ["Business sponsor sign-off", "Basic data governance review"],
    examples: [
      "Quality dashboard with trend insights",
      "Predictive maintenance alert to maintenance team",
      "Engineering standards knowledge assistant",
      "Demand forecasting recommendation to planner",
      "Root-cause suggestion in investigation report",
    ],
    controls: [
      "Document model assumptions and limitations",
      "Log all recommendations and whether they were acted on",
      "Define model refresh cadence",
      "Communicate uncertainty bounds to users",
    ],
    pilot: "Light review. Standard data access request. 2-week pilot minimum.",
  },
  {
    id: "tier-2",
    name: "Tier 2: Medium Risk",
    color: "yellow",
    borderColor: "border-l-yellow-500",
    bgColor: "bg-yellow-50",
    badgeBg: "bg-yellow-100 text-yellow-700",
    impact: "Workflow optimization or bounded automation",
    autonomy: "System takes action within defined guardrails; human oversight at intervals",
    oversight: "Designed approval checkpoints; OT security review",
    reviewRequired: [
      "Business sponsor and process owner sign-off",
      "IT/OT security architecture review",
      "Data governance and access review",
      "Process engineering validation",
    ],
    examples: [
      "Automated anomaly escalation to maintenance queue",
      "Work order prioritization and routing adjustment",
      "Exception flagging in quality release workflow",
      "Supplier risk alert triggering procurement review",
    ],
    controls: [
      "Define explicit action boundaries (what the system can and cannot do)",
      "Require human approval before any action outside normal range",
      "Implement real-time monitoring and drift alerts",
      "Design a rollback procedure and test it before go-live",
      "Conduct quarterly performance reviews with process owner",
    ],
    pilot: "OT/security review required. Formal pilot charter. 30-day pilot with daily monitoring.",
  },
  {
    id: "tier-3",
    name: "Tier 3: High Risk",
    color: "red",
    borderColor: "border-l-red-500",
    bgColor: "bg-red-50",
    badgeBg: "bg-red-100 text-red-700",
    impact: "Product safety, yield, quality, or regulatory consequence",
    autonomy: "System recommends; mandatory human approval before any action taken",
    oversight: "Full governance review; continuous monitoring with safety stops",
    reviewRequired: [
      "Executive sponsor sign-off",
      "OT security and safety engineering review",
      "Quality and regulatory compliance review",
      "Legal and risk management review",
      "Independent technical validation",
    ],
    examples: [
      "Process parameter adjustment recommendation (requires engineer sign-off)",
      "Product release or hold decision support",
      "Safety-critical anomaly response guidance",
      "Regulatory submission content generation (always human-reviewed)",
    ],
    controls: [
      "Mandatory human approval for every action — no autonomous execution",
      "Full audit trail: input, output, who approved, timestamp",
      "Formal evaluation protocol before pilot (accuracy, bias, edge cases)",
      "Safety stop: automatic suspension if performance metrics degrade",
      "Named responsible engineer accountable for each decision",
      "Regulatory review of AI use in relevant quality systems",
    ],
    pilot: "Full governance board review. Formal evaluation plan. Staged rollout with manual fallback always available.",
  },
];

export default function RiskTiers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-red-200 text-sm mb-4">
            <Link href="/governance" className="hover:text-white transition-colors">
              Governance
            </Link>
            <span>→</span>
            <span>Risk Tiers</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Risk Tier Framework</h1>
          <p className="text-lg text-red-100 max-w-2xl">
            Classify every AI opportunity by its impact and autonomy level before the pilot decision. Risk tier determines the required governance, controls, and oversight — not the organization's tolerance for delay.
          </p>
        </div>
      </section>

      {/* Classification Rule */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold text-lg">
            Tier is determined by the worst-case impact if the system is wrong AND the degree of autonomy granted. When in doubt, classify one tier higher and relax controls with evidence.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-16">
        <div className="container-narrow space-y-8">
          {tiers.map((tier) => (
            <div key={tier.id} className={`card border-l-4 ${tier.borderColor} ${tier.bgColor}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  {tier.color === "green" && <Shield className="w-6 h-6 text-green-600" />}
                  {tier.color === "yellow" && <AlertTriangle className="w-6 h-6 text-yellow-600" />}
                  {tier.color === "red" && <AlertTriangle className="w-6 h-6 text-red-600" />}
                  <h2 className="text-2xl font-bold text-slate-900">{tier.name}</h2>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.badgeBg}`}>
                  {tier.autonomy.split(";")[0]}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-slate-600 mb-1">Impact Type</p>
                  <p className="text-slate-800">{tier.impact}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-600 mb-1">Autonomy Level</p>
                  <p className="text-slate-800">{tier.autonomy}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Examples</p>
                  <ul className="space-y-1">
                    {tier.examples.map((ex, i) => (
                      <li key={i} className="text-slate-600 flex gap-1">
                        <span className="text-slate-400 flex-shrink-0">•</span> {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Required Controls</p>
                  <ul className="space-y-1">
                    {tier.controls.map((c, i) => (
                      <li key={i} className="flex gap-1 text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Review Required</p>
                  <ul className="space-y-1">
                    {tier.reviewRequired.map((r, i) => (
                      <li key={i} className="text-slate-600 flex gap-1">
                        <span className="text-slate-400 flex-shrink-0">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 p-2 bg-white rounded border border-slate-200">
                    <p className="text-xs text-slate-600">{tier.pilot}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Classification Guide */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">How to Classify an Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "What is the worst-case outcome if the system produces a wrong answer?", guide: "Tier 1: user makes a suboptimal decision. Tier 2: a workflow is disrupted. Tier 3: safety, product quality, or regulatory status is compromised." },
              { q: "Who or what takes action based on the system output?", guide: "Human always decides with information → Tier 1. System routes/escalates within guardrails → Tier 2. System influences safety-critical decisions → Tier 3." },
              { q: "Is the system integrated with OT (PLCs, SCADA, MES, safety systems)?", guide: "Any direct OT integration is at minimum Tier 2. Integration with safety systems is Tier 3 unless read-only." },
              { q: "What are the regulatory and quality system implications?", guide: "Regulated industries (medical device, aerospace, pharma) should default to Tier 3 for any quality system integration until legal review is complete." },
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="font-semibold text-slate-800 mb-2">{item.q}</p>
                <p className="text-sm text-slate-600">{item.guide}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-6 container-narrow flex flex-wrap gap-4">
        <Link href="/governance" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← Back to Governance
        </Link>
        <Link href="/governance/ot-guardrails" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          OT Guardrails →
        </Link>
      </div>
    </div>
  );
}
