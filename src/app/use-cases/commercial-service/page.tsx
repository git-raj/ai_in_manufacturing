import Link from "next/link";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Technical Knowledge Assistant",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI assistant for sales engineers and customer support teams to quickly retrieve product specifications, application guidance, compatibility information, and troubleshooting steps from a complex knowledge base.",
    valueDrivers: ["50% reduction in time to answer technical queries", "Faster customer response times", "Consistent answers across distributed sales teams"],
    dataNeeds: "Product documentation, application notes, FAQs, field service records, specifications",
    techFit: "RAG / generative AI with product knowledge grounding",
    readiness: "High",
  },
  {
    title: "RFP & Quote Extraction",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Automatically extract requirements, line items, quantities, and evaluation criteria from RFPs and customer specifications. Populate quote templates and flag non-standard or high-risk requirements for review.",
    valueDrivers: ["60–80% reduction in manual RFP processing time", "Faster quote turnaround", "Fewer errors from manual transcription"],
    dataNeeds: "RFP documents (PDF, Word), historical quote data, product catalog",
    techFit: "Document AI, generative extraction, structured output validation",
    readiness: "High",
  },
  {
    title: "Configuration & Specification Guidance",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Guide customers and sales teams through complex product configurations, identifying compatible combinations and flagging incompatible or non-standard selections before order entry.",
    valueDrivers: ["Fewer configuration errors reaching production", "Faster sales cycle for complex products", "Reduced engineering queries on standard configurations"],
    dataNeeds: "Configuration rules, product option compatibility matrix, historical valid configurations",
    techFit: "Constraint-based recommendation, RAG over product specifications",
    readiness: "Medium–High",
  },
  {
    title: "Case Triage & Intelligent Routing",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Automatically classify inbound service cases by product, symptom, severity, and required expertise. Route to the right team with relevant context pre-populated — reducing resolution time and escalations.",
    valueDrivers: ["30–50% reduction in case resolution time", "Fewer misrouted escalations", "Better first-contact resolution rates"],
    dataNeeds: "Historical case records with resolutions, product taxonomy, team routing rules",
    techFit: "NLP classification, ML routing model",
    readiness: "High",
  },
  {
    title: "Proposal Drafting & Pricing Support",
    maturity: "Emerging",
    riskTier: "Tier 1",
    description: "AI-assisted proposal generation that assembles relevant product content, case studies, and value statements based on customer context. Pricing guidance based on deal parameters and historical win/loss data.",
    valueDrivers: ["40–60% faster first-draft proposal creation", "Improved proposal consistency and quality", "Better pricing confidence for sales teams"],
    dataNeeds: "Proposal library, win/loss data, pricing history, customer and deal attributes",
    techFit: "Generative AI with retrieval grounding, pricing ML model",
    readiness: "Medium",
  },
];

const maturityColor: Record<string, string> = {
  Proven: "bg-green-100 text-green-700",
  Emerging: "bg-yellow-100 text-yellow-700",
};

export default function CommercialService() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <span>→</span>
            <span>Commercial & Service</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">💼</span>
            <h1 className="text-4xl font-bold">Commercial & Service</h1>
          </div>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Commercial AI delivers fast, measurable value with lower OT risk than operations AI. Knowledge retrieval, document processing, and case management use cases have high data readiness and proven ROI.
          </p>
        </div>
      </section>

      <section className="py-10 bg-green-50 border-b border-green-200">
        <div className="container-narrow">
          <p className="text-green-800 font-semibold">
            Commercial AI is predominantly Tier 1 — human decisions remain in the loop at every step. This domain is often the best starting point for teams new to AI delivery: high value, clear data, fast cycle time.
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
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">{opp.riskTier}</span>
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
          <p className="text-slate-700 font-semibold">Commercial AI is a great Quick Win starting point</p>
          <Link href="/toolkit/opportunity-canvas" className="btn-primary whitespace-nowrap">
            Frame an Opportunity <ArrowRight className="inline ml-2 w-4 h-4" />
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
