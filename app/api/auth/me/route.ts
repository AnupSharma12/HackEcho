import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";

export async function GET() {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  await connectDb();
  const user = await User.findById(auth.sub);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      provider: user.provider,
      profilePicture: user.profilePicture,
      xp: user.xp,
      completedLevels: user.completedLevels,
      completedQuests: user.completedQuests,
      currentStreak: user.currentStreak,
      longestStreak: user.longestStreak,
      preferences: user.preferences,
      languageProgress: user.languageProgress
    }
  });
}
