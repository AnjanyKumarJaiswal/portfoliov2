"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type ActivityEntry = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const currentYear = new Date().getFullYear();
const YEAR_OPTIONS = [
  { label: "Current", value: currentYear },
  { label: "Last Year", value: currentYear - 1 },
  { label: "Past Year", value: currentYear - 2 },
];

export function ContributionGraphs() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [leetcodeData, setLeetcodeData] = useState<ActivityEntry[]>([]);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setLeetcodeLoading(true);
    fetch(`/api/leetcode?year=${selectedYear}`)
      .then((r) => r.json())
      .then(({ data }) => setLeetcodeData(data ?? []))
      .catch(() => setLeetcodeData([]))
      .finally(() => setLeetcodeLoading(false));
  }, [selectedYear]);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  const githubThemes = {
    light: ["#8E8E8E", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#8E8E8E", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const leetcodeThemes = {
    light: ["#8E8E8E", "#ffead1", "#ffc27d", "#ffa116", "#d47a00"],
    dark: ["#8E8E8E", "#4a3712", "#7e5a0f", "#b6820c", "#ffa116"],
  };

  const selectedLabel = YEAR_OPTIONS.find((o) => o.value === selectedYear)?.label ?? "Current";

  return (
    <div className="space-y-12 w-full">
      {/* GitHub Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-foreground">GitHub Contributions</h3>
        <div className="p-6 bg-card-bg/50 border border-border border-dashed rounded-2xl overflow-hidden flex justify-center">
          <GitHubCalendar
            username="AnjanyKumarJaiswal"
            blockSize={8}
            blockMargin={3}
            fontSize={11}
            theme={githubThemes}
            colorScheme={isDarkMode ? "dark" : "light"}
          />
        </div>
      </div>

      {/* LeetCode Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-serif text-foreground">LeetCode Submissions</h3>

          <div className="flex items-center gap-2">
            <Link
              href="/leetcode"
              className="px-3 py-1.5 bg-muted/10 border border-border border-dashed rounded-lg text-xs font-sans text-muted hover:text-foreground hover:bg-muted/20 transition-all"
            >
              View Profile
            </Link>

            {/* Year Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-1.5 bg-muted/10 border border-border border-dashed rounded-lg text-xs font-sans text-muted hover:text-foreground hover:bg-muted/20 transition-all"
            >
              {selectedLabel}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1 z-50 bg-background border border-border border-dashed rounded-xl overflow-hidden shadow-lg min-w-[110px]">
                {YEAR_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSelectedYear(opt.value);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-sans transition-colors hover:bg-muted/20 ${
                      selectedYear === opt.value ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>

        <div className="p-6 bg-card-bg/50 border border-border border-dashed rounded-2xl overflow-hidden flex justify-center min-h-[140px] items-center">
          {leetcodeLoading ? (
            <p className="text-muted font-sans text-xs uppercase tracking-widest animate-pulse">Loading...</p>
          ) : leetcodeData.length === 0 ? (
            <p className="text-muted font-sans text-xs uppercase tracking-widest">No data available</p>
          ) : (
            <ActivityCalendar
              data={leetcodeData}
              blockSize={8}
              blockMargin={3}
              fontSize={11}
              theme={leetcodeThemes}
              colorScheme={isDarkMode ? "dark" : "light"}
              labels={{
                totalCount: `{{count}} submissions in ${selectedYear}`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
