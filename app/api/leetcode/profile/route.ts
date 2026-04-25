import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "anjany22";

const GRAPHQL_URL = "https://leetcode.com/graphql";
const HEADERS = {
  "Content-Type": "application/json",
  "Referer": "https://leetcode.com",
};

async function gql(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("LeetCode GraphQL failed");
  return res.json();
}

export async function GET() {
  try {
    const [statsRes, contestRes, badgesRes] = await Promise.all([
      gql(`
        query userStats($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `, { username: LEETCODE_USERNAME }),

      gql(`
        query userContest($username: String!) {
          userContestRanking(username: $username) {
            rating
            globalRanking
            totalParticipants
            topPercentage
            attendedContestsCount
          }
        }
      `, { username: LEETCODE_USERNAME }),

      gql(`
        query userBadges($username: String!) {
          matchedUser(username: $username) {
            badges {
              id
              displayName
              icon
              category
            }
          }
        }
      `, { username: LEETCODE_USERNAME }),
    ]);

    const acStats: { difficulty: string; count: number }[] =
      statsRes?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];

    const problemStats = {
      total: acStats.find((s) => s.difficulty === "All")?.count ?? 0,
      easy: acStats.find((s) => s.difficulty === "Easy")?.count ?? 0,
      medium: acStats.find((s) => s.difficulty === "Medium")?.count ?? 0,
      hard: acStats.find((s) => s.difficulty === "Hard")?.count ?? 0,
    };

    const contestRanking = contestRes?.data?.userContestRanking ?? null;

    const badges: { id: string; displayName: string; icon: string; category: string }[] =
      badgesRes?.data?.matchedUser?.badges ?? [];

    return NextResponse.json({
      username: LEETCODE_USERNAME,
      problemStats,
      contestRanking,
      badges,
    });
  } catch (err) {
    console.error("LeetCode profile fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch LeetCode profile" }, { status: 500 });
  }
}
