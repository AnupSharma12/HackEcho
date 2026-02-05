import { NextResponse } from "next/server";
import { getAvailableLanguages, LANGUAGE_NAMES } from "@/data/levels";

/**
 * GET /api/languages
 * Get all available programming languages
 */
export async function GET() {
  const languages = getAvailableLanguages();
  const languagesWithNames = languages.map(lang => ({
    id: lang,
    name: LANGUAGE_NAMES[lang] || lang,
  }));

  return NextResponse.json({ languages: languagesWithNames });
}
