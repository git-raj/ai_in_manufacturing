import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const evalDimensions = [
  {
    dimension: "Accuracy & Performance",
    description: "Does the model produce correct outputs at acceptable rates?",
    metrics: ["Precision, recall, F1 (classification)", "MAE, RMSE (regression/forecasting)", "False positive rate (anomaly detection)", "Top-K accuracy (retrieval/RAG)"],
    questions: [
      "What accuracy is needed for the decision this supports?",
      "How does performance vary across different conditions, shifts, or products?",
      "What is the cost of a false positive vs. a false negative?",
      "Has the model been tested on data it has not seen in training?",
    ],
  },
  {
    dimension: "Safety & Bias",
    description: "Does the model behave safely across its operating range?",
    metrics: ["Performance across demographic or operational subgroups", "Failure mode analysis", "Adversarial input testing", "Out-of-distribution detection"],
    questions: [
      "Are there sub-populations (products, shifts, operators) where performance degrades?",
      "What happens at the edges of the training distribution?",
      "Has the model been tested with deliberately noisy or adversarial inputs?",
      "Are there known biases in the training data that affect real-world deployment?",
    ],
  },
  {
    dimension: "Explainability",
    description: "Can the system explain its outputs to the people who use them?",
    metrics: ["Feature importance scores (SHAP, LIME)", "Confidence intervals on outputs", "User comprehension testing", "Audit trail completeness"],
    questions: [
      "Do users need to understand why the model made a recommendation?",
      "Can the model's reasoning be traced for regulatory or quality audit purposes?",
      "Are confidence levels communicated to users, or just point predictions?",
      "Does the explanation change user behavior in the intended direction?",
    ],
  },
  {
    dimension: "Drift & Stability",
    description: "Does performance remain acceptable as data and conditions change?",
    metrics: ["Data drift: distribution shift in features", "Concept drift: change in target variable relationship", "Model performance over time (PSI, KL divergence)", "Alert sensitivity and specificity"],
    questions: [
      "What monitoring is in place to detect data quality degradation?",
      "How quickly does performance degrade after a process change?",
      "Is there a defined threshold at which the model is suspended?",
      "What triggers a retraining or recalibration?",
    ],
  },
  {
    dimension: "Integration & Workflow Fit",
    description: "Does the solution work in the actual operating environment?",
    metrics: ["System availability / uptime", "Response latency under load", "User adoption rate and frequency", "Fallback activation frequency"],
    questions: [
      "Does the AI output arrive in time to be useful for the decision?",
      "Is the interface integrated into the workflow or requires context switching?",
      "What happens to the workflow when the system is unavailable?",
      "Have operators been trained and do they trust the system?",
    ],
  },
  {
    dimension: "Value Realization",
    description: "Does the use case deliver measurable business impact?",
    metrics: ["Baseline vs. current KPI comparison", "Adoption metric (% decisions assisted)", "Outcome metric (defect rate, downtime, cost)", "Time-to-value from pilot to scale"],
    questions: [
      "Was a pre-pilot baseline captured with the same measurement methodology?",
      "Is the improvement attributable to the AI system or to confounding changes?",
      "Has the value been validated by the business owner, not just the project team?",
      "Is the improvement sustained at 30, 60, and 90 days post-deployment?",
    ],
  },
];

const evalStages = [
  { stage: "Pre-Pilot", activities: ["Define success criteria and acceptance thresholds", "Capture baseline metrics", "Complete data quality assessment", "Identify evaluation dataset (held-out test set)", "Confirm risk tier and required controls"], timing: "Before pilot approval" },
  { stage: "During Pilot", activities: ["Track model performance on held-out data weekly", "Collect user feedback on output quality and usability", "Monitor data drift and system availability", "Document anomalies and edge cases observed", "Run fallback procedure drill"], timing: "Weekly cadence" },
  { stage: "Pilot Readout", activities: ["Compare all six evaluation dimensions against thresholds", "Present realized vs. hypothesized value", "Document failure modes observed and mitigations applied", "Governance review and scale/stop/revise decision", "Capture lessons learned for portfolio library"], timing: "At pilot end gate" },
  { stage: "Post-Scale Monitoring", activities: ["Automated drift monitoring with alerting", "Quarterly performance review with process owner", "Annual model revalidation or trigger-based revalidation", "Continuous user adoption tracking", "Value realization reporting to sponsor"], timing: "Ongoing" },
];

