import Link from "next/link";
import PageShell from "../../components/PageShell";

const levels = [
  { id: "1", title: "Hello World & Syntax", xp: 50, lessons: 3 },
  { id: "2", title: "Variables & Data Types", xp: 60, lessons: 4 },
  { id: "3", title: "Conditionals & Logic", xp: 70, lessons: 5 },
  { id: "4", title: "Loops & Iteration", xp: 80, lessons: 5 },
  { id: "5", title: "Functions & Modularity", xp: 90, lessons: 6 },
  { id: "6", title: "Arrays & Collections", xp: 100, lessons: 6 },
  { id: "7", title: "Objects & Dictionaries", xp: 110, lessons: 6 },
  { id: "8", title: "Async & Promises", xp: 120, lessons: 7 },
  { id: "9", title: "Error Handling & Debugging", xp: 130, lessons: 7 },
  { id: "10", title: "Capstone Project", xp: 150, lessons: 8 }
];

export default function LevelsPage() {
  return (
    <PageShell
      title="Levels"
      description="Choose a level and start echoing code back to the instructor."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {levels.map((level) => (
          <div
            key={level.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">{level.title}</h3>
            <p className="mt-2 text-sm text-chalk-white/60">
              {level.lessons} lessons · +{level.xp} XP
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/levels/${level.id}`}
                className="rounded-full border border-electric-cyan/50 px-4 py-2 text-xs text-electric-cyan"
              >
                View Level
              </Link>
              <Link
                href={`/levels/${level.id}/play`}
                className="rounded-full bg-electric-cyan px-4 py-2 text-xs font-semibold text-industrial-after-dark"
              >
                Play Level
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
