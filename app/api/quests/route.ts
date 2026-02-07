import { NextResponse } from "next/server";
import { QUESTS } from "@/data/quests";
import { getAuthUser } from "@/lib/auth-server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";

export async function GET() {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({
      quests: QUESTS.map((quest) => ({ ...quest, completed: false }))
    });
  }

  await connectDb();
  const user = await User.findById(auth.sub).select("completedQuests").lean();
  const completedQuests = Array.isArray(user) ? [] : user?.completedQuests ?? [];
  const completed = new Set(completedQuests);

  return NextResponse.json({
    quests: QUESTS.map((quest) => ({
      ...quest,
      completed: completed.has(quest.id)
    }))
  });
}
