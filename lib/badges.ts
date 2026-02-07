export type Badge = {
  id: string;
  title: string;
  description: string;
  progress: number;
  unlocked: boolean;
};

type BadgeRule = {
  id: string;
  title: string;
  description: string;
  target: number;
  getValue: (stats: BadgeStats) => number;
};

export type BadgeStats = {
  xp: number;
  completedLevels: number;
  currentStreak: number;
  longestStreak: number;
};

const BADGE_RULES: BadgeRule[] = [
  {
    id: "first-level",
    title: "First Script",
    description: "Complete your first level.",
    target: 1,
    getValue: (stats) => stats.completedLevels
  },
  {
    id: "five-levels",
    title: "Consistency",
    description: "Complete 5 levels.",
    target: 5,
    getValue: (stats) => stats.completedLevels
  },
  {
    id: "ten-levels",
    title: "Rising Pro",
    description: "Complete 10 levels.",
    target: 10,
    getValue: (stats) => stats.completedLevels
  },
  {
    id: "xp-500",
    title: "XP Apprentice",
    description: "Earn 500 XP.",
    target: 500,
    getValue: (stats) => stats.xp
  },
  {
    id: "xp-1500",
    title: "XP Explorer",
    description: "Earn 1500 XP.",
    target: 1500,
    getValue: (stats) => stats.xp
  },
  {
    id: "streak-3",
    title: "3-Day Streak",
    description: "Stay active for 3 days in a row.",
    target: 3,
    getValue: (stats) => stats.currentStreak
  },
  {
    id: "streak-7",
    title: "7-Day Streak",
    description: "Stay active for 7 days in a row.",
    target: 7,
    getValue: (stats) => stats.currentStreak
  }
];

export function computeBadges(stats: BadgeStats): Badge[] {
  return BADGE_RULES.map((rule) => {
    const value = rule.getValue(stats);
    const progress = Math.min(1, value / rule.target);
    return {
      id: rule.id,
      title: rule.title,
      description: rule.description,
      progress,
      unlocked: value >= rule.target
    };
  });
}
