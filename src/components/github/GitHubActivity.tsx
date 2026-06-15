"use client";

import React, { useState, useEffect } from "react";
import { Github, Star, Users, BookOpen, ArrowUpRight, GitFork, Loader as Loader2 } from "lucide-react";

interface GithubUserData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
}

const USERNAME = "parth091006";

// Static fallback data in case of rate limits or offline
const FALLBACK_USER_DATA: GithubUserData = {
  public_repos: 24,
  followers: 40,
  following: 35,
  name: "Parth Bhirwandekar",
};

const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 1,
    name: "Parth_Portfolio",
    description: "Personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS.",
    html_url: `https://github.com/${USERNAME}/Parth_Portfolio`,
    stargazers_count: 5,
    forks_count: 1,
    language: "TypeScript",
    pushed_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "autonomous-delivery-robot",
    description: "ROS2 & Nav2 based autonomous delivery robot simulation and code stack.",
    html_url: `https://github.com/${USERNAME}/autonomous-delivery-robot`,
    stargazers_count: 4,
    forks_count: 2,
    language: "C++",
    pushed_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "computer-vision-projects",
    description: "Collection of advanced computer vision models, custom YOLO training, and OpenCV pipelines.",
    html_url: `https://github.com/${USERNAME}/computer-vision-projects`,
    stargazers_count: 3,
    forks_count: 0,
    language: "Python",
    pushed_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "deep-learning-models",
    description: "Neural network implementations from scratch for CNNs, RNNs, and Transformers.",
    html_url: `https://github.com/${USERNAME}/deep-learning-models`,
    stargazers_count: 2,
    forks_count: 1,
    language: "Jupyter Notebook",
    pushed_at: new Date().toISOString(),
  },
];

// Language colors mapping
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "bg-[#3178C6]",
  JavaScript: "bg-[#F7DC6F]",
  Python: "bg-[#3572A5]",
  "C++": "bg-[#F34B7D]",
  C: "bg-[#555555]",
  HTML: "bg-[#E34C26]",
  CSS: "bg-[#563D7C]",
  Rust: "bg-[#DEA584]",
  Go: "bg-[#00ADD8]",
  "Jupyter Notebook": "bg-[#DA5B0B]",
};

export default function GitHubActivity() {
  const [userData, setUserData] = useState<GithubUserData | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        // Fetch User profile
        const userRes = await fetch(`https://api.github.com/users/${USERNAME}`);
        if (!userRes.ok) throw new Error("Failed to fetch user data (rate limited?)");
        const userJson = await userRes.json();

        // Fetch Repos
        const reposRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repos data");
        const reposJson: GithubRepo[] = await reposRes.json();

        // Compute total stars
        const stars = reposJson.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Sort repos by pushed date to find recent active ones
        const sortedRepos = [...reposJson].sort(
          (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );

        setUserData(userJson);
        setRepos(sortedRepos.slice(0, 4));
        setTotalStars(stars);
        setIsFallback(false);
      } catch (error) {
        console.warn("GitHub API error, using fallback mock data:", error);
        setUserData(FALLBACK_USER_DATA);
        setRepos(FALLBACK_REPOS);
        setTotalStars(14);
        setIsFallback(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        {/* Title skeleton */}
        <div className="h-8 bg-[#00D4FF]/5 rounded-lg w-1/3 mb-4" />

        {/* Stats grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass-card p-6 h-28 flex flex-col justify-between" />
          ))}
        </div>

        {/* Calendar skeleton */}
        <div className="glass-card p-6 h-48 flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-[#00D4FF] animate-spin" />
        </div>

        {/* Recent repos title skeleton */}
        <div className="h-6 bg-[#00D4FF]/5 rounded-lg w-1/4" />

        {/* Repos grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass-card p-6 h-40" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Title */}
      <div>
        <p className="section-label-bracket mb-3">07 / GITHUB</p>
        <div className="flex items-center gap-3">
          <Github className="h-8 w-8 text-[#00D4FF]" />
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#E2F4FF]">
            GitHub Activity &amp;{" "}
            <span className="gradient-text">Open Source</span>
          </h2>
          {isFallback && (
            <span className="font-mono text-[10px] bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Demo
            </span>
          )}
        </div>
      </div>

      {/* Profile stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1: Repositories */}
        <div className="crypto-card p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs text-[#5B7A91] tracking-wider uppercase">Repos</span>
            <BookOpen className="h-4 w-4 text-[#00D4FF]" />
          </div>
          <div className="font-mono text-3xl font-bold text-[#00D4FF]">
            {userData?.public_repos}
          </div>
        </div>

        {/* Card 2: Total Stars */}
        <div className="crypto-card p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs text-[#5B7A91] tracking-wider uppercase">Stars</span>
            <Star className="h-4 w-4 text-[#7B2FFF] fill-[#7B2FFF]/20" />
          </div>
          <div className="font-mono text-3xl font-bold text-[#7B2FFF]">
            {totalStars}
          </div>
        </div>

        {/* Card 3: Followers */}
        <div className="crypto-card p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs text-[#5B7A91] tracking-wider uppercase">Followers</span>
            <Users className="h-4 w-4 text-[#00D4FF]" />
          </div>
          <div className="font-mono text-3xl font-bold text-[#00D4FF]">
            {userData?.followers}
          </div>
        </div>

        {/* Card 4: Following */}
        <div className="crypto-card p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs text-[#5B7A91] tracking-wider uppercase">Following</span>
            <Users className="h-4 w-4 text-[#00D4FF]" />
          </div>
          <div className="font-mono text-3xl font-bold text-[#00D4FF]">
            {userData?.following}
          </div>
        </div>
      </div>

      {/* Contribution Calendar */}
      <div className="crypto-card p-6">
        <h3 className="font-heading font-semibold text-lg mb-4 text-[#E2F4FF] flex items-center gap-2">
          Contribution Calendar
        </h3>

        {/* Graph Wrap */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[720px] relative">
            {/* Contribution calendar via ghchart — cyan hue */}
            <img
              src={`https://ghchart.rshah.org/00D4FF/${USERNAME}`}
              alt={`${USERNAME}'s GitHub Contribution Chart`}
              className="w-full h-auto select-none"
              style={{
                filter: "brightness(0.9) contrast(1.15) saturate(1.2)",
              }}
            />
          </div>
        </div>
        <p className="font-mono text-xs text-[#5B7A91] mt-3 tracking-wide">
          Daily contribution frequency mapped over the past year.
        </p>
      </div>

      {/* Recent Repos */}
      <div>
        <h3 className="font-heading font-bold text-xl mb-6 text-[#E2F4FF]">Recent Repositories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="crypto-card p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading text-base font-bold text-[#E2F4FF] group-hover:text-[#00D4FF] transition-colors flex items-center gap-1.5 truncate">
                    {repo.name}
                  </h4>
                  <ArrowUpRight className="h-4 w-4 text-[#5B7A91] group-hover:text-[#00D4FF] transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-[#5B7A91] mb-4 line-clamp-2">
                  {repo.description || "No description provided."}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#5B7A91] pt-2 border-t border-[#00D4FF]/5">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        LANGUAGE_COLORS[repo.language] || "bg-gray-400"
                      }`}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}

                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-[#7B2FFF]/20 text-[#7B2FFF]" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Button footer */}
      <div className="text-center pt-4">
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Github className="h-4 w-4" />
          View Full GitHub Profile
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
