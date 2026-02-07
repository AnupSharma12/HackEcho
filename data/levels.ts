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

export type Mcq = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type LevelData = {
  levelId: string;
  levelName: string;
  language: string;
  docs: string;
  task: string;
  expectedAnswer: string;
  xpReward: number;
  mcqs?: Mcq[];
};

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

const CODE_FENCE = "```";

const LANGUAGE_FENCES: Record<string, string> = {
  javascript: "javascript",
  python: "python",
  java: "java",
  cpp: "cpp",
  csharp: "csharp",
  go: "go",
  rust: "rust",
  typescript: "typescript",
  php: "php",
  ruby: "ruby"
};

const GENERIC_TASK_DISTRACTORS = [
  "Define a class with one property.",
  "Write a loop that prints 1 to 3.",
  "Handle an error using try/catch.",
  "Create a list and add items.",
  "Read from a file and print the contents.",
  "Build a function that returns a value."
];

const LANGUAGE_FACTS: Record<string, string> = {
  javascript: "JavaScript uses dynamic typing and runs in the browser or Node.",
  python: "Python uses indentation to define blocks.",
  java: "Java requires a class and a main method to start execution.",
  cpp: "C++ is compiled and uses header includes for libraries.",
  csharp: "C# programs commonly start in a Main method.",
  go: "Go organizes code into packages and uses func main as entry.",
  rust: "Rust emphasizes safety with ownership and borrowing.",
  typescript: "TypeScript adds static types to JavaScript.",
  php: "PHP code runs on the server and uses $ for variables.",
  ruby: "Ruby is dynamically typed and focuses on readability."
};

const CONCEPT_POOL = [
  "variables",
  "conditionals",
  "loops",
  "functions",
  "collections",
  "strings",
  "classes",
  "interfaces",
  "inheritance",
  "errors",
  "files",
  "concurrency",
  "generics",
  "types",
  "structs",
  "enums",
  "maps"
];

const TOKEN_POOL = [
  "print",
  "console.log",
  "System.out.println",
  "echo",
  "fmt.Println",
  "puts",
  "println!",
  "Console.WriteLine"
];

function getLanguageFence(language: string) {
  return LANGUAGE_FENCES[language] ?? "text";
}

function indentLines(value: string, indent: string) {
  return value
    .split("\n")
    .map((line) => (line.trim().length ? `${indent}${line}` : line))
    .join("\n");
}

function wrapInProgram(language: string, snippet: string) {
  const hasMain = /\bmain\b|__name__|class\s+\w+/i.test(snippet);
  if (hasMain) return snippet.trim();

  switch (language) {
    case "javascript":
    case "typescript":
      return `function main() {\n${indentLines(snippet, "  ")}\n}\n\nmain();`;
    case "python":
      return `def main():\n${indentLines(snippet, "    ")}\n\nif __name__ == "__main__":\n    main()`;
    case "java":
      return `public class Main {\n    public static void main(String[] args) {\n${indentLines(snippet, "        ")}\n    }\n}`;
    case "cpp":
      return `#include <iostream>\nusing namespace std;\n\nint main() {\n${indentLines(snippet, "    ")}\n    return 0;\n}`;
    case "csharp":
      return `using System;\n\nclass Program {\n    static void Main() {\n${indentLines(snippet, "        ")}\n    }\n}`;
    case "go":
      return `package main\n\nimport \"fmt\"\n\nfunc main() {\n${indentLines(snippet, "    ")}\n}`;
    case "rust":
      return `fn main() {\n${indentLines(snippet, "    ")}\n}`;
    case "php":
      return `<?php\n\n${snippet}`;
    case "ruby":
      return `def main\n${indentLines(snippet, "  ")}\nend\n\nmain`;
    default:
      return snippet.trim();
  }
}

