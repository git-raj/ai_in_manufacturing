import Link from "next/link";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Demand Sensing & Forecast Blending",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Blend statistical forecasts with ML signals from sales pipeline, market indicators, and leading demand signals. Improve forecast accuracy especially for new products and volatile SKUs.",
    valueDrivers: ["10–20% MAPE improvement on volatile SKUs", "Reduced inventory buffer stock", "Better alignment between supply and customer demand"],
    dataNeeds: "3+ years demand history, external signals (market, weather, events), sales pipeline data",
    techFit: "ML forecasting (gradient boosting, LSTM), ensemble with statistical models",
    readiness: "High",
  },
  {
    title: "Supply Risk Signal Detection",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Monitor news, financial signals, logistics disruptions, and supplier data to identify supply risk before it becomes a stockout or delivery failure.",
    valueDrivers: ["30-day early warning on Tier-2/3 disruptions", "Reduced emergency sourcing costs", "Improved supplier diversification decisions"],
    dataNeeds: "Supplier master data, external news/event APIs, financial data feeds",
    techFit: "NLP on news feeds, ML risk scoring, event detection",
    readiness: "Medium",
  },
  {
    title: "Inventory Optimization",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Optimize safety stock, reorder points, and replenishment quantities across a network of locations. Balance service levels against working capital and storage constraints.",
    valueDrivers: ["10–25% working capital reduction", "Maintained or improved service levels", "Reduced excess and obsolete inventory"],
    dataNeeds: "Inventory positions, demand variability, lead times, service level targets by SKU",
    techFit: "Stochastic optimization, ML demand variability modeling",
    readiness: "High",
  },
  {
    title: "Scenario Planning & What-If Analysis",
    maturity: "Emerging",
    riskTier: "Tier 1",
    description: "Rapidly model supply chain scenarios — tariff changes, supplier failures, capacity constraints — to prepare contingency plans before disruptions occur.",
    valueDrivers: ["Faster response to disruption", "Better-informed sourcing strategy", "Reduced crisis decision-making under pressure"],
    dataNeeds: "Network model, cost structure, lead time variability, capacity data",
    techFit: "Digital twin / simulation, optimization with scenario parameterization",
    readiness: "Medium",
  },
  {
    title: "Supplier Document Intelligence",
    maturity: "Proven",
    riskTier: "Tier 1",
    description: "Automatically extract, validate, and route information from supplier documents: certificates of conformance, test reports, REACH declarations, and shipping documents.",
    valueDrivers: ["80–90% reduction in manual document processing", "Faster supplier onboarding", "Improved compliance data quality"],
    dataNeeds: "Document corpus with labeled fields, supplier document templates",
    techFit: "Document AI, generative extraction, validation rules",
    readiness: "High",
  },
];

const maturityColor: Record<string, string> = {
  Proven: "bg-green-100 text-green-700",
  Emerging: "bg-yellow-100 text-yellow-700",
};

const tierColor: Record<string, string> = {
  "Tier 1": "bg-green-100 text-green-700",
  "Tier 2": "bg-yellow-100 text-yellow-700",
};

export default function SupplyChainPlanning() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <span>→</span>
            <span>Supply Chain & Planning</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📦</span>
            <h1 className="text-4xl font-bold">Supply Chain & Planning</h1>
          </div>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Supply chain AI delivers value through better forecasting, earlier risk detection, and smarter inventory decisions — reducing cost while maintaining or improving service levels.
          </p>
        </div>
      </section>

      <section className="py-10 bg-indigo-50 border-b border-indigo-100">
        <div className="container-narrow">
          <p className="text-indigo-800 font-semibold">
            Supply chain AI operates primarily at Tier 1. Value is proven and data readiness is typically higher than operations AI. The primary challenge is integrating signals across fragmented systems and supplier data quality.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow space-y-6">
          {opportunities.map((opp) => (
            <div key={opp.title} className="card">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h2 className="text-xl font-bold text-slate-900">{opp.title}</h2>
                <div className="flex gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${maturityColor[opp.maturity]}`}>{opp.maturity}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${tierColor[opp.riskTier]}`}>{opp.riskTier}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4">{opp.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Value Drivers</p>
                  <ul className="space-y-1">{opp.valueDrivers.map((v, i) => <li key={i} className="text-slate-600 flex gap-1"><span className="text-green-500">↑</span>{v}</li>)}</ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Data Requirements</p>
                  <p className="text-slate-600">{opp.dataNeeds}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Technology Fit</p>
                  <p className="text-slate-600">{opp.techFit}</p>
                  <p className="text-xs mt-2 text-slate-500">Readiness: {opp.readiness}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-indigo-50">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 font-semibold">Run discovery on a supply chain problem</p>
          <Link href="/toolkit/discovery-workshop" className="btn-primary whitespace-nowrap">
            Run Workshop <ArrowRight className="inline ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="py-6 container-narrow">
        <Link href="/use-cases" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
          ← All Use Cases
        </Link>
      </div>
    </div>
  );
}
