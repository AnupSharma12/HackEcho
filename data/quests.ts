export type Quest = {
  id: string;
  title: string;
  description: string;
  xp: number;
};

export const QUESTS: Quest[] = [
  {
    id: "quest-echo-loop",
    title: "Refactor the Echo Loop",
    description: "Identify repeated logic and refactor it into a helper function.",
    xp: 40
  },
  {
    id: "quest-async-trap",
    title: "Debug the Async Trap",
    description: "Spot a missing await and fix the flow.",
    xp: 60
  },
  {
    id: "quest-timer-hook",
    title: "Build a Timer Hook",
    description: "Create a reusable timer hook with start and stop controls.",
    xp: 50
  }
];
