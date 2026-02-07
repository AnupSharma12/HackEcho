"use client";

import PageShell from "../../components/PageShell";
import { useAuth } from "@/lib/auth-context";
import { computeBadges } from "@/lib/badges";

export default function BadgesPage() {
  const { user, loading } = useAuth();
  const stats = {
    xp: user?.xp ?? 0,
    completedLevels: user?.completedLevels?.length ?? 0,
    currentStreak: user?.currentStreak ?? 0,
    longestStreak: user?.longestStreak ?? 0
  };
  const badges = computeBadges(stats);

  return (
    <PageShell
      title="Badges"
      description="Collect digital medals as you progress through the curriculum."
    >
      {loading ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-chalk-white/60">
          Loading badges...
        </div>
      ) : !user ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-chalk-white/60">
          Sign in to see your badge progress.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-2xl border p-6 ${
                badge.unlocked
                  ? "border-electric-cyan/40 bg-electric-cyan/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{badge.title}</h3>
                <span className="text-xs text-chalk-white/60">
                  {badge.unlocked ? "Unlocked" : "Locked"}
                </span>
              </div>
              <p className="mt-2 text-sm text-chalk-white/70">{badge.description}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-electric-cyan"
                  style={{ width: `${Math.round(badge.progress * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}
