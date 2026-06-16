"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const experiences = [
  {
    company: "OranjeStride",
    role: "Data Science & Research Intern",
    period: "Apr 2026 – Present",
    type: "Current",
    location: "Remote",
    description:
      "Building GenAI-powered data science systems — LLM pipelines over structured business data, automated insight extraction, and end-to-end ML reporting infrastructure.",
    highlights: [
      "Built RAG-style Generative AI pipelines to surface insights from raw business datasets automatically",
      "Replaced manual reporting workflows with LLM-generated executive summaries and dashboards",
      "Developed data-driven acquisition insight systems: EDA → feature extraction → GenAI narrative",
      "Conducted applied research on prompt engineering, model evaluation, and retrieval strategies",
      "Architected production GenAI solutions connecting structured SQL data with LLM reasoning layers",
    ],
    tech: ["Python", "GenAI", "RAG", "LLMs", "Pandas", "SQL", "FastAPI", "Data Pipelines"],
    color: "indigo",
  },
  {
    company: "IIT Delhi",
    role: "Data Science / AI Intern",
    period: "May 2025 – Jul 2025",
    type: "Past",
    location: "New Delhi, India",
    description:
      "Built TamraBot — a full GenAI + data science system combining classical NLP, intent classification models, and LLM orchestration for healthcare question-answering. 79–81% classification accuracy.",
    highlights: [
      "Designed end-to-end data pipeline: corpus collection → preprocessing → feature engineering → model training",
      "Built multi-stage NLP classifier for intent detection and medical entity extraction on domain-specific data",
      "Integrated OpenRouter for multi-LLM fallback (GPT-4, Claude, Mistral), ensuring 99%+ uptime",
      "Achieved 79–81% intent classification accuracy — benchmark on custom Ayurvedic healthcare dataset",
      "Wrapped everything in a production FastAPI microservice with session management for multi-turn context",
      "Applied data science techniques: TF-IDF baselines → transformer fine-tuning → ensemble voting",
    ],
    tech: ["Python", "NLP", "Transformers", "FastAPI", "OpenRouter", "LLMs", "GenAI", "Healthcare DS"],
    color: "violet",
  },
];

const colorMap = {
  indigo: {
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    dot: "bg-indigo-500",
    glow: "shadow-indigo-500/10",
    tag: "bg-indigo-500/[0.07] text-indigo-300 border-indigo-500/15",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dot: "bg-violet-500",
    glow: "shadow-violet-500/10",
    tag: "bg-violet-500/[0.07] text-violet-300 border-violet-500/15",
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
