"use client";

import Link from "next/link";
import PageShell from "../components/PageShell";

export default function Home() {
  return (
    <PageShell
      title="Home"
      description="Sync with the instructor, echo the code, and level up your skills."
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.2em] text-electric-cyan/80">
            Learn by echoing
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            The gamified coding platform for students
          </h2>
          <p className="mt-4 text-sm text-chalk-white/70">
            HackEcho blends guided instruction with real-time code matching,
            streaks, and XP to keep learners engaged.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="rounded-full bg-electric-cyan px-4 py-2 text-sm font-semibold text-industrial-after-dark"
            >
              Get Started
            </Link>
            <Link
              href="/levels"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-chalk-white/70"
            >
              View Levels
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-chalk-white/70"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <h3 className="text-lg font-semibold">Why students love it</h3>
          <ul className="mt-4 space-y-3 text-sm text-chalk-white/70">
            <li>• Instant feedback with milestone checkpoints.</li>
            <li>• XP, levels, and badges for motivation.</li>
            <li>• Learn by matching real instructor code.</li>
          </ul>
          <div className="mt-6 rounded-xl border border-electric-cyan/20 bg-electric-cyan/10 p-4 text-xs text-electric-cyan">
            New: Multi-language tracks in JavaScript, Python, Java, and more.
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Echo Lessons",
            description: "Pause-and-respond lessons to lock in concepts."
          },
          {
            title: "Live Quests",
            description: "Optional challenges that boost XP and badges."
          },
          {
            title: "Progress Tracking",
            description: "Streaks, levels, and a personal dashboard."
          }
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-chalk-white/70">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
