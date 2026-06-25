import Link from "next/link";

const layers = [
  {
    level: "Level 1",
    name: "Enterprise Theme",
    description: "The strategic priority that justifies an entire portfolio of AI work.",
    example: "Operational Excellence: reduce waste and unplanned downtime across all facilities",
    capacity: "3–5 themes maximum; tied to board-level priorities",
    color: "bg-indigo-700 text-white",
  },
  {
    level: "Level 2",
    name: "Capability Objective",
    description: "The specific organizational capability being built under a theme.",
    example: "Predictive Asset Intelligence: know which assets will fail before they do",
    capacity: "3–6 per theme; typically a 12–24 month investment horizon",
    color: "bg-indigo-500 text-white",
  },
  {
    level: "Level 3",
    name: "Opportunity Family",
    description: "A cluster of related AI use cases that share data, patterns, or technology.",
    example: "Rotating equipment monitoring: vibration, temperature, and oil quality signals",
    capacity: "2–5 per capability; enables shared data and model investment",
    color: "bg-indigo-300 text-indigo-900",
  },
  {
    level: "Level 4",
    name: "Specific Use Case",
    description: "A defined, deliverable AI intervention with a named owner and success measure.",
    example: "Bearing failure prediction for CNC lathes at Plant 3: 14-day warning horizon",
    capacity: "Fully specified: workflow, user, data, model type, hypothesis, metrics",
    color: "bg-indigo-100 text-indigo-900",
  },
];

const examples = [
  {
    theme: "Zero Defect Quality",
    capability: "In-Process Quality Intelligence",
    family: "Visual Inspection Automation",
    useCase: "PCB solder joint visual inspection — 95% defect capture rate at line speed",
  },
  {
    theme: "Supply Chain Resilience",
    capability: "Demand & Supply Sensing",
    family: "External Signal Integration",
    useCase: "Supplier risk monitoring: flag Tier-2 disruption signals 30 days in advance",
  },
  {
    theme: "Engineering Productivity",
    capability: "Design & Compliance Assistance",
    family: "Standards & Procedure Intelligence",
    useCase: "Engineering standards copilot: retrieve relevant specs from 40K document library in <5s",
  },
];

export default function OpportunityArchitecture() {
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
            <span>Opportunity Architecture</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Opportunity Architecture</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Structure your AI portfolio in a four-level hierarchy. This creates coherence between board-level strategy and individual use cases — and enables shared investment in data and technology foundations.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold text-lg">
            Without architecture, every AI project competes independently for budget, data, and infrastructure. With it, related use cases build on each other — reducing cost, accelerating delivery, and compounding organizational learning.
          </p>
        </div>
      </section>

      {/* Four Layers */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">The Four-Level Hierarchy</h2>
          <div className="space-y-3">
            {layers.map((layer) => (
              <div key={layer.level} className={`rounded-xl p-6 ${layer.color}`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">{layer.level}</p>
                    <h3 className="text-xl font-bold mb-2">{layer.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{layer.description}</p>
                    <div className="text-sm opacity-80 italic">Example: {layer.example}</div>
                  </div>
                  <div className="text-xs opacity-70 max-w-xs text-right hidden md:block">
                    {layer.capacity}
                  </div>
                </div>
                <div className="mt-3 text-xs opacity-70 md:hidden">{layer.capacity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Examples */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">End-to-End Examples</h2>
          <p className="text-slate-600 mb-8">See how each level connects from strategy to specific deliverable.</p>
          <div className="space-y-4">
            {examples.map((ex, i) => (
              <div key={i} className="card overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
                  {[
                    { label: "Theme", value: ex.theme, bg: "bg-indigo-50" },
                    { label: "Capability", value: ex.capability, bg: "bg-white" },
                    { label: "Family", value: ex.family, bg: "bg-slate-50" },
                    { label: "Use Case", value: ex.useCase, bg: "bg-white" },
                  ].map((col) => (
                    <div key={col.label} className={`p-4 ${col.bg}`}>
                      <p className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-1">{col.label}</p>
                      <p className="text-sm text-slate-700">{col.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Portfolio Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Cover all four lanes", text: "Quick Wins, Strategic Bets, Foundation, and Exploration should each have active work. A portfolio of only Quick Wins creates no durable capability." },
              { title: "Group by shared foundations", text: "Cluster use cases that share the same data sources or platform investments. This reduces total cost and builds capability faster." },
              { title: "Limit work in progress", text: "Most organizations can actively deliver 3–6 use cases simultaneously. More than this fragments attention and slows everything down." },
              { title: "Every use case earns its place", text: "Apply the scoring model to every candidate. Intuition and seniority are not filters. Evidence is the filter." },
            ].map((item) => (
              <div key={item.title} className="card border-l-4 border-l-indigo-500">
                <h4 className="font-bold text-indigo-700 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-6 container-narrow flex gap-4">
        <Link href="/frameworks" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← Back to Frameworks
        </Link>
        <Link href="/portfolio/scorecard" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          Score Opportunities →
        </Link>
      </div>
    </div>
  );
}
