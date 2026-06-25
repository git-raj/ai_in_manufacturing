"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, ExternalLink, ChevronDown } from "lucide-react";

const stats = [
  { value: "$42M+", label: "Delivery portfolios led" },
  { value: "48", label: "Professionals led; 14 direct" },
  { value: "~60%", label: "Engineering effort & timeline reduction" },
  { value: "5,000+", label: "Daily enterprise platform users" },
];

const capabilities = [
  "Enterprise AI Strategy",
  "AI Ideation & Innovation",
  "Digital Transformation",
  "Enterprise Architecture",
  "AI Governance",
  "Generative AI",
  "Agentic AI",
  "Executive Advisory",
  "Technology Roadmaps",
  "Cloud Strategy",
  "Organizational Leadership",
  "Responsible AI",
  "Data Platforms",
];

const experience = [
  {
    company: "Accenture",
    location: "Charlotte, NC",
    roles: [
      { title: "Senior Manager – Data & AI", period: "Dec 2023 – Present" },
    ],
    promotion: "Promoted twice since joining Accenture in 2020.",
    highlights: [
      "Lead enterprise AI, cloud, and data transformation initiatives for Fortune 100 financial institutions",
      "Own enterprise architecture, AI strategy, governance, and delivery across complex modernization programs exceeding $42M",
      "Partner with executive stakeholders to identify high-value AI opportunities and define technology roadmaps",
      "Architect AI-enabled engineering frameworks that reduced engineering effort and delivery timelines by approximately 60%",
      "Develop enterprise platforms used daily by more than 5,000 users",
      "Lead cross-functional organizations of up to 48 professionals while directly managing 14 team members",
      "Trusted advisor to Managing Directors and Executive Directors on AI, cloud, and enterprise architecture",
      "Present architecture strategy and innovation recommendations to executive leadership",
    ],
    innovations: [
      { name: "Enterprise AI Engineering Accelerator", desc: "Designed AI-assisted, metadata-driven engineering capabilities to improve delivery speed and consistency across data-ingestion, transformation, and quality assets" },
      { name: "Enterprise Data Controls Intelligence", desc: "Architected AI-enabled data quality, reconciliation, observability, and remediation frameworks for large enterprise data ecosystems and regulated environments" },
    ],
    color: "indigo",
  },
  {
    company: "MassMutual",
    location: "Charlotte, NC",
    roles: [
      { title: "Technical Lead – Enterprise Data & Analytics", period: "2014 – 2020" },
    ],
    promotion: "",
    highlights: [
      "Progressed into technical leadership delivering enterprise data modernization, analytics platforms, and cloud migration initiatives",
      "Provided architecture guidance supporting business-critical reporting for a major financial-services organization",
      "Led technical solution delivery, mentored team members, and translated stakeholder requirements into durable data-platform capabilities",
    ],
    innovations: [],
    color: "blue",
  },
];

const education = [
  { institution: "Boston University", degree: "Master of Science, Computer Information Systems (Data Analytics)", type: "degree" },
  { institution: "University of Missouri–Kansas City", degree: "Bachelor of Business Administration, Finance", type: "degree" },
  { institution: "Stanford University", degree: "Systems Leadership: Managing Uncertainty in the Digital Age", type: "exec" },
  { institution: "Wharton Executive Education", degree: "AI Strategy & Governance", type: "exec" },
  { institution: "DeepLearning.AI", degree: "Neural Networks & Deep Learning", type: "cert" },
];

const techStack = [
  { category: "Artificial Intelligence", items: ["Generative AI", "Agentic AI", "Large Language Models", "AI Governance", "Responsible AI", "AWS Bedrock", "Snowflake Cortex"] },
  { category: "Cloud & Data Platforms", items: ["AWS", "Snowflake", "Python", "SQL", "dbt", "Data Vault 2.0", "Lakehouse Architecture", "Enterprise Data Platforms", "Metadata Management"] },
];

