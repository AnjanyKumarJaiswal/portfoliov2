import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "anjany22";

type Entry = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

async function fetchYear(year: number): Promise<Record<string, number>> {
  const query = `
    query userProfileCalendar($username: String!, $year: Int) {
      matchedUser(username: $username) {
        userCalendar(year: $year) {
          submissionCalendar
        }
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Referer": "https://leetcode.com",
    },
    body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME, year } }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) return {};
  const json = await response.json();
  const calendarStr = json?.data?.matchedUser?.userCalendar?.submissionCalendar;
  if (!calendarStr) return {};
  return JSON.parse(calendarStr) as Record<string, number>;
}

function buildPaddedData(
  raw: Record<string, number>,
  startDate: Date,
  endDate: Date
): Entry[] {
  const maxCount = Object.keys(raw).length > 0 ? Math.max(...Object.values(raw)) : 1;

  const getLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
    if (count === 0) return 0;
    const ratio = count / maxCount;
    if (ratio <= 0.25) return 1;
    if (ratio <= 0.5) return 2;
    if (ratio <= 0.75) return 3;
    return 4;
  };
  const activityMap: Record<string, number> = {};
  for (const [ts, count] of Object.entries(raw)) {
    const date = new Date(parseInt(ts) * 1000).toISOString().split("T")[0];
    activityMap[date] = count;
  }
  const data: Entry[] = [];
  const cursor = new Date(startDate);
  while (cursor <= endDate) {
    const dateStr = cursor.toISOString().split("T")[0];
    const count = activityMap[dateStr] ?? 0;
    data.push({ date: dateStr, count, level: getLevel(count) });
    cursor.setDate(cursor.getDate() + 1);
  }

  return data;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const today = new Date();
    const currentYear = today.getFullYear();
    const yearParam = searchParams.get("year");
    const requestedYear = yearParam ? parseInt(yearParam) : currentYear;
    let startDate: Date;
    let endDate: Date;

    if (requestedYear === currentYear) {
      startDate = new Date(today);
      startDate.setFullYear(startDate.getFullYear() - 1);
      startDate.setDate(startDate.getDate() + 1);
      endDate = today;
      const [rawCurrent, rawPrev] = await Promise.all([
        fetchYear(currentYear),
        fetchYear(currentYear - 1),
      ]);
      const raw = { ...rawPrev, ...rawCurrent };
      const data = buildPaddedData(raw, startDate, endDate);
      return NextResponse.json({ data });
    } else {
      startDate = new Date(`${requestedYear}-01-01`);
      endDate = new Date(`${requestedYear}-12-31`);
      const raw = await fetchYear(requestedYear);
      const data = buildPaddedData(raw, startDate, endDate);
      return NextResponse.json({ data });
    }
  } catch (err) {
    console.error("LeetCode fetch error:", err);
    return NextResponse.json({ data: [] });
  }
}
