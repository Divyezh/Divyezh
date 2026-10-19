import fallbackData from "@/content/github.json";

export interface GitHubData {
  username: string;
  name: string;
  bio: string;
  totalStars: number;
  totalRepos: number;
  commitsThisYear: number;
  pullRequests: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    languageColor: string;
    url: string;
    updatedAt: string;
  }[];
  latestActivity: {
    type: string;
    repo: string;
    message: string;
    date: string;
  }[];
}

export async function getGitHubData(): Promise<GitHubData> {
  try {
    const res = await fetch("https://api.github.com/users/Divyezh", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      ...({ next: { revalidate: 86400 } } as Record<string, unknown>),
    });

    if (!res.ok) {
      return fallbackData;
    }

    const userData = await res.json();

    return {
      username: userData.login || fallbackData.username,
      name: userData.name || fallbackData.name,
      bio: userData.bio || fallbackData.bio,
      totalStars: fallbackData.totalStars,
      totalRepos: userData.public_repos || fallbackData.totalRepos,
      commitsThisYear: fallbackData.commitsThisYear,
      pullRequests: fallbackData.pullRequests,
      topLanguages: fallbackData.topLanguages,
      pinnedRepos: fallbackData.pinnedRepos,
      latestActivity: fallbackData.latestActivity,
    };
  } catch {
    return fallbackData;
  }
}
