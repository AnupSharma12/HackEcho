import PageShell from "../../components/PageShell";
import { RegisterForm } from "../../components/RegisterForm";

export default function RegisterPage() {
  return (
    <PageShell
      title="Create your HackEcho ID"
      description="Join the arena, unlock quests, and start earning XP today."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <RegisterForm />
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <h3 className="text-lg font-semibold">What you get</h3>
          <ul className="mt-4 space-y-3 text-sm text-chalk-white/70">
            <li>• Personalized XP + leveling system.</li>
            <li>• Daily streaks and badge rewards.</li>
            <li>• Sync progress across devices.</li>
            <li>• Multi-language coding challenges.</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
