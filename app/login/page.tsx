import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function LoginPage() {
  return (
    <PageShell
      title="Welcome back"
      description="Sign in to sync your XP, track streaks, and jump into your next lesson."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-4">
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
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-electric-cyan px-4 py-3 text-sm font-semibold text-industrial-after-dark shadow-glow"
            >
              Sign In
            </button>
          </div>
          <div className="mt-4 text-xs text-chalk-white/60">
            New here?{" "}
            <Link href="/register" className="text-electric-cyan">
              Create an account
            </Link>
          </div>
        </form>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <p className="text-sm text-chalk-white/70">
            Coming soon: social login with GitHub, Google, and school SSO.
          </p>
          <div className="mt-6 space-y-3">
            <button className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70">
              Continue with GitHub
            </button>
            <button className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
