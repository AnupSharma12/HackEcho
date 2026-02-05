import { LevelData } from "../levels";

export const CSHARP_LEVELS: LevelData[] = [
  {
    levelId: "csharp-001",
    levelName: "C# Basics",
    language: "csharp",
    docs: `
      <h2>C# Basics: First Program</h2>
      <p><strong>Overview:</strong> C# is a statically typed, object-oriented language used for apps, games, and web services.</p>
      <p><strong>Goal:</strong> Understand the minimal program structure and print output.</p>
      <p><strong>Why it matters:</strong> Every C# app starts in <code>Main</code> and uses the <code>System</code> namespace for common tools.</p>

      <h3>Hello World</h3>
      <pre><code>using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>using System</code> imports the base library.</li>
        <li><code>class Program</code> defines a container for code.</li>
        <li><code>Main</code> is the entry point.</li>
        <li><code>Console.WriteLine</code> prints output.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will declare variables and types.</p>
    `,
    task: "Print 'Hello, C#' to the console.",
    expectedAnswer: "Console.WriteLine(\"Hello, C#\");",
    xpReward: 100
  },
  {
    levelId: "csharp-002",
    levelName: "Variables and Types",
    language: "csharp",
    docs: `
      <h2>Variables and Types</h2>
      <p><strong>Overview:</strong> C# requires explicit types for variables.</p>
      <p><strong>Goal:</strong> Declare variables with correct types.</p>
      <p><strong>Why it matters:</strong> Type safety prevents many runtime errors.</p>

      <h3>Examples</h3>
      <pre><code>string name = "Asha";
int age = 21;
bool isActive = true;</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>string</code> stores text.</li>
        <li><code>int</code> stores whole numbers.</li>
        <li><code>bool</code> stores true/false.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will use operators to compute values.</p>
    `,
    task: "Create a string variable named 'language' with value 'C#'.",
    expectedAnswer: "string language = \"C#\";",
    xpReward: 150
  },
  {
    levelId: "csharp-003",
    levelName: "Operators",
    language: "csharp",
    docs: `
      <h2>Operators: Working with Values</h2>
      <p><strong>Overview:</strong> Operators perform arithmetic and comparisons.</p>
      <p><strong>Goal:</strong> Use arithmetic operators correctly.</p>
      <p><strong>Why it matters:</strong> Most logic depends on comparisons and calculations.</p>

      <h3>Examples</h3>
      <pre><code>int sum = 10 + 5;
int product = 4 * 3;
bool isEqual = (5 == 5);</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>+</code> adds values.</li>
        <li><code>*</code> multiplies values.</li>
        <li><code>==</code> compares values.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will make decisions with conditionals.</p>
    `,
    task: "Store the result of 10 + 5 in variable 'total'.",
    expectedAnswer: "int total = 10 + 5;",
    xpReward: 200
  },
  {
    levelId: "csharp-004",
    levelName: "Conditionals",
    language: "csharp",
    docs: `
      <h2>Conditionals: Decision Making</h2>
      <p><strong>Overview:</strong> Conditionals choose which block runs based on a condition.</p>
      <p><strong>Goal:</strong> Use <code>if</code>, <code>else if</code>, and <code>else</code>.</p>
      <p><strong>Why it matters:</strong> Programs must respond to different inputs.</p>

      <h3>Example</h3>
      <pre><code>int score = 85;
if (score >= 90) {
    Console.WriteLine("A");
} else if (score >= 80) {
    Console.WriteLine("B");
} else {
    Console.WriteLine("C");
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will repeat actions using loops.</p>
    `,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if (num > 0) { Console.WriteLine(\"Positive\"); }",
    xpReward: 220
  },
  {
    levelId: "csharp-005",
    levelName: "Loops",
    language: "csharp",
    docs: `
      <h2>Loops: Repetition</h2>
      <p><strong>Overview:</strong> Loops run code multiple times.</p>
      <p><strong>Goal:</strong> Use a <code>for</code> loop to count.</p>
      <p><strong>Why it matters:</strong> Iteration is common when processing collections.</p>

      <h3>Example</h3>
      <pre><code>for (int i = 1; i <= 3; i++) {
    Console.WriteLine(i);
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will create reusable logic with methods.</p>
    `,
    task: "Write a for loop that prints numbers 1 to 3.",
    expectedAnswer: "for (int i = 1; i <= 3; i++) { Console.WriteLine(i); }",
    xpReward: 240
  },
  {
    levelId: "csharp-006",
    levelName: "Methods",
    language: "csharp",
    docs: `
      <h2>Methods: Reusable Logic</h2>
      <p><strong>Overview:</strong> Methods group steps and return values.</p>
      <p><strong>Goal:</strong> Write a method with parameters and return type.</p>
      <p><strong>Why it matters:</strong> Methods keep code modular and testable.</p>

      <h3>Example</h3>
      <pre><code>static int Add(int a, int b) {
    return a + b;
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>static</code> allows calling without an instance.</li>
        <li><code>int</code> is the return type.</li>
        <li>Parameters define inputs.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will store multiple values in arrays.</p>
    `,
    task: "Create a method 'Square' that returns n * n.",
    expectedAnswer: "static int Square(int n) { return n * n; }",
    xpReward: 260
  },
  {
    levelId: "csharp-007",
    levelName: "Arrays",
    language: "csharp",
    docs: `
      <h2>Arrays: Fixed Collections</h2>
      <p><strong>Overview:</strong> Arrays store a fixed number of values of the same type.</p>
      <p><strong>Goal:</strong> Create an array and access elements by index.</p>
      <p><strong>Why it matters:</strong> Arrays are the base for many data structures.</p>

      <h3>Example</h3>
      <pre><code>int[] nums = {1, 2, 3};
Console.WriteLine(nums[0]);</code></pre>

      <h3>Progression</h3>
      <p>Next you will use List for resizable collections.</p>
    `,
    task: "Create an int array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "int[] nums = {1, 2, 3};",
    xpReward: 280
  },
  {
    levelId: "csharp-008",
    levelName: "Lists",
    language: "csharp",
    docs: `
      <h2>Lists: Dynamic Collections</h2>
      <p><strong>Overview:</strong> <code>List&lt;T&gt;</code> grows as you add items.</p>
      <p><strong>Goal:</strong> Create a list and add values.</p>
      <p><strong>Why it matters:</strong> Real data sizes change at runtime.</p>

      <h3>Example</h3>
      <pre><code>var scores = new List<int>();
    scores.Add(10);</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>List&lt;int&gt;</code> stores integers.</li>
        <li><code>Add</code> appends an element.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will work with strings.</p>
    `,
    task: "Create a List of ints named 'scores'.",
    expectedAnswer: "var scores = new List<int>();",
    xpReward: 300
  },
  {
    levelId: "csharp-009",
    levelName: "Strings",
    language: "csharp",
    docs: `
      <h2>Strings: Text Handling</h2>
      <p><strong>Overview:</strong> Strings are immutable sequences of characters.</p>
      <p><strong>Goal:</strong> Use common string methods.</p>
      <p><strong>Why it matters:</strong> Apps constantly process user input and messages.</p>

      <h3>Example</h3>
      <pre><code>string name = "HackEcho";
int length = name.Length;</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>Length</code> returns character count.</li>
        <li>Strings are immutable; methods return new strings.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will define classes and objects.</p>
    `,
    task: "Create a string variable 'greeting' with value 'Hello'.",
    expectedAnswer: "string greeting = \"Hello\";",
    xpReward: 320
  },
  {
    levelId: "csharp-010",
    levelName: "Classes and Objects",
    language: "csharp",
    docs: `
      <h2>Classes and Objects</h2>
      <p><strong>Overview:</strong> Classes define data and behavior; objects are instances.</p>
      <p><strong>Goal:</strong> Create a class with a field.</p>
      <p><strong>Why it matters:</strong> OOP scales well for larger applications.</p>

      <h3>Example</h3>
      <pre><code>class User {
    public string Name;
}

var user = new User();
user.Name = "Rita";</code></pre>

      <h3>Progression</h3>
      <p>Next you will initialize objects using constructors.</p>
    `,
    task: "Create a class 'Book' with a public string field 'Title'.",
    expectedAnswer: "class Book { public string Title; }",
    xpReward: 340
  },
  {
    levelId: "csharp-011",
    levelName: "Constructors and Properties",
    language: "csharp",
    docs: `
      <h2>Constructors and Properties</h2>
      <p><strong>Overview:</strong> Constructors set initial values; properties control access.</p>
      <p><strong>Goal:</strong> Create a constructor that initializes a property.</p>
      <p><strong>Why it matters:</strong> Encapsulation keeps objects valid and consistent.</p>

      <h3>Example</h3>
      <pre><code>class Car {
    public string Brand { get; }

    public Car(string brand) {
        Brand = brand;
    }
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will reuse code with inheritance.</p>
    `,
    task: "Write a constructor for class 'Car' that sets the string property 'Brand'.",
    expectedAnswer: "public Car(string brand) { Brand = brand; }",
    xpReward: 360
  },
  {
    levelId: "csharp-012",
    levelName: "Inheritance",
    language: "csharp",
    docs: `
      <h2>Inheritance: Reusing Behavior</h2>
      <p><strong>Overview:</strong> A derived class inherits fields and methods from a base class.</p>
      <p><strong>Goal:</strong> Create a class that extends another class.</p>
      <p><strong>Why it matters:</strong> Inheritance reduces duplication.</p>

      <h3>Example</h3>
      <pre><code>class Animal {
    public void Eat() {}
}

class Dog : Animal {
    public void Bark() {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will define contracts with interfaces.</p>
    `,
    task: "Create class 'Dog' that inherits from 'Animal'.",
    expectedAnswer: "class Dog : Animal {}",
    xpReward: 380
  },
  {
    levelId: "csharp-013",
    levelName: "Interfaces",
    language: "csharp",
    docs: `
      <h2>Interfaces: Contracts</h2>
      <p><strong>Overview:</strong> Interfaces define required methods without implementation.</p>
      <p><strong>Goal:</strong> Declare an interface and implement it in a class.</p>
      <p><strong>Why it matters:</strong> Interfaces enable flexible designs and testing.</p>

      <h3>Example</h3>
      <pre><code>interface IDrivable {
    void Drive();
}

class Car : IDrivable {
    public void Drive() {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle runtime errors with exceptions.</p>
    `,
    task: "Declare an interface named 'IPlayable' with method Play().",
    expectedAnswer: "interface IPlayable { void Play(); }",
    xpReward: 400
  },
  {
    levelId: "csharp-014",
    levelName: "Exceptions",
    language: "csharp",
    docs: `
      <h2>Exceptions: Error Handling</h2>
      <p><strong>Overview:</strong> Exceptions let you handle failures safely.</p>
      <p><strong>Goal:</strong> Use <code>try</code> and <code>catch</code>.</p>
      <p><strong>Why it matters:</strong> Robust apps handle invalid input and I/O issues.</p>

      <h3>Example</h3>
      <pre><code>try {
    int result = 10 / 0;
} catch (DivideByZeroException ex) {
    Console.WriteLine("Error");
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will read and write files.</p>
    `,
    task: "Write a try/catch that catches Exception ex.",
    expectedAnswer: "try { } catch (Exception ex) { }",
    xpReward: 420
  },
  {
    levelId: "csharp-015",
    levelName: "File I/O",
    language: "csharp",
    docs: `
      <h2>File I/O: Saving Data</h2>
      <p><strong>Overview:</strong> The <code>System.IO</code> namespace provides file APIs.</p>
      <p><strong>Goal:</strong> Write text to a file using <code>File.WriteAllText</code>.</p>
      <p><strong>Why it matters:</strong> Files store logs, settings, and reports.</p>

      <h3>Example</h3>
      <pre><code>File.WriteAllText("data.txt", "Hello");</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate C# foundation.</p>
    `,
    task: "Write a line that saves 'Hello' to data.txt using File.WriteAllText.",
    expectedAnswer: "File.WriteAllText(\"data.txt\", \"Hello\");",
    xpReward: 450
  }
];
