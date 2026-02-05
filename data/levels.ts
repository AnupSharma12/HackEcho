/**
 * Manual Level Data Structure - ORGANIZED BY LANGUAGE
 * 
 * Each language has its own file in the `/data/levels/` folder:
 * - javascript.ts - JavaScript levels
 * - python.ts - Python levels
 * - java.ts - Java levels
 * - cpp.ts - C++ levels
 * 
 * To add a new language:
 * 1. Create a new file in `/data/levels/[language].ts`
 * 2. Export an array with the naming pattern: LANGUAGE_LEVELS
 * 3. Import it here and add to the LEVELS array
 */

import { JAVASCRIPT_LEVELS } from "./levels/javascript";
import { PYTHON_LEVELS } from "./levels/python";
import { JAVA_LEVELS } from "./levels/java";
import { CPP_LEVELS } from "./levels/cpp";
import { GO_LEVELS } from "./levels/go";
import { CSHARP_LEVELS } from "./levels/csharp";
import { RUST_LEVELS } from "./levels/rust";
import { TYPESCRIPT_LEVELS } from "./levels/typescript";
import { PHP_LEVELS } from "./levels/php";
import { RUBY_LEVELS } from "./levels/ruby";

export type LevelData = {
  levelId: string;
  levelName: string;
  language: string;
  docs: string;
  task: string;
  expectedAnswer: string;
  xpReward: number;
};

/**
 * All levels combined from language-specific files
 */
export const LEVELS: LevelData[] = [
  ...JAVASCRIPT_LEVELS,
  ...PYTHON_LEVELS,
  ...JAVA_LEVELS,
  ...CPP_LEVELS,
  ...GO_LEVELS,
  ...CSHARP_LEVELS,
  ...RUST_LEVELS,
  ...TYPESCRIPT_LEVELS,
  ...PHP_LEVELS,
  ...RUBY_LEVELS
  // Add more language imports here
];

/**
 * Get all available languages
 */
export function getAvailableLanguages(): string[] {
  const languages = new Set<string>();
  LEVELS.forEach(level => languages.add(level.language));
  return Array.from(languages).sort();
}

/**
 * Get levels by language
 */
export function getLevelsByLanguage(language: string): LevelData[] {
  return LEVELS.filter(level => level.language === language);
}

/**
 * Get a specific level by ID
 */
export function getLevelById(levelId: string): LevelData | undefined {
  return LEVELS.find(level => level.levelId === levelId);
}

/**
 * Get language display names
 */
export const LANGUAGE_NAMES: Record<string, string> = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
  csharp: "C#",
  go: "Go",
  rust: "Rust",
  typescript: "TypeScript",
  php: "PHP",
  ruby: "Ruby",
  swift: "Swift",
  kotlin: "Kotlin"
};
