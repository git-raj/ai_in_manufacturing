import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OperatingSystem() {
  const stages = [
    {
      id: "sense",
      name: "1. Sense",
      icon: "👁️",
      goal: "Capture signals worth exploring.",
      activities: [
        "Executive listening",
        "Frontline observation",
        "Strategic scans",
        "Idea intake",
      ],
      artifact: "Signal card",
      decision: "Explore, redirect, defer, or decline",
      criteria: [
        "A named source or sponsor",
        "A recognizable process or outcome",
        "A reason it matters now",
      ],
    },
    {
      id: "shape",
      name: "2. Shape",
      icon: "🔨",
      goal: "Convert an idea into a defined opportunity.",
      activities: [
        "Process mapping",
        "User interviews",
        "Baseline capture",
        "Solution optioning",
      ],
      artifact: "Opportunity canvas",
      decision: "Advance to scoring, rework, or stop",
      criteria: [
        "Defined user and workflow",
        "Measurable baseline",
        "At least two solution options",
        "Preliminary risk assessment",
      ],
    },
    {
      id: "select",
      name: "3. Select",
      icon: "⚖️",
      goal: "Allocate scarce discovery/pilot capacity.",
      activities: [
        "Weighted scoring",
        "Sponsorship confirmation",
        "Portfolio balancing",
        "Dependency review",
      ],
      artifact: "Scorecard and decision record",
      decision: "Fund, sequence, park, or stop",
      criteria: [
        "Named executive sponsor",
        "Value hypothesis confirmed",
        "Data and access path clear",
        "Risk tier and controls defined",
      ],
    },
    {
      id: "prove",
      name: "4. Prove",
      icon: "✓",
      goal: "Test technical viability and user value.",
      activities: [
        "Prototype/pilot",
        "Evaluation",
        "User testing",
        "Measurement",
      ],
      artifact: "Pilot scorecard and findings",
      decision: "Scale, revise, contain, or stop",
      criteria: [
        "User adoption threshold met",
        "Quality thresholds met",
        "Workflow impact measured",
        "Production ownership ready",
      ],
    },
    {
      id: "scale",
      name: "5. Scale",
      icon: "📈",
      goal: "Embed and industrialize the solution.",
      activities: [
        "Integration",
        "Monitoring setup",
        "Training",
        "Deployment",
      ],
      artifact: "Production business case",
      decision: "Scale, hold, or retire",
      criteria: [
        "Operating model defined",
        "Support structure ready",
        "Monitoring live",
        "Release waves planned",
      ],
    },
    {
      id: "sustain",
      name: "6. Sustain",
      icon: "🔄",
      goal: "Realize value and continuously improve.",
      activities: [
        "Benefit tracking",
        "Quality monitoring",
        "Feedback collection",
        "Reuse and learning",
      ],
      artifact: "Value-realization report",
      decision: "Continue, optimize, or retire",
      criteria: [
        "Baseline vs. realized value confirmed",
        "Adoption sustained",
        "Controls monitoring live",
        "Lessons captured",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            The Six-Stage Operating System
          </h1>
          <p className="text-xl text-slate-200">
            A durable model for managing the complete opportunity lifecycle. Separate ideation from delivery. Create shared artifacts. Nothing is lost in handoff.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <div className="card bg-indigo-50 border-indigo-200">
            <h2 className="font-bold text-lg mb-3 text-indigo-900">
              SENSE → SHAPE → SELECT → PROVE → SCALE → SUSTAIN
            </h2>
            <p className="text-indigo-800">
              Each stage has clear entry criteria, core activities, mandatory artifacts, and a decision point. Every stage creates the inputs for the next, ensuring quality handoffs and no lost information.
            </p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16">
        <div className="container-narrow space-y-8">
          {stages.map((stage) => (
            <div key={stage.id} className="scroll-mt-20" id={stage.id}>
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{stage.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{stage.name}</h2>
                    <p className="text-lg text-indigo-600 font-semibold">
                      {stage.goal}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-sm text-slate-600 uppercase tracking-wide mb-3">
                      Core Activities
                    </h4>
                    <ul className="space-y-2">
                      {stage.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-600 uppercase tracking-wide mb-3">
                      Entry Criteria
                    </h4>
                    <ul className="space-y-2">
                      {stage.criteria.map((criterion, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-700 text-sm"
                        >
                          <span className="text-green-600 font-bold mt-0.5">
                            ✓
                          </span>
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 font-semibold mb-1">
                      Mandatory Artifact
                    </p>
                    <p className="font-bold text-indigo-600">{stage.artifact}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 font-semibold mb-1">
                      Decision Point
                    </p>
                    <p className="font-bold text-indigo-600">
                      {stage.decision}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Rhythm */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Operating Cadence</h2>
          <div className="space-y-4">
            {[
              {
                forum: "Innovation Intake Huddle",
                cadence: "Weekly, 30 min",
                purpose: "Rapidly triage signals and requests.",
              },
              {
                forum: "Opportunity Shaping Review",
                cadence: "Biweekly, 60 min",
                purpose: "Challenge framing, evidence, data, risks.",
              },
              {
                forum: "Portfolio Council",
                cadence: "Monthly, 60–90 min",
                purpose: "Fund, sequence, rebalance initiatives.",
              },
              {
                forum: "Pilot Steering Review",
                cadence: "Every 2–4 weeks",
                purpose: "Test assumptions, remove blockers.",
              },
              {
                forum: "Value Realization Review",
                cadence: "Quarterly",
                purpose: "Compare expected vs. realized value.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{item.forum}</h4>
                    <p className="text-sm text-slate-600">{item.purpose}</p>
                  </div>
                  <div className="text-right text-sm font-semibold text-indigo-600 whitespace-nowrap">
                    {item.cadence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Links */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h2 className="text-section-title">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/toolkit/discovery-workshop" className="card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold mb-1">Run a Discovery Workshop</h3>
                  <p className="text-sm text-slate-600">
                    90 minutes to frame opportunities
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-indigo-600" />
              </div>
            </Link>

            <Link href="/toolkit/opportunity-canvas" className="card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold mb-1">Opportunity Canvas</h3>
                  <p className="text-sm text-slate-600">
                    One-page framing template
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-indigo-600" />
              </div>
            </Link>

            <Link href="/portfolio/scorecard" className="card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold mb-1">Scorecard</h3>
                  <p className="text-sm text-slate-600">
                    Prioritize and fund initiatives
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-indigo-600" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
