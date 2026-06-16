import { NextResponse } from "next/server";

const GITHUB_USERNAME = "hiemalrana22";
const CACHE_DURATION = 3600; // 1 hour

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "hiemal-portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
      {
        headers,
        next: { revalidate: CACHE_DURATION },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "GitHub API error" }, { status: res.status });
    }

    const repos = await res.json();

    // Filter and clean repos
    const filtered = repos
      .filter((r: { fork: boolean; name: string }) => !r.fork && r.name !== GITHUB_USERNAME)
      .map(
        (r: {
          id: number;
          name: string;
          description: string | null;
          html_url: string;
          homepage: string | null;
          stargazers_count: number;
          forks_count: number;
          language: string | null;
          topics: string[];
          updated_at: string;
        }) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          homepage: r.homepage,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          language: r.language,
          topics: r.topics || [],
          updated_at: r.updated_at,
        })
      );

    return NextResponse.json(filtered, {
      headers: { "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate` },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
  }
}
