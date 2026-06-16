"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("All fields are required.");
      return;
    }
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/mrevdpoo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const d = await res.json();
        setError(d.error || "Failed to send. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          description="Open to AI/ML internships, research collaborations, and interesting projects. Let's build something impactful."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-white text-xl mb-4">
              Open to Opportunities
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              I&apos;m actively looking for AI/ML internship roles, research positions, and
              collaboration opportunities in Generative AI, NLP, and Applied AI. If you&apos;re
              building something interesting, let&apos;s talk.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email", value: "ranahiemal@gmail.com", href: "mailto:ranahiemal@gmail.com" },
                { icon: Github, label: "GitHub", value: "github.com/hiemalrana22", href: "https://github.com/hiemalrana22" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hiemalrana", href: "https://linkedin.com/in/hiemalrana" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#13131a] border border-white/[0.06] hover:border-white/15 transition-all group cursor-pointer"
                >
                  <div className="p-2.5 bg-white/[0.04] border border-white/[0.06] rounded-lg group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
                    <item.icon size={16} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/15">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">Available</span>
              </div>
              <p className="text-xs text-zinc-500">
                Currently open to AI/ML internships (remote or on-site), research collaborations,
                and contract AI engineering work.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-[#13131a] border border-emerald-500/20 text-center">
                <CheckCircle size={40} className="text-emerald-400 mb-4" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">Message Sent!</h3>
                <p className="text-sm text-zinc-400 mb-6">
                  Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl bg-[#13131a] border border-white/[0.06] space-y-4"
                noValidate
              >
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Name <span className="text-rose-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Email <span className="text-rose-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Message <span className="text-rose-500" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity, project, or collaboration..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 p-3 bg-rose-500/[0.08] border border-rose-500/20 rounded-lg text-sm text-rose-400"
                  >
                    <AlertCircle size={14} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
