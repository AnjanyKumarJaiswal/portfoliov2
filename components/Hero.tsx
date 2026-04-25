"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Twitter, Linkedin, Mail, Calendar, Briefcase, Code, FileText, Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const doc = document.documentElement;
    if (isDark) {
      doc.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      doc.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-8 h-8 flex items-center justify-center rounded-full border border-border bg-card-bg hover:bg-accent hover:text-background transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

export function Hero() {
  const [imageIdx, setImageIdx] = useState(1);

  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-20 h-20 shrink-0 group cursor-pointer"
            onClick={() => setImageIdx(prev => prev === 1 ? 2 : 1)}
          >
            <div className="relative w-full h-full rounded-2xl border border-border overflow-hidden bg-card-bg transition-all duration-300 group-hover:border-foreground/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageIdx}
                  src={imageIdx === 1 ? "/images/me1.jpg" : "/images/me2.jpg"}
                  alt="Anjany Kumar Jaiswal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </AnimatePresence>
            </div>
          </motion.div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-serif tracking-tight">
                Anjany Kumar Jaiswal
              </h1>
              <ThemeToggle />
            </div>
            <p className="text-muted text-sm font-medium uppercase tracking-wider mt-1">
              AI Engineer & Full Stack Developer
            </p>
          </div>
        </div>

        <div className="space-y-2 max-w-xl">
          <p className="text-muted leading-relaxed">
            Hi, I'm Anjany, an AI Engineer focused on the intersection of heavy backend architecture and applied AI, Currently pursuing B.Tech at <span className="text-foreground font-medium">SRM IST</span>.
          </p>
          <p className="text-muted leading-relaxed">
            I'm currently working as an AI Engineer Intern <a href="https://app.viksaai.com/"><span className="text-foreground font-medium italic">@ViksaAI</span></a>, 
            architecting production-grade AI agents and scalable systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a 
            href="https://cal.com/anjanykumarjaiswal/15min" 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Calendar size={16} />
            Book an intro call
          </a>
          <a 
            href="mailto:anjany.jaiswal2005@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-xl text-sm font-medium hover:bg-accent hover:text-background transition-all"
          >
            <Mail size={16} />
            Send an email
          </a>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <a href="https://github.com/AnjanyKumarJaiswal" target="_blank" className="badge flex items-center gap-1.5">
            <Github size={12} /> GitHub
          </a>
          <a href="https://linkedin.com/in/anjany5322" target="_blank" className="badge flex items-center gap-1.5">
            <Linkedin size={12} /> LinkedIn
          </a>
          <a href="https://x.com/anjanytwts" target="_blank" className="badge flex items-center gap-1.5">
            <Twitter size={12} /> Twitter
          </a>
          <div className="w-px h-3 bg-border mx-1" />
          <a href="#projects" className="badge flex items-center gap-1.5">
            <Briefcase size={12} /> Projects
          </a>
          <a href="#experience" className="badge flex items-center gap-1.5">
            <Code size={12} /> Experience
          </a>
          <a href="https://drive.google.com/file/d/1ScaQpdPjLgtGkGcwy4RCC1YTr4-R44nO/view?usp=drive_link" target="_blank" className="badge flex items-center gap-1.5">
            <FileText size={12} /> Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
}
