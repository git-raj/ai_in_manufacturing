import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Strategic Translator",
    tagline: "Connect business pain to AI opportunity",
    description:
      "Read business strategy, annual plans, and operational reviews. Identify the highest-value friction points. Translate them into AI-addressable opportunity statements that executives and delivery teams both understand.",
    practices: [
      "Map AI opportunities to named strategic priorities",
      "Frame problems in business outcome language, not technology language",
      "Identify the decision or workflow that is the actual bottleneck",
      "Quantify the cost of the current state before proposing solutions",
    ],
    antiPatterns: [
      "Starting with 'What can we do with LLMs?'",
      "Pitching demos without a business owner",
      "Framing AI as the goal rather than the means",
    ],
  },
  {
    number: "02",
    title: "Manufacturing Systems Thinker",
    tagline: "Understand the full value chain and its constraints",
    description:
      "Know how your factory, supply chain, R&D, and commercial operations connect. Understand OT/IT boundaries, data flows, and the downstream consequences of changing any one part of the system.",
    practices: [
      "Map the value chain from market need to shipped product",
      "Identify where decisions are made and where delays accumulate",
      "Understand OT systems: PLCs, SCADA, MES, historian, ERP integration",
      "Assess digital thread continuity — where data breaks and why",
    ],
    antiPatterns: [
      "Treating each use case as isolated from upstream/downstream impact",
      "Ignoring OT safety and isolation requirements",
      "Assuming clean, connected, real-time data exists",
    ],
  },
  {
    number: "03",
    title: "Discovery Facilitator",
    tagline: "Run structured workshops that produce decision-ready outputs",
    description:
      "Lead the SPARK discovery process: Strategic outcome → Process & persona → Analyze friction → Reframe solutions → Keep value accountable. Turn vague pain into a framed opportunity with a hypothesis, baseline, and success measure.",
    practices: [
      "Facilitate 90-minute structured discovery workshops",
      "Interview process owners, frontline operators, and data teams",
      "Document the as-is workflow, decision points, and friction",
      "Produce a one-page opportunity canvas for each candidate",
    ],
    antiPatterns: [
      "Jumping to solution design without a documented problem statement",
      "Conducting discovery without frontline participation",
      "Leaving workshops without a named owner and clear next step",
    ],
  },
  {
    number: "04",
    title: "Solution Designer",
    tagline: "Match problems to the right technology and architecture",
    description:
      "Evaluate automation, ML/predictive, optimization, computer vision, RAG, generative AI, and agents against your specific problem, data, and risk constraints. Design the simplest solution that solves the problem.",
    practices: [
      "Use the Technology-Fit Decision Guide before selecting tools",
      "Design for the minimum viable solution, then scale with evidence",
      "Specify data requirements, latency needs, and integration points",
      "Assess build vs. buy vs. configure options against team capability",
    ],
    antiPatterns: [
      "Using the most complex technology when a simpler one works",
      "Selecting vendors before defining the problem clearly",
      "Ignoring data readiness in the solution design",
    ],
  },
  {
    number: "05",
    title: "Portfolio Manager",
    tagline: "Allocate capacity to where it creates measurable impact",
    description:
      "Score and rank opportunities using value, readiness, strategic alignment, and risk. Manage a portfolio of Quick Wins, Strategic Bets, Foundation work, and Exploration. Run stage-gate reviews with evidence-based funding decisions.",
    practices: [
      "Apply a weighted scoring model to every opportunity",
      "Maintain a live portfolio dashboard with stage and health status",
      "Run quarterly portfolio reviews with sponsors",
      "Kill or pause initiatives that miss evidence thresholds",
    ],
    antiPatterns: [
      "Pursuing too many initiatives simultaneously",
      "Advancing pilots without meeting readiness criteria",
      "Allowing HiPPO (highest-paid-person's opinion) to override scoring",
    ],
  },
  {
    number: "06",
    title: "Risk & Governance Leader",
    tagline: "Enable delivery by surfacing controls early",
    description:
      "Classify every opportunity by risk tier. Engage OT, security, quality, and legal stakeholders before pilot. Design human oversight, approval gates, monitoring, and rollback into every solution.",
    practices: [
      "Apply the 3-tier risk classification to every candidate",
      "Engage security and OT review for any use case touching production systems",
      "Define human approval points before any autonomous action",
      "Design drift detection and model performance monitoring from day one",
    ],
    antiPatterns: [
      "Treating governance as a blocker rather than an enabler",
      "Skipping OT review because 'it's just read access'",
      "Deploying without a defined rollback procedure",
    ],
  },
  {
    number: "07",
    title: "Adoption & Change Leader",
    tagline: "Ensure solutions are used, trusted, and owned",
    description:
      "Involve frontline users from discovery through design. Build adoption hypotheses. Design training, change management, and handoff plans. Measure adoption, not just deployment.",
    practices: [
      "Map stakeholders and their concerns before pilot begins",
      "Co-design workflows with the people who will use them",
      "Define 'adoption' explicitly: who uses it, how often, in what context",
      "Plan the transition from project team ownership to operations",
    ],
    antiPatterns: [
      "Presenting a finished solution to users for the first time at launch",
      "Measuring success by deployment date rather than actual usage",
      "Leaving adoption planning to the end of delivery",
    ],
  },
  {
    number: "08",
    title: "Executive Storyteller",
    tagline: "Communicate value in the language of the business",
    description:
      "Build compelling business cases using baseline data and value hypotheses. Present findings to executive audiences with clarity, credibility, and a clear ask. Report realized value after scale.",
    practices: [
      "Lead with business outcome, not technology feature",
      "Quantify the opportunity: units, dollars, risk reduction, or time saved",
      "Use the STAR-R narrative: Situation, Task, Action, Result, Recommendation",
      "Create a one-page executive summary for every major initiative",
    ],
    antiPatterns: [
      "Opening executive presentations with architecture diagrams",
      "Reporting outputs (models trained) instead of outcomes (decisions improved)",
      "Overpromising on timeline or ROI to secure funding",
    ],
  },
];

export default function SuccessCapabilities() {
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
            <span>Success Capabilities</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">The Eight Success Capabilities</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Every top-performing AI innovation leader in manufacturing masters these eight competencies. They are not job titles — they are modes of working you must be able to switch between daily.
          </p>
        </div>
      </section>

      {/* Capability Cards */}
      <section className="py-16">
        <div className="container-narrow space-y-10">
          {capabilities.map((cap) => (
            <div key={cap.number} className="card border-t-4 border-t-indigo-500">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl font-black text-indigo-100 leading-none">{cap.number}</span>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{cap.title}</h2>
                  <p className="text-indigo-600 font-semibold">{cap.tagline}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6">{cap.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-sm text-slate-700 uppercase tracking-wide mb-3">
                    Key Practices
                  </h4>
                  <ul className="space-y-2">
                    {cap.practices.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-orange-600 uppercase tracking-wide mb-3">
                    Anti-Patterns to Avoid
                  </h4>
                  <ul className="space-y-2">
                    {cap.antiPatterns.map((a, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <span className="text-orange-400 flex-shrink-0 mt-0.5">✕</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to apply these capabilities?</h2>
          <p className="text-slate-600 mb-8">
            Use the discovery workshop and opportunity canvas to start practicing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/toolkit/discovery-workshop" className="btn-primary">
              Run a Discovery Workshop
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </Link>
            <Link href="/frameworks" className="btn-secondary">
              Back to Frameworks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
