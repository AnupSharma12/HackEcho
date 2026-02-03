import PageShell from "../../components/PageShell";

const leaderboard = [
  { name: "Nova", xp: 420 },
  { name: "Cipher", xp: 390 },
  { name: "Echo", xp: 360 }
];

export default function LeaderboardPage() {
  return (
    <PageShell
      title="Leaderboard"
      description="Weekly champions ranked by XP earned."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <ul className="space-y-3 text-sm">
          {leaderboard.map((player, index) => (
            <li
              key={player.name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3"
            >
              <span>
                #{index + 1} {player.name}
              </span>
              <span className="text-electric-cyan">{player.xp} XP</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
