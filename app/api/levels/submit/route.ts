import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";
import { getLevelById } from "@/data/levels";

export async function POST(request: Request) {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { levelId, answer, mcqAnswers } = body;

  if (!levelId || (!answer && !Array.isArray(mcqAnswers))) {
    return NextResponse.json(
      { message: "levelId and answer or mcqAnswers are required" },
      { status: 400 }
    );
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

  let feedback = {
    correct: false,
    feedback: "",
    usedFallback: true
  };

  if (Array.isArray(mcqAnswers)) {
    if (!level.mcqs?.length) {
      return NextResponse.json({ message: "MCQs not available" }, { status: 400 });
    }

    const hasMissing = mcqAnswers.some(
      (value) => typeof value !== "number" || value < 0
    );

    if (mcqAnswers.length !== level.mcqs.length || hasMissing) {
      return NextResponse.json(
        { message: "All MCQs must be answered" },
        { status: 400 }
      );
    }

    const correctCount = level.mcqs.reduce((count, mcq, index) => {
      return mcqAnswers[index] === mcq.correctIndex ? count + 1 : count;
    }, 0);

    const isCorrect = correctCount === level.mcqs.length;
    feedback = {
      correct: isCorrect,
      feedback: isCorrect
        ? "✅ Great work! All MCQs are correct."
        : `❌ You answered ${correctCount}/${level.mcqs.length} correctly. Review the docs and try again.`,
      usedFallback: true
    };
  } else {
    const normalizedExpected = normalizeCode(level.expectedAnswer);
    const normalizedAnswer = normalizeCode(String(answer ?? ""));
    const isCorrect = normalizedExpected === normalizedAnswer;
    feedback = {
      correct: isCorrect,
      feedback: isCorrect
        ? "✅ Correct! Your answer matches the expected solution."
        : "❌ Not quite right. Compare your answer with the expected solution and try again.",
      usedFallback: true
    };
  }

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

function normalizeCode(code: string): string {
  return code
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/;+$/g, "")
    .trim();
}

