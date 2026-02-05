"use client";

import { useAuth } from "@/lib/auth-context";
import PageShell from "../../components/PageShell";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.loading && !auth.user) {
      router.push("/login");
    }
  }, [auth.loading, auth.user, router]);

  if (auth.loading) {
    return (
      <PageShell title="Profile" description="Loading...">
        <div className="text-center">Loading...</div>
      </PageShell>
    );
  }

  if (!auth.user) {
    return null;
  }

  const defaultAvatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${auth.user.email}`;
  const profilePicture = auth.user.profilePicture || defaultAvatarUrl;

  return (
    <PageShell
      title="Your Profile"
      description="Track your performance, badges, and current streaks."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-start gap-4 mb-6">
            <img
              src={profilePicture}
              alt={auth.user.name || "Profile"}
              className="h-16 w-16 rounded-full border-2 border-electric-cyan"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = defaultAvatarUrl;
              }}
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-chalk-white">{auth.user.name || "No Name"}</h2>
              <p className="text-chalk-white/60 text-sm">{auth.user.email}</p>
              <p className="mt-1 text-xs text-electric-cyan capitalize">
                {auth.user.provider || "credentials"}
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Student Snapshot</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-industrial-after-dark/70 p-4">
              <p className="text-xs text-chalk-white/60">Level</p>
              <p className="text-2xl font-semibold text-neon-purple">4</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-industrial-after-dark/70 p-4">
              <p className="text-xs text-chalk-white/60">XP</p>
              <p className="text-2xl font-semibold text-electric-cyan">320</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-industrial-after-dark/70 p-4">
              <p className="text-xs text-chalk-white/60">Streak</p>
              <p className="text-2xl font-semibold">6 days</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-industrial-after-dark/70 p-4">
              <p className="text-xs text-chalk-white/60">Quests Complete</p>
              <p className="text-2xl font-semibold">18</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <h3 className="text-lg font-semibold">Badges</h3>
          <ul className="mt-4 space-y-3 text-sm text-chalk-white/70">
            <li>🏅 First Script</li>
            <li>🐞 Bug Hunter</li>
            <li>🔥 7-Day Streak</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
