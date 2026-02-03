import PageShell from "../../components/PageShell";

const quests = [
  { title: "Refactor the Echo Loop", xp: 40 },
  { title: "Debug the Async Trap", xp: 60 },
  { title: "Build a Timer Hook", xp: 50 }
];

export default function QuestsPage() {
  return (
    <PageShell
      title="Quests"
      description="Optional challenges that reward bonus XP."
    >
      <div className="space-y-4">
        {quests.map((quest) => (
          <div
            key={quest.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{quest.title}</h3>
              <span className="text-electric-cyan">+{quest.xp} XP</span>
            </div>
            <p className="mt-2 text-sm text-chalk-white/70">
              Complete this mini-challenge to earn bonus rewards.
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
