"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
    title: string;
    description: string;
    date: string;
    githubURL: string;
    liveURL: string;
    tags: string[];
    image?: string;
}

export function ProjectCard({ title, description, date, githubURL, liveURL, tags, image }: ProjectProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="group flex flex-col bg-card-bg border border-border rounded-xl transition-all duration-300 overflow-hidden h-full"
        >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-muted/20">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted/30 font-bold uppercase tracking-widest text-xs">
                        No Preview
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                    <h3 className="text-base font-bold text-foreground">
                        {title}
                    </h3>
                    <p className="text-xs text-muted font-medium mt-1">
                        {date}
                    </p>
                </div>

                <p className="text-muted text-[13px] leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] bg-foreground/5 px-2 py-0.5 rounded-md font-medium text-muted hover:text-foreground transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            href={githubURL}
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-foreground/90 transition-all"
                        >
                            <Github className="w-3.5 h-3.5" />
                            Source
                        </Link>
                        {liveURL && (
                            <Link
                                href={liveURL}
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-muted/10 text-foreground px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-muted/20 transition-all border border-border"
                            >
                                Live Demo
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
