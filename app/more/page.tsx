import Link from "next/link";
import PageShell from "../../components/PageShell";

const moreLinks = [
  {
    href: "/leaderboard",
    title: "Leaderboard",
    description: "See the top-ranked echoers this week."
  },
  {
    href: "/badges",
    title: "Badges",
    description: "Collect and showcase your achievements."
  },
  {
    href: "/quests",
    title: "Quests",
    description: "Browse optional coding missions."
  }
];

export default function MorePage() {
  return (
    <PageShell
      title="More Pages"
      description="Explore bonus areas built for the HackEcho experience."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {moreLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-electric-cyan/60"
          >
            <h3 className="text-lg font-semibold">{link.title}</h3>
            <p className="mt-2 text-sm text-chalk-white/70">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
