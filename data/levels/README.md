# Levels Organization

Each programming language has its own separate file in this folder. This makes it easy to manage levels independently per language.

## Current Languages

- **javascript.ts** - JavaScript levels
- **python.ts** - Python levels  
- **java.ts** - Java levels
- **cpp.ts** - C++ levels
- **go.ts** - Go levels
- **csharp.ts** - C# levels
- **rust.ts** - Rust levels
- **typescript.ts** - TypeScript levels
- **php.ts** - PHP levels
- **ruby.ts** - Ruby levels

## Adding Levels to an Existing Language

1. Open the language file (e.g., `javascript.ts`)
2. Add a new level object to the array:

```typescript
{
  levelId: "js-006",
  levelName: "Loops",
  language: "javascript",
  docs: `
## JavaScript Loops

### Overview
Your Markdown documentation here...

### Example
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
\`\`\`
  `,
  task: "Your task description",
  expectedAnswer: "expected code here",
  xpReward: 300,
  mcqs: [
    {
      id: "js-006-q1",
      question: "Which loop runs three times?",
      options: ["for (let i = 0; i < 3; i++)", "for (let i = 0; i <= 3; i++)"],
      correctIndex: 0,
      explanation: "The condition i < 3 runs three times."
    }
  ]
}
```

3. Save the file - it automatically updates!

## Adding a New Language

### Step 1: Create the language file

Create a new file: `/data/levels/[language].ts`

Example: `ruby.ts`

```typescript
import { LevelData } from "../levels";

export const RUBY_LEVELS: LevelData[] = [
  {
    levelId: "ruby-001",
    levelName: "Ruby Basics",
    language: "ruby",
    docs: `
      <h2>Welcome to Ruby!</h2>
      <p>Ruby is a dynamic, object-oriented language...</p>
    `,
    task: "Write a Ruby program that prints 'Hello, World!'",
    expectedAnswer: "puts 'Hello, World!'",
    xpReward: 100
  },
  // Add more Ruby levels here
];
```

### Step 2: Import in main levels file

Edit `/data/levels.ts`:

```typescript
import { RUBY_LEVELS } from "./levels/ruby";

export const LEVELS: LevelData[] = [
  ...JAVASCRIPT_LEVELS,
  ...PYTHON_LEVELS,
  ...JAVA_LEVELS,
  ...CPP_LEVELS,
  ...RUBY_LEVELS  // Add your new language here
];
```

### Step 3: Add language display name

In `/data/levels.ts`, update `LANGUAGE_NAMES`:

```typescript
export const LANGUAGE_NAMES: Record<string, string> = {
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
  ruby: "Ruby"  // Add display name
};
```

### Step 4: Test it

Run `npm run build` to verify everything compiles correctly.

That's it! The new language will automatically appear in the dashboard.

## Level ID Naming Convention

Use this pattern: `[language]-[number]`

Examples:
- `js-001`, `js-002`, `js-003`
- `py-001`, `py-002`, `py-003`
- `java-001`, `java-002`
- `cpp-001`, `cpp-002`

## XP Reward Guidelines

- **Basics**: 100-150 XP
- **Intermediate**: 200-300 XP
- **Advanced**: 350-500 XP
- **Projects**: 500-1000 XP

## Markdown Supported in Docs

- Headers: `##`, `###`
- Text: `**bold**`, `*italic*`
- Code blocks: triple backticks
- Lists: `-` or `1.`

## Tips

- Keep each level focused on ONE concept
- Use clear, practical examples
- Test your `expectedAnswer` to make sure it works
- Build progressively - each level should build on previous ones
- Add detailed documentation with code examples

## Need Help?

Check the existing language files for examples and formatting!
