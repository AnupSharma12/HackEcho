"use client";

import { useEffect, useState } from "react";
import PageShell from "../../components/PageShell";
import { useAuth } from "@/lib/auth-context";

type Quest = {
  id: string;
  title: string;
  description: string;
  xp: number;
  completed: boolean;
};

export default function QuestsPage() {
  const { user, refresh } = useAuth();
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const [submittingId, setSubmittingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const totalXp = user?.xp ?? 0;

  useEffect(() => {
    fetch("/api/quests")
      .then((res) => res.json())
      .then((data) => {
        setQuests(data.quests ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleComplete = async (questId: string) => {
    setSubmittingId(questId);
    setMessage(null);
    try {
      const res = await fetch("/api/quests/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ questId })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Quest completion failed");
      }

      setQuests((prev) =>
        prev.map((quest) =>
          quest.id === questId ? { ...quest, completed: true } : quest
        )
      );
      await refresh();
      setMessage(
        data.alreadyCompleted
          ? "Quest already completed."
          : `Quest completed! You earned ${data.xpAwarded} XP. Total XP: ${data.xpTotal}.`
      );
    } catch (error: any) {
      setMessage(error.message || "Quest completion failed.");
    } finally {
      setSubmittingId(null);
    }
  };

  return (
    <PageShell
      title="Quests"
      description="Optional challenges that reward bonus XP."
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-chalk-white/70">
          XP {totalXp}
        </span>
      </div>
      {message ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-chalk-white/70">
          {message}
        </div>
      ) : null}
      <div className="space-y-4">
        {loading ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-chalk-white/60">
            Loading quests...
          </div>
        ) : quests.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-chalk-white/60">
            No quests available yet.
          </div>
        ) : (
          quests.map((quest) => (
            <div
              key={quest.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{quest.title}</h3>
                  <p className="mt-2 text-sm text-chalk-white/70">
                    {quest.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-electric-cyan">+{quest.xp} XP</span>
                  {quest.completed ? (
                    <span className="rounded-full bg-electric-cyan/15 px-3 py-1 text-xs text-electric-cyan">
                      Completed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleComplete(quest.id)}
                      disabled={!user || submittingId === quest.id}
                      className="rounded-full bg-electric-cyan px-4 py-2 text-xs font-semibold text-industrial-after-dark disabled:opacity-50"
                    >
                      {submittingId === quest.id ? "Completing..." : "Complete"}
                    </button>
                  )}
                </div>
              </div>
              {!user ? (
                <p className="mt-3 text-xs text-chalk-white/50">
                  Sign in to complete quests and earn XP.
                </p>
              ) : null}
            </div>
          ))
        )}
      </div>
    </PageShell>
  );
}
