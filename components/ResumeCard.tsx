"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
    <div className="py-6 border-b border-border border-dashed last:border-b-0 group">
      {/* Clickable header */}
      <div
        className="flex items-start gap-4 cursor-pointer"
        onClick={() => hasExpandableContent && setIsExpanded(!isExpanded)}
      >
        {/* Avatar */}
        <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-xl border border-border bg-card-bg flex items-center justify-center transition-colors group-hover:border-foreground/30">
          {logo ? (
            <Image src={logo} alt={title} fill className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted font-bold text-sm">
              {title[0]}
            </div>
          )}
        </div>

        {/* Info - left side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-serif text-foreground group-hover:text-muted transition-colors">{title}</h3>
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans text-muted uppercase tracking-tighter whitespace-nowrap">{period}</span>
              {hasExpandableContent && (
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-muted/40 group-hover:text-foreground/50"
                >
                  <ChevronDown size={14} />
                </motion.div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 mt-1">
            <p className="text-sm text-muted font-medium">{subtitle}</p>
            {location && (
              <div className="flex items-center gap-1 text-[10px] text-muted/60 uppercase tracking-widest">
                <MapPin size={10} />
                {location}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {(isExpanded || !isWork) && (
          <motion.div
            initial={isWork ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 pl-14 space-y-4">
              {/* Bullet points */}
              {descriptions && descriptions.length > 0 && (
                <ul className="space-y-2">
                  {descriptions.map((desc, idx) => (
                    <li key={idx} className="text-sm text-muted/80 leading-relaxed list-disc list-outside ml-4 marker:text-border">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-sans px-2 py-0.5 rounded border border-border bg-card-bg text-muted hover:text-foreground transition-colors"
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
