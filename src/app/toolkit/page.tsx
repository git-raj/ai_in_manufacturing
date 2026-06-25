import Link from "next/link";
import { FileText, Zap, BarChart3, Shield, BookOpen, Settings } from "lucide-react";

export default function Toolkit() {
  const tools = [
    {
      icon: FileText,
      title: "Opportunity Canvas",
      description: "One-page framing template to align teams on the business improvement.",
      href: "/toolkit/opportunity-canvas",
      cta: "Open Canvas",
      tags: ["Shape", "Essential"],
    },
    {
      icon: Zap,
      title: "Discovery Workshop",
      description: "90-minute agenda and facilitator guide for framing opportunities.",
      href: "/toolkit/discovery-workshop",
      cta: "View Workshop",
      tags: ["Sense", "Facilitate"],
    },
    {
      icon: BarChart3,
      title: "Weighted Scorecard",
      description: "Score opportunities transparently. Balance quick wins, strategic bets, and foundation investments.",
      href: "/portfolio/scorecard",
      cta: "Score Opportunities",
      tags: ["Select", "Portfolio"],
    },
    {
      icon: FileText,
      title: "Pilot Charter",
      description: "Define what you're testing, success criteria, and how you'll measure results.",
      href: "/toolkit/pilot-charter",
      cta: "Create Charter",
      tags: ["Prove", "Governance"],
    },
    {
      icon: Shield,
      title: "Risk Tier Framework",
      description: "Categorize opportunities by impact and autonomy. Design appropriate controls.",
      href: "/governance/risk-tiers",
      cta: "Review Framework",
      tags: ["Risk", "Governance"],
    },
    {
      icon: BookOpen,
      title: "Executive Narrative",
      description: "One-page brief to present opportunities and recommendations to leadership.",
      href: "/toolkit/executive-narrative",
      cta: "Write Narrative",
      tags: ["Storytelling", "Executive"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Toolkit</h1>
          <p className="text-lg text-indigo-100">
            Ready-to-use templates, checklists, and guides. Print them. Copy them. Use them in meetings, workshops, and project rooms.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="card hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                    <div className="flex gap-1 flex-wrap justify-end">
                      {tool.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2 py-1 bg-indigo-50 text-indigo-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-1">
                    {tool.description}
                  </p>

                  <Link
                    href={tool.href}
                    className="btn-outline text-center text-sm"
                  >
                    {tool.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Quick Links by Stage</h2>

          <div className="space-y-6">
            {[
              {
                stage: "1. SENSE",
                tools: [
                  { name: "Discovery Questions (15)", href: "#" },
                  { name: "Signal Card Template", href: "#" },
                  { name: "Stakeholder Map", href: "#" },
                ],
              },
              {
                stage: "2. SHAPE",
                tools: [
                  { name: "Opportunity Canvas", href: "/toolkit/opportunity-canvas" },
                  { name: "Process Mapping Template", href: "#" },
                  { name: "Friction Inventory", href: "#" },
                ],
              },
              {
                stage: "3. SELECT",
                tools: [
                  { name: "Weighted Scorecard", href: "/portfolio/scorecard" },
                  { name: "Portfolio Dashboard", href: "/portfolio" },
                  { name: "Funding Decision Matrix", href: "#" },
                ],
              },
              {
                stage: "4. PROVE",
                tools: [
                  { name: "Pilot Charter", href: "#" },
                  { name: "Evaluation Plan", href: "#" },
                  { name: "Success Metrics Workbook", href: "#" },
                ],
              },
              {
                stage: "5. SCALE",
                tools: [
                  { name: "Operating Model Template", href: "#" },
                  { name: "Training Plan", href: "#" },
                  { name: "Support & Escalation Path", href: "#" },
                ],
              },
              {
                stage: "6. SUSTAIN",
                tools: [
                  { name: "Value Realization Report", href: "#" },
                  { name: "Benefit Tracking Dashboard", href: "#" },
                  { name: "Lessons Learned Workbook", href: "#" },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="card">
                <h4 className="font-bold text-indigo-600 uppercase tracking-wide mb-3">
                  {section.stage}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.tools.map((tool, i) => (
                    <li key={i}>
                      <Link
                        href={tool.href}
                        className="text-sm text-slate-700 hover:text-indigo-600 font-semibold flex items-center gap-2"
                      >
                        <span className="text-indigo-400">→</span>
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All */}
      <section className="py-16">
        <div className="container-narrow text-center">
          <h2 className="text-section-title">Download Everything</h2>
          <p className="text-slate-600 mb-6">
            Get all templates and guides in one package—ready to customize for your organization.
          </p>
          <button className="btn-primary inline-flex gap-2">
            <Settings className="w-5 h-5" />
            Download Toolkit Bundle (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}
