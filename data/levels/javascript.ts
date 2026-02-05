import { LevelData } from "../levels";

export const JAVASCRIPT_LEVELS: LevelData[] = [
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
  {
    levelId: "js-004",
    levelName: "Conditionals",
    language: "javascript",
    docs: `
      <h2>JavaScript Conditionals</h2>
      <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to make decisions:</p>
      
      <h3>Basic If Statement</h3>
      <pre><code>let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}</code></pre>
      
      <h3>Comparison Operators</h3>
      <ul>
        <li><code>===</code> - Equal to (strict)</li>
        <li><code>!==</code> - Not equal to</li>
        <li><code>&gt;</code> - Greater than</li>
        <li><code>&lt;</code> - Less than</li>
        <li><code>&gt;=</code> - Greater than or equal</li>
        <li><code>&lt;=</code> - Less than or equal</li>
      </ul>
    `,
    task: "Write an if statement that checks if a variable 'age' is 18 or older, and logs 'Adult' if true.",
    expectedAnswer: "if (age >= 18) { console.log('Adult'); }",
    xpReward: 200
  },
  {
    levelId: "js-005",
    levelName: "Arrays",
    language: "javascript",
    docs: `
      <h2>JavaScript Arrays</h2>
      <p>Arrays store <strong>multiple values</strong> in a single variable:</p>
      
      <h3>Creating Arrays</h3>
      <pre><code>const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];</code></pre>
      
      <h3>Accessing Elements</h3>
      <pre><code>console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"</code></pre>
      
      <h3>Array Methods</h3>
      <ul>
        <li><code>push()</code> - Add element to end</li>
        <li><code>pop()</code> - Remove last element</li>
        <li><code>length</code> - Get array size</li>
      </ul>
    `,
    task: "Create an array called 'colors' with values 'red', 'green', 'blue'.",
    expectedAnswer: "const colors = ['red', 'green', 'blue'];",
    xpReward: 250
  }
];
