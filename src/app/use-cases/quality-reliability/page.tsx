import Link from "next/link";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Visual Inspection with Computer Vision",
    maturity: "Proven",
    riskTier: "Tier 2–3",
    description: "Replace or augment manual visual inspection with computer vision models trained to detect surface defects, dimensional non-conformances, assembly errors, and contamination. Operate at line speed with consistent detection.",
    valueDrivers: ["5–10x throughput vs. manual inspection", "Consistent detection rate regardless of inspector fatigue", "Real-time feedback to production for immediate correction"],
    dataNeeds: "Labeled image dataset (thousands per defect class), consistent lighting and imaging setup",
    techFit: "Computer vision (CNN, YOLO, ViT), edge inference for real-time",
    readiness: "High (if imaging infrastructure exists)",
  },
  {
    title: "Defect Classification & Severity Prediction",
    maturity: "Proven",
    riskTier: "Tier 2",
    description: "Classify detected defects by type, severity, and likely root cause. Predict whether a defect is a rework candidate, scrap, or use-as-is. Support disposition decisions with evidence rather than judgment alone.",
    valueDrivers: ["More consistent disposition decisions", "Reduced scrap through accurate severity classification", "Faster disposition cycle time"],
    dataNeeds: "Historical inspection data with defect types, severities, and dispositions",
    techFit: "Supervised ML classification, computer vision with multi-label output",
    readiness: "Medium–High",
  },
  {
    title: "Deviation Investigation & CAPA Support",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI-assisted investigation workflow that surfaces relevant process history, similar prior deviations, and probable contributing factors. Supports CAPA drafting with structured analysis and regulatory-appropriate language.",
    valueDrivers: ["50–70% faster investigation cycle", "More complete root cause analysis", "Better CAPA effectiveness and regulatory defensibility"],
    dataNeeds: "NCR/deviation database, process historian, structured investigation records with outcomes",
    techFit: "RAG over investigation history, NLP for report generation",
    readiness: "Medium",
  },
  {
    title: "SPC Augmentation & Run-Rule Automation",
    maturity: "Proven",
    riskTier: "Tier 2",
    description: "Extend traditional SPC with ML-based detection of subtle process shifts, multivariate correlations, and complex run patterns that standard rules miss. Alert appropriate personnel with context-rich notifications.",
    valueDrivers: ["Earlier detection of process shifts", "Reduced false positives vs. naive multivariate monitoring", "Operator workload reduction through smarter alerting"],
    dataNeeds: "Process and quality measurement streams, labeled historical fault events",
    techFit: "Multivariate SPC, ML anomaly detection, time-series analysis",
    readiness: "High",
  },
  {
    title: "Quality Document Intelligence",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Retrieve relevant quality standards, procedures, inspection criteria, and regulatory requirements for any product, process, or customer specification. Reduce time spent searching quality systems.",
    valueDrivers: ["2–3 hours/week saved per quality engineer", "Improved first-time-right on quality documentation", "Faster response to customer and regulatory queries"],
    dataNeeds: "Quality procedures, customer specifications, regulatory documents, version-controlled corpus",
    techFit: "RAG / semantic search over quality document library",
    readiness: "High",
  },
];

const maturityColor: Record<string, string> = {
  Proven: "bg-green-100 text-green-700",
  Emerging: "bg-yellow-100 text-yellow-700",
};

const tierColor: Record<string, string> = {
  "Tier 1": "bg-green-100 text-green-700",
  "Tier 2": "bg-orange-100 text-orange-700",
  "Tier 2–3": "bg-red-100 text-red-700",
};

export default function QualityReliability() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <span>→</span>
            <span>Quality & Reliability</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">✓</span>
            <h1 className="text-4xl font-bold">Quality & Reliability</h1>
          </div>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Quality AI delivers consistent inspection, faster investigations, and earlier process control — but carries the highest governance requirements in manufacturing due to product safety and regulatory implications.
          </p>
        </div>
      </section>

      <section className="py-10 bg-red-50 border-b border-red-200">
        <div className="container-narrow">
          <p className="text-red-800 font-semibold">
            Quality AI impacts product conformance and may have regulatory implications. Visual inspection systems replacing human inspection are Tier 2–3. All quality AI must include human verification at critical release points.
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
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${tierColor[opp.riskTier] ?? "bg-slate-100 text-slate-700"}`}>{opp.riskTier}</span>
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

      <section className="py-12 bg-red-50">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 font-semibold">Classify quality AI risk before piloting</p>
          <Link href="/governance/risk-tiers" className="btn-primary whitespace-nowrap">
            Review Risk Tiers <ArrowRight className="inline ml-2 w-4 h-4" />
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
