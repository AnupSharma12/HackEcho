import PageShell from "../../components/PageShell";

const badges = [
  { title: "First Script", desc: "Completed your first echo." },
  { title: "Bug Hunter", desc: "Solved a broken snippet." },
  { title: "7-Day Streak", desc: "Showed up every day." }
];

export default function BadgesPage() {
  return (
    <PageShell
      title="Badges"
      description="Collect digital medals as you progress through the curriculum."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{badge.title}</h3>
            <p className="mt-2 text-sm text-chalk-white/70">{badge.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
