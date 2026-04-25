"use client";

import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { ResumeCard } from "../components/ResumeCard";
import { Footer } from "../components/Footer";
import { ContributionGraphs } from "../components/ContributionGraphs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { PROJECTS, EXPERIENCE, EDUCATION, SKILLS } from "../lib/data";

function RevealSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full border-t border-dashed border-grid mt-15" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <Hero />
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <section id="experience" className="space-y-6">
          <h2 className="text-3xl font-serif tracking-tight">
            Places I've Made an Impact
          </h2>

          <div className="divide-y divide-border divide-dashed">
            {EXPERIENCE.map((item, idx) => (
              <ResumeCard
                key={idx}
                title={item.company}
                subtitle={item.role}
                period={item.period}
                location={item.location}
                logo={item.logo}
                descriptions={item.descriptions}
                tags={item.tags}
                isWork
              />
            ))}
          </div>
        </section>
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <ContributionGraphs />
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif tracking-tight">
              Things I've Built
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 bg-muted/10 border border-border rounded-xl text-sm font-sans text-muted hover:text-foreground hover:bg-muted/20 transition-all group"
            >
              View all projects
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <section id="education" className="space-y-6">
          <h2 className="text-3xl font-serif tracking-tight">Education</h2>

          {EDUCATION.map((item, idx) => (
            <ResumeCard
              key={idx}
              title={item.school}
              subtitle={item.degree}
              period={item.period}
              logo={item.logo}
            />
          ))}
        </section>
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <section id="skills" className="space-y-8">
          <h2 className="text-3xl font-serif tracking-tight">Skills & Technologies</h2>

          <div className="space-y-6">
            {SKILLS.map(({ label, skills }) => (
              <div key={label} className="space-y-3">
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-[11px] font-sans tracking-wide bg-muted/10 border border-border border-dashed rounded-lg text-muted hover:text-foreground hover:bg-muted/20 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      <div className="w-full border-t border-dashed border-grid" />

      <RevealSection className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-15">
        <Footer />
      </RevealSection>
    </div>
  );
}
