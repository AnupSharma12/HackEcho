import PageShell from "../../components/PageShell";

export default function ProfilePage() {
  return (
    <PageShell
      title="Profile"
      description="Track your performance, badges, and current streaks."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Student Snapshot</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
