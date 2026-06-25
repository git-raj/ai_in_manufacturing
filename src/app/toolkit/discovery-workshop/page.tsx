"use client";

import { useState } from "react";
import { Clock, Users, FileText, CheckCircle2 } from "lucide-react";

export default function DiscoveryWorkshop() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Set the Frame",
      time: "10 min",
      activities: [
        "Explain: 'We are selecting problems worth solving, not choosing technology.'",
        "Share the SPARK method: Strategic outcome → Process & persona → Analyze friction → Reframe solutions → Keep value accountable",
        "Establish: success = ranked opportunities with named owners",
      ],
    },
    {
      title: "Strategic Outcome",
      time: "10 min",
      activities: [
        "Ask each leader: 'Which outcome is most constrained?'",
        "Candidates: growth, margin, quality, capacity, service, resilience, safety, speed",
        "Capture 2–3 top priorities",
      ],
    },
    {
      title: "Map Friction",
      time: "20 min",
      activities: [
        "For each outcome: What waits, rework, search, exceptions, handoffs?",
        "Ask: 'Where do people need expert judgment?'",
        "Visualize on whiteboard: trigger → process → failure points",
      ],
    },
    {
      title: "Generate Intervention Options",
      time: "15 min",
      activities: [
        "For each pain point, propose a solution pattern:",
        "- Process redesign",
        "- Rules / workflow",
        "- Analytics / ML",
        "- Optimization / vision",
        "- RAG / copilot / agent",
      ],
    },
    {
      title: "Fast Value/Readiness Screen",
      time: "15 min",
      activities: [
        "Plot opportunities on 2x2: value (high/low) vs. readiness (high/low)",
        "High-value + high-readiness = quick wins",
        "Separate clear candidates from 'interesting' ideas",
      ],
    },
    {
      title: "Define Evidence Needed",
      time: "10 min",
      activities: [
        "For each top opportunity, confirm:",
        "- Named sponsor and process owner",
        "- Baseline and target",
        "- Data sources and access",
        "- Risk tier",
        "- Decision date",
      ],
    },
    {
      title: "Close Commitments",
      time: "10 min",
      activities: [
        "Read back decisions, owners, dates, and risks",
        "Confirm next steps: 'Who runs discovery by when?'",
        "Document and share",
      ],
    },
  ];

  const whiteboard = [
    {
      area: "LEFT: Outcomes",
      items: [
        "Growth / margin",
        "Quality / yield",
        "Service / reliability",
        "Safety / compliance",
      ],
    },
    {
      area: "MIDDLE: Process Friction",
      items: [
        "Waiting / handoffs",
        "Search / knowledge gaps",
        "Expert bottleneck",
        "Rework / exceptions",
        "Variability / uncertainty",
      ],
    },
    {
      area: "RIGHT: Solution Patterns",
      items: [
        "Process redesign",
        "Rules / workflow",
        "Analytics / ML",
        "Optimization / vision",
        "RAG / copilot / agent",
      ],
    },
  ];

  const facilitatorTips = [
    {
      question: "What decision is slow, inconsistent, or expensive today?",
      why: "Uncovers friction and business impact",
    },
    {
      question:
        "What evidence would prove value before we commit to a platform?",
      why: "Establishes what success looks like",
    },
    {
      question:
        "Which part is deterministic enough for rules rather than AI?",
      why: "Avoids over-engineering with unnecessary complexity",
    },
    {
      question: "What should a system never be allowed to decide or do?",
      why: "Identifies boundaries and safety constraints",
    },
    {
      question:
        "What will the operator, engineer, or manager actually change in their day?",
      why: "Focuses on adoption and real workflow impact",
    },
    {
      question: "Who owns the metric after the pilot is over?",
      why: "Ensures accountability for value realization",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">90-Minute Discovery Workshop</h1>
          <p className="text-lg text-indigo-100">
            Frame opportunities, identify friction, and build commitment. Use this agenda and facilitator tips to run discovery with your leadership team.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-50">
        <div className="container-narrow grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card">
            <Clock className="w-6 h-6 text-indigo-600 mb-3" />
            <p className="text-2xl font-bold">90 minutes</p>
            <p className="text-sm text-slate-600">Total workshop time</p>
          </div>

          <div className="card">
            <Users className="w-6 h-6 text-indigo-600 mb-3" />
            <p className="text-2xl font-bold">6–12 people</p>
            <p className="text-sm text-slate-600">Ideal group size</p>
          </div>

          <div className="card">
            <FileText className="w-6 h-6 text-indigo-600 mb-3" />
            <p className="text-2xl font-bold">3–5 outcomes</p>
            <p className="text-sm text-slate-600">Typical results</p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-section-title">Preparation (5 Business Days Before)</h2>
          <div className="card bg-amber-50 border-amber-200">
            <h3 className="font-bold mb-4 text-amber-900">Ask Attendees to Bring:</h3>
            <ul className="space-y-3 text-amber-900">
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <span>One strategic outcome under pressure today</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <span>Up to three recurring bottlenecks or decision delays</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <span>A simple process outline and the systems/data involved</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <span>Known metrics or reports</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <span>
                  Names of frontline SMEs and process owners (who you might need to interview)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Whiteboard Structure */}
      <section className="py-12 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Whiteboard Structure</h2>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whiteboard.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-sm text-indigo-600 mb-3 uppercase tracking-wide">
                    {section.area}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 flex items-start gap-2"
                      >
                        <span className="text-indigo-600 font-bold">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-section-title">Agenda & Facilitation</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentStep === idx
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <p className="font-bold text-sm">{step.title}</p>
                    <p className="text-xs opacity-75">{step.time}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-2xl font-bold">{steps[currentStep].title}</h3>
                  <span className="ml-auto text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {steps[currentStep].time}
                  </span>
                </div>

                <ul className="space-y-3">
                  {steps[currentStep].activities.map((activity, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="text-indigo-600 font-bold mt-0.5">
                        ✓
                      </span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitator Tips */}
      <section className="py-12 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Facilitator Tips & Questions</h2>
          <div className="space-y-4">
            {facilitatorTips.map((tip, idx) => (
              <div key={idx} className="card">
                <p className="font-bold text-indigo-600 mb-2 italic">
                  "{tip.question}"
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Why ask it:</strong> {tip.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After the Workshop */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-section-title">After the Workshop</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-l-4 border-l-indigo-600">
              <h4 className="font-bold mb-3">Within 48 hours:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Photograph whiteboard or share notes</li>
                <li>• For top 3 opportunities, start discovery interviews</li>
                <li>• Confirm data access and SME availability</li>
                <li>• Set shaping review date (1–2 weeks)</li>
              </ul>
            </div>

            <div className="card border-l-4 border-l-emerald-600">
              <h4 className="font-bold mb-3">Use the Results For:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Run discovery interviews (15 questions) with SMEs</li>
                <li>• Start filling in Opportunity Canvases</li>
                <li>• Begin baseline measurement</li>
                <li>• Identify data sources and access paths</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
