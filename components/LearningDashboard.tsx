"use client";

import { useState } from "react";
import { useAuth } from "../lib/auth-context";

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "C#", value: "csharp" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "TypeScript", value: "typescript" },
  { label: "PHP", value: "php" },
  { label: "Ruby", value: "ruby" }
];

async function fetchJson(url: string) {
  const res = await fetch(url, {
    method: "GET",
    credentials: "include"
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}

export default function LearningDashboard() {
  const { user } = useAuth();
  const [language, setLanguage] = useState("javascript");
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<{
    docs: string;
    task: string;
  } | null>(null);

  const progressPercent = Math.min(100, Math.max(0, (level / 10) * 100));

  const handleLoad = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ language });
      const data = await fetchJson(`/api/levels?${params.toString()}`);
      const selected = data?.levels?.[Math.max(0, level - 1)] || null;
      setContent(selected ? { docs: selected.docs, task: selected.task } : null);
    } catch (error: any) {
      setContent(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase text-chalk-white/50">Student</p>
          <p className="mt-1 text-lg font-semibold">{user?.name || user?.email}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase text-chalk-white/50">Selected Language</p>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase text-chalk-white/50">Level</p>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={10}
              value={level}
              onChange={(event) => setLevel(Number(event.target.value))}
              className="w-24 rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleLoad}
          disabled={loading}
          className="rounded-full bg-electric-cyan px-4 py-2 text-sm font-semibold text-industrial-after-dark shadow-glow disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load Level"}
        </button>
        <span className="text-xs text-chalk-white/60">
          Content is loaded from the curriculum library.
        </span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between text-xs text-chalk-white/60">
          <span>Progress</span>
          <span>Level {level} / 10</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-neon-purple shadow-[0_0_12px_rgba(132,88,179,0.6)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {content ? (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <p className="text-xs uppercase text-chalk-white/50">Documentation</p>
              <p className="mt-2 text-sm text-chalk-white/80 whitespace-pre-line">
                {content.docs}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-chalk-white/50">Task</p>
              <p className="mt-2 text-sm text-chalk-white/80">
                {content.task}
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
            <p className="text-xs uppercase text-chalk-white/50">Assessment</p>
            <p className="text-sm text-chalk-white/70">
              MCQ-based assessment is available in the level view. Use the
              level page to complete quizzes and earn XP.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-chalk-white/70">
          Select a language and level, then load content to begin.
        </div>
      )}
    </div>
  );
}
