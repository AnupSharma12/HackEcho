import Link from "next/link";
import PageShell from "../../../components/PageShell";

const levels = [
  { id: "1", title: "Echo Basics", summary: "Learn the core echo mechanic." },
  { id: "2", title: "Variables & Types", summary: "Master data types." },
  { id: "3", title: "Control Flow", summary: "If-else, loops, and logic." },
  { id: "4", title: "Functions", summary: "Build reusable code blocks." },
  { id: "5", title: "Arrays & Loops", summary: "Work with sequences of data." },
  { id: "6", title: "Objects & Classes", summary: "Model real-world data." },
  { id: "7", title: "Async Echo", summary: "Learn timing and promises." },
  { id: "8", title: "Debugging", summary: "Find and fix bugs fast." },
  { id: "9", title: "Data Structures", summary: "Stacks, queues, and maps." },
  { id: "10", title: "Mini Project", summary: "Ship a small app." }
];

export default function LevelDetailPage({
  params
}: {
  params: { id: string };
}) {
  const level = levels.find((item) => item.id === params.id);

  if (!level) {
    return (
      <PageShell title="Level not found" description="Pick another level.">
        <Link href="/levels" className="text-electric-cyan">
          Back to Levels
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell title={level.title} description={level.summary}>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-lg font-semibold">Level Overview</h3>
        <ul className="mt-4 space-y-2 text-sm text-chalk-white/70">
          <li>• 4 guided stop-points</li>
          <li>• Live echo verification</li>
          <li>• 1 mini-project challenge</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/levels/${level.id}/play`}
            className="rounded-full bg-electric-cyan px-4 py-2 text-xs font-semibold text-industrial-after-dark"
          >
            Start Level
          </Link>
          <Link
            href="/levels"
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-chalk-white/70"
          >
            Back to Levels
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
