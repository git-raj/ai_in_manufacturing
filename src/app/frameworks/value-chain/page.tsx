import Link from "next/link";

const valueChain = [
  {
    stage: "R&D & Innovation",
    icon: "🔬",
    description: "Explore, experiment, and design new products and materials. Knowledge-intensive with long cycles and high IP value.",
    aiOpps: ["Experiment design and hypothesis generation", "IP and literature knowledge retrieval", "Design-space optimization", "Simulation-result synthesis"],
    dataAssets: ["Lab notebooks", "Patents & publications", "Simulation outputs", "Test results"],
    risk: "Low–Medium",
  },
  {
    stage: "Product Lifecycle Management",
    icon: "📐",
    description: "Define, configure, and manage product requirements, designs, and engineering changes from concept to end of life.",
    aiOpps: ["Requirements traceability and change impact", "BOM intelligence and compliance checks", "Engineering procedure copilot", "Digital thread completeness"],
    dataAssets: ["CAD/CAM files", "BOMs", "ECOs", "Specifications"],
    risk: "Medium",
  },
  {
    stage: "Supply Chain & Planning",
    icon: "📦",
    description: "Plan demand, source materials, manage supplier relationships, and optimize inventory across the network.",
    aiOpps: ["Demand sensing and forecast blending", "Supply-risk signal detection", "Supplier document intelligence", "Scenario and what-if planning"],
    dataAssets: ["Demand history", "Supplier data", "Inventory positions", "Lead times"],
    risk: "Medium",
  },
  {
    stage: "Manufacturing Operations",
    icon: "🏭",
    description: "Execute production: scheduling, machine operation, process control, material handling, and workforce management.",
    aiOpps: ["Predictive maintenance and downtime prevention", "Anomaly detection on sensor streams", "Process parameter optimization", "Operator knowledge tools"],
    dataAssets: ["Sensor/historian data", "Work orders", "Maintenance logs", "OEE data"],
    risk: "Medium–High",
  },
  {
    stage: "Quality & Reliability",
    icon: "✓",
    description: "Ensure products meet specifications. Detect defects, investigate deviations, and drive continuous improvement.",
    aiOpps: ["Visual inspection with computer vision", "Defect classification and root-cause", "CAPA documentation support", "SPC augmentation"],
    dataAssets: ["Inspection records", "NCRs", "SPC data", "Test results"],
    risk: "High",
  },
  {
    stage: "Commercial & Service",
    icon: "💼",
    description: "Win business and support customers post-sale: quoting, configuration, technical support, field service.",
    aiOpps: ["Technical knowledge assistant", "RFP and quote extraction", "Configuration guidance", "Case triage and routing"],
    dataAssets: ["CRM data", "Service records", "Product docs", "Pricing data"],
    risk: "Low–Medium",
  },
];

const riskColor: Record<string, string> = {
  "Low–Medium": "bg-blue-100 text-blue-700",
  "Medium": "bg-yellow-100 text-yellow-700",
  "Medium–High": "bg-orange-100 text-orange-700",
  "High": "bg-red-100 text-red-700",
};

export default function ValueChain() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/frameworks" className="hover:text-white transition-colors">
              Frameworks
            </Link>
            <span>→</span>
            <span>Manufacturing Value Chain</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Manufacturing Value Chain</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            High-tech manufacturers operate through a connected value chain. Understanding each stage — its data, decisions, and AI risk profile — is foundational to building a coherent AI portfolio.
          </p>
        </div>
      </section>

      {/* Principle */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold text-lg">
            AI value is created at decision points and workflow friction points within each stage — not at the technology layer. Map the chain first; apply AI second.
          </p>
        </div>
      </section>

      {/* Value Chain Stages */}
      <section className="py-16">
        <div className="container-narrow space-y-6">
          {valueChain.map((stage, i) => (
            <div key={stage.stage} className="card">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{stage.icon}</span>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">Stage {i + 1}</span>
                    <h2 className="text-xl font-bold text-slate-900">{stage.stage}</h2>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${riskColor[stage.risk]}`}>
                  AI Risk: {stage.risk}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">{stage.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">AI Opportunities</p>
                  <ul className="space-y-1">
                    {stage.aiOpps.map((opp, j) => (
                      <li key={j} className="text-slate-600 flex gap-1">
                        <span className="text-indigo-400">→</span> {opp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Key Data Assets</p>
                  <ul className="space-y-1">
                    {stage.dataAssets.map((d, j) => (
                      <li key={j} className="text-slate-600 flex gap-1">
                        <span className="text-slate-400">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link
                  href={`/use-cases/${stage.stage.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                  className="text-sm text-indigo-600 font-semibold hover:text-indigo-700"
                >
                  Browse {stage.stage} use cases →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System thinking note */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Think in Systems, Not Siloes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Downstream Impact", text: "A change to process parameters in Operations affects Quality yield, which affects Supply Chain planning. Model the ripple before you deploy." },
              { title: "Shared Data Foundations", text: "Multiple AI use cases often need the same sensor history or document corpus. Invest once in shared infrastructure rather than duplicating per project." },
              { title: "OT/IT Boundaries", text: "Operational Technology (PLCs, SCADA, historians) operates on different reliability and safety standards than IT systems. Never assume IT patterns apply to OT." },
              { title: "Organizational Seams", text: "The biggest AI risks are often at handoffs between stages — R&D to PLM, engineering to production. Focus discovery at these seams." },
            ].map((item) => (
              <div key={item.title} className="card">
                <h4 className="font-bold text-indigo-700 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-6 container-narrow">
        <Link href="/frameworks" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← Back to Frameworks
        </Link>
      </div>
    </div>
  );
}
