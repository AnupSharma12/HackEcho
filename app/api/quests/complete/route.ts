import { NextResponse } from "next/server";
import { QUESTS } from "@/data/quests";
import { getAuthUser } from "@/lib/auth-server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { buildStreakUpdate } from "@/lib/streaks";

export async function POST(request: Request) {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { questId } = body;

  if (!questId) {
    return NextResponse.json({ message: "questId is required" }, { status: 400 });
  }

  const quest = QUESTS.find((item) => item.id === questId);
  if (!quest) {
    return NextResponse.json({ message: "Quest not found" }, { status: 404 });
  }

  await connectDb();
  const user = await User.findById(auth.sub);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const completedQuests = Array.isArray(user.completedQuests)
    ? user.completedQuests
    : [];

  if (completedQuests.includes(questId)) {
    return NextResponse.json({
      xpAwarded: 0,
      alreadyCompleted: true,
      xpTotal: user.xp
    });
  }

  const streakUpdate = buildStreakUpdate(user.lastActiveAt, user.currentStreak, user.longestStreak);

  const updatedUser = await User.findByIdAndUpdate(auth.sub, {
    $inc: { xp: quest.xp },
    $addToSet: { completedQuests: questId },
    $set: streakUpdate
  }, { new: true });

  return NextResponse.json({
    xpAwarded: quest.xp,
    alreadyCompleted: false,
    xpTotal: updatedUser?.xp ?? user.xp + quest.xp
  });
}
