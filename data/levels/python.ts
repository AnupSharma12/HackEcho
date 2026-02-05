import { LevelData } from "../levels";

export const PYTHON_LEVELS: LevelData[] = [
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
  {
    levelId: "py-004",
    levelName: "Python Conditionals",
    language: "python",
    docs: `
      <h2>Python Conditionals</h2>
      <p>Use <code>if</code>, <code>elif</code>, and <code>else</code> for decision making:</p>
      
      <h3>Basic If Statement</h3>
      <pre><code>score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")</code></pre>
      
      <h3>Comparison Operators</h3>
      <ul>
        <li><code>==</code> - Equal to</li>
        <li><code>!=</code> - Not equal to</li>
        <li><code>&gt;</code> - Greater than</li>
        <li><code>&lt;</code> - Less than</li>
        <li><code>&gt;=</code> - Greater than or equal</li>
        <li><code>&lt;=</code> - Less than or equal</li>
      </ul>
      
      <p><strong>Note:</strong> Python uses indentation (4 spaces) instead of braces!</p>
    `,
    task: "Write an if statement that checks if a variable 'age' is 18 or older, and prints 'Adult' if true.",
    expectedAnswer: "if age >= 18:\n    print('Adult')",
    xpReward: 200
  },
  {
    levelId: "py-005",
    levelName: "Python Lists",
    language: "python",
    docs: `
      <h2>Python Lists</h2>
      <p>Lists are <strong>ordered, mutable collections</strong> in Python:</p>
      
      <h3>Creating Lists</h3>
      <pre><code>fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]</code></pre>
      
      <h3>Accessing Elements</h3>
      <pre><code>print(fruits[0])   # "apple"
print(fruits[-1])  # "orange" (negative indexing)</code></pre>
      
      <h3>List Methods</h3>
      <ul>
        <li><code>append()</code> - Add element to end</li>
        <li><code>remove()</code> - Remove specific element</li>
        <li><code>len()</code> - Get list size</li>
      </ul>
    `,
    task: "Create a list called 'colors' with values 'red', 'green', 'blue'.",
    expectedAnswer: "colors = ['red', 'green', 'blue']",
    xpReward: 250
  }
];
