import Link from "next/link";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Experiment Design & Planning",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI suggests experimental conditions based on prior results, literature, and design-of-experiment principles. Reduces the number of trials needed to reach formulation or process targets.",
    valueDrivers: ["40–60% reduction in experimental iterations", "Faster time to viable prototype", "Capture of tacit expert knowledge"],
    dataNeeds: "Structured experimental records, outcome labeling, materials database",
    techFit: "ML / Bayesian optimization, generative design",
    readiness: "Medium",
  },
  {
    title: "IP & Literature Knowledge Retrieval",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "RAG system over internal patents, publications, lab reports, and technical documents. Researchers answer questions and find prior art in seconds instead of hours.",
    valueDrivers: ["3–5x faster literature review", "Reduced duplicate experimentation", "Better leverage of existing IP"],
    dataNeeds: "Document corpus (PDF, structured), clean metadata and version control",
    techFit: "RAG / vector retrieval, generative AI",
    readiness: "High",
  },
  {
    title: "Design-Space Optimization",
    maturity: "Emerging",
    riskTier: "Tier 1",
    description: "Explore a multi-dimensional parameter space to identify formulations or configurations that satisfy multiple competing constraints simultaneously.",
    valueDrivers: ["Identify non-obvious solutions outside human search range", "Faster optimization of complex material systems"],
    dataNeeds: "Historical experiment results with full parameter logging, outcome metrics",
    techFit: "Bayesian optimization, surrogate modeling",
    readiness: "Medium",
  },
  {
    title: "Simulation Result Synthesis",
    maturity: "Emerging",
    riskTier: "Tier 1",
    description: "Process large volumes of FEA, CFD, or other simulation outputs to identify patterns, anomalies, and design rules. Reduce reliance on full simulation for routine evaluations.",
    valueDrivers: ["10–100x faster design evaluation", "Reduced simulation compute cost", "Broader design exploration"],
    dataNeeds: "Simulation input/output pairs, validated results for training",
    techFit: "Surrogate ML models, physics-informed neural networks",
    readiness: "Low–Medium",
  },
  {
    title: "Test Result Prediction",
    maturity: "Emerging",
    riskTier: "Tier 1",
    description: "Predict physical test outcomes from earlier-stage data to prioritize which candidates to physically test — reducing cycle time and material cost.",
    valueDrivers: ["Reduce physical testing volume by 20–40%", "Faster candidate screening"],
    dataNeeds: "Paired early-stage descriptors and final test results (multi-year history)",
    techFit: "Supervised ML, ensemble models",
    readiness: "Medium",
  },
];

const maturityColor: Record<string, string> = {
  Proven: "bg-green-100 text-green-700",
  Emerging: "bg-yellow-100 text-yellow-700",
  Exploratory: "bg-blue-100 text-blue-700",
};

const tierColor: Record<string, string> = {
  "Tier 1": "bg-green-100 text-green-700",
  "Tier 2": "bg-yellow-100 text-yellow-700",
  "Tier 3": "bg-red-100 text-red-700",
};

export default function RDInnovation() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <span>→</span>
            <span>R&D & Innovation</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🔬</span>
            <h1 className="text-4xl font-bold">R&D & Innovation</h1>
          </div>
          <p className="text-lg text-indigo-100 max-w-2xl">
            AI in R&D accelerates knowledge leverage, reduces experimental cycle time, and expands the design space explored — without replacing scientific judgment.
          </p>
        </div>
      </section>

      <section className="py-10 bg-indigo-50 border-b border-indigo-100">
        <div className="container-narrow">
          <p className="text-indigo-800 font-semibold">
            R&D AI typically operates at Tier 1 (recommendations to researchers) and carries lower operational risk than production AI. The primary challenge is data quality and experimental record structure.
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
          <p className="text-slate-700 font-semibold">Ready to frame an R&D AI opportunity?</p>
          <Link href="/toolkit/opportunity-canvas" className="btn-primary whitespace-nowrap">
            Use Opportunity Canvas <ArrowRight className="inline ml-2 w-4 h-4" />
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
