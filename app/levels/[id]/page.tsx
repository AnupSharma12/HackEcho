"use client";

import { useState, useEffect, use } from "react";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

type LevelData = {
  levelId: string;
  levelName: string;
  language: string;
  docs: string;
  task: string;
  expectedAnswer: string;
  xpReward: number;
};

export default function LevelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: levelId } = use(params);
  const { user } = useAuth();
  const [level, setLevel] = useState<LevelData | null>(null);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    feedback: string;
    xpAwarded: number;
    alreadyCompleted: boolean;
  } | null>(null);

  const completedLevels = (user as any)?.completedLevels || [];
  const isCompleted = completedLevels.includes(levelId);

  useEffect(() => {
    fetch(`/api/levels?levelId=${levelId}`)
      .then((res) => res.json())
      .then((data) => {
        setLevel(data.level);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [levelId]);

  const handleSubmit = async () => {
    if (!answer.trim()) return;
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/levels/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ levelId, answer })
      });

      const data = await res.json();
      setFeedback(data);

      // If correct, refresh user data after a moment
      if (data.correct) {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setFeedback({
        correct: false,
        feedback: "Failed to submit answer. Please try again.",
        xpAwarded: 0,
        alreadyCompleted: false
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-4xl">⏳</div>
          <p className="text-chalk-white/60">Loading level...</p>
        </div>
      </div>
    );
  }

  if (!level) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-4xl">❌</div>
          <p className="text-xl text-chalk-white">Level not found</p>
          <Link
            href="/dashboard"
            className="mt-4 inline-block text-electric-cyan hover:underline"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link
            href="/dashboard"
            className="mb-2 inline-block text-sm text-chalk-white/60 hover:text-electric-cyan"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-chalk-white">{level.levelName}</h1>
          <p className="mt-1 text-chalk-white/60">
            {level.language.charAt(0).toUpperCase() + level.language.slice(1)} • {level.xpReward} XP
          </p>
        </div>
        {isCompleted && (
          <div className="rounded-full bg-electric-cyan px-4 py-2 text-sm font-bold text-industrial-after-dark">
            ✓ Completed
          </div>
        )}
      </div>

      {/* Documentation */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-4 text-xl font-bold text-electric-cyan">📚 Documentation</h2>
        <div
          className="prose prose-invert max-w-none text-chalk-white/90"
          dangerouslySetInnerHTML={{ __html: level.docs }}
        />
      </div>

      {/* Task Box */}
      <div className="rounded-2xl border-2 border-vivid-purple bg-vivid-purple/10 p-6">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-vivid-purple">
          🎯 Your Task
        </h2>
        <p className="text-lg text-chalk-white">{level.task}</p>
      </div>

      {/* Answer Input */}
      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-chalk-white">Your Answer</h3>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your code here..."
          rows={6}
          className="w-full rounded-xl border border-white/10 bg-industrial-after-dark p-4 font-mono text-sm text-chalk-white placeholder:text-chalk-white/40"
        />
        <button
          onClick={handleSubmit}
          disabled={submitting || !answer.trim()}
          className="rounded-full bg-electric-cyan px-6 py-3 font-semibold text-industrial-after-dark shadow-glow transition hover:bg-electric-cyan/90 disabled:opacity-50"
        >
          {submitting ? "Checking..." : "Submit Answer"}
        </button>
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`rounded-2xl border-2 p-6 ${
            feedback.correct
              ? "border-electric-cyan bg-electric-cyan/10"
              : "border-red-500 bg-red-500/10"
          }`}
        >
          <h3
            className={`mb-2 text-xl font-bold ${
              feedback.correct ? "text-electric-cyan" : "text-red-400"
            }`}
          >
            {feedback.correct ? "✅ Correct!" : "❌ Incorrect"}
          </h3>
          <p className="text-chalk-white/90">{feedback.feedback}</p>
          {feedback.correct && feedback.xpAwarded > 0 && (
            <p className="mt-3 text-sm font-semibold text-electric-cyan">
              🎉 You earned {feedback.xpAwarded} XP!
            </p>
          )}
          {feedback.alreadyCompleted && feedback.correct && (
            <p className="mt-2 text-sm text-chalk-white/60">
              (You already completed this level, no additional XP awarded)
            </p>
          )}
        </div>
      )}
    </div>
  );
}

