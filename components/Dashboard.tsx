type Quest = {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  xp: number;
};

type DashboardProps = {
  level: number;
  xp: number;
  xpToNextLevel: number;
  quests: Quest[];
};

export default function Dashboard({
  level,
  xp,
  xpToNextLevel,
  quests
}: DashboardProps) {
  const progress = Math.min(100, Math.round((xp / xpToNextLevel) * 100));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-chalk-white/60">Level</p>
          <p className="text-3xl font-semibold text-neon-purple">{level}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-chalk-white/60">XP</p>
          <p className="text-3xl font-semibold text-electric-cyan">{xp}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-chalk-white/60">
          <span>Next Level</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-neon-purple shadow-[0_0_12px_rgba(132,88,179,0.6)] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Coding Quests</h3>
          <span className="text-xs text-chalk-white/60">Live</span>
        </div>
        <ul className="space-y-3">
          {quests.map((quest) => (
            <li
              key={quest.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/60 px-4 py-3"
            >
              <div>
                <p className="font-medium">{quest.title}</p>
                <p className="text-xs text-chalk-white/60">
                  {quest.difficulty} · +{quest.xp} XP
                </p>
              </div>
              <button className="rounded-full border border-electric-cyan/60 px-3 py-1 text-xs text-electric-cyan hover:bg-electric-cyan/10">
                Start
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
