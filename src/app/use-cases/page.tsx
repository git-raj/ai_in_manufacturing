import Link from "next/link";

export default function UseCases() {
  const domains = [
    {
      name: "R&D & Innovation",
      icon: "🔬",
      opportunities: [
        "Experiment planning and design optimization",
        "Knowledge retrieval from IP library and PDFs",
        "Design-space exploration and constraint optimization",
        "Literature and patent synthesis",
        "Test result prediction and protocol suggestion",
      ],
    },
    {
      name: "PLM & Engineering",
      icon: "📐",
      opportunities: [
        "Requirements traceability and impact analysis",
        "Change-impact prediction and ripple detection",
        "BOM and specification intelligence",
        "Engineering copilot for standards and procedures",
        "Digital-thread analytics and compliance",
      ],
    },
    {
      name: "Supply Chain & Planning",
      icon: "📦",
      opportunities: [
        "Demand sensing and forecast blending",
        "Supply-risk signal detection",
        "Scenario planning and what-if analysis",
        "Inventory optimization and working capital reduction",
        "Supplier document intelligence and compliance",
      ],
    },
    {
      name: "Manufacturing Operations",
      icon: "🏭",
      opportunities: [
        "Predictive maintenance and downtime prevention",
        "Anomaly detection on time-series data",
        "Root-cause support and investigation guidance",
        "Operator knowledge tool and procedure guidance",
        "Scheduling and throughput optimization",
      ],
    },
    {
      name: "Quality & Reliability",
      icon: "✓",
      opportunities: [
        "Visual inspection with computer vision",
        "Defect classification and severity prediction",
        "Deviation investigation and CAPA support",
        "Quality-document intelligence and evidence retrieval",
        "SPC augmentation and run-rule automation",
      ],
    },
    {
      name: "Commercial & Service",
      icon: "💼",
      opportunities: [
        "Technical knowledge assistant for sales and support",
        "Configuration and specification guidance",
        "RFP and quote extraction and processing",
        "Case triage and routing",
        "Proposal drafting and pricing guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Manufacturing AI Use Cases</h1>
          <p className="text-lg text-indigo-100">
            Proven AI opportunity patterns across your value chain. Browse by domain and explore typical implementations.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, idx) => (
              <Link
                key={idx}
                href={`/use-cases/${domain.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="card hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-600">
                  {domain.name}
                </h3>
                <ul className="space-y-2 flex-1">
                  {domain.opportunities.slice(0, 3).map((opp, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 flex gap-2 leading-tight"
                    >
                      <span className="text-indigo-500 flex-shrink-0">•</span>
                      {opp}
                    </li>
                  ))}
                  {domain.opportunities.length > 3 && (
                    <li className="text-xs text-slate-500 pt-1">
                      + {domain.opportunities.length - 3} more...
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <span className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                    Explore → {domain.opportunities.length} opportunities
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Selection Guide */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">How to Evaluate a Use Case</h2>

          <div className="space-y-6">
            {[
              {
                criterion: "Business Impact",
                questions: [
                  "What outcome improves? (quality, cost, throughput, speed, capacity)",
                  "Who benefits immediately?",
                  "How much is a 1% improvement worth?",
                ],
              },
              {
                criterion: "Data Readiness",
                questions: [
                  "What data is available?",
                  "What data quality issues exist?",
                  "How often is it updated?",
                  "Who owns the data access?",
                ],
              },
              {
                criterion: "User Readiness",
                questions: [
                  "Who makes the decision or takes the action today?",
                  "What makes their output trustworthy?",
                  "What would cause them to ignore the system?",
                  "What training and support do they need?",
                ],
              },
              {
                criterion: "Risk Posture",
                questions: [
                  "What is the autonomy level? (recommend, automate, autonomous)",
                  "What is the impact if wrong? (low, medium, high)",
                  "What controls are needed?",
                  "What monitoring proves it is working?",
                ],
              },
              {
                criterion: "Technical Complexity",
                questions: [
                  "What solution pattern fits? (rules, ML, optimization, vision, GenAI)",
                  "What is the MVP scope?",
                  "What are known unknowns?",
                  "How long to prove viability?",
                ],
              },
              {
                criterion: "Organizational Readiness",
                questions: [
                  "Is there a named sponsor?",
                  "Is there a process owner?",
                  "Does the organization have prior wins?",
                  "Is there budget and support?",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="card border-l-4 border-l-indigo-600">
                <h4 className="font-bold text-lg mb-3 text-indigo-600">
                  {item.criterion}
                </h4>
                <ul className="space-y-2">
                  {item.questions.map((q, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2">
                      <span className="text-indigo-500 font-bold">?</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-narrow text-center">
          <h2 className="text-section-title">Ready to Explore?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose a domain above, or run a structured discovery workshop to identify
            opportunities specific to your organization.
          </p>
          <Link href="/toolkit/discovery-workshop" className="btn-primary">
            Run Discovery Workshop
          </Link>
        </div>
      </section>
    </div>
  );
}
