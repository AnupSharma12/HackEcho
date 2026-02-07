import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";

export async function GET() {
  await connectDb();

  const users = await User.find({})
    .sort({ xp: -1, updatedAt: -1 })
    .limit(50)
    .select("name username xp profilePicture")
    .lean();

  const leaderboard = users.map((user, index) => ({
    rank: index + 1,
    name: user.name || user.username || "Learner",
    username: user.username,
    xp: user.xp || 0,
    profilePicture: user.profilePicture || null
  }));

  return NextResponse.json({ leaderboard });
}
