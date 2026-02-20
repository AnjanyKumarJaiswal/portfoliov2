"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Hero() {
    const [imageIdx, setImageIdx] = useState(1);
    const images = ["/images/me1.jpg", "/images/me2.jpg"];

    return (
        <section className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-8"
            >
                {/* Avatar on the Left */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 group cursor-pointer"
                    onClick={() => setImageIdx(prev => prev === 1 ? 2 : 1)}
                >
                    <div className="absolute inset-0 bg-gray-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative w-full h-full rounded-3xl border border-border overflow-hidden bg-card-bg ring-4 ring-background transition-all duration-300">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={imageIdx}
                                src={imageIdx === 1 ? "/images/me1.jpg" : "/images/me2.jpg"}
                                alt="Anjany Kumar Jaiswal"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>

                <div className="space-y-4 flex-1">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Hi, I'm <span className="text-foreground">Anjany.</span>
                    </h1>
                    <div className="space-y-2 text-muted text-lg leading-relaxed">
                        <p>
                            Pre-final year student at <span className="text-foreground font-medium">SRM IST</span>.
                        </p>
                        <p>
                            AI Engineer & Full Stack Developer. I build production-grade AI agents,
                            scalable systems, and high-performance web applications.
                        </p>
                        <p>
                            Currently working at <span className="text-foreground font-medium italic underline decoration-border underline-offset-4 transition-colors">ViksaAI</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-wrap gap-2 pt-2"
            >
                {["TypeScript", "Python", "Go-Lang", "Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes", "MCP SDK"].map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-card-bg border border-border rounded-full text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-200"
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>
        </section>
    );
}
