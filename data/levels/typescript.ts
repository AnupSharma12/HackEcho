import { LevelData } from "../levels";

export const TYPESCRIPT_LEVELS: LevelData[] = [
  {
    levelId: "typescript-001",
    levelName: "TypeScript Basics",
    language: "typescript",
    docs: `
      <h2>TypeScript Basics: First Program</h2>
      <p><strong>Overview:</strong> TypeScript adds static types on top of JavaScript.</p>
      <p><strong>Goal:</strong> Print output and understand the TS to JS workflow.</p>
      <p><strong>Why it matters:</strong> TypeScript catches errors before runtime.</p>

      <h3>Hello World</h3>
      <pre><code>console.log("Hello, TypeScript!");</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>console.log</code> prints to the console.</li>
        <li>TypeScript is compiled to JavaScript.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will add type annotations.</p>
    `,
    task: "Print 'Hello, TS!' to the console.",
    expectedAnswer: "console.log('Hello, TS!');",
    xpReward: 100
  },
  {
    levelId: "typescript-002",
    levelName: "Type Annotations",
    language: "typescript",
    docs: `
      <h2>Type Annotations</h2>
      <p><strong>Overview:</strong> Types describe the shape of values.</p>
      <p><strong>Goal:</strong> Use basic annotations for variables.</p>
      <p><strong>Why it matters:</strong> Types improve readability and tooling.</p>

      <h3>Examples</h3>
      <pre><code>let name: string = "Asha";
let age: number = 21;
let isActive: boolean = true;</code></pre>

      <h3>Progression</h3>
      <p>Next you will define types for objects.</p>
    `,
    task: "Create a variable 'language' of type string with value 'TypeScript'.",
    expectedAnswer: "let language: string = 'TypeScript';",
    xpReward: 150
  },
  {
    levelId: "typescript-003",
    levelName: "Interfaces and Types",
    language: "typescript",
    docs: `
      <h2>Interfaces and Type Aliases</h2>
      <p><strong>Overview:</strong> Interfaces and type aliases define object shapes.</p>
      <p><strong>Goal:</strong> Declare an interface for a simple object.</p>
      <p><strong>Why it matters:</strong> Strong typing for objects prevents mistakes.</p>

      <h3>Example</h3>
      <pre><code>interface User {
  name: string;
  age: number;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will type functions.</p>
    `,
    task: "Create an interface 'Book' with fields title (string) and pages (number).",
    expectedAnswer: "interface Book { title: string; pages: number; }",
    xpReward: 200
  },
  {
    levelId: "typescript-004",
    levelName: "Functions",
    language: "typescript",
    docs: `
      <h2>Typed Functions</h2>
      <p><strong>Overview:</strong> Function parameters and return values can be typed.</p>
      <p><strong>Goal:</strong> Define a function with typed parameters and return type.</p>
      <p><strong>Why it matters:</strong> Function types prevent incorrect usage.</p>

      <h3>Example</h3>
      <pre><code>function add(a: number, b: number): number {
  return a + b;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will make decisions with conditionals.</p>
    `,
    task: "Create a function 'square' that returns n * n.",
    expectedAnswer: "function square(n: number): number { return n * n; }",
    xpReward: 220
  },
  {
    levelId: "typescript-005",
    levelName: "Conditionals",
    language: "typescript",
    docs: `
      <h2>Conditionals</h2>
      <p><strong>Overview:</strong> Conditionals choose which code runs.</p>
      <p><strong>Goal:</strong> Write an if/else block.</p>
      <p><strong>Why it matters:</strong> Programs must respond to input and state.</p>

      <h3>Example</h3>
      <pre><code>const score = 85;
if (score >= 90) {
  console.log("A");
} else {
  console.log("B");
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will iterate with loops.</p>
    `,
    task: "Write an if statement that logs 'Positive' if num > 0.",
    expectedAnswer: "if (num > 0) { console.log('Positive'); }",
    xpReward: 240
  },
  {
    levelId: "typescript-006",
    levelName: "Loops",
    language: "typescript",
    docs: `
      <h2>Loops</h2>
      <p><strong>Overview:</strong> Loops repeat code multiple times.</p>
      <p><strong>Goal:</strong> Use a <code>for</code> loop to iterate a range.</p>
      <p><strong>Why it matters:</strong> Iteration is common for arrays and lists.</p>

      <h3>Example</h3>
      <pre><code>for (let i = 1; i <= 3; i++) {
  console.log(i);
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will work with arrays and tuples.</p>
    `,
    task: "Write a loop that logs numbers 1 to 3.",
    expectedAnswer: "for (let i = 1; i <= 3; i++) { console.log(i); }",
    xpReward: 260
  },
  {
    levelId: "typescript-007",
    levelName: "Arrays and Tuples",
    language: "typescript",
    docs: `
      <h2>Arrays and Tuples</h2>
      <p><strong>Overview:</strong> Arrays store multiple values; tuples store fixed types.</p>
      <p><strong>Goal:</strong> Create a typed array.</p>
      <p><strong>Why it matters:</strong> Collections are central to most applications.</p>

      <h3>Example</h3>
      <pre><code>const scores: number[] = [10, 20, 30];
const point: [number, number] = [10, 20];</code></pre>

      <h3>Progression</h3>
      <p>Next you will type objects.</p>
    `,
    task: "Create a number array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "const nums: number[] = [1, 2, 3];",
    xpReward: 280
  },
  {
    levelId: "typescript-008",
    levelName: "Objects",
    language: "typescript",
    docs: `
      <h2>Objects and Type Safety</h2>
      <p><strong>Overview:</strong> Objects can be typed with inline annotations.</p>
      <p><strong>Goal:</strong> Create a typed object literal.</p>
      <p><strong>Why it matters:</strong> Type-safe objects reduce runtime errors.</p>

      <h3>Example</h3>
      <pre><code>const user: { name: string; age: number } = {
  name: "Rita",
  age: 20
};</code></pre>

      <h3>Progression</h3>
      <p>Next you will build classes.</p>
    `,
    task: "Create an object 'book' with title (string) and pages (number).",
    expectedAnswer: "const book: { title: string; pages: number } = { title: 'Guide', pages: 120 };",
    xpReward: 300
  },
  {
    levelId: "typescript-009",
    levelName: "Classes",
    language: "typescript",
    docs: `
      <h2>Classes</h2>
      <p><strong>Overview:</strong> Classes define data and behavior in OOP style.</p>
      <p><strong>Goal:</strong> Create a class with a constructor.</p>
      <p><strong>Why it matters:</strong> Classes are common in large codebases.</p>

      <h3>Example</h3>
      <pre><code>class User {
  constructor(public name: string) {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will use generics for reusable types.</p>
    `,
    task: "Create a class 'Car' with a public string field 'brand'.",
    expectedAnswer: "class Car { constructor(public brand: string) {} }",
    xpReward: 320
  },
  {
    levelId: "typescript-010",
    levelName: "Generics",
    language: "typescript",
    docs: `
      <h2>Generics: Reusable Types</h2>
      <p><strong>Overview:</strong> Generics make types flexible and reusable.</p>
      <p><strong>Goal:</strong> Write a generic function.</p>
      <p><strong>Why it matters:</strong> Generics preserve type safety across use cases.</p>

      <h3>Example</h3>
      <pre><code>function identity<T>(value: T): T {
  return value;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will use unions and narrowing.</p>
    `,
    task: "Write a generic function 'wrap' that returns the value.",
    expectedAnswer: "function wrap<T>(value: T): T { return value; }",
    xpReward: 340
  },
  {
    levelId: "typescript-011",
    levelName: "Unions and Narrowing",
    language: "typescript",
    docs: `
      <h2>Unions and Narrowing</h2>
      <p><strong>Overview:</strong> Union types allow multiple possible types.</p>
      <p><strong>Goal:</strong> Use a union and narrow it with <code>typeof</code>.</p>
      <p><strong>Why it matters:</strong> Many APIs return values in multiple forms.</p>

      <h3>Example</h3>
      <pre><code>function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will organize code with modules.</p>
    `,
    task: "Create a type alias 'Id' that can be string or number.",
    expectedAnswer: "type Id = string | number;",
    xpReward: 360
  },
  {
    levelId: "typescript-012",
    levelName: "Modules",
    language: "typescript",
    docs: `
      <h2>Modules: Import and Export</h2>
      <p><strong>Overview:</strong> Modules organize code into files.</p>
      <p><strong>Goal:</strong> Export a function and import it elsewhere.</p>
      <p><strong>Why it matters:</strong> Real projects are split into many files.</p>

      <h3>Example</h3>
      <pre><code>export function greet() {}
import { greet } from "./greet";</code></pre>

      <h3>Progression</h3>
      <p>Next you will work with async code and Promises.</p>
    `,
    task: "Write an export statement for a function named 'greet'.",
    expectedAnswer: "export function greet() {}",
    xpReward: 380
  },
  {
    levelId: "typescript-013",
    levelName: "Async and Promises",
    language: "typescript",
    docs: `
      <h2>Async and Promises</h2>
      <p><strong>Overview:</strong> Promises represent future values from async work.</p>
      <p><strong>Goal:</strong> Write an async function that returns a value.</p>
      <p><strong>Why it matters:</strong> Most apps fetch data or read files asynchronously.</p>

      <h3>Example</h3>
      <pre><code>async function getData(): Promise<string> {
  return "data";
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle errors safely.</p>
    `,
    task: "Create an async function 'load' that returns a Promise<string>.",
    expectedAnswer: "async function load(): Promise<string> { return 'data'; }",
    xpReward: 400
  },
  {
    levelId: "typescript-014",
    levelName: "Error Handling",
    language: "typescript",
    docs: `
      <h2>Error Handling</h2>
      <p><strong>Overview:</strong> Use <code>try</code> and <code>catch</code> for exceptions.</p>
      <p><strong>Goal:</strong> Wrap risky code in a try/catch block.</p>
      <p><strong>Why it matters:</strong> Errors happen in network and file operations.</p>

      <h3>Example</h3>
      <pre><code>try {
  JSON.parse("invalid");
} catch (err) {
  console.error("Failed");
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will read and write files in Node.</p>
    `,
    task: "Write a try/catch that logs 'Error' in the catch block.",
    expectedAnswer: "try { } catch (err) { console.log('Error'); }",
    xpReward: 420
  },
  {
    levelId: "typescript-015",
    levelName: "File I/O (Node)",
    language: "typescript",
    docs: `
      <h2>File I/O in Node</h2>
      <p><strong>Overview:</strong> Node provides the <code>fs</code> module for file access.</p>
      <p><strong>Goal:</strong> Write a file using <code>fs.writeFileSync</code>.</p>
      <p><strong>Why it matters:</strong> Files store logs, configs, and user data.</p>

      <h3>Example</h3>
      <pre><code>import * as fs from "fs";
fs.writeFileSync("data.txt", "Hello");</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate TypeScript foundation.</p>
    `,
    task: "Write a line that saves 'Hello' to data.txt using fs.writeFileSync.",
    expectedAnswer: "fs.writeFileSync('data.txt', 'Hello');",
    xpReward: 450
  }
];
