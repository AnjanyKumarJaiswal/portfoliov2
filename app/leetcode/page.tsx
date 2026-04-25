"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ActivityCalendar } from "react-activity-calendar";
import { ArrowLeft, Trophy, Code2, Target, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

type ActivityEntry = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

type LeetCodeProfile = {
  username: string;
  problemStats: { total: number; easy: number; medium: number; hard: number };
  contestRanking: {
    rating: number;
    globalRanking: number;
    topPercentage: number;
    attendedContestsCount: number;
  } | null;
  badges: { id: string; displayName: string; icon: string; category: string }[];
};

const currentYear = new Date().getFullYear();
const YEAR_OPTIONS = [
  { label: "Current", value: currentYear },
  { label: "Last Year", value: currentYear - 1 },
  { label: "Past Year", value: currentYear - 2 },
];

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex flex-col gap-1 p-5 bg-card-bg/50 border border-border border-dashed rounded-2xl">
      <span className="text-xs font-sans uppercase tracking-widest text-muted">{label}</span>
      <span className={`text-3xl font-serif ${color}`}>{value.toLocaleString()}</span>
    </div>
  );
}

export default function LeetCodePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState<LeetCodeProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [heatmapData, setHeatmapData] = useState<ActivityEntry[]>([]);
  const [heatmapLoading, setHeatmapLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/leetcode/profile")
      .then((r) => r.json())
      .then((d) => setProfile(d))
      .catch(() => setProfile(null))
      .finally(() => setProfileLoading(false));
  }, []);

  useEffect(() => {
    setHeatmapLoading(true);
    fetch(`/api/leetcode?year=${selectedYear}`)
      .then((r) => r.json())
      .then(({ data }) => setHeatmapData(data ?? []))
      .catch(() => setHeatmapData([]))
      .finally(() => setHeatmapLoading(false));
  }, [selectedYear]);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";
  const selectedLabel = YEAR_OPTIONS.find((o) => o.value === selectedYear)?.label ?? "Current";

  const leetcodeThemes = {
    light: ["#8E8E8E", "#ffead1", "#ffc27d", "#ffa116", "#d47a00"],
    dark: ["#8E8E8E", "#4a3712", "#7e5a0f", "#b6820c", "#ffa116"],
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full border-t border-dashed border-grid mt-15" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 max-w-[700px] w-full px-6 pt-12 pb-32 space-y-10"
      >
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <div className="space-y-1">
            <h1 className="text-5xl font-serif tracking-tight">LeetCode Profile</h1>
            <p className="text-muted font-sans uppercase tracking-[0.2em] text-[10px]">
              @anjany22 // Competitive Programming
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif border-b border-border border-dashed pb-2 flex items-center gap-2">
            <Code2 size={20} className="text-muted" /> Problems Solved
          </h2>
          {profileLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-muted/10 border border-border border-dashed rounded-2xl" />
              ))}
            </div>
          ) : profile ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Total" value={profile.problemStats.total} color="text-foreground" />
              <StatCard label="Easy" value={profile.problemStats.easy} color="text-green-500" />
              <StatCard label="Medium" value={profile.problemStats.medium} color="text-yellow-500" />
              <StatCard label="Hard" value={profile.problemStats.hard} color="text-red-500" />
            </div>
          ) : (
            <p className="text-muted text-sm font-sans">Failed to load stats.</p>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif border-b border-border border-dashed pb-2 flex items-center gap-2">
            <Trophy size={20} className="text-muted" /> Contest Rating
          </h2>
          {profileLoading ? (
            <div className="h-28 bg-muted/10 border border-border border-dashed rounded-2xl animate-pulse" />
          ) : profile?.contestRanking ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Rating" value={Math.round(profile.contestRanking.rating)} color="text-[#ffa116]" />
              <StatCard label="Global Rank" value={profile.contestRanking.globalRanking} color="text-foreground" />
              <StatCard label="Contests" value={profile.contestRanking.attendedContestsCount} color="text-foreground" />
              <div className="flex flex-col gap-1 p-5 bg-card-bg/50 border border-border border-dashed rounded-2xl">
                <span className="text-xs font-sans uppercase tracking-widest text-muted">Top %</span>
                <span className="text-3xl font-serif text-foreground">
                  {profile.contestRanking.topPercentage.toFixed(1)}%
                </span>
              </div>
            </div>
          ) : (
            <p className="text-muted text-sm font-sans">No contest data found.</p>
          )}
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-border border-dashed pb-2">
            <h2 className="text-2xl font-serif flex items-center gap-2">
              <Target size={20} className="text-muted" /> Submission Activity
            </h2>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((p) => !p)}
                className="flex items-center gap-2 px-3 py-1.5 bg-muted/10 border border-border border-dashed rounded-lg text-xs font-sans text-muted hover:text-foreground hover:bg-muted/20 transition-all"
              >
                {selectedLabel}
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 z-50 bg-background border border-border border-dashed rounded-xl overflow-hidden shadow-lg min-w-[110px]">
                  {YEAR_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSelectedYear(opt.value); setDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs font-sans transition-colors hover:bg-muted/20 ${selectedYear === opt.value ? "text-foreground" : "text-muted"}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="p-6 bg-card-bg/50 border border-border border-dashed rounded-2xl overflow-hidden flex justify-center min-h-[140px] items-center">
            {heatmapLoading ? (
              <p className="text-muted font-sans text-xs uppercase tracking-widest animate-pulse">Loading...</p>
            ) : heatmapData.length === 0 ? (
              <p className="text-muted font-sans text-xs uppercase tracking-widest">No data available</p>
            ) : (
              <ActivityCalendar
                data={heatmapData}
                blockSize={8}
                blockMargin={3}
                fontSize={11}
                theme={leetcodeThemes}
                colorScheme={isDarkMode ? "dark" : "light"}
                labels={{ totalCount: `{{count}} submissions in ${selectedYear === currentYear ? "the last year" : selectedYear}` }}
              />
            )}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif border-b border-border border-dashed pb-2 flex items-center gap-2">
            <Award size={20} className="text-muted" /> Badges
          </h2>
          {profileLoading ? (
            <div className="flex gap-4 animate-pulse">
              {[...Array(4)].map((_, i) => <div key={i} className="w-20 h-20 bg-muted/10 border border-border border-dashed rounded-xl" />)}
            </div>
          ) : profile && profile.badges.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {profile.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center gap-2 p-4 bg-card-bg/50 border border-border border-dashed rounded-2xl w-28 text-center hover:border-foreground/20 transition-all"
                >
                  {badge.icon ? (
                    <Image src={badge.icon} alt={badge.displayName} width={48} height={48} className="object-contain" />
                  ) : (
                    <div className="w-12 h-12 bg-muted/10 rounded-full flex items-center justify-center">
                      <Award size={20} className="text-muted" />
                    </div>
                  )}
                  <span className="text-[10px] font-sans text-muted leading-tight">{badge.displayName}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-sm font-sans">No badges yet.</p>
          )}
        </section>
      </motion.div>

      <div className="w-full border-t border-dashed border-grid mt-auto" />
      <footer className="relative z-50 max-w-[700px] w-full px-6 py-12">
        <Footer />
      </footer>
    </div>
  );
}
