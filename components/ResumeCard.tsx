"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ResumeCardProps {
    title: string;
    subtitle: string;
    period: string;
    location?: string;
    logo?: string;
    isWork?: boolean;
    descriptions?: string[];
    tags?: string[];
}

export function ResumeCard({ title, subtitle, period, location, logo, isWork, descriptions, tags }: ResumeCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasExpandableContent = isWork && (descriptions?.length || tags?.length);

    return (
        <div className="py-4 border-b border-foreground/10 last:border-b-0">
            {/* Clickable header */}
            <div
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => hasExpandableContent && setIsExpanded(!isExpanded)}
            >
                {/* Avatar */}
                <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center mt-0.5">
                    {logo ? (
                        <img src={logo} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-foreground/70 font-bold text-base">
                            {title[0]}
                        </div>
                    )}
                </div>

                {/* Info - left side */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-bold text-foreground truncate">{title}</h3>
                    </div>
                    <p className="text-[13px] text-muted mt-0.5">{subtitle}</p>
                </div>

                {/* Right side - date, location, chevron */}
                <div className="flex items-start gap-3 shrink-0">
                    <div className="text-right">
                        <p className="text-[13px] text-foreground font-semibold">{period}</p>
                        {location && (
                            <p className="text-[12px] text-muted mt-0.5">{location}</p>
                        )}
                    </div>
                    {hasExpandableContent && (
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1"
                        >
                            <ChevronDown className="w-4 h-4 text-muted" />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Expandable Content */}
            <AnimatePresence initial={false}>
                {isExpanded && hasExpandableContent && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 ml-16 space-y-4">
                            {/* Bullet points */}
                            {descriptions && descriptions.length > 0 && (
                                <ul className="space-y-3">
                                    {descriptions.map((desc, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[13px] text-muted/90 leading-relaxed">
                                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-muted/40 shrink-0" />
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Tech tags */}
                            {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-medium px-3 py-1 rounded-md border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
