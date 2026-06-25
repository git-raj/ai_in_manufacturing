import Link from "next/link";
import { BookOpen, Brain, Network, Zap, Layers } from "lucide-react";

export default function Frameworks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Frameworks</h1>
          <p className="text-lg text-indigo-100">
            The proven models, processes, and decision structures behind the Manufacturing AI Innovation Operating System.
          </p>
        </div>
      </section>

      {/* Framework Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: "Success Capabilities",
                description:
                  "Eight competencies every AI innovation leader must master: strategic translation, systems thinking, discovery, solution design, portfolio management, risk leadership, adoption, and storytelling.",
                href: "/frameworks/success-capabilities",
                tags: ["Leadership", "Skills"],
              },
              {
                icon: Network,
                title: "Manufacturing Value Chain",
                description:
                  "Understand your operating model: R&D, PLM, supply chain, operations, quality, commercial, and services. See where AI adds value without creating downstream risk.",
                href: "/frameworks/value-chain",
                tags: ["Architecture", "Context"],
              },
              {
                icon: BookOpen,
                title: "Discovery Method",
                description:
                  "SPARK: Strategic outcome → Process & persona → Analyze friction → Reframe solutions → Keep value accountable. Turn vague pain into actionable opportunities.",
                href: "/toolkit/discovery-workshop",
                tags: ["Process", "Facilitation"],
              },
              {
                icon: Zap,
                title: "Opportunity Architecture",
                description:
                  "Four-layer hierarchy: enterprise theme → capability objective → opportunity family → specific use case. Structure your portfolio for coherent delivery.",
                href: "/frameworks/opportunity-architecture",
                tags: ["Portfolio", "Structure"],
              },
              {
                icon: Network,
                title: "Technology-Fit Decision Guide",
                description:
                  "Match problems to solutions. Evaluate automation, ML, optimization, computer vision, RAG, copilots, and agents against your constraints and readiness.",
                href: "/frameworks/solution-fit",
                tags: ["Technology", "Decisions"],
              },
              {
                icon: Layers,
                title: "Data & Digital Thread",
                description:
                  "Trace what data you need, where it lives, how it flows, and what foundations enable multiple use cases. Plan for reuse and shared infrastructure.",
                href: "/frameworks/data-digital-thread",
                tags: ["Data", "Architecture"],
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="card hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                    <div className="flex gap-1 flex-wrap justify-end">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2 py-1 bg-indigo-50 text-indigo-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 flex-1">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Case Framework */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Manufacturing AI Use Cases</h2>
          <p className="text-slate-600 mb-8">
            Proven AI opportunity patterns across your value chain. Browse by domain or workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                domain: "R&D & Innovation",
                examples: [
                  "Experiment planning and design",
                  "Knowledge retrieval from IP library",
                  "Design-space optimization",
                  "Literature and patent synthesis",
                ],
              },
              {
                domain: "PLM & Engineering",
                examples: [
                  "Requirements traceability analysis",
                  "Change-impact prediction",
                  "BOM and specification intelligence",
                  "Digital-thread analytics",
                ],
              },
              {
                domain: "Supply Chain & Planning",
                examples: [
                  "Demand sensing and forecasting",
                  "Supply-risk signal detection",
                  "Scenario planning",
                  "Inventory optimization",
                ],
              },
              {
                domain: "Manufacturing Operations",
                examples: [
                  "Predictive maintenance",
                  "Anomaly detection",
                  "Root-cause support",
                  "Process optimization",
                ],
              },
              {
                domain: "Quality & Reliability",
                examples: [
                  "Visual inspection with CV",
                  "Defect classification",
                  "Deviation investigation",
                  "SPC augmentation",
                ],
              },
              {
                domain: "Commercial & Service",
                examples: [
                  "Technical knowledge assistant",
                  "Configuration support",
                  "RFP and quote extraction",
                  "Proposal drafting",
                ],
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/use-cases/${item.domain.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="card-hover"
              >
                <h4 className="font-bold mb-3 text-indigo-600">{item.domain}</h4>
                <ul className="space-y-2">
                  {item.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2">
                      <span className="text-indigo-500">•</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/use-cases" className="btn-primary">
              Browse Full Use-Case Library
            </Link>
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Governance & Safe Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/governance/risk-tiers" className="card-hover">
              <h4 className="font-bold mb-2">Risk Tiers</h4>
              <p className="text-sm text-slate-600">
                Categorize by impact and autonomy. Design controls appropriate to risk level.
              </p>
            </Link>

            <Link href="/governance/ot-guardrails" className="card-hover">
              <h4 className="font-bold mb-2">OT Guardrails</h4>
              <p className="text-sm text-slate-600">
                Specific controls for operational technology safety and isolation.
              </p>
            </Link>

            <Link href="/governance/evaluation" className="card-hover">
              <h4 className="font-bold mb-2">Evaluation Approach</h4>
              <p className="text-sm text-slate-600">
                Test safety, accuracy, drift, and unintended consequences before scale.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Common Failure Modes */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Common Failure Modes & Recovery</h2>
          <div className="space-y-4">
            {[
              {
                mode: "Technology-first approach",
                example: "Picking tools before understanding the problem",
                recovery: "Go back to discovery. Run structured interviews. Define business outcome.",
              },
              {
                mode: "No baseline or measurement",
                example: "Piloting without knowing starting point or target",
                recovery: "Spend 2 weeks capturing baseline metrics before pilot decision.",
              },
              {
                mode: "Missing frontline adoption",
                example: "Technically impressive solution that does not fit workflows",
                recovery: "Involve users from discovery. Design for their reality, not the ideal.",
              },
              {
                mode: "Uncontrolled autonomy",
                example: "Giving systems action authority without safety testing",
                recovery: "Start at Tier 1 (augment). Progress only with evidence.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card border-l-4 border-l-orange-500">
                <h4 className="font-bold mb-1 text-orange-700">{item.mode}</h4>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Example:</strong> {item.example}
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Recovery:</strong> {item.recovery}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
