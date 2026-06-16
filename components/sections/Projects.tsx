"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Search } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  featured?: boolean;
  featuredDescription?: string;
  category?: string;
}

const featuredProjects: Partial<Repo>[] = [
  {
    name: "GenAI Business Intelligence",
    description:
      "RAG-style LLM pipelines over structured business data — automated reporting, acquisition insight extraction, and stakeholder-ready GenAI summaries at OranjeStride.",
    featuredDescription:
      "Production GenAI system replacing manual data analysis. LLMs + business data = decision intelligence.",
    featured: true,
    category: "Generative AI",
    language: "Python",
    topics: ["generative-ai", "rag", "llm", "business-intelligence", "openai", "data-pipeline"],
    html_url: "https://github.com/hiemalrana22",
  },
  {
    name: "TamraBot — Ayurvedic GenAI",
    description:
      "Production LLM chatbot with FastAPI, multi-stage NLP pipeline (intent detection → disease matching → recommendation), session management & OpenRouter multi-model fallback. 79–81% intent accuracy.",
    featuredDescription:
      "End-to-end GenAI system: data collection → NLP pipeline → LLM orchestration → production API.",
    featured: true,
    category: "Generative AI",
    language: "Python",
    topics: ["fastapi", "llm", "nlp", "rag", "openrouter", "intent-detection", "healthcare-ai"],
    html_url: "https://tamrabot.vercel.app/",
    homepage: "https://tamrabot.vercel.app/",
  },
  {
    name: "S&P 500 Earnings Call NLP",
    description:
      "Data science pipeline on SEC EDGAR transcripts — FinBERT fine-tuned on financial language to predict directional stock movement from earnings call sentiment.",
    featuredDescription:
      "Financial data science: scraping → EDA → NLP feature engineering → FinBERT → stock signal.",
    featured: true,
    category: "Data Science · Financial NLP",
    language: "Python",
    topics: ["finbert", "financial-nlp", "sec-edgar", "data-science", "transformers", "pandas"],
    html_url: "https://github.com/hiemalrana22",
  },
  {
    name: "Heart Disease Risk Prediction",
    description:
      "Stacked ensemble (XGBoost + LightGBM + CatBoost) with full SHAP explainability dashboard, Optuna HPO, cross-validation, and CI/CD pipeline for healthcare risk scoring.",
    featuredDescription:
      "Clinical-grade data science: rigorous EDA → feature engineering → explainable ensemble → deployment.",
    featured: true,
    category: "Data Science · Healthcare",
    language: "Python",
    topics: ["xgboost", "lightgbm", "catboost", "shap", "optuna", "data-science", "healthcare"],
    html_url: "https://github.com/hiemalrana22",
  },
];

const categories = ["All", "Generative AI", "Data Science", "NLP", "Healthcare AI", "Deep Learning"];

const langColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  R: "#198CE7",
  Java: "#b07219",
  "C++": "#f34b7d",
};

function ProjectCard({ repo, index }: { repo: Partial<Repo>; index: number }) {
  return (
    <motion.div
      key={repo.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group p-5 rounded-2xl bg-[#13131a] border border-white/[0.06] card-hover flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Github size={15} className="text-zinc-500 flex-shrink-0" />
          <span className="font-heading font-semibold text-white text-sm group-hover:text-indigo-400 transition-colors line-clamp-1">
            {repo.name}
          </span>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-zinc-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label={`View ${repo.name} on GitHub`}
        >
          <ExternalLink size={13} />
        </a>
      </div>

      {repo.category && (
        <span className="mb-2 inline-flex self-start px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          {repo.category}
        </span>
      )}

      <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-1">
        {repo.description || "No description available."}
      </p>

      <div className="mt-auto">
        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {repo.topics.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] text-zinc-500 bg-white/[0.04] border border-white/[0.05] rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-zinc-600">
          <div className="flex items-center gap-3">
            {(repo.stargazers_count ?? 0) > 0 && (
              <span className="flex items-center gap-1">
                <Star size={11} />
                {repo.stargazers_count}
              </span>
            )}
            {(repo.forks_count ?? 0) > 0 && (
              <span className="flex items-center gap-1">
                <GitFork size={11} />
                {repo.forks_count}
              </span>
            )}
          </div>
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: langColors[repo.language] || "#888" }}
              />
              {repo.language}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allProjects: Partial<Repo>[] = [
    ...featuredProjects,
    ...repos.filter(
      (r) => !featuredProjects.some((fp) => fp.name?.toLowerCase() === r.name.toLowerCase())
    ),
  ];

  const filtered = allProjects.filter((p) => {
    const matchSearch =
      !search ||
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase()) ||
      p.topics?.some((t) => t.includes(search.toLowerCase()));
    const matchCat =
      activeCategory === "All" ||
      p.category === activeCategory ||
      p.topics?.some((t) =>
        t.toLowerCase().includes(activeCategory.toLowerCase().replace(" ai", ""))
      );
    return matchSearch && matchCat;
  });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've Built"
          description="Production GenAI systems, data science pipelines, and research experiments — from LLM orchestration to ensemble ML with full explainability."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#16162a] to-[#13131a] border border-indigo-500/10 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400">
                      Featured · {p.category}
                    </span>
                    <h3 className="font-heading font-bold text-white text-lg mt-1">{p.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.homepage && (
                      <a
                        href={p.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 transition-colors cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Live Demo
                      </a>
                    )}
                    {p.html_url && !p.homepage && (
                      <a
                        href={p.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-600 hover:text-white transition-colors cursor-pointer"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.description}</p>
                {p.featuredDescription && (
                  <p className="text-xs text-zinc-600 italic mb-4">{p.featuredDescription}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {p.topics?.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-medium text-indigo-300 bg-indigo-500/[0.08] border border-indigo-500/15 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub repos */}
        <div className="mb-8">
          <h3 className="font-heading font-semibold text-white mb-6">All Repositories</h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#13131a] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-[#13131a] text-zinc-400 border border-white/[0.06] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 rounded-2xl bg-[#13131a] border border-white/[0.04] animate-pulse" />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" layout>
              {filtered.map((p, i) => (
                <ProjectCard key={p.name || i} repo={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/hiemalrana22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-300 border border-white/[0.08] rounded-xl hover:border-white/20 hover:text-white transition-all cursor-pointer"
          >
            <Github size={15} />
            View all on GitHub
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
