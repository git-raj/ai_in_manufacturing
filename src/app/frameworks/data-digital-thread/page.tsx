import Link from "next/link";

const layers = [
  {
    layer: "Layer 1",
    name: "Source Systems",
    description: "Where data is born — sensors, PLCs, ERP, MES, PLM, LIMS, CRM, quality systems.",
    challenges: ["Data locked in OT silos", "Proprietary protocols (OPC-UA, Modbus)", "No semantic tagging", "Access restrictions"],
    aiRelevance: "The raw material. Every AI use case depends on reliable access to at least one source system.",
    color: "slate",
  },
  {
    layer: "Layer 2",
    name: "Integration & Streaming",
    description: "How data moves — historians, ETL pipelines, event streams, API gateways, edge compute.",
    challenges: ["Latency vs. batch trade-offs", "Data quality at ingestion", "Schema drift over time", "OT/IT boundary control"],
    aiRelevance: "Determines whether AI can operate in real-time or must accept data lag. Critical for predictive and operational use cases.",
    color: "blue",
  },
  {
    layer: "Layer 3",
    name: "Data Platform",
    description: "Where data is stored, catalogued, and made queryable — data lakehouse, feature store, vector database, semantic layer.",
    challenges: ["Inconsistent naming conventions across plants", "No single source of truth for KPIs", "Data governance gaps", "Stale metadata"],
    aiRelevance: "Shared infrastructure that enables multiple AI use cases without duplicating data engineering work.",
    color: "indigo",
  },
  {
    layer: "Layer 4",
    name: "AI / ML Models",
    description: "Where intelligence is applied — predictive models, computer vision, LLMs, optimization solvers, RAG systems.",
    challenges: ["Model drift after deployment", "Explainability requirements", "Retraining triggers and pipelines", "Version control"],
    aiRelevance: "The core AI layer. Depends on all layers below for reliability and performance.",
    color: "purple",
  },
  {
    layer: "Layer 5",
    name: "Applications & Workflows",
    description: "Where humans interact — dashboards, copilots, alerts, decision tools, operator apps.",
    challenges: ["Adoption requires workflow fit", "Alert fatigue from too many signals", "Trust calibration over time", "Change management"],
    aiRelevance: "The value realization layer. Even great models fail here if the UX doesn't fit the workflow.",
    color: "green",
  },
];

const threadStages = [
  {
    stage: "Design",
    data: "CAD models, BOMs, requirements, specifications, simulation results",
    aiOpps: "Requirements analysis, design optimization, standard retrieval",
  },
  {
    stage: "Procurement",
    data: "Supplier qualifications, purchase orders, certificates of conformance",
    aiOpps: "Supplier risk signals, document intelligence, compliance verification",
  },
  {
    stage: "Production",
    data: "Process parameters, work orders, operator records, sensor streams",
    aiOpps: "Predictive maintenance, anomaly detection, quality prediction",
  },
  {
    stage: "Quality",
    data: "Inspection records, non-conformances, CAPA, SPC charts",
    aiOpps: "Visual inspection, deviation classification, CAPA drafting",
  },
  {
    stage: "Delivery",
    data: "Shipping records, configuration documentation, calibration certificates",
    aiOpps: "Configuration compliance, documentation completeness checks",
  },
  {
    stage: "Service",
    data: "Field reports, failure modes, service records, customer feedback",
    aiOpps: "Failure prediction, knowledge retrieval, case routing",
  },
];

export default function DataDigitalThread() {
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
            <span>Data & Digital Thread</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Data & Digital Thread Strategy</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            AI is only as good as the data beneath it. Trace what data you need, where it lives, how it flows, and what shared foundations unlock multiple use cases simultaneously.
          </p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold text-lg">
            The digital thread is the continuous, traceable flow of data from design through production to service. Where the thread breaks, AI cannot operate — and where it is strong, multiple AI capabilities can share the same foundation.
          </p>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Five-Layer Data Architecture</h2>
          <p className="text-slate-600 mb-8">
            Understand which layer each AI use case depends on and where your current gaps are.
          </p>
          <div className="space-y-4">
            {layers.map((l) => (
              <div key={l.layer} className="card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{l.layer}</span>
                    <h3 className="text-xl font-bold text-slate-900">{l.name}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">{l.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-700 mb-2">Common Challenges</p>
                    <ul className="space-y-1">
                      {l.challenges.map((c, i) => (
                        <li key={i} className="text-slate-600 flex gap-1">
                          <span className="text-orange-400">!</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <p className="font-semibold text-indigo-700 mb-1">AI Relevance</p>
                    <p className="text-slate-700">{l.aiRelevance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Thread */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">The Manufacturing Digital Thread</h2>
          <p className="text-slate-600 mb-8">
            Map which data exists at each lifecycle stage and which AI opportunities it enables.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="text-left p-3 font-semibold">Stage</th>
                  <th className="text-left p-3 font-semibold">Key Data</th>
                  <th className="text-left p-3 font-semibold">AI Opportunities</th>
                </tr>
              </thead>
              <tbody>
                {threadStages.map((row, i) => (
                  <tr key={row.stage} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 font-semibold text-indigo-700">{row.stage}</td>
                    <td className="p-3 text-slate-600">{row.data}</td>
                    <td className="p-3 text-slate-600">{row.aiOpps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Data Readiness */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Data Readiness Assessment</h2>
          <p className="text-slate-600 mb-8">
            Before committing to an AI use case, assess data readiness across five dimensions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { dimension: "Availability", question: "Does the data exist and can we access it?", redFlag: "Data locked in OT system with no API or extract" },
              { dimension: "Quality", question: "Is the data accurate, consistent, and complete?", redFlag: "Missing values >20%, known labeling errors" },
              { dimension: "Freshness", question: "Is the data current enough for the use case?", redFlag: "Batch updates when real-time decisions are needed" },
              { dimension: "Volume", question: "Is there enough data to train or ground the model?", redFlag: "Fewer than 12 months or rare-event classes with <100 examples" },
              { dimension: "Labeling", question: "Do we have ground truth for supervised learning?", redFlag: "Expert labeling required but no process exists" },
              { dimension: "Governance", question: "Are data access, ownership, and retention defined?", redFlag: "No data owner; unknown privacy or regulatory constraints" },
            ].map((item) => (
              <div key={item.dimension} className="card">
                <h4 className="font-bold text-indigo-700 mb-2">{item.dimension}</h4>
                <p className="text-sm text-slate-700 mb-3">{item.question}</p>
                <div className="bg-red-50 rounded p-2">
                  <p className="text-xs text-red-700"><strong>Red flag:</strong> {item.redFlag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-6 container-narrow">
        <Link href="/frameworks" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← Back to Frameworks
        </Link>
      </div>
    </div>
  );
}
