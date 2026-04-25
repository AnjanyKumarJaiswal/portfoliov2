"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { PROJECTS } from "../../../lib/data";
import { Footer } from "../../../components/Footer";
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Layout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* top border */}
      <div className="w-full border-t border-dashed border-grid mt-15" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-32 space-y-12"
      >
        {/* Navigation & Header */}
        <div className="space-y-8">
          <Link 
            href="/projects" 
            className="flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
          
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl font-serif tracking-tight">{project.title}</h1>
                {project.icon && (
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-muted/20 border border-border">
                    <Image src={project.icon} alt={project.title} fill className="object-cover" />
                  </div>
                )}
              </div>
              <p className="text-muted font-sans uppercase tracking-[0.2em] text-[10px]">
                Technical Case Study // {project.date}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Link 
                href={project.githubURL} 
                target="_blank"
                className="flex items-center gap-2 px-3 py-1.5 bg-muted/10 border border-border rounded-lg text-xs font-sans text-muted hover:text-foreground hover:bg-muted/20 transition-all"
              >
                <Github size={14} /> GitHub
              </Link>
              {project.liveURL && (
                <Link 
                  href={project.liveURL} 
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 bg-foreground text-background rounded-lg text-xs font-sans font-medium hover:opacity-90 transition-all"
                >
                  <ExternalLink size={14} /> Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border border-dashed bg-muted/5 group">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted/20 font-serif italic">
              Visualization pending...
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif border-b border-border border-dashed pb-2">Overview</h2>
              {(project.description as any).long.map((para: string, i: number) => (
                <p key={i} className="text-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif border-b border-border border-dashed pb-2">Key Features</h2>
              <ul className="space-y-3 text-muted">
                {(project.description as any).features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="space-y-4 p-6 bg-card-bg/50 border border-border border-dashed rounded-2xl">
              <h3 className="text-xs font-sans uppercase tracking-widest text-muted">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted/10 border border-border rounded text-[10px] font-sans text-muted uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs font-sans uppercase tracking-widest text-muted">Timeline</h3>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Calendar size={14} className="text-muted" />
                {project.date}
              </div>
            </section>
          </div>
        </div>
      </motion.div>

      <div className="w-full border-t border-dashed border-grid mt-auto" />
      <footer className="relative z-50 max-w-[700px] w-full px-6 py-12">
        <Footer />
      </footer>
    </div>
  );
}
