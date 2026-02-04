"use client";

import { useState } from "react";
import { useAuth } from "../lib/auth-context";

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Ruby",
  "Dart",
  "SQL",
  "HTML",
  "CSS",
  "Lua"
];

async function fetchJson(url: string, body: any) {
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}

export default function LearningDashboard() {
  const { user } = useAuth();
  const [language, setLanguage] = useState("JavaScript");
  const [level, setLevel] = useState(1);
  const [topic, setTopic] = useState("Beginner");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<{
    documentation: string;
    exampleCode: string;
    question: string;
  } | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    feedback: string;
    suggestions?: string;
    improvements?: string;
  } | null>(null);

  const progressPercent = Math.min(100, Math.max(0, (level / 10) * 100));

  const handleLoad = async () => {
    setLoading(true);
    setFeedback(null);
    try {
      const data = await fetchJson("/api/levels/ensure", {
        language,
        level,
        topic
      });
      setContent(data.level);
    } catch (error: any) {
      setContent(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!content) return;
    setLoading(true);
    try {
      const data = await fetchJson("/api/levels/submit", {
        language,
        level,
        answer
      });
      setFeedback(data);
    } catch (error: any) {
      setFeedback({ correct: false, feedback: error.message });
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
              <option key={lang} value={lang}>
                {lang}
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
            <input
              type="text"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="Topic or difficulty"
              className="flex-1 rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
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
          Content is generated once per user, level, and language.
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
                {content.documentation}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-chalk-white/50">Example Code</p>
              <pre className="mt-2 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-chalk-white/80 overflow-x-auto">
                {content.exampleCode}
              </pre>
            </div>
            <div>
              <p className="text-xs uppercase text-chalk-white/50">Task</p>
              <p className="mt-2 text-sm text-chalk-white/80">
                {content.question}
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
            <p className="text-xs uppercase text-chalk-white/50">Your Answer</p>
            <textarea
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              rows={10}
              className="w-full rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="rounded-full bg-neon-purple px-4 py-2 text-sm font-semibold text-chalk-white disabled:opacity-50"
            >
              {loading ? "Checking..." : "Submit Answer"}
            </button>

            {feedback ? (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                <p className={feedback.correct ? "text-electric-cyan" : "text-neon-purple"}>
                  {feedback.correct ? "Correct" : "Incorrect"}
                </p>
                <p className="mt-2 text-chalk-white/80">{feedback.feedback}</p>
                {feedback.suggestions ? (
                  <p className="mt-2 text-xs text-chalk-white/60">
                    Suggestions: {feedback.suggestions}
                  </p>
                ) : null}
                {feedback.improvements ? (
                  <p className="mt-1 text-xs text-chalk-white/60">
                    Improvements: {feedback.improvements}
                  </p>
                ) : null}
              </div>
            ) : null}
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
