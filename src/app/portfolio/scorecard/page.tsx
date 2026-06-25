"use client";

import { useState } from "react";
import { Plus, Download, Copy, Check, Trash2 } from "lucide-react";

interface Opportunity {
  id: string;
  name: string;
  value: number;
  readiness: number;
  risk: number;
  strategic: number;
  score: number;
}

export default function Scorecard() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([
    {
      id: "1",
      name: "Quality defect anomaly detection",
      value: 85,
      readiness: 75,
      risk: 60,
      strategic: 90,
      score: 0,
    },
  ]);

  const [newOpp, setNewOpp] = useState("");
  const weights = {
    value: 40,
    readiness: 25,
    strategic: 20,
    risk: 15,
  };

  const [copied, setCopied] = useState(false);

  const calculateScore = (opp: Opportunity) => {
    return Math.round(
      (opp.value * (weights.value / 100) +
        opp.readiness * (weights.readiness / 100) +
        opp.strategic * (weights.strategic / 100) +
        (100 - opp.risk) * (weights.risk / 100)) /
        100
    );
  };

  const addOpportunity = () => {
    if (!newOpp.trim()) return;
    const opp: Opportunity = {
      id: Date.now().toString(),
      name: newOpp,
      value: 50,
      readiness: 50,
      risk: 50,
      strategic: 50,
      score: 0,
    };
    opp.score = calculateScore(opp);
    setOpportunities([...opportunities, opp]);
    setNewOpp("");
  };

  const updateOpportunity = (id: string, field: string, value: number) => {
    const updated = opportunities.map((opp) => {
      if (opp.id === id) {
        const newOpp = { ...opp, [field]: value };
        newOpp.score = calculateScore(newOpp);
        return newOpp;
      }
      return opp;
    });
    setOpportunities(updated);
  };

  const deleteOpportunity = (id: string) => {
    setOpportunities(opportunities.filter((opp) => opp.id !== id));
  };

  const sorted = [...opportunities].sort((a, b) => b.score - a.score);

  const handleCopy = () => {
    const csv = [
      ["Rank", "Opportunity", "Score", "Value", "Readiness", "Risk", "Strategic"],
      ...sorted.map((opp, idx) => [
        idx + 1,
        opp.name,
        opp.score,
        opp.value,
        opp.readiness,
        (100 - opp.risk),
        opp.strategic,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    navigator.clipboard.writeText(csv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-4">Weighted Scorecard</h1>
          <p className="text-lg text-indigo-100">
            Score and prioritize opportunities transparently. Balance quick wins, strategic bets, and foundation investments.
          </p>
        </div>
      </section>

      {/* Scoring Model */}
      <section className="py-12 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Scoring Model</h2>
          <p className="text-slate-600 mb-6">
            Each opportunity is scored 0–100 on four dimensions, weighted to your priorities:
          </p>

          <div className="space-y-4">
            {[
              {
                name: "Business Value (40%)",
                description: "Potential impact on quality, cost, throughput, safety, or revenue",
              },
              {
                name: "Readiness (25%)",
                description: "Data, technical, and organizational readiness to execute",
              },
              {
                name: "Strategic Alignment (20%)",
                description: "Alignment with current business priorities and capabilities",
              },
              {
                name: "Risk Posture (15%)",
                description: "Lower risk = higher score. Safety, complexity, and governance burden",
              },
            ].map((dim, idx) => (
              <div key={idx} className="card flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-sm">
                    {[40, 25, 20, 15][idx]}%
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{dim.name}</h4>
                  <p className="text-sm text-slate-600">{dim.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Tool */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-section-title">Your Opportunities</h2>

          {/* Add New */}
          <div className="card bg-slate-50 mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a new opportunity..."
                className="input-base flex-1"
                value={newOpp}
                onChange={(e) => setNewOpp(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addOpportunity()}
              />
              <button
                onClick={addOpportunity}
                className="btn-primary flex gap-2 items-center"
              >
                <Plus className="w-5 h-5" />
                Add
              </button>
            </div>
          </div>

          {/* Score Table */}
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Rank
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Opportunity
                  </th>
                  <th className="text-center py-3 px-2 font-bold text-slate-700">
                    Value
                  </th>
                  <th className="text-center py-3 px-2 font-bold text-slate-700">
                    Readiness
                  </th>
                  <th className="text-center py-3 px-2 font-bold text-slate-700">
                    Strategic
                  </th>
                  <th className="text-center py-3 px-2 font-bold text-slate-700">
                    Risk
                  </th>
                  <th className="text-center py-3 px-2 font-bold text-slate-700 bg-indigo-50">
                    SCORE
                  </th>
                  <th className="text-center py-3 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((opp, idx) => (
                  <tr key={opp.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 text-slate-700 font-bold">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-4 text-slate-900 font-semibold">
                      {opp.name}
                    </td>
                    <td className="py-3 px-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="input-base w-16 text-center text-xs"
                        value={opp.value}
                        onChange={(e) =>
                          updateOpportunity(
                            opp.id,
                            "value",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td className="py-3 px-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="input-base w-16 text-center text-xs"
                        value={opp.readiness}
                        onChange={(e) =>
                          updateOpportunity(
                            opp.id,
                            "readiness",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td className="py-3 px-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="input-base w-16 text-center text-xs"
                        value={opp.strategic}
                        onChange={(e) =>
                          updateOpportunity(
                            opp.id,
                            "strategic",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td className="py-3 px-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="input-base w-16 text-center text-xs"
                        value={opp.risk}
                        onChange={(e) =>
                          updateOpportunity(
                            opp.id,
                            "risk",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td className="py-3 px-2 text-center bg-indigo-50 font-bold text-indigo-600">
                      {opp.score}
                    </td>
                    <td className="py-3 px-2">
                      <button
                        onClick={() => deleteOpportunity(opp.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
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
                  Copy as CSV
                </>
              )}
            </button>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold btn-secondary hover:bg-slate-50">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio View */}
      <section className="py-12 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Portfolio Bands</h2>
          <div className="space-y-3">
            {[
              { min: 80, max: 100, label: "Recommend for Funding", color: "green" },
              { min: 60, max: 79, label: "Strong Candidate", color: "blue" },
              { min: 40, max: 59, label: "Consider / Revisit", color: "amber" },
              { min: 0, max: 39, label: "Low Priority", color: "slate" },
            ].map((band, idx) => {
              const color = {
                green: "bg-emerald-50 border-emerald-200 text-emerald-900",
                blue: "bg-blue-50 border-blue-200 text-blue-900",
                amber: "bg-amber-50 border-amber-200 text-amber-900",
                slate: "bg-slate-100 border-slate-300 text-slate-900",
              }[band.color];

              const count = sorted.filter((o) => o.score >= band.min && o.score <= band.max).length;

              return (
                <div key={idx} className={`card border-2 ${color} p-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">{band.label}</h4>
                      <p className="text-sm opacity-75">Score {band.min}–{band.max}</p>
                    </div>
                    <div className="text-3xl font-bold opacity-30">{count}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
