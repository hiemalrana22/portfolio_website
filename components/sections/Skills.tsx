"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const skillGroups = [
  {
    category: "Generative AI & LLMs",
    emoji: "🤖",
    color: "indigo",
    skills: [
      { name: "Prompt Engineering", level: 92 },
      { name: "LLM Orchestration (OpenRouter)", level: 88 },
      { name: "RAG Systems", level: 85 },
      { name: "Agentic Workflows", level: 80 },
      { name: "Fine-tuning / PEFT", level: 75 },
    ],
  },
  {
    category: "Data Science",
    emoji: "📊",
    color: "violet",
    skills: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "EDA & Feature Engineering", level: 92 },
      { name: "Scikit-learn", level: 90 },
      { name: "Statistical Modelling", level: 83 },
      { name: "Data Visualisation", level: 85 },
    ],
  },
  {
    category: "Machine Learning",
    emoji: "⚙️",
    color: "blue",
    skills: [
      { name: "XGBoost / LightGBM / CatBoost", level: 88 },
      { name: "Optuna (HPO)", level: 82 },
      { name: "SHAP (Explainability)", level: 85 },
      { name: "Model Evaluation & CI/CD", level: 80 },
    ],
  },
  {
    category: "NLP & Transformers",
    emoji: "🧠",
    color: "purple",
    skills: [
      { name: "Hugging Face Transformers", level: 85 },
      { name: "Intent Detection / NER", level: 84 },
      { name: "FinBERT / BERT fine-tuning", level: 80 },
      { name: "Text Classification", level: 88 },
      { name: "Sentiment Analysis", level: 86 },
    ],
  },
  {
    category: "Deep Learning",
    emoji: "🔬",
    color: "emerald",
    skills: [
      { name: "TensorFlow / Keras", level: 85 },
      { name: "Transfer Learning", level: 82 },
      { name: "CNNs (MobileNetV2)", level: 80 },
    ],
  },
  {
    category: "Engineering & Tools",
    emoji: "🛠",
    color: "amber",
    skills: [
      { name: "Python", level: 96 },
      { name: "FastAPI", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Git / GitHub Actions", level: 88 },
      { name: "AWS / Azure (basics)", level: 60 },
    ],
  },
];

const barColors: Record<string, string> = {
  indigo: "from-indigo-600 to-indigo-400",
  violet: "from-violet-600 to-violet-400",
  blue: "from-blue-600 to-blue-400",
  purple: "from-purple-600 to-purple-400",
  emerald: "from-emerald-600 to-emerald-400",
  amber: "from-amber-600 to-amber-400",
};

const dotColors: Record<string, string> = {
  indigo: "bg-indigo-400",
  violet: "bg-violet-400",
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
};

const marqueeItems = [
  "Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM",
  "CatBoost", "SHAP", "Optuna", "TensorFlow", "Keras", "Hugging Face",
  "Transformers", "FinBERT", "LangChain", "OpenRouter", "RAG", "FastAPI",
  "Prompt Engineering", "SQL", "GitHub Actions", "AWS", "EDA", "MLflow",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Data Science & Gen AI Stack"
          description="Full-spectrum expertise — from raw data wrangling and classical ML to LLM orchestration and production GenAI systems."
        />

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-3 w-max animate-[scroll_40s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="px-4 py-2 text-sm font-medium text-zinc-400 bg-[#13131a] border border-white/[0.06] rounded-xl whitespace-nowrap hover:text-white hover:border-white/15 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skill groups — GenAI + DS first, full width */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 rounded-2xl bg-[#13131a] border border-white/[0.06] ${gi < 2 ? "ring-1 ring-indigo-500/10" : ""}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${dotColors[group.color]}`} />
                <h3 className="font-heading font-semibold text-white text-sm">
                  {group.category}
                </h3>
                {gi < 2 && (
                  <span className="ml-auto px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded">
                    Core
                  </span>
                )}
              </div>

              <div className="space-y-3.5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-zinc-400">{skill.name}</span>
                      <span className="text-xs text-zinc-600">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: gi * 0.05 + si * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${barColors[group.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
