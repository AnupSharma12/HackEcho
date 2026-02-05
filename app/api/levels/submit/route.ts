import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";
import { checkAnswer } from "@/lib/ai";
import { getLevelById } from "@/data/levels";

export async function POST(request: Request) {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { levelId, answer } = body;

  if (!levelId || !answer) {
    return NextResponse.json({ message: "levelId and answer are required" }, { status: 400 });
  }

  // Get level from manual data
  const level = getLevelById(levelId);
  if (!level) {
    return NextResponse.json({ message: "Level not found" }, { status: 404 });
  }

  await connectDb();

  // Check if user already completed this level (prevent XP farming)
  const user = await User.findById(auth.sub);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const alreadyCompleted = user.completedLevels.includes(levelId);

  // Check answer using AI with fallback
  const feedback = await checkAnswer({
    language: level.language,
    task: level.task,
    expectedAnswer: level.expectedAnswer,
    userAnswer: answer
  });

  // Award XP only if correct and not already completed
  let xpAwarded = 0;
  if (feedback.correct && !alreadyCompleted) {
    xpAwarded = level.xpReward;

    // Update user progress
    await User.findByIdAndUpdate(auth.sub, {
      $inc: { xp: xpAwarded },
      $addToSet: { 
        completedLevels: levelId,
        [`languageProgress.${level.language}.completedLevels`]: levelId
      },
      $set: {
        [`languageProgress.${level.language}.totalXp`]: (user.languageProgress[level.language]?.totalXp || 0) + xpAwarded,
        [`languageProgress.${level.language}.currentLevel`]: Math.max(
          user.languageProgress[level.language]?.currentLevel || 1,
          parseInt(levelId.split('-')[1]) || 1
        )
      }
    });
  }

  return NextResponse.json({
    correct: feedback.correct,
    feedback: feedback.feedback,
    xpAwarded,
    alreadyCompleted,
    usedFallback: feedback.usedFallback
  });
}

