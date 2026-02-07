"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import PageShell from "../../components/PageShell";
import { useAuth } from "@/lib/auth-context";

type Language = {
  id: string;
  name: string;
};

type Level = {
  levelId: string;
  levelName: string;
  language: string;
  xpReward: number;
};

type FilterMode = "all" | "completed" | "open";

export default function LevelsPage() {
  const { user } = useAuth();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterMode, setFilterMode] = useState<FilterMode>("all");

  const completedLevels = (user as any)?.completedLevels || [];
  const totalXp = (user as any)?.xp || 0;

  useEffect(() => {
    fetch("/api/languages")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data.languages ?? []);
        setSelectedLanguage((prev) => prev ?? data.languages?.[0]?.id ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedLanguage) return;
    setLoading(true);
    fetch(`/api/levels?language=${selectedLanguage}`)
      .then((res) => res.json())
      .then((data) => {
        setLevels(data.levels ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedLanguage]);

  const filteredLevels = useMemo(() => {
    const query = search.trim().toLowerCase();
    return levels.filter((level) => {
      const matchesQuery = level.levelName.toLowerCase().includes(query);
      const isCompleted = completedLevels.includes(level.levelId);
      if (filterMode === "completed" && !isCompleted) return false;
      if (filterMode === "open" && isCompleted) return false;
      return matchesQuery;
    });
  }, [levels, search, filterMode, completedLevels]);

  const completionCount = completedLevels.length;
  const languageCount = languages.length;
  const levelCount = levels.length;

  return (
    <PageShell
      title="Levels"
      description="Pick a language, scan the curriculum, and jump into focused practice."
      actions={
        <div className="flex flex-wrap items-center gap-2">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-chalk-white/70">
            XP {totalXp}
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-chalk-white/70">
            {completionCount} completed
          </div>
        </div>
      }
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-cyan/15 via-white/5 to-transparent p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-electric-cyan/80">
            Curriculum Map
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-chalk-white">
            Choose your track and lock in daily progress.
          </h2>
          <p className="mt-3 text-sm text-chalk-white/70">
            Each level ships with deep documentation and MCQs. Select a language to
            see the full learning path and the XP you can earn.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-chalk-white/50">Languages</p>
              <p className="mt-2 text-2xl font-semibold text-chalk-white">{languageCount}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-chalk-white/50">Levels in track</p>
              <p className="mt-2 text-2xl font-semibold text-chalk-white">{levelCount}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-chalk-white/50">Completed</p>
              <p className="mt-2 text-2xl font-semibold text-electric-cyan">
                {completionCount}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-chalk-white/50">
            Filters
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs uppercase text-chalk-white/50">Search</label>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search levels"
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
              />
            </div>
            <div>
              <label className="text-xs uppercase text-chalk-white/50">Status</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {["all", "completed", "open"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setFilterMode(mode as FilterMode)}
                    className={`rounded-full border px-3 py-2 text-xs transition ${
                      filterMode === mode
                        ? "border-electric-cyan/60 bg-electric-cyan/10 text-electric-cyan"
                        : "border-white/10 text-chalk-white/70 hover:border-electric-cyan/40"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase text-chalk-white/50">Language</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      selectedLanguage === lang.id
                        ? "border-electric-cyan/70 text-electric-cyan"
                        : "border-white/10 text-chalk-white/70 hover:border-electric-cyan/40"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-chalk-white">Levels</h3>
          <span className="text-xs text-chalk-white/60">
            Showing {filteredLevels.length} of {levels.length}
          </span>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-chalk-white/60">
            Loading levels...
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLevels.map((level) => {
              const isCompleted = completedLevels.includes(level.levelId);
              return (
                <div
                  key={level.levelId}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-electric-cyan/60"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-vivid-purple/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  {isCompleted ? (
                    <div className="absolute right-4 top-4 rounded-full bg-electric-cyan px-3 py-1 text-xs font-bold text-industrial-after-dark">
                      Completed
                    </div>
                  ) : null}
                  <div className="relative space-y-2">
                    <p className="text-xs uppercase tracking-wide text-chalk-white/50">
                      {level.language}
                    </p>
                    <h4 className="text-lg font-semibold text-chalk-white">
                      {level.levelName}
                    </h4>
                    <p className="text-sm text-chalk-white/60">
                      Earn {level.xpReward} XP
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href={`/levels/${level.levelId}`}
                        className="rounded-full border border-electric-cyan/50 px-4 py-2 text-xs text-electric-cyan"
                      >
                        View Level
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </PageShell>
  );
}
