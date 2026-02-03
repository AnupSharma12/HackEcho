import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function RegisterPage() {
  return (
    <PageShell
      title="Create your HackEcho ID"
      description="Join the arena, unlock quests, and start earning XP today."
    >
      <form className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-4">
            <div>
              <label className="text-xs uppercase text-chalk-white/60">Name</label>
              <input
                type="text"
                placeholder="Student Name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
              />
            </div>
            <div>
              <label className="text-xs uppercase text-chalk-white/60">Email</label>
              <input
                type="email"
                placeholder="you@hackecho.dev"
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
              />
            </div>
            <div>
              <label className="text-xs uppercase text-chalk-white/60">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-electric-cyan px-4 py-3 text-sm font-semibold text-industrial-after-dark shadow-glow"
            >
              Create Account
            </button>
          </div>
          <div className="mt-4 text-xs text-chalk-white/60">
            Already registered?{" "}
            <Link href="/login" className="text-electric-cyan">
              Sign in
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <h3 className="text-lg font-semibold">What you get</h3>
          <ul className="mt-4 space-y-3 text-sm text-chalk-white/70">
            <li>• Personalized XP + leveling system.</li>
            <li>• Daily streaks and badge rewards.</li>
            <li>• Sync progress across devices.</li>
          </ul>
        </div>
      </form>
    </PageShell>
  );
}
