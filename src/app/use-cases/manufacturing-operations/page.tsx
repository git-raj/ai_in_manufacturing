import Link from "next/link";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Predictive Maintenance & Downtime Prevention",
    maturity: "Proven",
    riskTier: "Tier 1–2",
    description: "Predict equipment failures before they occur using sensor data, vibration analysis, and maintenance history. Alert maintenance teams in advance to enable planned intervention instead of emergency repair.",
    valueDrivers: ["20–40% reduction in unplanned downtime", "15–25% reduction in maintenance cost", "Extended asset life through optimal intervention timing"],
    dataNeeds: "Historian data (vibration, temperature, pressure), maintenance records, failure history (18+ months)",
    techFit: "Time-series ML, anomaly detection, survival analysis",
    readiness: "High",
  },
  {
    title: "Anomaly Detection on Sensor Streams",
    maturity: "Proven",
    riskTier: "Tier 1–2",
    description: "Continuously monitor process sensor streams to detect abnormal patterns that indicate process drift, equipment degradation, or material variation — before they cause yield loss or quality escapes.",
    valueDrivers: ["Early detection: hours to days before visible defect", "Reduced scrap and rework", "Operator focus on genuine anomalies (reduced noise)"],
    dataNeeds: "Clean, tagged sensor streams with labeled historical anomaly examples",
    techFit: "Unsupervised anomaly detection, LSTM autoencoders, statistical process monitoring",
    readiness: "High",
  },
  {
    title: "Root-Cause Support & Investigation Guidance",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI-assisted investigation that correlates process parameters, material lots, equipment history, and operator actions to identify probable root causes of defects or failures. Reduces investigation time and improves consistency.",
    valueDrivers: ["50–70% faster root-cause investigations", "More consistent investigation quality", "Capture and reuse of institutional knowledge"],
    dataNeeds: "Process historian, quality records, maintenance logs, correlatable event timestamps",
    techFit: "Correlation analysis, causal inference, RAG over investigation history",
    readiness: "Medium",
  },
  {
    title: "Scheduling & Throughput Optimization",
    maturity: "Emerging",
    riskTier: "Tier 2",
    description: "Optimize production schedules dynamically based on demand, capacity, tooling availability, material readiness, and changeover costs. Improve throughput and on-time delivery without expanding capacity.",
    valueDrivers: ["5–15% throughput improvement", "Improved OTD without capacity investment", "Reduced changeover waste"],
    dataNeeds: "Real-time machine status, work order data, changeover matrices, constraint model",
    techFit: "Mixed-integer optimization, reinforcement learning, constraint programming",
    readiness: "Medium",
  },
  {
    title: "Operator Knowledge & Procedure Guidance",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "AI assistant that helps operators find the right procedure, troubleshoot issues, and access relevant process knowledge without leaving the production environment. Particularly valuable for complex, high-mix production.",
    valueDrivers: ["Faster operator onboarding (30–50%)", "Reduced errors from procedure non-compliance", "Preservation of expert knowledge"],
    dataNeeds: "Work instructions, SOPs, troubleshooting guides, equipment manuals",
    techFit: "RAG / generative AI with safety-appropriate output controls",
    readiness: "High",
  },
];

const maturityColor: Record<string, string> = {
  Proven: "bg-green-100 text-green-700",
  Emerging: "bg-yellow-100 text-yellow-700",
};

const tierColor: Record<string, string> = {
  "Tier 1": "bg-green-100 text-green-700",
  "Tier 1–2": "bg-yellow-100 text-yellow-700",
  "Tier 2": "bg-orange-100 text-orange-700",
};

export default function ManufacturingOperations() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <span>→</span>
            <span>Manufacturing Operations</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🏭</span>
            <h1 className="text-4xl font-bold">Manufacturing Operations</h1>
          </div>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Operations AI delivers some of the highest ROI in manufacturing — but also the highest risk. OT security, safety review, and manual fallback procedures are mandatory before any pilot in this domain.
          </p>
        </div>
      </section>

      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold">
            Operations AI sits at the OT/IT boundary. Always complete the OT security review, confirm data access paths, and document manual fallback procedures before starting a pilot. Default to Tier 2 governance.
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

      <section className="py-12 bg-amber-50">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 font-semibold">Understand OT governance requirements before piloting</p>
          <Link href="/governance/ot-guardrails" className="btn-primary whitespace-nowrap">
            Review OT Guardrails <ArrowRight className="inline ml-2 w-4 h-4" />
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
