import { LevelData } from "../levels";

export const JAVASCRIPT_LEVELS: LevelData[] = [
  {
    levelId: "js-001",
    levelName: "Running JavaScript",
    language: "javascript",
    docs: `
<h2>Running JavaScript: Your First Program</h2>
<p><strong>Overview:</strong> JavaScript runs in the browser and on servers. In this level, you will learn how to run code and read output.</p>
<p><strong>Learning goal:</strong> You should be able to print a message and understand where that output appears.</p>
<p><strong>Why it matters:</strong> Output is how you verify your program is doing what you expect. It is also the first step in debugging.</p>

<h3>Where JavaScript Runs</h3>
<p>JavaScript runs inside browsers (like Chrome) and on servers using Node.js. In both cases, you can print messages for debugging.</p>

<h3>Example: Print a Message</h3>
<pre><code>console.log("Hello World");</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>console</code> is a built-in object for developer tools.</li>
  <li><code>log()</code> is a method that prints to the console.</li>
  <li>The string inside quotes is the exact text printed.</li>
</ul>

<h3>Another Example: Print a Number</h3>
<pre><code>console.log(42);</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting quotes around text (strings).</li>
  <li>Typing <code>Console</code> with a capital C.</li>
  <li>Missing the semicolon at the end (optional, but consistent style helps).</li>
</ul>

<h3>Practice Tip</h3>
<p>Try printing text, numbers, and math expressions. Notice how the output changes.</p>

<h3>Progression</h3>
<p>Next you will store values in variables so you can reuse them throughout your program.</p>
`,
    task: "Print 'JavaScript Started' to the console.",
    expectedAnswer: "console.log('JavaScript Started');",
    xpReward: 100
  },
  {
    levelId: "js-002",
    levelName: "Variables (let vs const)",
    language: "javascript",
    docs: `
<h2>Variables: Storing Values</h2>
<p><strong>Overview:</strong> Variables let you store data so you can reuse it later.</p>
<p><strong>Learning goal:</strong> Understand <code>let</code> vs <code>const</code> and when to use each.</p>
<p><strong>Why it matters:</strong> Nearly every program needs to store user input, results, or configuration.</p>

<h3>Example: Creating Variables</h3>
<pre><code>let age = 20;
const country = "Nepal";</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>let</code> creates a variable that can change.</li>
  <li><code>const</code> creates a variable that should not change.</li>
  <li><code>=</code> assigns a value to the variable.</li>
</ul>

<h3>Reassignment Example</h3>
<pre><code>let score = 10;
score = 20; // allowed

const name = "Anup";
// name = "Alex"; // error</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using <code>const</code> and then trying to reassign it.</li>
  <li>Using <code>var</code> (older syntax) without understanding scope.</li>
  <li>Creating variables with unclear names.</li>
</ul>

<h3>Best Practice</h3>
<p>Use <code>const</code> by default. Switch to <code>let</code> only if you must reassign.</p>

<h3>Progression</h3>
<p>Next, you will learn data types so you know what kind of values variables can store.</p>
`,
    task: "Create a const variable named 'country' with value 'Nepal'.",
    expectedAnswer: "const country = 'Nepal';",
    xpReward: 150
  },
  {
    levelId: "js-003",
    levelName: "Data Types",
    language: "javascript",
    docs: `
<h2>Data Types: Understanding Values</h2>
<p><strong>Overview:</strong> JavaScript has different types of values, each with its own behavior.</p>
<p><strong>Learning goal:</strong> Identify basic data types and use them correctly.</p>
<p><strong>Why it matters:</strong> Bugs often happen when you mix types without realizing it.</p>

<h3>Primitive Types</h3>
<ul>
  <li><code>string</code> for text</li>
  <li><code>number</code> for numeric values</li>
  <li><code>boolean</code> for true/false</li>
  <li><code>null</code> for an intentional empty value</li>
  <li><code>undefined</code> for variables with no value yet</li>
</ul>

<h3>Example: Mixed Types</h3>
<pre><code>let age = 20;
let name = "Alex";
let isOnline = true;</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>20</code> is a number.</li>
  <li><code>"Alex"</code> is a string.</li>
  <li><code>true</code> is a boolean.</li>
</ul>

<h3>Checking Types</h3>
<pre><code>typeof age;      // "number"
typeof name;     // "string"
typeof isOnline; // "boolean"</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Expecting numbers but storing strings.</li>
  <li>Using <code>null</code> and <code>undefined</code> interchangeably.</li>
  <li>Forgetting that <code>"5"</code> is not the same as <code>5</code>.</li>
</ul>

<h3>Progression</h3>
<p>Next you will manipulate these values using operators.</p>
`,
    task: "Create a variable 'isOnline' with boolean true.",
    expectedAnswer: "let isOnline = true;",
    xpReward: 200
  },
  {
    levelId: "js-004",
    levelName: "Operators",
    language: "javascript",
    docs: `
<h2>Operators: Doing Work with Values</h2>
<p><strong>Overview:</strong> Operators let you calculate, compare, and combine values.</p>
<p><strong>Learning goal:</strong> Use arithmetic and comparison operators correctly.</p>
<p><strong>Why it matters:</strong> Operators are the building blocks of program logic.</p>

<h3>Arithmetic Operators</h3>
<p>Use <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code> for math.</p>
<pre><code>let result = 5 * 4;</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>*</code> multiplies two numbers.</li>
  <li>The result is stored in <code>result</code>.</li>
</ul>

<h3>Comparison Operators</h3>
<pre><code>5 > 3;   // true
5 === 5; // true
5 !== 4; // true</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using <code>=</code> instead of <code>===</code> in conditions.</li>
  <li>Comparing strings and numbers without converting them.</li>
  <li>Ignoring operator precedence in complex expressions.</li>
</ul>

<h3>Practice Tip</h3>
<p>Try combining arithmetic with comparisons to see the result.</p>

<h3>Progression</h3>
<p>Next you will use operators inside conditionals to make decisions.</p>
`,
    task: "Store the result of 5 * 4 in variable 'result'.",
    expectedAnswer: "let result = 5 * 4;",
    xpReward: 200
  },
  {
    levelId: "js-005",
    levelName: "Conditionals",
    language: "javascript",
    docs: `
<h2>Conditionals: Making Decisions</h2>
<p><strong>Overview:</strong> Conditionals allow your program to choose between paths.</p>
<p><strong>Learning goal:</strong> Use <code>if</code> statements with clear boolean conditions.</p>
<p><strong>Why it matters:</strong> Most programs react differently based on data.</p>

<h3>Basic If Statement</h3>
<pre><code>if (age >= 18) {
  console.log("Adult");
}</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>age >= 18</code> evaluates to true or false.</li>
  <li>The block runs only if the condition is true.</li>
</ul>

<h3>If / Else Example</h3>
<pre><code>if (score >= 80) {
  console.log("Pass");
} else {
  console.log("Try again");
}</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using assignment <code>=</code> instead of comparison <code>===</code>.</li>
  <li>Forgetting braces for multi-line blocks.</li>
  <li>Writing complex conditions without parentheses.</li>
</ul>

<h3>Progression</h3>
<p>Next you will repeat decisions using loops.</p>
`,
    task: "Write an if statement that logs 'Positive' if num > 0.",
    expectedAnswer: "if (num > 0) { console.log('Positive'); }",
    xpReward: 250
  },
  {
    levelId: "js-006",
    levelName: "Loops",
    language: "javascript",
    docs: `
<h2>Loops: Repeating Work</h2>
<p><strong>Overview:</strong> Loops let you run the same code multiple times.</p>
<p><strong>Learning goal:</strong> Understand the structure of a <code>for</code> loop.</p>
<p><strong>Why it matters:</strong> Repetition is common in data processing and UI updates.</p>

<h3>Basic For Loop</h3>
<pre><code>for (let i = 0; i < 3; i++) {
  console.log(i);
}</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>let i = 0</code> starts the counter.</li>
  <li><code>i < 3</code> is the loop condition.</li>
  <li><code>i++</code> increments after each iteration.</li>
</ul>

<h3>While Loop Example</h3>
<pre><code>let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Off-by-one errors (loop runs one time too many).</li>
  <li>Forgetting to increment, causing infinite loops.</li>
  <li>Using the wrong loop type for the problem.</li>
</ul>

<h3>Progression</h3>
<p>Next you will group repeated logic into functions.</p>
`,
    task: "Write a loop that prints numbers from 1 to 3.",
    expectedAnswer: "for (let i = 1; i <= 3; i++) { console.log(i); }",
    xpReward: 300
  },
  {
    levelId: "js-007",
    levelName: "Functions",
    language: "javascript",
    docs: `
<h2>Functions: Reusable Logic</h2>
<p><strong>Overview:</strong> Functions let you group code so you can reuse it.</p>
<p><strong>Learning goal:</strong> Write a function with parameters and a return value.</p>
<p><strong>Why it matters:</strong> Functions keep your code organized and prevent duplication.</p>

<h3>Function Declaration</h3>
<pre><code>function greet(name) {
  return "Hello " + name;
}</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>function</code> starts a declaration.</li>
  <li><code>name</code> is a parameter (input).</li>
  <li><code>return</code> sends a value back.</li>
</ul>

<h3>Using the Function</h3>
<pre><code>const message = greet("Asha");
console.log(message);</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting to return a value when needed.</li>
  <li>Using variables that are out of scope.</li>
  <li>Writing large functions that do too many things.</li>
</ul>

<h3>Progression</h3>
<p>Next you will learn a shorter function syntax with arrow functions.</p>
`,
    task: "Create a function 'square' that returns number * number.",
    expectedAnswer: "function square(n) { return n * n; }",
    xpReward: 350
  },
  {
    levelId: "js-008",
    levelName: "Arrow Functions",
    language: "javascript",
    docs: `
<h2>Arrow Functions: Modern Syntax</h2>
<p><strong>Overview:</strong> Arrow functions are a concise way to write functions.</p>
<p><strong>Learning goal:</strong> Use arrow syntax and implicit returns.</p>
<p><strong>Why it matters:</strong> Arrow functions are common in modern JavaScript.</p>

<h3>Basic Arrow Function</h3>
<pre><code>const add = (a, b) => a + b;</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Parameters go inside parentheses.</li>
  <li><code>=></code> separates parameters from the body.</li>
  <li>Single-line bodies return automatically.</li>
</ul>

<h3>Block Body Example</h3>
<pre><code>const multiply = (a, b) => {
  const result = a * b;
  return result;
};</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting braces when you need multiple lines.</li>
  <li>Expecting arrow functions to have their own <code>this</code>.</li>
  <li>Mixing arrow syntax with older function syntax incorrectly.</li>
</ul>

<h3>Progression</h3>
<p>Next you will store collections of values using arrays.</p>
`,
    task: "Create arrow function 'double' that returns n * 2.",
    expectedAnswer: "const double = n => n * 2;",
    xpReward: 400
  },
  {
    levelId: "js-009",
    levelName: "Arrays",
    language: "javascript",
    docs: `
<h2>Arrays: Collections of Data</h2>
<p><strong>Overview:</strong> Arrays store multiple values in order.</p>
<p><strong>Learning goal:</strong> Create arrays and access elements by index.</p>
<p><strong>Why it matters:</strong> Most real programs manage lists of data.</p>

<h3>Creating Arrays</h3>
<pre><code>const nums = [1, 2, 3];
const names = ["Asha", "Ben", "Cara"];</code></pre>

<h3>Accessing Elements</h3>
<pre><code>console.log(nums[0]); // 1
console.log(names[2]); // "Cara"</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Square brackets define an array.</li>
  <li>Index starts at 0.</li>
  <li><code>length</code> tells you how many items exist.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Using index 1 for the first element.</li>
  <li>Accessing an index that does not exist.</li>
  <li>Confusing arrays with objects.</li>
</ul>

<h3>Progression</h3>
<p>Next you will use array methods to transform data.</p>
`,
    task: "Create array 'scores' with values 10, 20, 30.",
    expectedAnswer: "const scores = [10, 20, 30];",
    xpReward: 450
  },
  {
    levelId: "js-010",
    levelName: "Array Methods",
    language: "javascript",
    docs: `
<h2>Array Methods: Working with Lists</h2>
<p><strong>Overview:</strong> Arrays have built-in methods to transform data.</p>
<p><strong>Learning goal:</strong> Use <code>map()</code> to transform each element.</p>
<p><strong>Why it matters:</strong> Clean transformations reduce bugs and improve readability.</p>

<h3>Example: map()</h3>
<pre><code>const doubled = [1, 2, 3].map(n => n * 2);
// doubled is [2, 4, 6]</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>map()</code> loops through the array.</li>
  <li>It returns a new array of results.</li>
  <li>The original array is not changed.</li>
</ul>

<h3>Other Useful Methods</h3>
<pre><code>[1, 2, 3].filter(n => n > 1); // [2, 3]
[1, 2, 3].find(n => n === 2); // 2</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Expecting <code>map()</code> to mutate the original array.</li>
  <li>Forgetting to return a value inside the callback.</li>
  <li>Using the wrong method for the goal.</li>
</ul>

<h3>Progression</h3>
<p>Next you will store richer data using objects.</p>
`,
    task: "Use map to multiply each number in [1,2,3] by 2.",
    expectedAnswer: "[1,2,3].map(n => n * 2);",
    xpReward: 500
  },
  {
    levelId: "js-011",
    levelName: "Objects",
    language: "javascript",
    docs: `
<h2>Objects: Key-Value Data</h2>
<p><strong>Overview:</strong> Objects store labeled data in key-value pairs.</p>
<p><strong>Learning goal:</strong> Create an object and access its properties.</p>
<p><strong>Why it matters:</strong> Most real data is structured as objects.</p>

<h3>Creating an Object</h3>
<pre><code>const user = {
  name: "John",
  age: 20
};</code></pre>

<h3>Accessing Properties</h3>
<pre><code>user.name; // "John"
user["age"]; // 20</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Keys are property names.</li>
  <li>Values can be any type (string, number, array).</li>
  <li>Dot and bracket notation both work.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting quotes around string values.</li>
  <li>Using dot notation with keys that have spaces.</li>
  <li>Mutating objects unexpectedly.</li>
</ul>

<h3>Progression</h3>
<p>Next you will extract object values using destructuring.</p>
`,
    task: "Create object 'book' with title 'JS Guide'.",
    expectedAnswer: "const book = { title: 'JS Guide' };",
    xpReward: 550
  },
  {
    levelId: "js-012",
    levelName: "Destructuring",
    language: "javascript",
    docs: `
<h2>Destructuring: Extracting Values</h2>
<p><strong>Overview:</strong> Destructuring lets you pull values from objects and arrays.</p>
<p><strong>Learning goal:</strong> Use object destructuring to assign values quickly.</p>
<p><strong>Why it matters:</strong> It makes code cleaner and easier to read.</p>

<h3>Object Destructuring</h3>
<pre><code>const person = { age: 25, city: "Kathmandu" };
const { age, city } = person;</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>{ age, city }</code> matches object keys.</li>
  <li>Each key becomes a variable.</li>
  <li>The order does not matter for objects.</li>
</ul>

<h3>Array Destructuring</h3>
<pre><code>const colors = ["red", "green", "blue"];
const [first, second] = colors;</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using the wrong variable name that does not match a key.</li>
  <li>Trying to destructure <code>null</code> or <code>undefined</code>.</li>
  <li>Forgetting default values when data may be missing.</li>
</ul>

<h3>Progression</h3>
<p>Next you will work with async code using promises.</p>
`,
    task: "Destructure 'age' from object person.",
    expectedAnswer: "const { age } = person;",
    xpReward: 600
  },
  {
    levelId: "js-013",
    levelName: "Promises",
    language: "javascript",
    docs: `
<h2>Promises: Async Foundations</h2>
<p><strong>Overview:</strong> Promises represent a value that arrives later.</p>
<p><strong>Learning goal:</strong> Create a promise and resolve it.</p>
<p><strong>Why it matters:</strong> APIs, timers, and file reads are all async.</p>

<h3>Creating a Promise</h3>
<pre><code>const promise = new Promise((resolve, reject) => {
  resolve("Done");
});</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>The executor runs immediately.</li>
  <li><code>resolve</code> marks success.</li>
  <li><code>reject</code> marks failure.</li>
</ul>

<h3>Consuming a Promise</h3>
<pre><code>promise.then(value => {
  console.log(value);
}).catch(error => {
  console.log(error);
});</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting to return a promise from a function.</li>
  <li>Not handling errors with <code>catch</code>.</li>
  <li>Mixing callbacks and promises incorrectly.</li>
</ul>

<h3>Progression</h3>
<p>Next you will use async/await to write cleaner async code.</p>
`,
    task: "Create a Promise that resolves with 'Success'.",
    expectedAnswer: "new Promise((resolve) => { resolve('Success'); });",
    xpReward: 700
  },
  {
    levelId: "js-014",
    levelName: "Async / Await",
    language: "javascript",
    docs: `
<h2>Async / Await: Cleaner Async Code</h2>
<p><strong>Overview:</strong> <code>async</code> and <code>await</code> make promises easier to read.</p>
<p><strong>Learning goal:</strong> Write an async function and return a value.</p>
<p><strong>Why it matters:</strong> It reads like synchronous code but still handles async work.</p>

<h3>Async Function</h3>
<pre><code>async function getData() {
  return "Hello";
}</code></pre>

<h3>Await Example</h3>
<pre><code>async function fetchUser() {
  const response = await fetch("/api/user");
  return response.json();
}</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>async</code> makes the function return a promise.</li>
  <li><code>await</code> pauses until the promise resolves.</li>
  <li>Errors should be handled with <code>try/catch</code>.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Using <code>await</code> outside an <code>async</code> function.</li>
  <li>Forgetting to handle errors.</li>
  <li>Running async operations in sequence when they could be parallel.</li>
</ul>

<h3>Progression</h3>
<p>Next you will learn to structure code using classes.</p>
`,
    task: "Create async function 'getData' that returns 'Data'.",
    expectedAnswer: "async function getData() { return 'Data'; }",
    xpReward: 800
  },
  {
    levelId: "js-015",
    levelName: "Classes & OOP",
    language: "javascript",
    docs: `
<h2>Classes and OOP: Organizing Code</h2>
<p><strong>Overview:</strong> Classes let you define reusable object templates.</p>
<p><strong>Learning goal:</strong> Create a class with a constructor and store data.</p>
<p><strong>Why it matters:</strong> OOP helps structure large applications.</p>

<h3>Class Example</h3>
<pre><code>class User {
  constructor(name) {
    this.name = name;
  }
}</code></pre>

<h3>Using the Class</h3>
<pre><code>const user = new User("Rita");
console.log(user.name);</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>class</code> defines the blueprint.</li>
  <li><code>constructor</code> runs when creating an instance.</li>
  <li><code>this</code> refers to the current object.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting to use <code>new</code> when creating an instance.</li>
  <li>Misusing <code>this</code> in methods.</li>
  <li>Putting too much logic in the constructor.</li>
</ul>

<h3>Progression</h3>
<p>You now have a beginner to intermediate foundation in JavaScript.</p>
`,
    task: "Create class 'Car' with constructor setting brand.",
    expectedAnswer: "class Car { constructor(brand) { this.brand = brand; } }",
    xpReward: 1000
  }
];
