"use client";

import { useEffect, useState } from "react";
import PageShell from "../../components/PageShell";

type LeaderboardEntry = {
  rank: number;
  name: string;
  username?: string;
  xp: number;
  profilePicture?: string | null;
};

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.leaderboard ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <PageShell
      title="Leaderboard"
      description="Weekly champions ranked by XP earned."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        {loading ? (
          <p className="text-sm text-chalk-white/60">Loading leaderboard...</p>
        ) : entries.length === 0 ? (
          <p className="text-sm text-chalk-white/60">No leaderboard data yet.</p>
        ) : (
          <ul className="space-y-3 text-sm">
            {entries.map((player) => (
              <li
                key={`${player.rank}-${player.name}`}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  {player.profilePicture ? (
                    <img
                      src={player.profilePicture}
                      alt={player.name}
                      className="h-8 w-8 rounded-full border border-white/10"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-chalk-white/60">
                      {player.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span>
                    #{player.rank} {player.name}
                    {player.username ? (
                      <span className="ml-2 text-xs text-chalk-white/50">
                        @{player.username}
                      </span>
                    ) : null}
                  </span>
                </div>
                <span className="text-electric-cyan">{player.xp} XP</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}
