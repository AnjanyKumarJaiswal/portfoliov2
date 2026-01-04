"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface ResumeCardProps {
    title: string;
    subtitle: string;
    period: string;
    logo?: string;
    isWork?: boolean;
}

export function ResumeCard({ title, subtitle, period, logo, isWork }: ResumeCardProps) {
    return (
        <div className="group relative flex items-center gap-4 py-4 border-b border-border/50 last:border-0 hover:bg-foreground/[0.02] transition-colors px-2 -mx-2 rounded-xl">
            <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full border border-border bg-card-bg flex items-center justify-center">
                {logo ? (
                    <img src={logo} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                        {title[0]}
                    </div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-base font-bold text-foreground truncate">{title}</h3>
                    <span className="text-[13px] text-muted whitespace-nowrap font-medium">{period}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <p className="text-[13px] text-muted truncate">{subtitle}</p>
                    {isWork && (
                        <ChevronRight className="w-4 h-4 text-muted group-hover:text-foreground transition-all group-hover:translate-x-0.5" />
                    )}
                </div>
            </div>
        </div>
    );
}
