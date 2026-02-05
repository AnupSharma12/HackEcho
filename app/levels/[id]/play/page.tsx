"use client";

import Link from "next/link";
import { use, useState } from "react";
import InteractivePlayer from "../../../../components/InteractivePlayer";
import PageShell from "../../../../components/PageShell";

const levelConfigs: Record<string, { title: string }> = {
  "1": {
    title: "Echo Basics"
  },
  "2": {
    title: "Variables & Types"
  },
  "3": {
    title: "Control Flow"
  },
  "4": {
    title: "Functions"
  },
  "5": {
    title: "Arrays & Loops"
  },
  "6": {
    title: "Objects & Classes"
  },
  "7": {
    title: "Async Echo"
  },
  "8": {
    title: "Debugging"
  },
  "9": {
    title: "Data Structures"
  },
  "10": {
    title: "Mini Project"
  }
};

export default function PlayLevelPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [xp, setXp] = useState(0);
  const level = levelConfigs[id] ?? levelConfigs["1"];
  const levelTitle = level.title;

  return (
    <PageShell
      title={`Playing ${levelTitle}`}
      description="Echo the snippets to keep the lesson running."
      actions={
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-electric-cyan/15 px-3 py-1 text-xs text-electric-cyan">
            XP {xp}
          </span>
          <Link
            href="/levels"
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-chalk-white/70"
          >
            Back to Levels
          </Link>
        </div>
      }
    >
      <InteractivePlayer onMilestoneComplete={() => setXp((prev) => prev + 10)} />
    </PageShell>
  );
}