export default function About() {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 50%)" }} />
        <div className="container-narrow relative">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-5xl font-black text-white shadow-2xl">
                SL
              </div>
            </div>
            {/* Name / Title */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for collaboration
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-2 tracking-tight">Saroj Lamichhane</h1>
              <p className="text-xl text-indigo-200 font-medium mb-4">Enterprise AI Strategy & Innovation Leader</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />Charlotte, NC</span>
                <a href="mailto:saroj.lamichhane@protonmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />saroj.lamichhane@protonmail.com
                </a>
                <a href="https://linkedin.com/in/sarojlamichhane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://github.com/git-raj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />git-raj
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-indigo-600">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="text-4xl font-black mb-1">{s.value}</div>
                <div className="text-indigo-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Profile */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h2 className="text-section-title">Executive Profile</h2>
          <div className="prose-custom text-slate-700 text-lg leading-relaxed border-l-4 border-indigo-500 pl-6 bg-indigo-50 rounded-r-xl py-6 pr-6">
            Enterprise AI and technology leader with 12+ years of experience helping Fortune 500 organizations identify, architect, and deliver AI-driven business transformation. Proven track record leading enterprise modernization programs exceeding $42M, managing global delivery organizations of up to 48 professionals, and partnering with executive leadership to translate business challenges into scalable AI, cloud, and data strategies.
          </div>
          <p className="mt-6 text-slate-600">
            This playbook — the Manufacturing AI Innovation Operating System — is a direct expression of that methodology: structured discovery, rigorous prioritization, governed delivery, and measurable value. It is built for the practitioner who needs to move fast without cutting corners on safety or outcomes.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Core Capabilities</h2>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap) => (
              <span key={cap} className="px-4 py-2 bg-white border border-indigo-200 text-indigo-700 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:border-indigo-400 transition-all">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h2 className="text-section-title">Leadership Experience</h2>
          <div className="space-y-4">
            {experience.map((job, i) => (
              <div key={job.company} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {/* Header */}
                <button
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />{job.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {job.roles.map((role) => (
                        <span key={role.title} className="text-sm text-indigo-600 font-semibold">
                          {role.title} <span className="text-slate-400 font-normal">· {role.period}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform ${expandedJob === i ? "rotate-180" : ""}`} />
                </button>

                {/* Expanded Content */}
                {expandedJob === i && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    {job.promotion && (
                      <p className="text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-lg px-3 py-2 mb-4 inline-block">
                        {job.promotion}
                      </p>
                    )}
                    <ul className="space-y-2 mb-6">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-700">
                          <span className="text-indigo-500 flex-shrink-0 mt-0.5">→</span>{h}
                        </li>
                      ))}
                    </ul>
                    {job.innovations.length > 0 && (
                      <>
                        <h4 className="font-bold text-sm text-slate-700 uppercase tracking-wide mb-3">Selected AI Innovation Initiatives</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {job.innovations.map((inn) => (
                            <div key={inn.name} className="bg-indigo-50 rounded-lg p-3">
                              <p className="font-semibold text-indigo-700 text-sm mb-1">{inn.name}</p>
                              <p className="text-xs text-slate-600">{inn.desc}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-section-title">Technology & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((group) => (
              <div key={group.category} className="card">
                <h3 className="font-bold text-indigo-700 mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h2 className="text-section-title">Education & Executive Development</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.institution} className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${edu.type === "degree" ? "bg-indigo-600" : edu.type === "exec" ? "bg-purple-500" : "bg-green-500"}`} />
                <div>
                  <p className="font-semibold text-slate-900">{edu.institution}</p>
                  <p className="text-sm text-slate-600">{edu.degree}</p>
                </div>
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                  edu.type === "degree" ? "bg-indigo-100 text-indigo-700" :
                  edu.type === "exec" ? "bg-purple-100 text-purple-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  {edu.type === "degree" ? "Degree" : edu.type === "exec" ? "Executive" : "Certification"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-indigo-100 mb-8 max-w-lg mx-auto">
            Whether you are exploring AI strategy, building a manufacturing AI program, or looking for a thought partner — I am happy to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linkedin.com/in/sarojlamichhane"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="mailto:saroj.lamichhane@protonmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
