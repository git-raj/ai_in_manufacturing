import Link from "next/link";
import { ArrowRight, Zap, Target, Gauge, Shield } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-700 text-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Manufacturing AI Innovation Operating System
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8">
              A practical playbook for turning business friction into safe, measurable AI value. For innovation leaders, plant managers, and data teams who need to move from "we should use AI" to "we know which workflow to change and why."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/toolkit/discovery-workshop"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Run a Workshop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Author — prominent author spotlight */}
      <section className="py-10 bg-gradient-to-r from-slate-900 to-indigo-950 text-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shadow-lg">
              SL
            </div>
            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs text-indigo-300 font-semibold uppercase tracking-widest mb-1">Built by a practitioner</p>
              <p className="text-white font-bold text-lg leading-snug">
                Saroj Lamichhane — Senior Manager, Data & AI at Accenture
              </p>
              <p className="text-slate-300 text-sm mt-1">
                12+ years · $42M+ AI portfolio · Fortune 100 clients · 5,000+ platform users
              </p>
            </div>
            {/* CTA */}
            <Link
              href="/about"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              View Full Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-center">How This Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four journeys to turn opportunities into value, safely and measurably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Journey A */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">New to this role?</h3>
                  <p className="text-slate-600 mb-4">
                    Build your foundation. Learn the operating model, the decision frameworks, and your first 90-day plan.
                  </p>
                  <Link href="/start-here" className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Start Here →
                  </Link>
                </div>
              </div>
            </div>

            {/* Journey B */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Have a business problem?</h3>
                  <p className="text-slate-600 mb-4">
                    Run structured discovery. Our SPARK method — <span className="font-medium">Strategic outcome → Process & persona → Analyze friction → Reframe solutions → Keep value accountable</span> — turns vague pain into a decision-ready brief.
                  </p>
                  <Link href="/toolkit/discovery-workshop" className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Run Discovery →
                  </Link>
                </div>
              </div>
            </div>

            {/* Journey C */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Gauge className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Need to prioritize?</h3>
                  <p className="text-slate-600 mb-4">
                    Use weighted scoring and portfolio management. Allocate capacity where it creates measurable impact.
                  </p>
                  <Link href="/portfolio/scorecard" className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Score Opportunities →
                  </Link>
                </div>
              </div>
            </div>

            {/* Journey D */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Need to manage risk?</h3>
                  <p className="text-slate-600 mb-4">
                    Design safe operations. Use risk tiers, autonomy ladders, and OT guardrails to enable delivery.
                  </p>
                  <Link href="/governance" className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Governance Framework →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Operating System */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container-wide">
          <h2 className="text-section-title text-center mb-12">The Six-Stage Operating Model</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {[
                {
                  stage: "1. Sense",
                  description: "Capture signals worth exploring",
                  color: "indigo",
                },
                {
                  stage: "2. Shape",
                  description: "Convert ideas into defined opportunities",
                  color: "blue",
                },
                {
                  stage: "3. Select",
                  description: "Allocate scarce pilot capacity",
                  color: "cyan",
                },
                {
                  stage: "4. Prove",
                  description: "Test viability and risk controls",
                  color: "teal",
                },
                {
                  stage: "5. Scale",
                  description: "Embed into operating workflow",
                  color: "emerald",
                },
                {
                  stage: "6. Sustain",
                  description: "Measure value and improve",
                  color: "green",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-lg border border-slate-200 p-4 text-center hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  <h3 className="font-bold text-sm mb-1">{item.stage}</h3>
                  <p className="text-xs text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/operating-system" className="btn-primary">
                Explore the Full Operating System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-section-title text-center mb-12">
            Eight Success Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Strategic Translator",
              "Manufacturing Systems Thinker",
              "Structured Discovery Facilitator",
              "AI & Automation Solution Shaper",
              "Portfolio & Value Manager",
              "Responsible AI & OT Leader",
              "Adoption & Change Leader",
              "Executive Storyteller",
            ].map((capability, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <h4 className="font-semibold text-sm">{capability}</h4>
                </div>
                <p className="text-xs text-slate-600">
                  Master this capability to drive value in high-tech manufacturing.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/frameworks/success-capabilities" className="btn-secondary">
              Learn About Each Capability
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to lead AI innovation?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start with a guided discovery workshop or dive into the full operating system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/start-here"
              className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Orientation
            </Link>
            <Link
              href="/toolkit/discovery-workshop"
              className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Run Workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
