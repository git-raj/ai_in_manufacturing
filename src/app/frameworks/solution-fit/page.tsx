import Link from "next/link";
import { ArrowRight } from "lucide-react";

const techTypes = [
  {
    category: "Rule-Based Automation",
    when: "Process steps are deterministic and fully specified",
    examples: ["Document routing and classification", "Threshold-based alerts", "Data validation and transformation"],
    dataNeeds: "Structured data with clear rules",
    complexity: "Low",
    riskProfile: "Low",
    avoid: "When exceptions are frequent or rules change often",
    color: "green",
  },
  {
    category: "ML / Predictive Analytics",
    when: "Patterns exist in historical data that predict future outcomes",
    examples: ["Predictive maintenance", "Demand forecasting", "Defect prediction from process parameters"],
    dataNeeds: "Labeled historical data, ideally 12–24 months",
    complexity: "Medium",
    riskProfile: "Medium",
    avoid: "When historical data is sparse, biased, or doesn't reflect current operations",
    color: "blue",
  },
  {
    category: "Computer Vision",
    when: "The quality signal is visual and human inspection is the current method",
    examples: ["Visual defect inspection", "Assembly verification", "PPE compliance monitoring"],
    dataNeeds: "Labeled image dataset (thousands of examples per class)",
    complexity: "Medium–High",
    riskProfile: "Medium–High",
    avoid: "When lighting, angle, or product variation is uncontrolled",
    color: "purple",
  },
  {
    category: "Optimization (LP / MIP / Heuristic)",
    when: "The problem has a defined objective, constraints, and decision variables",
    examples: ["Production scheduling", "Inventory allocation", "Routing and capacity planning"],
    dataNeeds: "Clean constraint and cost data; real-time state feed",
    complexity: "Medium–High",
    riskProfile: "Medium",
    avoid: "When constraints are informal or frequently overridden by human judgment",
    color: "orange",
  },
  {
    category: "RAG / Knowledge Retrieval",
    when: "Experts spend time searching for information in documents, standards, or procedures",
    examples: ["Engineering standards assistant", "Maintenance procedure lookup", "Compliance document Q&A"],
    dataNeeds: "Clean, chunked document corpus; metadata tagging",
    complexity: "Low–Medium",
    riskProfile: "Low–Medium",
    avoid: "When source documents are outdated, contradictory, or not trusted by users",
    color: "teal",
  },
  {
    category: "Generative AI Copilot",
    when: "Knowledge workers draft, review, or synthesize content repeatedly",
    examples: ["RFP and proposal drafting", "Deviation and CAPA report writing", "Meeting summarization"],
    dataNeeds: "Relevant context documents; clear output format",
    complexity: "Low–Medium",
    riskProfile: "Low–Medium",
    avoid: "When output accuracy is safety-critical and verification is impractical",
    color: "indigo",
  },
  {
    category: "Autonomous Agents",
    when: "Multi-step workflows require coordination across systems without human intervention",
    examples: ["Supplier monitoring and escalation", "Multi-system data gathering and reporting", "Automated investigation workflows"],
    dataNeeds: "Reliable APIs, clear action boundaries, comprehensive logging",
    complexity: "High",
    riskProfile: "High",
    avoid: "Before proving each step individually; never on safety-critical production systems without Tier 3 governance",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  green: "border-l-green-500 bg-green-50",
  blue: "border-l-blue-500 bg-blue-50",
  purple: "border-l-purple-500 bg-purple-50",
  orange: "border-l-orange-500 bg-orange-50",
  teal: "border-l-teal-500 bg-teal-50",
  indigo: "border-l-indigo-500 bg-indigo-50",
  red: "border-l-red-500 bg-red-50",
};

const badgeColor: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  "Medium–High": "bg-orange-100 text-orange-700",
  "Low–Medium": "bg-blue-100 text-blue-700",
  High: "bg-red-100 text-red-700",
};

export default function SolutionFit() {
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
            <span>Technology-Fit Decision Guide</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Technology-Fit Decision Guide</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Match your problem to the right technology. The most common mistake is selecting a solution before understanding the problem. Use this guide to evaluate fit before committing to a technology path.
          </p>
        </div>
      </section>

      {/* Decision Rule */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold text-lg">
            Golden rule: Start with the simplest technology that solves the problem. Complexity should be earned by evidence, not assumed by ambition.
          </p>
        </div>
      </section>

      {/* Tech Types */}
      <section className="py-16">
        <div className="container-narrow space-y-6">
          {techTypes.map((tech) => (
            <div
              key={tech.category}
              className={`card border-l-4 ${colorMap[tech.color]}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h2 className="text-xl font-bold text-slate-900">{tech.category}</h2>
                <div className="flex gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor[tech.complexity] ?? "bg-slate-100 text-slate-700"}`}>
                    Complexity: {tech.complexity}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor[tech.riskProfile] ?? "bg-slate-100 text-slate-700"}`}>
                    Risk: {tech.riskProfile}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4">
                <strong>Use when:</strong> {tech.when}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Manufacturing Examples</p>
                  <ul className="space-y-1">
                    {tech.examples.map((ex, i) => (
                      <li key={i} className="text-slate-600 flex gap-1">
                        <span className="text-indigo-400">•</span> {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Data Requirements</p>
                  <p className="text-slate-600">{tech.dataNeeds}</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-600 mb-2">Avoid When</p>
                  <p className="text-slate-600">{tech.avoid}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selection Checklist */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Before You Commit to a Technology</h2>
          <p className="text-slate-600 mb-8">Run through these questions before selecting any approach.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Can I clearly state the decision or task this technology will improve?",
              "Do I know who the user is and how they will interact with the output?",
              "Have I assessed the data — volume, quality, labeling, freshness?",
              "Is the simplest option (rules, lookup, formula) already ruled out?",
              "Have I identified the risk tier and engaged the right reviewers?",
              "Is there a named process owner who will own the solution after delivery?",
              "Do I have a hypothesis for what success looks like, in measurable terms?",
              "Have I considered the downstream workflow impact if the system is wrong?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-400 font-bold text-sm flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-slate-700">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-indigo-50">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Ready to frame an opportunity?</h3>
            <p className="text-slate-600 text-sm">Use the Opportunity Canvas to document your problem and solution hypothesis.</p>
          </div>
          <Link href="/toolkit/opportunity-canvas" className="btn-primary whitespace-nowrap">
            Open Canvas <ArrowRight className="inline ml-2 w-4 h-4" />
          </Link>
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
