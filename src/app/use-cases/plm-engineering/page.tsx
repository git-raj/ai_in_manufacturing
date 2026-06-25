import Link from "next/link";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Requirements Traceability & Change Impact",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI traces relationships between requirements, design elements, and test cases. When a requirement changes, the system identifies all affected downstream items — reducing the time engineers spend manually tracing impact.",
    valueDrivers: ["60–80% faster impact analysis on engineering changes", "Reduced risk of missed dependencies", "Faster ECO cycle times"],
    dataNeeds: "PLM system data with linked requirements, BOMs, and change history",
    techFit: "Graph analytics, NLP for requirements parsing",
    readiness: "Medium",
  },
  {
    title: "BOM & Specification Intelligence",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Search and query across complex BOMs, specifications, and material standards using natural language. Find applicable parts, identify substitution candidates, and surface compliance gaps.",
    valueDrivers: ["Reduce engineering search time by 50%+", "Faster identification of specification conflicts", "Better reuse of existing designs"],
    dataNeeds: "Structured BOM data, specification documents, materials database",
    techFit: "RAG, graph search, structured data querying",
    readiness: "High",
  },
  {
    title: "Engineering Copilot for Standards & Procedures",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI assistant that answers engineering questions by searching internal standards, procedures, and technical documentation. Reduces time engineers spend searching and reduces reliance on tribal knowledge.",
    valueDrivers: ["2–4 hours saved per engineer per week", "Faster onboarding for new engineers", "Improved standards compliance"],
    dataNeeds: "Clean, versioned document corpus; reliable metadata",
    techFit: "RAG / generative AI with retrieval grounding",
    readiness: "High",
  },
  {
    title: "Digital Thread Completeness & Compliance",
    maturity: "Emerging",
    riskTier: "Tier 2",
    description: "Continuously monitor the digital thread for gaps, missing documents, incomplete records, and configuration inconsistencies across the product lifecycle. Surface compliance risks before audits or shipment.",
    valueDrivers: ["Reduce audit preparation time", "Catch configuration errors before they reach production", "Improve quality system maturity"],
    dataNeeds: "PLM, ERP, quality system integration; defined completion criteria per product type",
    techFit: "Rules engine + ML anomaly detection on record completeness",
    readiness: "Medium",
  },
  {
    title: "Configuration & Variant Management",
    maturity: "Emerging",
    riskTier: "Tier 2",
    description: "AI-assisted management of high-mix product configurations. Identify conflicting options, surface applicable rules, and validate configurations against engineering constraints before order release.",
    valueDrivers: ["Reduce configuration error rate", "Faster quoting and order management", "Fewer engineering queries for configured orders"],
    dataNeeds: "Product configurator rules, historical valid/invalid configurations, BOM variants",
    techFit: "Constraint satisfaction, ML classification on configuration validity",
    readiness: "Low–Medium",
  },
];

const maturityColor: Record<string, string> = {
  Proven: "bg-green-100 text-green-700",
  Emerging: "bg-yellow-100 text-yellow-700",
};

const tierColor: Record<string, string> = {
  "Tier 1": "bg-green-100 text-green-700",
  "Tier 2": "bg-yellow-100 text-yellow-700",
};

export default function PLMEngineering() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <span>→</span>
            <span>PLM & Engineering</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📐</span>
            <h1 className="text-4xl font-bold">PLM & Engineering</h1>
          </div>
          <p className="text-lg text-indigo-100 max-w-2xl">
            AI in PLM and engineering reduces the cost of complexity — managing changes, tracing requirements, and surfacing the right information at the right point in the design cycle.
          </p>
        </div>
      </section>

      <section className="py-10 bg-indigo-50 border-b border-indigo-100">
        <div className="container-narrow">
          <p className="text-indigo-800 font-semibold">
            PLM AI primarily operates at Tier 1–2. The main risk is incorrect impact analysis leading to missed changes in safety or regulatory items. Always validate AI-generated impact lists against expert review for safety-critical products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow space-y-6">
          {opportunities.map((opp) => (
            <div key={opp.title} className="card">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h2 className="text-xl font-bold text-slate-900">{opp.title}</h2>
                <div className="flex gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${maturityColor[opp.maturity]}`}>{opp.maturity}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${tierColor[opp.riskTier]}`}>{opp.riskTier}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4">{opp.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Value Drivers</p>
                  <ul className="space-y-1">{opp.valueDrivers.map((v, i) => <li key={i} className="text-slate-600 flex gap-1"><span className="text-green-500">↑</span>{v}</li>)}</ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Data Requirements</p>
                  <p className="text-slate-600">{opp.dataNeeds}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Technology Fit</p>
                  <p className="text-slate-600">{opp.techFit}</p>
                  <p className="text-xs mt-2 text-slate-500">Readiness: {opp.readiness}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-indigo-50">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 font-semibold">Score and prioritize PLM AI opportunities</p>
          <Link href="/portfolio/scorecard" className="btn-primary whitespace-nowrap">
            Open Scorecard <ArrowRight className="inline ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="py-6 container-narrow">
        <Link href="/use-cases" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← All Use Cases
        </Link>
      </div>
    </div>
  );
}
