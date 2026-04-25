"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../../components/ProjectCard";
import { Footer } from "../../components/Footer";
import { PROJECTS } from "../../lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function RevealSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* top border */}
      <div className="w-full border-t border-dashed border-grid mt-15" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            <h1 className="text-4xl font-serif tracking-tight">All Projects</h1>
            <p className="text-muted text-sm max-w-lg leading-relaxed">
              A collection of my work in AI, Full Stack Development, and Open Source.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid mt-auto" />
      
      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 py-12">
        <Footer />
      </RevealSection>
    </div>
  );
}
