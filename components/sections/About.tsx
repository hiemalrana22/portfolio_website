"use client";

import { motion } from "framer-motion";
import { BarChart2, BrainCircuit, Database, Workflow, GraduationCap, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const traits = [
  {
    icon: Database,
    title: "Data Scientist",
    description: "End-to-end data pipelines — from raw ingestion and EDA to feature engineering, model training, and actionable insights.",
    color: "indigo",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI Engineer",
    description: "Building LLM-powered products: RAG systems, agentic workflows, prompt engineering, and multi-model orchestration via OpenRouter.",
    color: "violet",
  },
  {
    icon: BarChart2,
    title: "ML Engineer",
    description: "Ensemble methods (XGBoost, LightGBM, CatBoost), hyperparameter tuning with Optuna, SHAP explainability, and CI/CD for ML.",
    color: "blue",
  },
  {
    icon: Workflow,
    title: "AI Pipeline Builder",
    description: "FastAPI microservices, automated reporting workflows, and production-grade GenAI integrations with real business data.",
    color: "purple",
  },
];

const colorMap = {
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

const stack = [
  "Python", "Pandas", "NumPy", "Scikit-learn",
  "XGBoost", "LightGBM", "SHAP", "Optuna",
  "TensorFlow", "Transformers", "LangChain",
  "FastAPI", "OpenRouter", "Prompt Eng.",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="Data → Insight → Intelligence"
          description="I specialise in Data Science and Generative AI — turning messy data into decisions and LLMs into production systems."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-zinc-400 leading-relaxed"
          >
            <p>
              I&apos;m a{" "}
              <span className="text-white font-medium">Data Science undergraduate at VIT</span>{" "}
              who builds at the intersection of classical machine learning, deep learning, and
              the latest wave of{" "}
              <span className="text-indigo-400 font-medium">Generative AI</span>. My toolkit
              spans the entire ML lifecycle — data wrangling, feature engineering, model
              development, explainability, and deployment.
            </p>
            <p>
              On the <span className="text-white font-medium">Generative AI</span> side, I
              design and ship LLM-powered applications: RAG pipelines, multi-turn chatbots
              with session management, domain-specific fine-tuned models, and agentic
              workflows. At{" "}
              <span className="text-white font-medium">IIT Delhi</span> I built TamraBot — a
              production NLP system achieving 79–81% intent accuracy using FastAPI and
              OpenRouter. At{" "}
              <span className="text-white font-medium">OranjeStride</span> I build GenAI
              pipelines that replace manual reporting and extract acquisition insights from
              business data automatically.
            </p>
            <p>
              My research interests centre on{" "}
              <span className="text-indigo-400">Financial NLP</span>,{" "}
              <span className="text-violet-400">Healthcare AI</span>, and{" "}
              <span className="text-blue-400">Explainable ML</span> — domains where getting
              the model right genuinely matters.
            </p>

            {/* Quick stack pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <GraduationCap size={15} className="text-indigo-400" />
                VIT · B.Tech CSE (Data Science) · 2027 · CGPA 8.35
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <MapPin size={15} className="text-violet-400" />
                India
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Open to Data Science & GenAI Internships · Research Roles
              </span>
            </div>
          </motion.div>

          {/* Trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-[#13131a] border border-white/[0.06] card-hover group"
              >
                <div
                  className={`inline-flex p-2.5 rounded-xl border mb-3 ${colorMap[trait.color as keyof typeof colorMap]}`}
                >
                  <trait.icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1.5">
                  {trait.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
