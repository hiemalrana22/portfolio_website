"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, Users } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

interface GitHubStats {
  repos: number;
  stars: number;
  forks: number;
  followers: number;
  languages: Record<string, number>;
}

const langColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  R: "#198CE7",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e44b23",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
};

export default function GitHub() {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((repos) => {
        if (!Array.isArray(repos)) return;
        const langCount: Record<string, number> = {};
        let stars = 0;
        let forks = 0;
        repos.forEach((r: { language?: string; stargazers_count?: number; forks_count?: number }) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
          stars += r.stargazers_count || 0;
          forks += r.forks_count || 0;
        });
        setStats({
          repos: repos.length,
          stars,
          forks,
          followers: 0,
          languages: langCount,
        });
      })
      .catch(() => {});
  }, []);

  const totalLang = stats
    ? Object.values(stats.languages).reduce((a, b) => a + b, 0)
    : 0;

  return (
    <section id="github" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="GitHub"
          title="Code Dashboard"
          description="Open source activity, language breakdown, and repository statistics."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-[#13131a] border border-white/[0.06]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <Github size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-white">hiemalrana22</p>
                <p className="text-xs text-zinc-500">github.com/hiemalrana22</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: BookOpen, label: "Repositories", value: stats?.repos ?? "—", color: "text-indigo-400" },
                { icon: Star, label: "Total Stars", value: stats?.stars ?? "—", color: "text-amber-400" },
                { icon: GitFork, label: "Total Forks", value: stats?.forks ?? "—", color: "text-emerald-400" },
                { icon: Users, label: "Followers", value: stats?.followers || "—", color: "text-violet-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <item.icon size={14} className={`mb-2 ${item.color}`} />
                  <p className={`font-heading text-xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/hiemalrana22"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-zinc-300 border border-white/[0.08] rounded-xl hover:border-white/20 hover:text-white transition-all cursor-pointer"
            >
              <Github size={14} />
              View GitHub Profile
            </a>
          </motion.div>

          {/* Language breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-[#13131a] border border-white/[0.06]"
          >
            <h3 className="font-heading font-semibold text-white mb-5">Languages Used</h3>

            {stats ? (
              <div className="space-y-3">
                {Object.entries(stats.languages)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 6)
                  .map(([lang, count]) => (
                    <div key={lang}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: langColors[lang] || "#888" }}
                          />
                          <span className="text-sm text-zinc-300">{lang}</span>
                        </div>
                        <span className="text-xs text-zinc-500">
                          {Math.round((count / totalLang) * 100)}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(count / totalLang) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{ background: langColors[lang] || "#888" }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-3 bg-white/[0.05] rounded mb-1 w-1/3" />
                    <div className="h-1.5 bg-white/[0.04] rounded-full" />
                  </div>
                ))}
              </div>
            )}

            {/* Primary language callout */}
            <div className="mt-6 pt-5 border-t border-white/[0.05]">
              <p className="text-xs text-zinc-600">
                Primary language:{" "}
                <span className="text-[#3572A5] font-semibold">Python</span> — used across all AI,
                ML, and research projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
