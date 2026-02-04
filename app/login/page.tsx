"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import { LoginForm } from "../../components/LoginForm";

function LoginPageContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return (
    <PageShell
      title="Welcome back"
      description="Sign in to sync your XP, track streaks, and jump into your next lesson."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          {message && (
            <div className="mb-4 rounded-xl border border-electric-cyan/30 bg-electric-cyan/10 p-3 text-sm text-electric-cyan">
              {message}
            </div>
          )}
          <LoginForm />
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <p className="text-sm text-chalk-white/70">
            New to HackEcho?{" "}
            <Link href="/register" className="text-electric-cyan hover:underline">
              Create an account
            </Link>
          </p>
          <div className="mt-6 space-y-3 text-xs text-chalk-white/70">
            <p>✓ Email verification for security</p>
            <p>✓ Single sign-on with GitHub & Google</p>
            <p>✓ Sync progress across devices</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <LoginPageContent />
    </Suspense>
  );
}
