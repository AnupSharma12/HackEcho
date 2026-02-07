export function startOfDayUTC(value: Date) {
  return Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
}

export function buildStreakUpdate(
  lastActiveAt: Date | undefined,
  currentStreak: number,
  longestStreak: number
) {
  const now = new Date();
  const today = startOfDayUTC(now);

  if (!lastActiveAt) {
    return {
      lastActiveAt: now,
      currentStreak: 1,
      longestStreak: Math.max(longestStreak, 1)
    };
  }

  const lastDay = startOfDayUTC(new Date(lastActiveAt));
  const diffDays = Math.floor((today - lastDay) / (24 * 60 * 60 * 1000));

  if (diffDays <= 0) {
    return {
      lastActiveAt: now
    };
  }

  if (diffDays === 1) {
    const nextStreak = currentStreak + 1;
    return {
      lastActiveAt: now,
      currentStreak: nextStreak,
      longestStreak: Math.max(longestStreak, nextStreak)
    };
  }

  return {
    lastActiveAt: now,
    currentStreak: 1,
    longestStreak: Math.max(longestStreak, 1)
  };
}
