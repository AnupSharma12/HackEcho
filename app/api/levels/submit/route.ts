import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { Level } from "@/models/Level";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";
import { evaluateAnswer } from "@/lib/ai";

export async function POST(request: Request) {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { language, level, answer } = body;

  if (!language || !level || !answer) {
    return NextResponse.json({ message: "Language, level, and answer are required" }, { status: 400 });
  }

  await connectDb();
  const existing = await Level.findOne({ userId: auth.sub, language, levelNumber: level });
  if (!existing) {
    return NextResponse.json({ message: "Level not found" }, { status: 404 });
  }

  const feedback = await evaluateAnswer({
    language,
    documentation: existing.documentation,
    exampleCode: existing.exampleCode,
    question: existing.question,
    answer
  });

  existing.aiFeedback = feedback.feedback;
  existing.attempts.push({
    answer,
    correct: feedback.correct,
    feedback: feedback.feedback,
    createdAt: new Date()
  });
  await existing.save();

  const progressUpdate = {
    language,
    level,
    completed: feedback.correct,
    score: feedback.correct ? 100 : 0,
    feedback: feedback.feedback,
    attempts: existing.attempts.length,
    updatedAt: new Date()
  };

  const user = await User.findById(auth.sub);
  const currentLevel = user?.currentLevelByLanguage?.[language] ?? 1;
  const nextLevel = feedback.correct && level >= currentLevel ? level + 1 : currentLevel;

  await User.findByIdAndUpdate(auth.sub, {
    $set: { [`currentLevelByLanguage.${language}`]: nextLevel },
    $push: { progress: progressUpdate }
  });

  return NextResponse.json({
    correct: feedback.correct,
    feedback: feedback.feedback,
    suggestions: feedback.suggestions,
    improvements: feedback.improvements
  });
}
