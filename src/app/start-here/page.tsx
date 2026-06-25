import Link from "next/link";
import { BookOpen, ArrowRight, Lightbulb } from "lucide-react";

export default function StartHere() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Start Here</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Your fast-track orientation to the Manufacturing AI Innovation Operating System. Learn the role, the model, and your first decisions.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        {/* The Role */}
        <div className="mb-12">
          <h2 className="text-section-title">The Real Job</h2>
          <div className="card bg-indigo-50 border-indigo-200 mb-6">
            <p className="text-lg font-semibold text-indigo-900 mb-3">
              Translate strategic and operational pain into a disciplined portfolio of AI-enabled initiatives that can be safely delivered, adopted, measured, and scaled.
            </p>
            <p className="text-indigo-800">
              This role is not primarily an AI engineering job. It is the front end of an enterprise value system. You work at the intersection of business strategy, manufacturing operations, product engineering, data/AI, delivery, finance, risk, and change management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-bold mb-3">You do NOT begin with:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>❌ "Where can we use agents?"</li>
                <li>❌ "What's the latest AI model?"</li>
                <li>❌ "How can we demo this?"</li>
              </ul>
            </div>

            <div className="card">
              <h4 className="font-bold mb-3">You DO begin with:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ "Which strategic outcome is constrained?"</li>
                <li>✓ "What decision or workflow causes it?"</li>
                <li>✓ "What's the least-complex intervention?"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your North Star */}
        <div className="mb-12">
          <h2 className="text-section-title">Your North Star Outcome</h2>
          <div className="card bg-emerald-50 border-emerald-200 p-8">
            <p className="text-xl font-bold text-emerald-900 text-center">
              Build a repeatable organizational capability that converts high-value business problems into trustworthy AI-enabled improvements—quickly enough to matter, safely enough to scale, and rigorously enough to prove value.
            </p>
          </div>
        </div>

        {/* What Good Looks Like */}
        <div className="mb-12">
          <h2 className="text-section-title">What Excellent Performance Looks Like</h2>
          <div className="space-y-4">
            {[
              {
                outcome: "Trusted Demand",
                description: "Business leaders bring meaningful problems before preselecting tools or vendors.",
                evidence: "Sponsor map, recurring workshops, qualified pipeline.",
              },
              {
                outcome: "High-Quality Framing",
                description: "A delivery team understands the problem without rediscovering everything.",
                evidence: "Opportunity canvas, process map, architecture options.",
              },
              {
                outcome: "Smart Selection",
                description: "Capacity is invested in ideas with material value and accountable sponsorship.",
                evidence: "Scorecards, stage-gate decisions, portfolio dashboard.",
              },
              {
                outcome: "Operational Adoption",
                description: "Pilots are embedded in real workflows with named process owners.",
                evidence: "Adoption hypothesis, operating model, support plan.",
              },
              {
                outcome: "Measured Value",
                description: "Leaders point to quality, throughput, cost, or safety improvements.",
                evidence: "Baseline, measurement plan, realized-value report.",
              },
              {
                outcome: "Reusable Capability",
                description: "Every initiative improves shared patterns and ways of working.",
                evidence: "Pattern library, reusable components, lessons learned.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h4 className="font-bold text-indigo-600 mb-1">{item.outcome}</h4>
                <p className="text-sm text-slate-700 mb-2">{item.description}</p>
                <p className="text-xs text-slate-500">
                  <strong>Evidence:</strong> {item.evidence}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eight Capabilities */}
        <div className="mb-12">
          <h2 className="text-section-title">The Eight Capabilities You Need to Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "1",
                name: "Strategic Translator",
                desc: "Connect enterprise objectives to operational problems worth solving.",
              },
              {
                num: "2",
                name: "Manufacturing Systems Thinker",
                desc: "Understand that a plant, supply chain, and product are connected systems.",
              },
              {
                num: "3",
                name: "Structured Discovery Facilitator",
                desc: "Turn vague pain into actionable opportunities without defensiveness.",
              },
              {
                num: "4",
                name: "AI & Automation Solution Shaper",
                desc: "Match problems to the right solution pattern, avoiding over-engineering.",
              },
              {
                num: "5",
                name: "Portfolio & Value Manager",
                desc: "Put capacity where it creates material impact with clear accountability.",
              },
              {
                num: "6",
                name: "Responsible AI & OT Leader",
                desc: "Surface risk and controls early; enable safe, scaled delivery.",
              },
              {
                num: "7",
                name: "Adoption & Change Leader",
                desc: "Ensure value reaches the workflow, not just dashboards.",
              },
              {
                num: "8",
                name: "Executive Storyteller",
                desc: "Build commitment across technical and business groups.",
              },
            ].map((cap, idx) => (
              <div key={idx} className="card">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-sm">
                      {cap.num}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{cap.name}</h4>
                    <p className="text-xs text-slate-600">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/frameworks/success-capabilities" className="btn-primary">
              Deep Dive: Success Capabilities
            </Link>
          </div>
        </div>

        {/* Your First 90 Days */}
        <div className="mb-12">
          <h2 className="text-section-title">Your First 90 Days</h2>
          <div className="space-y-4">
            <div className="card border-l-4 border-l-indigo-600">
              <h4 className="font-bold mb-2">Month 1: Listen & Learn</h4>
              <p className="text-sm text-slate-600 mb-2">
                Meet stakeholders. Understand the business, operations, and the gaps. Map the current decision-making process.
              </p>
              <p className="text-xs text-slate-500">
                Deliverable: Stakeholder map, strategic outcome themes, 3–5 qualified opportunities.
              </p>
            </div>

            <div className="card border-l-4 border-l-emerald-600">
              <h4 className="font-bold mb-2">Month 2: Shape & Score</h4>
              <p className="text-sm text-slate-600 mb-2">
                Run discovery on top opportunities. Create opportunity canvases. Prepare for scoring.
              </p>
              <p className="text-xs text-slate-500">
                Deliverable: Opportunity canvases, initial risk/readiness assessment, scoring framework.
              </p>
            </div>

            <div className="card border-l-4 border-l-orange-600">
              <h4 className="font-bold mb-2">Month 3: Fund & Launch</h4>
              <p className="text-sm text-slate-600 mb-2">
                Score and prioritize. Secure sponsorship and funding for first pilots. Launch discovery-to-proof.
              </p>
              <p className="text-xs text-slate-500">
                Deliverable: Portfolio decision, pilot charters, committed sponsors and process owners.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/90-day-plan" className="btn-primary">
              Full 90-Day Plan
            </Link>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-12 card bg-slate-50">
          <h3 className="font-bold text-lg mb-4">Your Next Steps</h3>
          <div className="space-y-3">
            <Link href="/operating-system" className="flex items-start gap-3 p-3 hover:bg-white rounded transition-colors">
              <div className="flex-shrink-0 pt-1">
                <ArrowRight className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Learn the Operating System</h4>
                <p className="text-xs text-slate-600">SENSE → SHAPE → SELECT → PROVE → SCALE → SUSTAIN</p>
              </div>
            </Link>

            <Link href="/toolkit/discovery-workshop" className="flex items-start gap-3 p-3 hover:bg-white rounded transition-colors">
              <div className="flex-shrink-0 pt-1">
                <Lightbulb className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Run Your First Discovery Workshop</h4>
                <p className="text-xs text-slate-600">90 minutes to frame an opportunity and build commitment</p>
              </div>
            </Link>

            <Link href="/frameworks" className="flex items-start gap-3 p-3 hover:bg-white rounded transition-colors">
              <div className="flex-shrink-0 pt-1">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Explore All Frameworks</h4>
                <p className="text-xs text-slate-600">Discovery, solution-fit, data architecture, and more</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
