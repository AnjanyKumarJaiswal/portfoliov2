"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectProps {
  title: string;
  slug: string;
  description: {
    short: string;
    long: string[];
    features: string[];
  };
  date: string;
  githubURL: string;
  liveURL: string;
  tags: string[];
  image?: string;
  icon?: string;
}

export function ProjectCard({ title, slug, description, githubURL, liveURL, tags, image, icon }: ProjectProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => router.push(`/projects/${slug}`)}
      className="group flex flex-col md:flex-row gap-6 p-4 bg-card-bg/50 border border-border border-dashed rounded-2xl transition-all duration-300 hover:border-foreground/20 hover:bg-muted/5 cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative aspect-video md:w-72 shrink-0 overflow-hidden rounded-xl border border-border bg-muted/10">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted/30 font-sans text-[10px] uppercase tracking-widest">
            Preview missing
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 py-1">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-serif text-foreground">
              {title}
            </h3>
            {icon && (
              <div className="relative w-6 h-6 rounded-md overflow-hidden bg-muted/20 border border-border">
                <Image src={icon} alt={`${title} icon`} fill className="object-cover" />
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-xs font-sans tracking-tight">
            {liveURL && (
              <Link 
                href={liveURL} 
                target="_blank" 
                onClick={(e) => e.stopPropagation()}
                className="px-2 py-1 bg-muted/20 border border-border rounded-md text-muted hover:text-foreground transition-all"
              >
                Live
              </Link>
            )}
            <span className="text-border">|</span>
            <Link 
              href={githubURL} 
              target="_blank" 
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-1 bg-muted/20 border border-border rounded-md text-muted hover:text-foreground transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">
          {description.short}
        </p>

        <div className="mt-auto space-y-3">
          <h4 className="text-sm font-serif text-foreground/80">Technologies Used:</h4>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-sans bg-muted/20 border border-border px-2 py-1 rounded-lg text-muted/90 hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