function buildCommonMistake(language: string) {
  switch (language) {
    case "python":
      return "if score > 0\n    print(\"Positive\")";
    case "javascript":
    case "typescript":
      return "console.log(\"Hello\")";
    case "java":
      return "System.out.println(\"Missing semicolon\")";
    case "cpp":
      return "cout << \"Missing semicolon\"";
    case "csharp":
      return "Console.WriteLine(\"Missing semicolon\")";
    case "go":
      return "if x > 0 fmt.Println(\"Missing braces\")";
    case "rust":
      return "println!(\"Missing brace\"";
    case "php":
      return "echo \"Missing semicolon\"";
    case "ruby":
      return "puts \"Missing end\"\nif x > 0\n  puts x";
    default:
      return "// common mistake example";
  }
}

function buildVariation(snippet: string) {
  if (snippet.includes("Hello")) {
    return snippet.replace(/Hello/g, "HackEcho");
  }

  const numberMatch = snippet.match(/\d+/);
  if (numberMatch) {
    const value = Number(numberMatch[0]);
    return snippet.replace(numberMatch[0], String(value + 1));
  }

  if (snippet.includes("true")) {
    return snippet.replace(/true/g, "false");
  }

  if (snippet.includes("false")) {
    return snippet.replace(/false/g, "true");
  }

  return `${snippet}\n// Variation: adjust values or identifiers.`;
}

function inferConcept(level: LevelData) {
  const name = level.levelName.toLowerCase();
  if (name.includes("variable") || name.includes("data")) return "variables";
  if (name.includes("condition")) return "conditionals";
  if (name.includes("loop")) return "loops";
  if (name.includes("function") || name.includes("method")) return "functions";
  if (name.includes("array") || name.includes("list") || name.includes("vector")) return "collections";
  if (name.includes("string")) return "strings";
  if (name.includes("class") || name.includes("object")) return "classes";
  if (name.includes("interface")) return "interfaces";
  if (name.includes("inherit")) return "inheritance";
  if (name.includes("exception") || name.includes("error")) return "errors";
  if (name.includes("file")) return "files";
  if (name.includes("map") || name.includes("dictionary") || name.includes("hash")) return "maps";
  if (name.includes("struct")) return "structs";
  if (name.includes("enum")) return "enums";
  if (name.includes("trait")) return "traits";
  if (name.includes("generic")) return "generics";
  if (name.includes("async") || name.includes("promise") || name.includes("goroutine")) return "concurrency";
  return "types";
}

function inferStatementType(expectedAnswer: string) {
  const value = expectedAnswer.toLowerCase();
  if (value.includes("class ")) return "class definition";
  if (value.includes("def ") || value.includes("function ") || value.includes("fn ") || value.includes("func ")) {
    return "function definition";
  }
  if (value.includes("for ") || value.includes("while ") || value.includes("range(")) {
    return "loop";
  }
  if (value.includes("if ")) return "conditional";
  if (value.includes("try") || value.includes("catch") || value.includes("except")) {
    return "error handling";
  }
  if (value.includes("=") || value.includes(":=")) return "variable assignment";
  return "expression";
}

