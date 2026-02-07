"use client";

import { useState, useEffect, use, useMemo } from "react";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";
import { marked } from "marked";

type Mcq = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

type LevelData = {
  levelId: string;
  levelName: string;
  language: string;
  docs: string;
  task: string;
  expectedAnswer: string;
  xpReward: number;
  mcqs: Mcq[];
};

export default function LevelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: levelId } = use(params);
  const { user } = useAuth();
  const [level, setLevel] = useState<LevelData | null>(null);
  const [loading, setLoading] = useState(true);
  const [mcqAnswers, setMcqAnswers] = useState<number[]>([]);
  const [mcqError, setMcqError] = useState<string | null>(null);
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
        setMcqAnswers(Array(data.level?.mcqs?.length ?? 0).fill(-1));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [levelId]);

  const [docsHtml, setDocsHtml] = useState<string>("");

  useEffect(() => {
    if (!level?.docs) {
      setDocsHtml("");
      return;
    }
    Promise.resolve(marked.parse(level.docs)).then((html) => {
      setDocsHtml(html);
    });
  }, [level?.docs]);

  const handleSubmit = async () => {
    if (!level) return;
    const hasUnanswered = mcqAnswers.some((answer) => answer < 0);
    if (hasUnanswered) {
      setMcqError("Please answer all questions before submitting.");
      return;
    }

    setMcqError(null);
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/levels/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ levelId, mcqAnswers })
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
        feedback: "Failed to submit answers. Please try again.",
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
          dangerouslySetInnerHTML={{ __html: docsHtml }}
        />
      </div>

      {/* Task Box */}
      <div className="rounded-2xl border-2 border-vivid-purple bg-vivid-purple/10 p-6">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-vivid-purple">
          🎯 Your Task
        </h2>
        <p className="text-lg text-chalk-white">{level.task}</p>
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

      {/* MCQ Quiz */}
      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-chalk-white">MCQ Quiz</h3>
        <p className="text-sm text-chalk-white/60">
          Answer every question to submit the level.
        </p>
        <div className="space-y-6">
          {level.mcqs.map((mcq, index) => (
            <div key={mcq.id} className="rounded-xl border border-white/10 bg-industrial-after-dark/60 p-4">
              <p className="text-sm font-semibold text-chalk-white">
                {index + 1}. {mcq.question}
              </p>
              <div className="mt-3 space-y-2">
                {mcq.options.map((option, optionIndex) => (
                  <label
                    key={`${mcq.id}-${optionIndex}`}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-black/30 p-3 text-sm text-chalk-white/80"
                  >
                    <input
                      type="radio"
                      name={`mcq-${mcq.id}`}
                      className="mt-1"
                      checked={mcqAnswers[index] === optionIndex}
                      onChange={() => {
                        setMcqAnswers((prev) => {
                          const next = [...prev];
                          next[index] = optionIndex;
                          return next;
                        });
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        {mcqError ? (
          <p className="text-sm text-red-400">{mcqError}</p>
        ) : null}
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="rounded-full bg-electric-cyan px-6 py-3 font-semibold text-industrial-after-dark shadow-glow transition hover:bg-electric-cyan/90 disabled:opacity-50"
        >
          {submitting ? "Checking..." : "Submit Answers"}
        </button>
      </div>
    </div>
  );
}

