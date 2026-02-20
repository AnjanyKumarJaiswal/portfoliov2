"use client";

import { motion } from "framer-motion";
import {
    Home,
    Briefcase,
    Github,
    Linkedin,
    Mail,
    Sun,
    Moon,
    Code,
    FileText
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Code, label: "Experience", href: "#experience" },
    { icon: FileText, label: "Resume", href: "https://drive.google.com/file/d/1ScaQpdPjLgtGkGcwy4RCC1YTr4-R44nO/view?usp=drive_link" },
    { icon: Github, label: "GitHub", href: "https://github.com/AnjanyKumarJaiswal" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/anjany5322" },
    { icon: Mail, label: "Contact", href: "mailto:anjany.jaiswal2005@gmail.com" },
];

export function Dock() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
        }
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-1 p-2 bg-background/50 backdrop-blur-xl border border-border rounded-2xl shadow-2xl transition-colors duration-300"
            >
                {items.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        className="group relative p-3 hover:bg-foreground/5 rounded-xl transition-all duration-200"
                    >
                        <item.icon className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border whitespace-nowrap">
                            {item.label}
                        </span>
                    </Link>
                ))}

                <div className="w-px h-6 bg-border mx-1" />

                <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-3 hover:bg-foreground/5 rounded-xl transition-all duration-200 group relative"
                >
                    {isDark ? (
                        <Sun className="w-5 h-5 text-muted group-hover:text-foreground transition-all" />
                    ) : (
                        <Moon className="w-5 h-5 text-muted group-hover:text-foreground transition-all" />
                    )}

                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border whitespace-nowrap text-[10px] font-bold uppercase tracking-tighter">
                        {isDark ? "Light" : "Dark"}
                    </span>
                </button>
            </motion.nav>
        </div>
    );
}
