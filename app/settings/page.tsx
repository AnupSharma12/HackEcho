import PageShell from "../../components/PageShell";

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Tune your notifications, editor preferences, and privacy controls."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Preferences</h3>
          <div className="mt-4 space-y-4 text-sm text-chalk-white/70">
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3">
              Editor auto-save
              <input type="checkbox" className="accent-electric-cyan" defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3">
              Dark mode
              <input type="checkbox" className="accent-electric-cyan" defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3">
              XP notifications
              <input type="checkbox" className="accent-electric-cyan" />
            </label>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <h3 className="text-lg font-semibold">Security</h3>
          <div className="mt-4 space-y-4 text-sm text-chalk-white/70">
            <button className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70">
              Reset Password
            </button>
            <button className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70">
              Two-Factor Authentication
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