export default function Evaluation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-red-200 text-sm mb-4">
            <Link href="/governance" className="hover:text-white transition-colors">
              Governance
            </Link>
            <span>→</span>
            <span>Evaluation Approach</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Evaluation Framework</h1>
          <p className="text-lg text-red-100 max-w-2xl">
            A structured approach to testing safety, accuracy, drift, and business value before and after scale. Evaluation is not a final gate — it is an ongoing practice.
          </p>
        </div>
      </section>

      {/* Principle */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="container-narrow">
          <p className="text-amber-800 font-semibold text-lg">
            You cannot evaluate what you did not baseline. Capture the current state before the pilot starts — including the cost of the current process, error rate, and time spent. Without a baseline, there is no proof of value.
          </p>
        </div>
      </section>

      {/* Evaluation Dimensions */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Six Evaluation Dimensions</h2>
          <p className="text-slate-600 mb-8">
            Every AI use case must be evaluated across all six dimensions before a scale decision.
          </p>
          <div className="space-y-6">
            {evalDimensions.map((dim, i) => (
              <div key={dim.dimension} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl font-black text-indigo-100 leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{dim.dimension}</h3>
                    <p className="text-slate-600 text-sm">{dim.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-700 mb-2">Key Metrics</p>
                    <ul className="space-y-1">
                      {dim.metrics.map((m, j) => (
                        <li key={j} className="text-slate-600 flex gap-1">
                          <span className="text-indigo-400">•</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-semibold text-slate-700 mb-2">Questions to Answer</p>
                    <ul className="space-y-1">
                      {dim.questions.map((q, j) => (
                        <li key={j} className="text-slate-600 flex gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Lifecycle */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Evaluation Through the Lifecycle</h2>
          <div className="space-y-4">
            {evalStages.map((stage) => (
              <div key={stage.stage} className="card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-indigo-700">{stage.stage}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 rounded">{stage.timing}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {stage.activities.map((a, i) => (
                    <li key={i} className="text-sm text-slate-600 flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Decision */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">The Scale Decision</h2>
          <p className="text-slate-600 mb-6">At the pilot readout, one of four decisions must be made explicitly — not deferred.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { decision: "Scale", color: "green", criteria: "All evaluation thresholds met. Business value validated. Process owner committed. Controls confirmed." },
              { decision: "Revise", color: "yellow", criteria: "Most thresholds met but specific gaps identified. Targeted improvement plan with named owner and timeline." },
              { decision: "Extend Pilot", color: "blue", criteria: "Insufficient data to decide. Specific question to answer in extended period. Time-boxed, not indefinite." },
              { decision: "Stop", color: "red", criteria: "Value hypothesis not supported. Data not available. Risk exceeds benefit. Resources better deployed elsewhere." },
            ].map((item) => (
              <div key={item.decision} className={`card border-t-4 ${
                item.color === "green" ? "border-t-green-500" :
                item.color === "yellow" ? "border-t-yellow-500" :
                item.color === "blue" ? "border-t-blue-500" :
                "border-t-red-500"
              }`}>
                <h4 className={`font-bold text-lg mb-2 ${
                  item.color === "green" ? "text-green-700" :
                  item.color === "yellow" ? "text-yellow-700" :
                  item.color === "blue" ? "text-blue-700" :
                  "text-red-700"
                }`}>{item.decision}</h4>
                <p className="text-sm text-slate-600">{item.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-6 container-narrow flex flex-wrap gap-4">
        <Link href="/governance" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← Back to Governance
        </Link>
        <Link href="/governance/risk-tiers" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          Risk Tiers →
        </Link>
      </div>
    </div>
  );
}
