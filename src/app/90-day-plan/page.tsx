import Link from "next/link";
import { CheckCircle2, Calendar, Target } from "lucide-react";

export default function NinetyDayPlan() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Your First 90 Days</h1>
          <p className="text-lg text-emerald-100">
            A roadmap for establishing yourself as an AI innovation leader and launching your first pilots.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-emerald-50">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <Calendar className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-2xl font-bold">30 days</p>
              <p className="text-sm text-slate-600">Listen & Learn</p>
            </div>

            <div className="card">
              <Target className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-2xl font-bold">60 days</p>
              <p className="text-sm text-slate-600">Shape & Score</p>
            </div>

            <div className="card">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-2xl font-bold">90 days</p>
              <p className="text-sm text-slate-600">Fund & Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Months */}
      <section className="py-16">
        <div className="container-narrow space-y-8">
          {/* Month 1 */}
          <div className="card border-l-4 border-l-blue-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 font-bold text-xl">
                1
              </div>
              <div>
                <h2 className="text-2xl font-bold">Month 1: Listen & Learn</h2>
                <p className="text-slate-600">Establish credibility and understand the landscape</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  week: "Week 1–2",
                  actions: [
                    "Meet your leadership sponsor and understand expectations",
                    "Identify and interview key stakeholders: operations, quality, engineering, data, finance",
                    "Understand current strategic priorities and pain points",
                    "Learn the organizational structure and decision-making process",
                  ],
                },
                {
                  week: "Week 2–3",
                  actions: [
                    "Visit plants / field locations to understand real operations",
                    "Observe decision-making workflows first-hand",
                    "Identify frontline experts and champions",
                    "Document initial opportunity themes",
                  ],
                },
                {
                  week: "Week 3–4",
                  actions: [
                    "Map stakeholders and influence paths",
                    "Identify 3–5 potential high-value opportunity themes",
                    "Schedule first discovery workshops",
                    "Prepare leadership briefing on findings",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded">
                  <h4 className="font-bold text-blue-600 mb-2">{item.week}</h4>
                  <ul className="space-y-1">
                    {item.actions.map((action, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 flex gap-2"
                      >
                        <span className="text-blue-500">✓</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                <p className="font-bold text-blue-900 mb-2">Month 1 Deliverable:</p>
                <p className="text-sm text-blue-800">
                  Stakeholder map, 3–5 qualified opportunity themes, strategic context, identified champions
                </p>
              </div>
            </div>
          </div>

          {/* Month 2 */}
          <div className="card border-l-4 border-l-amber-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100 text-amber-600 font-bold text-xl">
                2
              </div>
              <div>
                <h2 className="text-2xl font-bold">Month 2: Shape & Score</h2>
                <p className="text-slate-600">
                  Turn opportunities into decision-ready briefs
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  week: "Week 5–6",
                  actions: [
                    "Run first discovery workshop (90 min) with leadership team",
                    "Facilitate structured discovery on top 3 opportunities",
                    "Capture baseline metrics and baseline processes",
                    "Map data sources and availability",
                  ],
                },
                {
                  week: "Week 7–8",
                  actions: [
                    "Complete Opportunity Canvases for top 3 opportunities",
                    "Conduct follow-up discovery interviews with SMEs",
                    "Preliminary risk and readiness assessment",
                    "Identify data gaps and collection plans",
                  ],
                },
                {
                  week: "Week 9–10",
                  actions: [
                    "Prepare opportunity scorecards (rough scoring)",
                    "Confirm sponsors and process owners for each",
                    "Begin preliminary architecture and solution optioning",
                    "Draft governance and risk-tier recommendations",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded">
                  <h4 className="font-bold text-amber-600 mb-2">{item.week}</h4>
                  <ul className="space-y-1">
                    {item.actions.map((action, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 flex gap-2"
                      >
                        <span className="text-amber-500">✓</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-amber-50 border border-amber-200 rounded p-4 mt-4">
                <p className="font-bold text-amber-900 mb-2">Month 2 Deliverable:</p>
                <p className="text-sm text-amber-800">
                  3 complete Opportunity Canvases, weighted scorecards, sponsor commitments, preliminary risk tiers, baseline metrics for top 2 opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Month 3 */}
          <div className="card border-l-4 border-l-emerald-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 font-bold text-xl">
                3
              </div>
              <div>
                <h2 className="text-2xl font-bold">Month 3: Fund & Launch</h2>
                <p className="text-slate-600">
                  Secure funding and launch pilots
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  week: "Week 11–12",
                  actions: [
                    "Present opportunities to Portfolio Council",
                    "Secure funding decisions (fund, sequence, park, stop)",
                    "Confirm top 2 pilots with sponsors",
                    "Final scoring and ranking",
                  ],
                },
                {
                  week: "Week 13",
                  actions: [
                    "Create pilot charters for funded opportunities",
                    "Define success criteria and measurement plan",
                    "Confirm data access and technical setup",
                    "Schedule kick-off and steering reviews",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded">
                  <h4 className="font-bold text-emerald-600 mb-2">
                    {item.week}
                  </h4>
                  <ul className="space-y-1">
                    {item.actions.map((action, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 flex gap-2"
                      >
                        <span className="text-emerald-500">✓</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-emerald-50 border border-emerald-200 rounded p-4 mt-4">
                <p className="font-bold text-emerald-900 mb-2">Month 3 Deliverable:</p>
                <p className="text-sm text-emerald-800">
                  Portfolio decision, 2 pilot charters, funded initiatives, committed sponsors and teams, steering calendar established
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Key Success Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                factor: "Get Visible Wins Early",
                action: "One quick-win discovery in month 1 builds credibility for harder conversations",
              },
              {
                factor: "Involve Frontline Users",
                action: "Meet shift teams, engineers, and planners. Their reality trumps executive assumptions",
              },
              {
                factor: "Be Radically Clear About Uncertainty",
                action: "Say 'we don't know' and 'here's what we need to learn' rather than overselling",
              },
              {
                factor: "Document Everything",
                action: "Scorecards, canvases, decision logs ensure continuity even if there's leadership change",
              },
              {
                factor: "Build Coalition, Not Consensus",
                action: "Get named sponsors and owners. You don't need everyone to agree to move",
              },
              {
                factor: "Celebrate Learning",
                action:
                  "When a pilot learns something, even if the idea doesn't scale, make it visible",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h4 className="font-bold text-indigo-600 mb-2">
                  {item.factor}
                </h4>
                <p className="text-sm text-slate-600">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="container-narrow text-center">
          <h2 className="text-section-title">After 90 Days</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            You should have a repeatable motion: intake → discovery → scoring → funding → pilots → value realization. Scale and iterate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/start-here" className="btn-primary">
              Start Here
            </Link>
            <Link href="/operating-system" className="btn-secondary">
              Learn Operating System
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
