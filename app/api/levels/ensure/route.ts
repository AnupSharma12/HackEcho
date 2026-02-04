import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { Level } from "@/models/Level";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";
import { generateLevelContent } from "@/lib/ai";

export async function POST(request: Request) {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { language, level, topic } = body;

  if (!language || !level) {
    return NextResponse.json({ message: "Language and level are required" }, { status: 400 });
  }

  await connectDb();

  const user = await User.findById(auth.sub);
  const unlockedLevel = user?.currentLevelByLanguage?.[language] ?? 1;

  if (level > unlockedLevel) {
    return NextResponse.json(
      { message: `Level ${level} is locked. Complete level ${unlockedLevel} first.` },
      { status: 403 }
    );
  }

  let existing = await Level.findOne({ userId: auth.sub, language, levelNumber: level });
  if (existing) {
    return NextResponse.json({
      level: {
        documentation: existing.documentation,
        exampleCode: existing.exampleCode,
        question: existing.question
      },
      generated: false
    });
  }

  const generated = await generateLevelContent({ language, level, topic });

  existing = await Level.create({
    userId: auth.sub,
    language,
    levelNumber: level,
    documentation: generated.documentation,
    exampleCode: generated.exampleCode,
    question: generated.question
  });

  if (!user) {
    await User.findByIdAndUpdate(auth.sub, {
      $setOnInsert: { email: auth.email }
    });
  }

  return NextResponse.json({
    level: {
      documentation: existing.documentation,
      exampleCode: existing.exampleCode,
      question: existing.question
    },
    generated: true
  });
}
