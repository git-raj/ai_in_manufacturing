"use client";

import { useState } from "react";
import { Download, Copy, Check } from "lucide-react";

export default function OpportunityCanvas() {
  const [formData, setFormData] = useState({
    title: "",
    problem: "",
    outcome: "",
    process: "",
    users: "",
    options: "",
    value: "",
    data: "",
    risk: "",
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopy = () => {
    const text = Object.entries(formData)
      .map(([key, value]) => `${key.toUpperCase()}\n${value}`)
      .join("\n\n---\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const isComplete =
    formData.title &&
    formData.problem &&
    formData.outcome &&
    formData.process &&
    formData.users;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Opportunity Canvas</h1>
          <p className="text-lg text-indigo-100">
            One page to align teams on the business improvement. Fill it in collaboratively. Print it. Use it in your next meeting.
          </p>
        </div>
      </section>

      {/* Canvas */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="space-y-6 mb-8">
            {/* Section 1: Title */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                1. Plain-Language Title
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Name the business improvement, not the technology.
              </p>
              <input
                type="text"
                name="title"
                placeholder="e.g., Reduce quality investigation time from 3 days to 4 hours"
                className="input-base w-full"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Section 2: Problem */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                2. Business Problem & Urgency
              </label>
              <p className="text-xs text-slate-500 mb-3">
                What occurs today? Who experiences it? Why does it matter now?
              </p>
              <textarea
                name="problem"
                placeholder="Describe the current state, who is affected, and the business impact..."
                className="input-base w-full h-24 resize-none"
                value={formData.problem}
                onChange={handleChange}
              />
            </div>

            {/* Section 3: Outcome */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                3. Strategic Outcome
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Which business objective does this support? (Growth, quality, cost, speed, safety, etc.)
              </p>
              <input
                type="text"
                name="outcome"
                placeholder="e.g., Improve quality and reduce COGS"
                className="input-base w-full"
                value={formData.outcome}
                onChange={handleChange}
              />
            </div>

            {/* Section 4: Process */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                4. Current Process & Friction
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Trigger → steps → systems → handoffs → failure points.
              </p>
              <textarea
                name="process"
                placeholder="Map the workflow, data systems involved, and where friction occurs..."
                className="input-base w-full h-24 resize-none"
                value={formData.process}
                onChange={handleChange}
              />
            </div>

            {/* Section 5: Users */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                5. Users, Decisions & Actions
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Who will use it? What decision/action changes? What remains human-owned?
              </p>
              <textarea
                name="users"
                placeholder="Describe the end user, how they work, and what they must decide vs. what the system recommends..."
                className="input-base w-full h-24 resize-none"
                value={formData.users}
                onChange={handleChange}
              />
            </div>

            {/* Section 6: Options */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                6. Candidate Options
              </label>
              <p className="text-xs text-slate-500 mb-3">
                At least two viable approaches, including a non-AI option.
              </p>
              <textarea
                name="options"
                placeholder="Option A (non-AI): ...\nOption B (ML/copilot): ...\nOption C (optimization): ..."
                className="input-base w-full h-24 resize-none"
                value={formData.options}
                onChange={handleChange}
              />
            </div>

            {/* Section 7: Value */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                7. Value Hypothesis
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Baseline | Target | Volume | Formula | Benefit Owner | Realization Mechanism
              </p>
              <textarea
                name="value"
                placeholder="Today: 3 days per issue. Target: 4 hours. Volume: 50 investigations/month. Impact: $XX savings or capacity..."
                className="input-base w-full h-24 resize-none"
                value={formData.value}
                onChange={handleChange}
              />
            </div>

            {/* Section 8: Data */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                8. Data, Knowledge & Integration Needs
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Sources | Access | Quality | APIs | Refresh rate
              </p>
              <textarea
                name="data"
                placeholder="MES, historian, LIMS, QMS, emails... API access? Data refresh frequency?"
                className="input-base w-full h-24 resize-none"
                value={formData.data}
                onChange={handleChange}
              />
            </div>

            {/* Section 9: Risk */}
            <div className="card">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                9. Risk, Safety & Accountability
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Risk tier | Prohibited actions | Human approval points | Monitoring
              </p>
              <textarea
                name="risk"
                placeholder="Risk tier (low/medium/high). What must never be automated? What requires human approval? How will we monitor?"
                className="input-base w-full h-24 resize-none"
                value={formData.risk}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                copied
                  ? "bg-green-100 text-green-700"
                  : "btn-secondary hover:bg-slate-50"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy Text
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold btn-secondary hover:bg-slate-50"
            >
              <Download className="w-5 h-5" />
              Print / PDF
            </button>

            <div className="flex-1">
              {isComplete && (
                <div className="px-4 py-3 bg-green-50 text-green-700 rounded-lg text-sm font-semibold text-center">
                  ✓ Canvas complete. Ready to share with stakeholders.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Tips for Using This Canvas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-bold mb-2">Fill it collaboratively</h4>
              <p className="text-sm text-slate-600">
                Involve the business sponsor, process owner, and SMEs. Disagreements are valuable; they surface real constraints.
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold mb-2">Be specific about users</h4>
              <p className="text-sm text-slate-600">
                Name the actual person or role. Describe their shift, workload, and what makes an answer trustworthy to them.
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold mb-2">Always include a non-AI option</h4>
              <p className="text-sm text-slate-600">
                Could process redesign, dashboards, or automation do the job with less complexity? Say so.
              </p>
            </div>

            <div className="card">
              <h4 className="font-bold mb-2">Baseline everything</h4>
              <p className="text-sm text-slate-600">
                If you cannot measure "today," get two weeks to collect it. Vague targets make scoring impossible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
