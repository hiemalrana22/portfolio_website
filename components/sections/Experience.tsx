"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, ExternalLink, Lock } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

type ExpLink = { label: string; url: string };

const experiences = [
  {
    company: "Angel One",
    role: "Data Science Intern",
    period: "Jun 2026 – Jul 2026",
    type: "Current",
    location: "India · Remote",
    description:
      "Applied machine learning and analytics on large-scale financial and trading data at one of India's largest retail stock-broking & fintech platforms — turning market and user-behaviour signals into actionable models.",
    highlights: [
      "Built predictive models on customer trading behaviour — engagement, retention, and churn-propensity scoring",
      "Engineered features from high-volume market and transactional datasets for downstream ML pipelines",
      "Ran A/B tests and statistical analyses to quantify the impact of product and engagement experiments",
      "Developed analytics dashboards and automated reporting to surface insights for business stakeholders",
      "Collaborated with cross-functional teams to translate data findings into product and growth decisions",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "SQL", "A/B Testing", "Feature Engineering", "Fintech"],
    color: "blue",
  },
  {
    company: "OranjeStride",
    role: "Data Science & Generative AI Intern",
    period: "Jan 2026 – May 2026",
    type: "Past",
    location: "Remote",
    description:
      "Built GenAI-powered data science systems — LLM pipelines over structured business data, automated insight extraction, NRB-aligned credit evaluation, and end-to-end ML reporting infrastructure.",
    highlights: [
      "Built a Nepal Rastra Bank (NRB)-aligned credit-appraisal GenAI workbench — automated credit memos, covenant-compliance checks & financial-statement analysis (under NDA)",
      "Engineered DataStride, a full-stack SQL learning platform (React + Supabase) with in-browser query execution (under NDA)",
      "Designed RAG pipelines and LLM-as-judge evaluation harnesses scoring outputs across accuracy, hallucination & format dimensions",
      "Replaced manual reporting workflows with LLM-generated executive summaries and decision intelligence",
      "Conducted applied research on prompt engineering, retrieval strategies, and structured-output evaluation",
    ],
    tech: ["Python", "GenAI", "RAG", "LLMs", "React", "Supabase", "FastAPI", "Prompt Eng."],
    confidential: true,
    color: "indigo",
  },
  {
    company: "IIT Delhi",
    role: "Data Science / AI Intern",
    period: "May 2025 – Jul 2025",
    type: "Past",
    location: "New Delhi, India",
    description:
      "Built TamraBot — a full GenAI + data science system combining classical NLP, intent classification, and LLM orchestration for Ayurvedic healthcare question-answering. 79–81% intent classification accuracy.",
    highlights: [
      "Designed end-to-end data pipeline: corpus collection → preprocessing → feature engineering → model training",
      "Built a multi-stage NLP pipeline for intent detection and medical entity extraction on domain-specific data",
      "Integrated OpenRouter for multi-LLM fallback (GPT-4, Claude, Mistral), ensuring 99%+ uptime",
      "Achieved 79–81% intent classification accuracy on a custom Ayurvedic healthcare dataset",
      "Wrapped everything in a production FastAPI microservice with session management for multi-turn context",
    ],
    tech: ["Python", "NLP", "Transformers", "FastAPI", "OpenRouter", "LLMs", "GenAI", "Healthcare DS"],
    links: [{ label: "TamraBot — Live", url: "https://tamrabot.vercel.app/" }] as ExpLink[],
    color: "violet",
  },
];

const colorMap = {
  indigo: {
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    dot: "bg-indigo-500",
    glow: "shadow-indigo-500/10",
    tag: "bg-indigo-500/[0.07] text-indigo-300 border-indigo-500/15",
    link: "hover:border-indigo-500/40 hover:text-indigo-300",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-500",
    glow: "shadow-blue-500/10",
    tag: "bg-blue-500/[0.07] text-blue-300 border-blue-500/15",
    link: "hover:border-blue-500/40 hover:text-blue-300",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dot: "bg-violet-500",
    glow: "shadow-violet-500/10",
    tag: "bg-violet-500/[0.07] text-violet-300 border-violet-500/15",
    link: "hover:border-violet-500/40 hover:text-violet-300",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Work Experience"
          title="Where I've Worked"
          description="Building data science systems and GenAI products at leading research institutions and AI companies."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-violet-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 top-6 w-4 h-4 rounded-full ${c.dot} border-2 border-[#07070a] shadow-lg hidden md:block`}
                  />

                  <div
                    className={`p-6 md:p-8 rounded-2xl bg-[#13131a] border border-white/[0.06] card-hover shadow-lg ${c.glow}`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <Building2 size={15} className="text-zinc-500" />
                          <span className="font-heading font-bold text-white text-lg">
                            {exp.company}
                          </span>
                          {exp.type === "Current" && (
                            <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1">
                              <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                              Live
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-300 font-medium">{exp.role}</p>
                        {exp.confidential && (
                          <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 text-[10px] font-medium text-zinc-400 bg-white/[0.04] border border-white/[0.08] rounded-full">
                            <Lock size={9} />
                            Select work under NDA
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border rounded-full ${c.badge}`}
                        >
                          <Calendar size={11} />
                          {exp.period}
                        </div>
                        <p className="text-xs text-zinc-600 mt-1">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-400">
                          <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Live project links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className="mb-5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          Live Deployments
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.links.map((l) => (
                            <a
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-colors cursor-pointer ${c.link}`}
                            >
                              {l.label}
                              <ExternalLink size={11} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 text-xs font-medium border rounded-lg ${c.tag}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
