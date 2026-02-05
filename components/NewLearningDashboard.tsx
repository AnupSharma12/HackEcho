"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../lib/auth-context";
import Link from "next/link";

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

export default function LearningDashboard() {
  const { user } = useAuth();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch available languages on mount
  useEffect(() => {
    fetch("/api/languages")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data.languages);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Fetch levels when language is selected
  useEffect(() => {
    if (!selectedLanguage) return;
    setLoading(true);
    fetch(`/api/levels?language=${selectedLanguage}`)
      .then((res) => res.json())
      .then((data) => {
        setLevels(data.levels);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedLanguage]);

  const userXP = (user as any)?.xp || 0;
  const completedLevels = (user as any)?.completedLevels || [];

  return (
    <div className="space-y-6">
      {/* User Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-wide text-chalk-white/50">Student</p>
          <p className="mt-2 text-xl font-bold text-chalk-white">
            {user?.name || user?.email}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-wide text-chalk-white/50">Total XP</p>
          <p className="mt-2 text-3xl font-bold text-electric-cyan">{userXP}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-wide text-chalk-white/50">Completed Levels</p>
          <p className="mt-2 text-3xl font-bold text-vivid-purple">{completedLevels.length}</p>
        </div>
      </div>

      {/* Language Selection */}
      {!selectedLanguage && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-chalk-white">Choose a Programming Language</h2>
          {loading ? (
            <p className="text-chalk-white/60">Loading languages...</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:border-electric-cyan hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-vivid-purple/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <p className="text-xl font-bold text-chalk-white">{lang.name}</p>
                    <p className="mt-1 text-sm text-chalk-white/60">Start learning →</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Levels for Selected Language */}
      {selectedLanguage && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-chalk-white">
              {languages.find((l) => l.id === selectedLanguage)?.name} Levels
            </h2>
            <button
              onClick={() => setSelectedLanguage(null)}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-chalk-white/80 transition hover:border-electric-cyan hover:text-electric-cyan"
            >
              ← Back to Languages
            </button>
          </div>

          {loading ? (
            <p className="text-chalk-white/60">Loading levels...</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {levels.map((level) => {
                const isCompleted = completedLevels.includes(level.levelId);
                return (
                  <Link
                    key={level.levelId}
                    href={`/levels/${level.levelId}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-electric-cyan hover:bg-white/10"
                  >
                    {isCompleted && (
                      <div className="absolute right-4 top-4 rounded-full bg-electric-cyan px-3 py-1 text-xs font-bold text-industrial-after-dark">
                        ✓ Completed
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-vivid-purple/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative space-y-2">
                      <h3 className="text-lg font-bold text-chalk-white">{level.levelName}</h3>
                      <div className="flex items-center gap-2 text-sm text-chalk-white/60">
                        <span>🎯 {level.xpReward} XP</span>
                      </div>
                      <p className="text-sm text-electric-cyan">Start Level →</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
