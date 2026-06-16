"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
