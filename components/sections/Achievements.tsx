"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Briefcase, Rocket, BookOpen, Award } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import SectionHeader from "@/components/shared/SectionHeader";

const stats = [
  { icon: Code2, value: 250, suffix: "+", label: "DSA Problems Solved", color: "indigo" },
  { icon: Briefcase, value: 2, suffix: "", label: "DS & GenAI Internships", color: "violet" },
  { icon: Rocket, value: 4, suffix: "+", label: "Production ML / GenAI Systems", color: "blue" },
  { icon: BookOpen, value: 5, suffix: "+", label: "Data Science Projects", color: "emerald" },
];

const achievements = [
  {
    icon: Trophy,
    title: "IIT Delhi Research Internship",
    description: "Selected for competitive Data Science & AI internship at IIT Delhi — India's top engineering institution. Built TamraBot achieving 79–81% classification accuracy.",
    badge: "Research",
    color: "violet",
  },
  {
    icon: Award,
    title: "OranjeStride AI Internship",
    description: "Building production-facing generative AI systems and LLM pipelines for real business applications.",
    badge: "Engineering",
    color: "indigo",
  },
  {
    icon: Code2,
    title: "CGPA 8.35 · VIT",
    description: "Maintaining strong academic performance in B.Tech Computer Science Engineering (Data Science) at Vellore Institute of Technology.",
    badge: "Academic",
    color: "emerald",
  },
  {
    icon: Rocket,
    title: "Production ML Systems",
    description: "Shipped 4+ AI/ML systems to production including healthcare AI chatbots, financial NLP tools, and ensemble ML pipelines.",
    badge: "Engineering",
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "Multi-Domain AI Research",
    description: "Research spanning Healthcare AI, Financial NLP, Deep Learning, and Explainable AI — bridging academic research and production deployment.",
    badge: "Research",
    color: "amber",
  },
  {
    icon: Trophy,
    title: "250+ DSA Problems",
    description: "Consistent problem-solving on LeetCode and Codeforces, demonstrating strong algorithmic thinking and software engineering fundamentals.",
    badge: "Technical",
    color: "rose",
  },
];

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  indigo: { icon: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20", badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20", border: "group-hover:border-indigo-500/20" },
  violet: { icon: "text-violet-400 bg-violet-500/10 border-violet-500/20", badge: "text-violet-400 bg-violet-500/10 border-violet-500/20", border: "group-hover:border-violet-500/20" },
  blue: { icon: "text-blue-400 bg-blue-500/10 border-blue-500/20", badge: "text-blue-400 bg-blue-500/10 border-blue-500/20", border: "group-hover:border-blue-500/20" },
  emerald: { icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", border: "group-hover:border-emerald-500/20" },
  amber: { icon: "text-amber-400 bg-amber-500/10 border-amber-500/20", badge: "text-amber-400 bg-amber-500/10 border-amber-500/20", border: "group-hover:border-amber-500/20" },
  rose: { icon: "text-rose-400 bg-rose-500/10 border-rose-500/20", badge: "text-rose-400 bg-rose-500/10 border-rose-500/20", border: "group-hover:border-rose-500/20" },
};

const statColors: Record<string, string> = {
  indigo: "text-indigo-400",
  violet: "text-violet-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones & Recognition"
          description="A track record of data science excellence, GenAI engineering, and research contributions that ship to production."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#13131a] border border-white/[0.06] text-center"
            >
              <stat.icon size={20} className={`mx-auto mb-3 ${statColors[stat.color]}`} />
              <p className={`font-heading text-3xl font-bold mb-1 ${statColors[stat.color]}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const c = colorMap[a.color];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group p-5 rounded-2xl bg-[#13131a] border border-white/[0.06] transition-colors duration-300 ${c.border}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border ${c.icon} flex-shrink-0`}>
                    <a.icon size={16} />
                  </div>
                  <div>
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider border rounded-full mb-1 ${c.badge}`}>
                      {a.badge}
                    </span>
                    <h3 className="font-heading font-semibold text-white text-sm leading-tight">
                      {a.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{a.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
