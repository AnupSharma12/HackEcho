"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageShell from "../components/PageShell";
import { useAuth } from "@/lib/auth-context";

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redirect to dashboard if logged in
  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-chalk-white/60">Loading...</p>
      </div>
    );
  }

  // Only show home page if not logged in
  if (user) {
    return null;
  }

  return (
    <PageShell
      title="Home"
      description="Sync with the instructor, echo the code, and level up your skills."
    >
      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur">
          <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-electric-cyan/10 blur-2xl" />
          <p className="text-xs uppercase tracking-[0.2em] text-electric-cyan/80">
            Learn by echoing
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            The gamified coding platform for students
          </h2>
          <p className="mt-4 text-sm text-chalk-white/70">
            HackEcho blends guided instruction with structured practice,
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
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Weekly XP", value: "+1.2k" },
              { label: "Active Learners", value: "14k" },
              { label: "Completion Rate", value: "92%" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-industrial-after-dark/70 p-3"
              >
                <p className="text-xs text-chalk-white/50">{stat.label}</p>
                <p className="text-lg font-semibold text-electric-cyan">
                  {stat.value}
                </p>
              </div>
            ))}
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
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-chalk-white/70">
            <p className="font-semibold text-chalk-white">Built-in guidance</p>
            <p className="mt-2">
              Every level ships with structured docs, example code, and instant
              feedback.
            </p>
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

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "1. Choose a language",
            description: "Pick JavaScript, Python, Java, or any track you want."
          },
          {
            title: "2. Load your level",
            description: "Docs + examples load instantly for every level."
          },
          {
            title: "3. Submit + unlock",
            description: "Get feedback and unlock the next level."
          }
        ].map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6"
          >
            <h3 className="text-lg font-semibold text-electric-cyan">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-chalk-white/70">
              {step.description}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Built for focused learning</h3>
            <p className="mt-2 text-sm text-chalk-white/70">
              Keep your streak alive with clear goals, short sessions, and rapid
              feedback.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full bg-neon-purple px-5 py-2 text-sm font-semibold text-chalk-white"
          >
            Open Dashboard
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
