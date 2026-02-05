/**
 * Manual Level Data Structure
 * 
 * Easy to add new levels - just copy the template below and modify:
 * 
 * {
 *   levelId: "unique-id",
 *   levelName: "Level Name",
 *   language: "javascript" | "python" | "java" | "cpp" | "csharp" | "go" | "rust",
 *   docs: "HTML-formatted documentation with <strong>, <code>, <em>, etc.",
 *   task: "Clear task description shown in task box",
 *   expectedAnswer: "Expected answer for fallback validation",
 *   xpReward: 100
 * }
 */

export type LevelData = {
  levelId: string;
  levelName: string;
  language: string;
  docs: string;
  task: string;
  expectedAnswer: string;
  xpReward: number;
};

export const LEVELS: LevelData[] = [
  // ============================================
  // JAVASCRIPT LEVELS
  // ============================================
  {
    levelId: "js-001",
    levelName: "JavaScript Basics",
    language: "javascript",
    docs: `
      <h2>Welcome to JavaScript!</h2>
      <p>JavaScript is a <strong>dynamic programming language</strong> used for web development.</p>
      
      <h3>Variables</h3>
      <p>You can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>:</p>
      <pre><code>let name = "HackEcho";
const age = 25;
var isActive = true;</code></pre>
      
      <h3>Console Output</h3>
      <p>Use <code>console.log()</code> to print to the console:</p>
      <pre><code>console.log("Hello, World!");</code></pre>
    `,
    task: "Write a JavaScript program that prints 'Hello, HackEcho!' to the console.",
    expectedAnswer: "console.log('Hello, HackEcho!');",
    xpReward: 100
  },
  {
    levelId: "js-002",
    levelName: "Variables & Data Types",
    language: "javascript",
    docs: `
      <h2>JavaScript Data Types</h2>
      <p>JavaScript has several <strong>primitive data types</strong>:</p>
      
      <ul>
        <li><code>string</code> - Text data: <code>"Hello"</code></li>
        <li><code>number</code> - Numeric values: <code>42</code>, <code>3.14</code></li>
        <li><code>boolean</code> - True/false values: <code>true</code>, <code>false</code></li>
        <li><code>undefined</code> - Unassigned variable</li>
        <li><code>null</code> - Intentional absence of value</li>
      </ul>
      
      <h3>Example</h3>
      <pre><code>let username = "Alice";
let score = 100;
let isWinner = true;</code></pre>
    `,
    task: "Create a variable called 'language' and assign it the value 'JavaScript'.",
    expectedAnswer: "let language = 'JavaScript';",
    xpReward: 150
  },
  {
    levelId: "js-003",
    levelName: "Functions",
    language: "javascript",
    docs: `
      <h2>JavaScript Functions</h2>
      <p>Functions are <strong>reusable blocks of code</strong>:</p>
      
      <h3>Function Declaration</h3>
      <pre><code>function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Output: Hello, Alice</code></pre>
      
      <h3>Arrow Functions (ES6)</h3>
      <pre><code>const greet = (name) => {
  return "Hello, " + name;
};

// Short form
const greet = name => "Hello, " + name;</code></pre>
    `,
    task: "Write a function called 'add' that takes two numbers and returns their sum.",
    expectedAnswer: "function add(a, b) { return a + b; }",
    xpReward: 200
  },

  // ============================================
  // PYTHON LEVELS
  // ============================================
  {
    levelId: "py-001",
    levelName: "Python Basics",
    language: "python",
    docs: `
      <h2>Welcome to Python!</h2>
      <p>Python is a <strong>high-level, interpreted language</strong> known for its simplicity.</p>
      
      <h3>Variables</h3>
      <p>Python uses <em>dynamic typing</em> - no need to declare types:</p>
      <pre><code>name = "HackEcho"
age = 25
is_active = True</code></pre>
      
      <h3>Print Statement</h3>
      <p>Use <code>print()</code> to output to the console:</p>
      <pre><code>print("Hello, World!")</code></pre>
    `,
    task: "Write a Python program that prints 'Hello, HackEcho!' to the console.",
    expectedAnswer: "print('Hello, HackEcho!')",
    xpReward: 100
  },
  {
    levelId: "py-002",
    levelName: "Python Data Types",
    language: "python",
    docs: `
      <h2>Python Data Types</h2>
      <p>Python has several <strong>built-in data types</strong>:</p>
      
      <ul>
        <li><code>str</code> - String: <code>"Hello"</code></li>
        <li><code>int</code> - Integer: <code>42</code></li>
        <li><code>float</code> - Floating point: <code>3.14</code></li>
        <li><code>bool</code> - Boolean: <code>True</code>, <code>False</code></li>
        <li><code>list</code> - List: <code>[1, 2, 3]</code></li>
        <li><code>dict</code> - Dictionary: <code>{"key": "value"}</code></li>
      </ul>
      
      <h3>Example</h3>
      <pre><code>username = "Alice"
score = 100
is_winner = True
items = [1, 2, 3]</code></pre>
    `,
    task: "Create a variable called 'language' and assign it the value 'Python'.",
    expectedAnswer: "language = 'Python'",
    xpReward: 150
  },
  {
    levelId: "py-003",
    levelName: "Python Functions",
    language: "python",
    docs: `
      <h2>Python Functions</h2>
      <p>Functions are defined using the <code>def</code> keyword:</p>
      
      <h3>Basic Function</h3>
      <pre><code>def greet(name):
    return f"Hello, {name}"

print(greet("Alice"))  # Output: Hello, Alice</code></pre>
      
      <h3>Function with Default Parameters</h3>
      <pre><code>def greet(name="User"):
    return f"Hello, {name}"

print(greet())  # Output: Hello, User</code></pre>
      
      <h3>Lambda Functions</h3>
      <pre><code>add = lambda a, b: a + b
print(add(5, 3))  # Output: 8</code></pre>
    `,
    task: "Write a function called 'add' that takes two numbers and returns their sum.",
    expectedAnswer: "def add(a, b):\n    return a + b",
    xpReward: 200
  },

  // ============================================
  // JAVA LEVELS
  // ============================================
  {
    levelId: "java-001",
    levelName: "Java Basics",
    language: "java",
    docs: `
      <h2>Welcome to Java!</h2>
      <p>Java is a <strong>statically-typed, object-oriented language</strong>.</p>
      
      <h3>Hello World Program</h3>
      <pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
      
      <h3>Variables</h3>
      <p>Java requires <em>type declarations</em>:</p>
      <pre><code>String name = "HackEcho";
int age = 25;
boolean isActive = true;</code></pre>
    `,
    task: "Write a Java program that prints 'Hello, HackEcho!' to the console.",
    expectedAnswer: "System.out.println(\"Hello, HackEcho!\");",
    xpReward: 100
  },

  // ============================================
  // C++ LEVELS
  // ============================================
  {
    levelId: "cpp-001",
    levelName: "C++ Basics",
    language: "cpp",
    docs: `
      <h2>Welcome to C++!</h2>
      <p>C++ is a <strong>powerful, compiled language</strong> with low-level capabilities.</p>
      
      <h3>Hello World Program</h3>
      <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</code></pre>
      
      <h3>Variables</h3>
      <pre><code>string name = "HackEcho";
int age = 25;
bool isActive = true;</code></pre>
    `,
    task: "Write a C++ statement that prints 'Hello, HackEcho!' to the console.",
    expectedAnswer: "cout << \"Hello, HackEcho!\" << endl;",
    xpReward: 100
  },

  // ============================================
  // Add more languages and levels here easily!
  // ============================================
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
