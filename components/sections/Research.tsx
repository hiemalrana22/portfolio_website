"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Cpu, TrendingUp, Heart, Lightbulb, Layers, DatabaseZap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const interests = [
  {
    icon: Cpu,
    title: "LLM Systems & Generative AI",
    description:
      "Designing production LLM systems — RAG pipelines, agentic frameworks, multi-model orchestration, and domain-adaptive fine-tuning for specialised use cases.",
    tags: ["RAG", "LLM Agents", "Fine-tuning", "OpenRouter", "Prompt Engineering"],
    color: "indigo",
  },
  {
    icon: DatabaseZap,
    title: "Applied Data Science",
    description:
      "End-to-end ML pipelines with rigorous EDA, feature engineering, ensemble modelling, and automated hyperparameter optimisation for real business decisions.",
    tags: ["Feature Engineering", "EDA", "Ensemble ML", "Optuna", "MLOps"],
    color: "violet",
  },
  {
    icon: TrendingUp,
    title: "Financial NLP",
    description:
      "Applying transformer-based NLP to SEC EDGAR filings, earnings calls, and market data for alpha generation and sentiment-driven stock movement prediction.",
    tags: ["FinBERT", "Sentiment Analysis", "SEC EDGAR", "Stock Prediction"],
    color: "emerald",
  },
  {
    icon: Heart,
    title: "Healthcare AI",
    description:
      "Clinical NLP, disease risk prediction, and Ayurvedic knowledge systems — AI applications where model reliability and interpretability are non-negotiable.",
    tags: ["Clinical NLP", "Risk Prediction", "Ayurvedic AI", "XAI"],
    color: "rose",
  },
  {
    icon: Lightbulb,
    title: "Explainable AI",
    description:
      "SHAP, LIME, and attention visualisation to make black-box models interpretable — essential for regulated domains like healthcare and finance.",
    tags: ["SHAP", "LIME", "Attention Maps", "Model Interpretability"],
    color: "amber",
  },
  {
    icon: Layers,
    title: "ML Systems Engineering",
    description:
      "MLOps pipelines, FastAPI inference services, CI/CD for ML, model monitoring, and scaling AI workloads for production reliability.",
    tags: ["MLOps", "FastAPI", "CI/CD", "Model Monitoring", "Docker"],
    color: "blue",
  },
];

const colorMap = {
  indigo: "text-indigo-400 bg-indigo-500/[0.08] border-indigo-500/20 group-hover:bg-indigo-500/[0.12]",
  emerald: "text-emerald-400 bg-emerald-500/[0.08] border-emerald-500/20 group-hover:bg-emerald-500/[0.12]",
  rose: "text-rose-400 bg-rose-500/[0.08] border-rose-500/20 group-hover:bg-rose-500/[0.12]",
  amber: "text-amber-400 bg-amber-500/[0.08] border-amber-500/20 group-hover:bg-amber-500/[0.12]",
  blue: "text-blue-400 bg-blue-500/[0.08] border-blue-500/20 group-hover:bg-blue-500/[0.12]",
  violet: "text-violet-400 bg-violet-500/[0.08] border-violet-500/20 group-hover:bg-violet-500/[0.12]",
};

const tagColors: Record<string, string> = {
  indigo: "text-indigo-300 bg-indigo-500/[0.07] border-indigo-500/15",
  emerald: "text-emerald-300 bg-emerald-500/[0.07] border-emerald-500/15",
  rose: "text-rose-300 bg-rose-500/[0.07] border-rose-500/15",
  amber: "text-amber-300 bg-amber-500/[0.07] border-amber-500/15",
  blue: "text-blue-300 bg-blue-500/[0.07] border-blue-500/15",
  violet: "text-violet-300 bg-violet-500/[0.07] border-violet-500/15",
};

export default function Research() {
  return (
    <section id="research" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Research & Interests"
          title="Where Data Meets Intelligence"
          description="Bridging rigorous data science with cutting-edge generative AI — from statistical modelling to production LLM systems."
        />

        {/* Interest cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group p-6 rounded-2xl bg-[#13131a] border border-white/[0.06] card-hover ${i < 2 ? "ring-1 ring-indigo-500/10" : ""}`}
            >
              <div
                className={`inline-flex p-2.5 rounded-xl border mb-4 transition-colors duration-300 ${colorMap[item.color as keyof typeof colorMap]}`}
              >
                <item.icon size={18} />
              </div>
              {i < 2 && (
                <span className="mb-2 inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded">
                  Primary
                </span>
              )}
              <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-[10px] font-medium border rounded-md ${tagColors[item.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Applied research panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#16162a] to-[#13131a] border border-indigo-500/10"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
              <BookOpen size={20} className="text-indigo-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Applied Research Projects
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Research that ships. Every project below went from notebook experiment to a
                working system — combining solid data science foundations with generative AI
                techniques to solve domain-specific problems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "TamraBot — Generative Ayurvedic AI",
                    meta: "IIT Delhi · Healthcare NLP · FastAPI",
                    desc: "LLM-backed chatbot with intent classification (79–81% accuracy), symptom→disease matching, session context, and OpenRouter multi-model fallback.",
                  },
                  {
                    title: "S&P 500 Earnings NLP",
                    meta: "Financial Data Science · FinBERT",
                    desc: "SEC EDGAR transcript pipeline — FinBERT fine-tuned on earnings call language for directional stock movement prediction.",
                  },
                  {
                    title: "Explainable Heart Risk Prediction",
                    meta: "Healthcare DS · XGBoost + SHAP",
                    desc: "Stacked ensemble (XGBoost + LightGBM + CatBoost) with full SHAP explainability dashboard and Optuna-driven HPO.",
                  },
                  {
                    title: "GenAI Business Intelligence",
                    meta: "OranjeStride · Applied GenAI",
                    desc: "RAG-style LLM pipelines over structured business data — automated report generation, acquisition insight extraction, and stakeholder-ready summaries.",
                  },
                ].map((r) => (
                  <div
                    key={r.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/20 transition-colors"
                  >
                    <p className="font-semibold text-white text-sm mb-0.5">{r.title}</p>
                    <p className="text-[10px] text-indigo-400 font-medium mb-2 uppercase tracking-wide">
                      {r.meta}
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.05]">
                <p className="text-sm text-zinc-500">
                  <span className="text-white font-medium">Open to collaboration in:</span>{" "}
                  Generative AI applications, Financial NLP, Healthcare data science, and
                  LLM systems engineering.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-3 text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  Discuss a research collaboration
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
