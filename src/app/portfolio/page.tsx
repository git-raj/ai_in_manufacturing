import Link from "next/link";
import { TrendingUp, Target, CheckCircle } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Portfolio & Value</h1>
          <p className="text-lg text-indigo-100">
            Prioritize opportunities, fund smart decisions, and prove value realization. See your portfolio in motion.
          </p>
        </div>
      </section>

      {/* Core Tools */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link href="/portfolio/scorecard" className="card-hover">
              <div className="flex items-center justify-between mb-3">
                <Target className="w-6 h-6 text-indigo-600" />
                <span className="text-xs font-bold px-2 py-1 bg-indigo-100 text-indigo-600 rounded">
                  SELECT
                </span>
              </div>
              <h3 className="font-bold mb-2">Weighted Scorecard</h3>
              <p className="text-sm text-slate-600">
                Score and rank opportunities on business value, readiness, strategic fit, and risk.
              </p>
            </Link>

            <Link href="/portfolio/business-case" className="card-hover">
              <div className="flex items-center justify-between mb-3">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-600 rounded">
                  BUILD
                </span>
              </div>
              <h3 className="font-bold mb-2">Business Case</h3>
              <p className="text-sm text-slate-600">
                Define value types, formulas, benefit owners, and realization mechanisms.
              </p>
            </Link>

            <Link href="/portfolio/pilot-to-scale" className="card-hover">
              <div className="flex items-center justify-between mb-3">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-600 rounded">
                  SCALE
                </span>
              </div>
              <h3 className="font-bold mb-2">Pilot to Scale</h3>
              <p className="text-sm text-slate-600">
                Move from proof to production. Design operating model, support, and monitoring.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Lanes */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Portfolio Lanes</h2>
          <p className="text-slate-600 mb-8">
            Don't manage every idea at the same level. Use a balanced portfolio with intentional lanes.
          </p>

          <div className="space-y-6">
            {[
              {
                lane: "Quick Wins",
                duration: "4–12 weeks",
                characteristics: [
                  "High readiness",
                  "Bounded workflow",
                  "Visible local value",
                ],
                success: "Trust, adoption, savings, reusable pattern",
                examples: "Quality dashboard, anomaly alert, knowledge search",
              },
              {
                lane: "Strategic Bets",
                duration: "1–4 quarters",
                characteristics: [
                  "High business value",
                  "Multiple dependencies",
                  "Cross-functional impact",
                ],
                success: "Differentiated capability or material operating impact",
                examples: "Predictive maintenance at scale, supply-chain planning",
              },
              {
                lane: "Foundation Investments",
                duration: "1–4 quarters",
                characteristics: [
                  "Shared identity, data, knowledge",
                  "Evaluation platform",
                  "Governance capability",
                ],
                success: "Multiple use cases become faster, safer, cheaper",
                examples: "Data lake, evaluation framework, AI platform",
              },
              {
                lane: "Explore / Learn",
                duration: "2–6 weeks",
                characteristics: [
                  "Uncertain technology",
                  "Uncertain value",
                  "Learning is valid objective",
                ],
                success: "Clear decision: advance, reframe, or stop",
                examples: "Agent experiment, GenAI POC, novel algorithm test",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-indigo-600">
                    {item.lane}
                  </h4>
                  <span className="text-sm font-semibold text-slate-500">
                    {item.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-2">
                      CHARACTERISTICS
                    </p>
                    <ul className="space-y-1">
                      {item.characteristics.map((char, i) => (
                        <li key={i} className="text-sm text-slate-700">
                          • {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-2">
                      SUCCESS LOOKS LIKE
                    </p>
                    <p className="text-sm text-slate-700">{item.success}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-2">
                      EXAMPLES
                    </p>
                    <p className="text-sm text-slate-700">{item.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-section-title">Innovation Funnel Health</h2>
          <p className="text-slate-600 mb-8">
            A healthy funnel shows progressive evidence, not just high intake volume.
          </p>

          <div className="space-y-3">
            {[
              {
                stage: "Signals",
                what: "Raw ideas and pain points",
                healthy:
                  "Broad input from business, operations, plants, and functions",
              },
              {
                stage: "Qualified Opportunities",
                what: "Clear sponsor, process, outcome",
                healthy: "Low-quality tech-first requests filtered early",
              },
              {
                stage: "Shaped Opportunities",
                what: "Canvas, options, baseline, risk view",
                healthy: "Leaders can compare apples to apples",
              },
              {
                stage: "Funded Proofs",
                what: "Time-boxed charters with success/stop thresholds",
                healthy: "Organization can confidently say no to weak ideas",
              },
              {
                stage: "Scaled Products",
                what: "Integrated, governed, supported in operations",
                healthy:
                  "Most investment focused on limited, scalable priorities",
              },
              {
                stage: "Realized Value",
                what: "Finance-confirmed benefits after launch",
                healthy: "Benefits tracked, not merely forecast",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card flex items-start gap-4 border-l-4 border-l-indigo-600"
              >
                <div className="text-lg font-bold text-indigo-600 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-1">{item.stage}</h4>
                  <p className="text-sm text-slate-600 mb-1">
                    <strong>What is counted:</strong> {item.what}
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Healthy sign:</strong> {item.healthy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Decisions */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Funding Decisions</h2>
          <div className="card">
            <p className="text-slate-600 mb-6">
              Use your scorecard and portfolio balance to make decisions:
            </p>

            <div className="space-y-3">
              {[
                {
                  decision: "Fund Now",
                  criteria: [
                    "Score ≥ 80",
                    "Sponsor & process owner confirmed",
                    "Data access path clear",
                    "Risk tier and controls acceptable",
                  ],
                  action: "Move to pilot charter and steering cadence",
                },
                {
                  decision: "Fund in Sequence",
                  criteria: [
                    "Score 60–79",
                    "Readiness dependent on completion of higher-priority work",
                    "Clear dependency or resource constraint",
                  ],
                  action: "Add to backlog; schedule based on capacity",
                },
                {
                  decision: "Park",
                  criteria: [
                    "Score 40–59",
                    "Valuable but lower readiness or priority",
                    "May resurface when strategic context changes",
                  ],
                  action: "Revisit quarterly; maintain summary and sponsorship",
                },
                {
                  decision: "Stop",
                  criteria: [
                    "Score < 40",
                    "Unclear problem definition or low business value",
                    "Duplicate effort or superseded by another opportunity",
                  ],
                  action:
                    "Archive decision record; communicate decision and why",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded p-4 bg-white"
                >
                  <h4 className="font-bold text-slate-900 mb-2">
                    {item.decision}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600 font-semibold mb-1">
                        Criteria
                      </p>
                      <ul className="space-y-1 text-slate-700">
                        {item.criteria.map((crit, i) => (
                          <li key={i}>• {crit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-slate-600 font-semibold mb-1">
                        Action
                      </p>
                      <p className="text-slate-700">{item.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
