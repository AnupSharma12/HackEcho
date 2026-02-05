import { NextResponse } from "next/server";
import { LEVELS, getLevelsByLanguage, getLevelById } from "@/data/levels";

/**
 * GET /api/levels?language=javascript
 * Get all levels for a specific language
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language");
  const levelId = searchParams.get("levelId");

  // Get specific level
  if (levelId) {
    const level = getLevelById(levelId);
    if (!level) {
      return NextResponse.json({ message: "Level not found" }, { status: 404 });
    }
    return NextResponse.json({ level });
  }

  // Get levels by language
  if (language) {
    const levels = getLevelsByLanguage(language);
    return NextResponse.json({ levels });
  }

  // Get all levels
  return NextResponse.json({ levels: LEVELS });
}
