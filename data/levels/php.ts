import { LevelData } from "../levels";

export const PHP_LEVELS: LevelData[] = [
  {
    levelId: "php-001",
    levelName: "PHP Basics",
    language: "php",
    docs: `
      <h2>PHP Basics: First Script</h2>
      <p><strong>Overview:</strong> PHP is a server-side scripting language used for web development.</p>
      <p><strong>Goal:</strong> Output text using <code>echo</code>.</p>
      <p><strong>Why it matters:</strong> Understanding output is the first step in web scripting.</p>

      <h3>Hello World</h3>
      <pre><code>&lt;?php

echo "Hello, World!";
</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>&lt;?php</code> starts PHP mode.</li>
        <li><code>echo</code> prints text to the response.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will declare variables and types.</p>
    `,
    task: "Print 'Hello, PHP!' using echo.",
    expectedAnswer: "echo 'Hello, PHP!';",
    xpReward: 100
  },
  {
    levelId: "php-002",
    levelName: "Variables and Types",
    language: "php",
    docs: `
      <h2>Variables and Types</h2>
      <p><strong>Overview:</strong> PHP variables start with <code>$</code> and are dynamically typed.</p>
      <p><strong>Goal:</strong> Declare variables with common types.</p>
      <p><strong>Why it matters:</strong> PHP code often mixes strings, numbers, and booleans.</p>

      <h3>Examples</h3>
      <pre><code>$name = "Asha";
$age = 21;
$isActive = true;</code></pre>

      <h3>Progression</h3>
      <p>Next you will compute values with operators.</p>
    `,
    task: "Create a variable $language with value 'PHP'.",
    expectedAnswer: "$language = 'PHP';",
    xpReward: 150
  },
  {
    levelId: "php-003",
    levelName: "Operators",
    language: "php",
    docs: `
      <h2>Operators: Working with Values</h2>
      <p><strong>Overview:</strong> Operators perform arithmetic and comparisons.</p>
      <p><strong>Goal:</strong> Use basic arithmetic operators.</p>
      <p><strong>Why it matters:</strong> Calculations are a core part of many applications.</p>

      <h3>Examples</h3>
      <pre><code>$sum = 10 + 5;
$product = 4 * 3;
$isEqual = (5 == 5);</code></pre>

      <h3>Progression</h3>
      <p>Next you will make decisions using conditionals.</p>
    `,
    task: "Store the result of 10 + 5 in variable $total.",
    expectedAnswer: "$total = 10 + 5;",
    xpReward: 200
  },
  {
    levelId: "php-004",
    levelName: "Conditionals",
    language: "php",
    docs: `
      <h2>Conditionals: Decision Making</h2>
      <p><strong>Overview:</strong> Conditionals choose which block runs.</p>
      <p><strong>Goal:</strong> Write an if/else statement.</p>
      <p><strong>Why it matters:</strong> Apps respond to different inputs and states.</p>

      <h3>Example</h3>
      <pre><code>$score = 85;
if ($score >= 90) {
    echo "A";
} else {
    echo "B";
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will repeat actions with loops.</p>
    `,
    task: "Write an if statement that echoes 'Positive' if $num > 0.",
    expectedAnswer: "if ($num > 0) { echo 'Positive'; }",
    xpReward: 220
  },
  {
    levelId: "php-005",
    levelName: "Loops",
    language: "php",
    docs: `
      <h2>Loops</h2>
      <p><strong>Overview:</strong> Loops repeat code multiple times.</p>
      <p><strong>Goal:</strong> Use a <code>for</code> loop to count.</p>
      <p><strong>Why it matters:</strong> Iteration is common with arrays and data.</p>

      <h3>Example</h3>
      <pre><code>for ($i = 1; $i <= 3; $i++) {
    echo $i;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will create reusable functions.</p>
    `,
    task: "Write a for loop that echoes numbers 1 to 3.",
    expectedAnswer: "for ($i = 1; $i <= 3; $i++) { echo $i; }",
    xpReward: 240
  },
  {
    levelId: "php-006",
    levelName: "Functions",
    language: "php",
    docs: `
      <h2>Functions: Reusable Logic</h2>
      <p><strong>Overview:</strong> Functions encapsulate reusable code blocks.</p>
      <p><strong>Goal:</strong> Define a function that returns a value.</p>
      <p><strong>Why it matters:</strong> Functions reduce duplication and improve clarity.</p>

      <h3>Example</h3>
      <pre><code>function add($a, $b) {
    return $a + $b;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will store collections with arrays.</p>
    `,
    task: "Create a function 'square' that returns n * n.",
    expectedAnswer: "function square($n) { return $n * $n; }",
    xpReward: 260
  },
  {
    levelId: "php-007",
    levelName: "Arrays",
    language: "php",
    docs: `
      <h2>Arrays: Ordered Collections</h2>
      <p><strong>Overview:</strong> Arrays store multiple values in order.</p>
      <p><strong>Goal:</strong> Create a numeric array and access elements.</p>
      <p><strong>Why it matters:</strong> Arrays are the most common data structure in PHP.</p>

      <h3>Example</h3>
      <pre><code>$nums = [1, 2, 3];
echo $nums[0];</code></pre>

      <h3>Progression</h3>
      <p>Next you will use associative arrays for key-value data.</p>
    `,
    task: "Create an array named $nums with values 1, 2, 3.",
    expectedAnswer: "$nums = [1, 2, 3];",
    xpReward: 280
  },
  {
    levelId: "php-008",
    levelName: "Associative Arrays",
    language: "php",
    docs: `
      <h2>Associative Arrays</h2>
      <p><strong>Overview:</strong> Associative arrays map keys to values.</p>
      <p><strong>Goal:</strong> Create a key-value array.</p>
      <p><strong>Why it matters:</strong> They model objects like user profiles and settings.</p>

      <h3>Example</h3>
      <pre><code>$user = ["name" => "Rita", "age" => 20];
echo $user["name"];</code></pre>

      <h3>Progression</h3>
      <p>Next you will work with strings.</p>
    `,
    task: "Create an associative array 'book' with key 'title' = 'PHP Guide'.",
    expectedAnswer: "$book = ['title' => 'PHP Guide'];",
    xpReward: 300
  },
  {
    levelId: "php-009",
    levelName: "Strings",
    language: "php",
    docs: `
      <h2>Strings: Text Handling</h2>
      <p><strong>Overview:</strong> Strings represent text and have useful functions.</p>
      <p><strong>Goal:</strong> Use common string functions.</p>
      <p><strong>Why it matters:</strong> Web apps format and validate text constantly.</p>

      <h3>Example</h3>
      <pre><code>$name = "HackEcho";
$length = strlen($name);</code></pre>

      <h3>Progression</h3>
      <p>Next you will define classes and objects.</p>
    `,
    task: "Create a string variable 'greeting' with value 'Hello'.",
    expectedAnswer: "$greeting = 'Hello';",
    xpReward: 320
  },
  {
    levelId: "php-010",
    levelName: "Classes and Objects",
    language: "php",
    docs: `
      <h2>Classes and Objects</h2>
      <p><strong>Overview:</strong> Classes define properties and methods; objects are instances.</p>
      <p><strong>Goal:</strong> Create a class with a public property.</p>
      <p><strong>Why it matters:</strong> OOP organizes complex code into reusable pieces.</p>

      <h3>Example</h3>
      <pre><code>class User {
    public $name;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will initialize objects with constructors.</p>
    `,
    task: "Create a class 'Book' with a public property $title.",
    expectedAnswer: "class Book { public $title; }",
    xpReward: 340
  },
  {
    levelId: "php-011",
    levelName: "Constructors",
    language: "php",
    docs: `
      <h2>Constructors</h2>
      <p><strong>Overview:</strong> Constructors initialize object state.</p>
      <p><strong>Goal:</strong> Assign properties in <code>__construct</code>.</p>
      <p><strong>Why it matters:</strong> Initialization keeps objects consistent.</p>

      <h3>Example</h3>
      <pre><code>class Car {
    public $brand;

    public function __construct($brand) {
        $this->brand = $brand;
    }
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will reuse behavior with inheritance.</p>
    `,
    task: "Write a constructor for class 'Car' that sets $brand.",
    expectedAnswer: "public function __construct($brand) { $this->brand = $brand; }",
    xpReward: 360
  },
  {
    levelId: "php-012",
    levelName: "Inheritance",
    language: "php",
    docs: `
      <h2>Inheritance: Reusing Behavior</h2>
      <p><strong>Overview:</strong> A child class inherits fields and methods from a parent.</p>
      <p><strong>Goal:</strong> Create a class that extends another class.</p>
      <p><strong>Why it matters:</strong> Inheritance reduces repeated code.</p>

      <h3>Example</h3>
      <pre><code>class Animal {
    public function eat() {}
}

class Dog extends Animal {
    public function bark() {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will define interfaces.</p>
    `,
    task: "Create class 'Dog' that extends class 'Animal'.",
    expectedAnswer: "class Dog extends Animal {}",
    xpReward: 380
  },
  {
    levelId: "php-013",
    levelName: "Interfaces",
    language: "php",
    docs: `
      <h2>Interfaces: Contracts</h2>
      <p><strong>Overview:</strong> Interfaces define required methods without implementation.</p>
      <p><strong>Goal:</strong> Declare an interface and implement it.</p>
      <p><strong>Why it matters:</strong> Interfaces keep code flexible and testable.</p>

      <h3>Example</h3>
      <pre><code>interface Drivable {
    public function drive();
}

class Car implements Drivable {
    public function drive() {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle errors with exceptions.</p>
    `,
    task: "Declare an interface named 'Playable' with method play().",
    expectedAnswer: "interface Playable { public function play(); }",
    xpReward: 400
  },
  {
    levelId: "php-014",
    levelName: "Exceptions",
    language: "php",
    docs: `
      <h2>Exceptions: Error Handling</h2>
      <p><strong>Overview:</strong> Exceptions allow handling runtime errors cleanly.</p>
      <p><strong>Goal:</strong> Use <code>try</code> and <code>catch</code>.</p>
      <p><strong>Why it matters:</strong> Web apps must handle failures safely.</p>

      <h3>Example</h3>
      <pre><code>try {
    throw new Exception("Error");
} catch (Exception $e) {
    echo $e->getMessage();
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will read and write files.</p>
    `,
    task: "Write a try/catch that catches Exception $e.",
    expectedAnswer: "try { } catch (Exception $e) { }",
    xpReward: 420
  },
  {
    levelId: "php-015",
    levelName: "File I/O",
    language: "php",
    docs: `
      <h2>File I/O: Saving Data</h2>
      <p><strong>Overview:</strong> PHP can write files using built-in functions.</p>
      <p><strong>Goal:</strong> Write a file using <code>file_put_contents</code>.</p>
      <p><strong>Why it matters:</strong> Files store logs, configs, and exports.</p>

      <h3>Example</h3>
      <pre><code>file_put_contents("data.txt", "Hello");</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate PHP foundation.</p>
    `,
    task: "Write a line that saves 'Hello' to data.txt using file_put_contents.",
    expectedAnswer: "file_put_contents('data.txt', 'Hello');",
    xpReward: 450
  }
];
