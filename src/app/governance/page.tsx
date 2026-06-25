import Link from "next/link";
import { AlertTriangle, Shield, Lock, Zap } from "lucide-react";

export default function Governance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Governance & Responsible AI</h1>
          <p className="text-lg text-red-100">
            Surface risk and controls early. Enable delivery by making action boundaries, data access, accountability, and monitoring explicit.
          </p>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16">
        <div className="container-narrow space-y-8">
          {/* Risk Tiers */}
          <div>
            <h2 className="text-section-title">Risk Tiers</h2>
            <p className="text-slate-600 mb-6">
              Categorize opportunities by impact (process vs. customer-facing vs. product safety) and autonomy level (human decision support, workflow automation, direct action).
            </p>

            <div className="space-y-4">
              {[
                {
                  tier: "Tier 1: Low Risk",
                  impact: "Information, insights, or recommendations",
                  autonomy: "No system action; human always decides",
                  examples: [
                    "Quality dashboard with trend insights",
                    "Predictive maintenance alert",
                    "Knowledge search assistant",
                  ],
                  governance:
                    "Light review. Standard monitoring. Document assumptions.",
                },
                {
                  tier: "Tier 2: Medium Risk",
                  impact: "Workflow optimization or bounded automation",
                  autonomy: "System takes action within defined guardrails; human oversight",
                  examples: [
                    "Automated anomaly escalation",
                    "Work prioritization and routing",
                    "Exception handling workflow",
                  ],
                  governance:
                    "Security and OT review. Design human approval points. Test controls.",
                },
                {
                  tier: "Tier 3: High Risk",
                  impact: "Product safety, yield, quality, or regulatory consequence",
                  autonomy: "System recommends; human approval required before action",
                  examples: [
                    "Process parameter adjustment",
                    "Release/hold decision support",
                    "Safety-critical anomaly response",
                  ],
                  governance:
                    "Full review: OT, security, quality, legal. Formal evaluation. Continuous monitoring.",
                },
              ].map((item, idx) => (
                <div key={idx} className="card border-l-4 border-l-red-500">
                  <h4 className="font-bold text-lg mb-2">{item.tier}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <p className="text-slate-600 font-semibold mb-1">Impact</p>
                      <p>{item.impact}</p>
                    </div>
                    <div>
                      <p className="text-slate-600 font-semibold mb-1">Autonomy</p>
                      <p>{item.autonomy}</p>
                    </div>
                  </div>
                  <div className="mb-3 text-sm">
                    <p className="text-slate-600 font-semibold mb-1">
                      Typical Examples
                    </p>
                    <ul className="space-y-1">
                      {item.examples.map((ex, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-red-500">•</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-3 rounded text-sm border border-slate-200">
                    <p className="font-semibold text-slate-700 mb-1">
                      Governance Approach
                    </p>
                    <p className="text-slate-600">{item.governance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Autonomy Ladder */}
          <div>
            <h2 className="text-section-title">Autonomy Ladder</h2>
            <p className="text-slate-600 mb-6">
              Begin at the lowest appropriate autonomy level. Progress only when evidence supports it.
            </p>

            <div className="space-y-3">
              {[
                {
                  level: "Level 1: Augment",
                  description: "System provides insights. Human decides and acts.",
                  examples:
                    "Dashboard, alert, search result, ranked list, forecast",
                },
                {
                  level: "Level 2: Recommend",
                  description:
                    "System recommends; human reviews and approves before action.",
                  examples:
                    "Predictive score, root-cause hypothesis, next-best action, adjustment suggestion",
                },
                {
                  level: "Level 3: Automate with Approval",
                  description:
                    "System executes within guardrails; human oversees and can override.",
                  examples: "Workflow routing, priority re-ranking, alert suppression",
                },
                {
                  level: "Level 4: Autonomous",
                  description:
                    "System acts without human approval. Only for proven, bounded, low-risk scenarios.",
                  examples: "Parameter adjustment in simulation mode, cache refresh, metadata tagging",
                },
              ].map((item, idx) => (
                <div key={idx} className="card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-red-100 text-red-600 font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{item.level}</h4>
                      <p className="text-sm text-slate-600 mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs text-slate-500">
                        <strong>Examples:</strong> {item.examples}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Control Design */}
          <div>
            <h2 className="text-section-title">Essential Controls for Every Pilot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🚪",
                  name: "Data Access & Privacy",
                  items: [
                    "Define what data the system can access",
                    "Document data classification (public, internal, restricted)",
                    "Implement role-based access",
                    "Log all data requests",
                  ],
                },
                {
                  icon: "✓",
                  name: "Human Approval Points",
                  items: [
                    "Identify decisions that must remain human-owned",
                    "Define approval workflows",
                    "Document escalation paths",
                    "Test override scenarios",
                  ],
                },
                {
                  icon: "🔍",
                  name: "Monitoring & Observability",
                  items: [
                    "Track system accuracy and confidence scores",
                    "Monitor data drift and input anomalies",
                    "Alert on policy violations or edge cases",
                    "Maintain audit trail of all actions",
                  ],
                },
                {
                  icon: "🔄",
                  name: "Rollback & Remediation",
                  items: [
                    "Define when the system shuts down or hands off",
                    "Document rollback procedure",
                    "Plan for false positives or errors",
                    "Establish communication protocol for failures",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="card">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-3">{item.name}</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {item.items.map((i, idx2) => (
                      <li key={idx2} className="flex gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* OT Guardrails */}
          <div>
            <h2 className="text-section-title">OT Security & Safety Guardrails</h2>
            <div className="card bg-amber-50 border-amber-200">
              <h4 className="font-bold mb-3 text-amber-900">
                For factory and operational technology (OT):
              </h4>
              <ul className="space-y-2 text-sm text-amber-900">
                <li className="flex gap-3">
                  <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Network isolation:</strong> Systems operate on
                    segregated networks with explicit approval for data flow
                  </span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Fail-safe defaults:</strong> On anomaly or error,
                    system defaults to safe state or alerts human operators
                  </span>
                </li>
                <li className="flex gap-3">
                  <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Rate limiting & circuit breakers:</strong> Prevent
                    runaway automation; operator can always override
                  </span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Latency SLAs:</strong> Define acceptable response
                    time; exceed it and fail safe
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Checklist */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Pilot Entry Checklist</h2>
          <div className="card">
            <p className="text-slate-600 mb-6">
              Before a pilot starts, confirm you have addressed these questions:
            </p>

            <div className="space-y-3">
              {[
                "Risk tier is assigned and documented",
                "Data access and privacy controls are designed",
                "Human approval points and escalation paths are defined",
                "Monitoring, observability, and alerting are planned",
                "Rollback and failover procedures are documented",
                "Users are trained on system behavior and limitations",
                "Evaluation criteria and success thresholds are clear",
                "Stakeholders understand the risk posture and controls",
                "OT/security team has reviewed design (if applicable)",
                "Responsible AI assessment is complete",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200">
                  <input
                    type="checkbox"
                    id={`check-${idx}`}
                    className="w-5 h-5 rounded text-green-600 cursor-pointer"
                  />
                  <label htmlFor={`check-${idx}`} className="flex-1 text-sm text-slate-700 cursor-pointer">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/governance/risk-tiers" className="card-hover">
              <h4 className="font-bold mb-2">Risk Tiers Deep Dive</h4>
              <p className="text-sm text-slate-600">
                Detailed framework for categorizing use cases
              </p>
            </Link>

            <Link href="/governance/ot-guardrails" className="card-hover">
              <h4 className="font-bold mb-2">OT Guardrails</h4>
              <p className="text-sm text-slate-600">
                Specific controls for operational technology
              </p>
            </Link>

            <Link href="/governance/evaluation" className="card-hover">
              <h4 className="font-bold mb-2">Evaluation Approach</h4>
              <p className="text-sm text-slate-600">
                How to test safety, effectiveness, and drift
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
