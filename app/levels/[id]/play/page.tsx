"use client";

import Link from "next/link";
import { use, useState } from "react";
import InteractivePlayer from "../../../../components/InteractivePlayer";
import PageShell from "../../../../components/PageShell";

const levelConfigs: Record<string, { title: string; topic: string }> = {
  "1": {
    title: "Hello World & Syntax",
    topic: "Introduction to programming fundamentals and syntax basics"
  },
  "2": {
    title: "Variables & Data Types",
    topic: "Understanding primitive data types and variable declarations"
  },
  "3": {
    title: "Conditionals & Logic",
    topic: "Decision making with if/else and boolean logic"
  },
  "4": {
    title: "Loops & Iteration",
    topic: "Repeating code execution with for, while, and do-while loops"
  },
  "5": {
    title: "Functions & Modularity",
    topic: "Creating reusable code blocks with parameters and return values"
  },
  "6": {
    title: "Arrays & Collections",
    topic: "Working with ordered data collections and array methods"
  },
  "7": {
    title: "Objects & Dictionaries",
    topic: "Structuring data with key-value pairs and object properties"
  },
  "8": {
    title: "Async & Promises",
    topic: "Handling asynchronous operations and event-driven programming"
  },
  "9": {
    title: "Error Handling & Debugging",
    topic: "Managing exceptions and debugging code effectively"
  },
  "10": {
    title: "Capstone Project",
    topic: "Building a complete application integrating all learned concepts"
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
