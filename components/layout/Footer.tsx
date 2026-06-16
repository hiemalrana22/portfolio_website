import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-bold text-white">
            <span className="text-gradient-accent">Hiemal Rana</span>
          </p>
          <p className="text-sm text-zinc-500 mt-1">
            Data Scientist · Generative AI Engineer · Applied Researcher
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hiemalrana22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/hiemalrana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ranahiemal@gmail.com"
            aria-label="Email"
            className="p-2 text-zinc-500 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Hiemal Rana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