function buildSnippetOptions(expectedAnswer: string) {
  const options = new Set<string>();
  options.add(expectedAnswer);

  const noSemicolon = expectedAnswer.replace(/;\s*$/, "");
  options.add(noSemicolon);

  const swappedQuotes = expectedAnswer.includes("\"")
    ? expectedAnswer.replace(/\"/g, "'")
    : expectedAnswer.replace(/'/g, "\"");
  options.add(swappedQuotes);

  const operatorSwap = expectedAnswer.replace(/\+/g, "-").replace(/>=/g, ">");
  options.add(operatorSwap);

  const fallbackOptions = [
    "// TODO: write solution",
    "/* solution here */",
    "return",
    "pass"
  ];

  fallbackOptions.forEach((option) => options.add(option));

  return Array.from(options).slice(0, 4);
}

function pickDistractors(target: string, count: number) {
  const distractors = GENERIC_TASK_DISTRACTORS.filter((item) => item !== target);
  return distractors.slice(0, count);
}

function pickConceptDistractors(concept: string, count: number) {
  return CONCEPT_POOL.filter((item) => item !== concept).slice(0, count);
}

function pickTokenDistractors(token: string, count: number) {
  return TOKEN_POOL.filter((item) => item !== token).slice(0, count);
}

function extractPrimaryToken(expectedAnswer: string) {
  const match = expectedAnswer.match(/[A-Za-z_][A-Za-z0-9_.]*/);
  return match?.[0] ?? "statement";
}

function buildDocs(level: LevelData) {
  const languageName = LANGUAGE_NAMES[level.language] ?? level.language;
  const fenceLang = getLanguageFence(level.language);
  const concept = inferConcept(level);
  const statementType = inferStatementType(level.expectedAnswer);
  const expanded = wrapInProgram(level.language, level.expectedAnswer);
  const mistake = buildCommonMistake(level.language);
  const variation = buildVariation(level.expectedAnswer);
  const refactor = wrapInProgram(level.language, variation);

  return [
    `## ${languageName} • ${level.levelName}`,
    "",
    `### Overview`,
    `This level focuses on **${concept}** and reinforces a clean, beginner-to-intermediate workflow in ${languageName}.`,
    `You will connect the task statement to a concrete solution and understand why each token is placed where it is.`,
    "",
    `### Learning Goals`,
    `- Translate the task into a correct ${statementType}.`,
    `- Read and explain the solution line by line.`,
    `- Recognize common mistakes for this concept.`,
    `- Connect this concept to future lessons and larger programs.`,
    "",
    `### Concept Map`,
    `- **${concept}** is the focus for this level.`,
    `- It interacts with fundamentals like data types, operators, and control flow.`,
    `- Mastery here makes later topics like collections and OOP far easier.`,
    "",
    `### Task Focus`,
    `${level.task}`,
    "",
    `### Reference Solution`,
    `${CODE_FENCE}${fenceLang}`,
    level.expectedAnswer,
    `${CODE_FENCE}`,
    "",
    `### Step-by-Step Breakdown`,
    `1. Identify the main action in the task and map it to the correct ${languageName} syntax.`,
    `2. Confirm that the solution expresses the action in a single, valid ${statementType}.`,
    `3. Keep the solution minimal and focused on the required behavior.`,
    `4. Verify that the syntax matches ${languageName} rules for spacing and punctuation.`,
    `5. Compare your answer to the reference and adjust carefully.`,
    "",
    `### Variation (Same Skill, New Inputs)`,
    `${CODE_FENCE}${fenceLang}`,
    variation,
    `${CODE_FENCE}`,
    "",
    `### Expanded Example (Same Idea, Full Context)`,
    `${CODE_FENCE}${fenceLang}`,
    expanded,
    `${CODE_FENCE}`,
    "",
    `### Refactor Example (Cleaner Structure)`,
    `This version keeps the same intent but shows a more structured layout you can reuse in larger projects.`,
    `${CODE_FENCE}${fenceLang}`,
    refactor,
    `${CODE_FENCE}`,
    "",
    `### Code Breakdown`,
    `- **Primary action:** ${extractPrimaryToken(level.expectedAnswer)} drives the core behavior.`,
    `- **Intent:** The statement directly satisfies the task without extra steps.`,
    `- **Result:** The solution is easy to read and verify.`,
    "",
    `### Common Mistakes`,
    `Below is an example of a mistake learners often make and why it fails:`,
    `${CODE_FENCE}${fenceLang}`,
    mistake,
    `${CODE_FENCE}`,
    `- Missing punctuation or structure can make the statement invalid.`,
    `- Keep the syntax concise and aligned with the task.`,
    "",
    `### Debugging Tips`,
    `- Re-read the task and circle the verb (print, return, create, declare).`,
    `- Check capitalization and punctuation, especially for keywords and string literals.`,
    `- Keep the solution short; extra logic is often the source of errors.`,
    "",
    `### Quick Checklist`,
    `- Did you use the right ${languageName} keyword or function?`,
    `- Are quotes, parentheses, and braces correctly matched?`,
    `- Does the solution align with the task in one direct step?`,
    "",
    `### Mini Practice`,
    `Try rewriting the reference solution with different variable names or values while keeping the intent the same.`,
    `Then check whether the logic still matches the task requirements.`,
    "",
    `### Knowledge Check`,
    `- Can you explain why this is a ${statementType}?`,
    `- Can you predict what would happen if a keyword were removed?`,
    `- Can you re-create the solution without looking at the reference?`,
    "",
    `### Why This Matters`,
    `These fundamentals appear in larger programs where ${concept} combine with other building blocks like loops, functions, and data structures.`,
    `By mastering this level, you reduce bugs and write code that is easier to test and maintain.`,
    "",
    `### Next Step`,
    `Continue to the next level to build on ${concept} with more structure and complexity.`
  ].join("\n");
}

function buildMcqs(level: LevelData): Mcq[] {
  const concept = inferConcept(level);
  const statementType = inferStatementType(level.expectedAnswer);
  const primaryToken = extractPrimaryToken(level.expectedAnswer);

  const taskOptions = [level.task, ...pickDistractors(level.task, 3)];
  const snippetOptions = buildSnippetOptions(level.expectedAnswer);
  const conceptOptions = [concept, ...pickConceptDistractors(concept, 3)];
  const tokenOptions = [primaryToken, ...pickTokenDistractors(primaryToken, 3)];
  const statementOptions = [
    statementType,
    "class definition",
    "loop",
    "error handling",
    "variable assignment",
    "function definition",
    "conditional",
    "expression"
  ].filter((value, index, array) => array.indexOf(value) === index).slice(0, 4);
  const languageFact = LANGUAGE_FACTS[level.language] ?? "The language follows its own syntax rules.";
  const languageOptions = [
    languageFact,
    "All variables must be declared with var.",
    "Indentation is ignored by the compiler.",
    "Programs never need an entry point."
  ];

  return [
    {
      id: `${level.levelId}-q1`,
      question: "What is the primary goal of this level?",
      options: taskOptions,
      correctIndex: 0,
      explanation: "The correct choice restates the task for this level."
    },
    {
      id: `${level.levelId}-q2`,
      question: "Which snippet best matches the expected solution?",
      options: snippetOptions,
      correctIndex: snippetOptions.indexOf(level.expectedAnswer),
      explanation: "The expected solution is the reference answer for this level."
    },
    {
      id: `${level.levelId}-q3`,
      question: "Which concept is the focus of this level?",
      options: conceptOptions,
      correctIndex: 0,
      explanation: "The level name and task indicate the core concept."
    },
    {
      id: `${level.levelId}-q4`,
      question: "Which keyword or function is central to the solution?",
      options: tokenOptions,
      correctIndex: 0,
      explanation: "The main token appears in the expected solution."
    },
    {
      id: `${level.levelId}-q5`,
      question: "What type of statement is the expected answer?",
      options: statementOptions,
      correctIndex: statementOptions.indexOf(statementType),
      explanation: "The structure of the expected answer matches this statement type."
    },
    {
      id: `${level.levelId}-q6`,
      question: `Which statement about ${LANGUAGE_NAMES[level.language] ?? level.language} is true?`,
      options: languageOptions,
      correctIndex: 0,
      explanation: "This statement reflects a core property of the language."
    }
  ];
}

/**
 * All levels combined from language-specific files
 */
const RAW_LEVELS: LevelData[] = [
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

export const LEVELS: LevelData[] = RAW_LEVELS.map((level) => ({
  ...level,
  docs: buildDocs(level),
  mcqs: buildMcqs(level)
}));

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
