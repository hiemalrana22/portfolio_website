"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download, Sparkles } from "lucide-react";

const roles = ["Data Scientist", "Generative AI Engineer", "LLM Builder", "Applied AI Researcher"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="ambient-blob w-[600px] h-[600px] top-[-200px] left-[-200px] opacity-20"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
        <div
          className="ambient-blob w-[500px] h-[500px] bottom-[-100px] right-[-100px] opacity-15"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        />
        <div
          className="ambient-blob w-[300px] h-[300px] top-[40%] left-[50%] opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-sm text-indigo-400 mb-8"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span>Available for Data Science & Gen AI Internships · Research Roles</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span className="text-white">Hiemal</span>{" "}
          <span className="text-gradient-accent">Rana</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-6"
        >
          <p className="font-heading text-xl md:text-2xl font-medium text-zinc-300">
            {roles.join(" · ")}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          B.Tech CSE (Data Science) student at{" "}
          <span className="text-white font-medium">VIT</span> · Turning raw data
          into intelligence — building{" "}
          <span className="text-indigo-400">Generative AI pipelines</span>,{" "}
          <span className="text-violet-400">LLM-powered products</span>, and{" "}
          <span className="text-blue-400">production ML systems</span> that
          create real-world impact. Previously at IIT Delhi.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 cursor-pointer"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/[0.1] hover:border-white/[0.2] text-white font-semibold rounded-xl transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-6 text-zinc-500"
        >
          <a
            href="https://github.com/hiemalrana22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm cursor-pointer"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href="https://linkedin.com/in/hiemalrana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm cursor-pointer"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href="mailto:ranahiemal@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm cursor-pointer"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
