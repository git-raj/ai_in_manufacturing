import Link from "next/link";
import { Shield, AlertTriangle } from "lucide-react";

const guardrails = [
  {
    category: "Network Isolation",
    icon: "🔒",
    principles: [
      "AI systems should never have direct write access to OT control networks",
      "Data flows from OT to IT via one-way data diode or controlled historian interface",
      "Any bidirectional interface requires explicit security architecture approval",
      "Cloud AI services cannot connect directly to OT — always via DMZ or edge buffer",
    ],
    redLines: [
      "AI model endpoint exposed directly on OT network",
      "Direct API calls from cloud services to PLC or SCADA without buffering",
      "Shared credentials between IT and OT systems",
    ],
  },
  {
    category: "Read vs. Write Access",
    icon: "📋",
    principles: [
      "Default to read-only: AI uses historian, MES, or sensor data but does not write to control systems",
      "Any write path (even setpoint recommendations that require confirmation) must be explicitly designed and reviewed",
      "Write actions require a named process owner who approves each output",
      "Automated write actions (Tier 2+) require formal safety analysis before implementation",
    ],
    redLines: [
      "Autonomous setpoint changes without human approval step",
      "AI generating work orders that execute without review queue",
      "Write access granted during proof-of-concept without production controls",
    ],
  },
  {
    category: "Fallback & Continuity",
    icon: "🔄",
    principles: [
      "Operations must continue normally if the AI system is unavailable",
      "Every AI-assisted workflow must have a documented manual fallback procedure",
      "Operators must be trained on the manual process even after AI is deployed",
      "AI system failure should trigger alert, not silent degradation",
    ],
    redLines: [
      "Critical process step that can only be performed via AI interface",
      "Operators who no longer know the manual procedure",
      "No monitoring or alerting if AI service goes offline",
    ],
  },
  {
    category: "Vendor & Supply Chain Security",
    icon: "🏢",
    principles: [
      "AI vendors must complete OT security questionnaire before OT integration",
      "Third-party AI models must be evaluated for data exfiltration risk",
      "Model updates from vendors must follow change control process",
      "SaaS AI tools must not be connected to OT systems without security review",
    ],
    redLines: [
      "Connecting a SaaS AI tool to OT data without infosec review",
      "Vendor AI accessing raw production data without data governance agreement",
      "Model updates deployed to production OT context without testing",
    ],
  },
  {
    category: "Data Sensitivity & Residency",
    icon: "🗄️",
    principles: [
      "Process recipes, formulations, and IP-sensitive parameters must not leave controlled environments",
      "Understand where AI inference happens: on-premises, edge, or cloud",
      "Data residency requirements must be confirmed before cloud AI deployment",
      "PII in operator records must be handled per applicable privacy regulations",
    ],
    redLines: [
      "Proprietary process parameters sent to public LLM APIs",
      "Personal operator performance data used in ML training without consent",
      "Data residency unknown for cloud-based AI platform",
    ],
  },
  {
    category: "Safety System Exclusions",
    icon: "⛔",
    principles: [
      "AI must never interfere with safety instrumented systems (SIS)",
      "AI outputs must never be used as the sole input to a safety-critical decision",
      "Safety-critical workflows require independent validation before AI is introduced",
      "Functional safety standards (IEC 61511, IEC 62443) apply to any AI touching safety systems",
    ],
    redLines: [
      "AI integrated into safety interlock logic",
      "AI recommendation used without human review for emergency shutdown decisions",
      "Bypassing functional safety reviews because 'it is just a recommendation'",
    ],
  },
];

export default function OTGuardrails() {
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
            <span>OT Guardrails</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">OT Security & Guardrails</h1>
          <p className="text-lg text-red-100 max-w-2xl">
            Operational Technology systems operate at a different safety and reliability standard than IT. These guardrails protect production integrity, safety instrumented systems, and proprietary process IP when introducing AI.
          </p>
        </div>
      </section>

      {/* Hard Rule */}
      <section className="py-10 bg-red-50 border-b border-red-200">
        <div className="container-narrow flex gap-3 items-start">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 font-semibold text-lg">
            The default for any AI system interacting with OT is: read-only, no direct network path, manual fallback always available, safety systems excluded. Every exception requires written security approval.
          </p>
        </div>
      </section>

      {/* Guardrail Categories */}
      <section className="py-16">
        <div className="container-narrow space-y-6">
          {guardrails.map((g) => (
            <div key={g.category} className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{g.icon}</span>
                <h2 className="text-xl font-bold text-slate-900">{g.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2 flex items-center gap-1">
                    <Shield className="w-4 h-4 text-green-600" /> Required Practices
                  </p>
                  <ul className="space-y-2">
                    {g.principles.map((p, i) => (
                      <li key={i} className="text-slate-600 flex gap-2">
                        <span className="text-green-500 flex-shrink-0">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-semibold text-red-700 mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" /> Hard Red Lines
                  </p>
                  <ul className="space-y-2">
                    {g.redLines.map((r, i) => (
                      <li key={i} className="text-red-700 flex gap-2">
                        <span className="flex-shrink-0">✕</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OT AI Readiness Checklist */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">OT AI Readiness Checklist</h2>
          <p className="text-slate-600 mb-6">Complete before any AI pilot that touches OT data or systems.</p>
          <div className="space-y-2">
            {[
              "OT network topology documented and reviewed by security team",
              "Data access path from OT to AI system mapped and approved",
              "One-way or controlled historian interface confirmed (no direct OT writes)",
              "Vendor security questionnaire completed for all third-party AI tools",
              "Safety instrumented systems identified and excluded from AI scope",
              "Manual fallback procedure documented and operators trained",
              "Data residency and IP sensitivity review complete",
              "Change control process defined for AI model updates",
              "Monitoring and alerting for AI system availability confirmed",
              "Incident response procedure for AI-related anomalies defined",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-200">
                <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-6 container-narrow flex flex-wrap gap-4">
        <Link href="/governance" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← Back to Governance
        </Link>
        <Link href="/governance/evaluation" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          Evaluation Approach →
        </Link>
      </div>
    </div>
  );
}
