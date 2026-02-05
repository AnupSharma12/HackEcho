import { LevelData } from "../levels";

export const JAVA_LEVELS: LevelData[] = [
  {
    levelId: "java-001",
    levelName: "Java Basics",
    language: "java",
    docs: `
      <h2>Java Basics: First Steps</h2>
      <p><strong>Overview:</strong> Java is a statically typed, object-oriented language that runs on the JVM.</p>
      <p><strong>Goal:</strong> Understand the structure of a Java program and print output.</p>
      <p><strong>Why it matters:</strong> Every Java app starts with a class and a <code>main</code> method.</p>

      <h3>Hello World</h3>
      <pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>class Main</code> defines the program container.</li>
        <li><code>public static void main</code> is the entry point.</li>
        <li><code>System.out.println</code> prints to the console.</li>
      </ul>

      <h3>Variables Preview</h3>
      <pre><code>String name = "HackEcho";
int age = 25;
boolean isActive = true;</code></pre>

      <h3>Progression</h3>
      <p>Next you will learn how Java types work in detail.</p>
    `,
    task: "Write a Java statement that prints 'Hello, HackEcho!' to the console.",
    expectedAnswer: "System.out.println(\"Hello, HackEcho!\");",
    xpReward: 100
  },
  {
    levelId: "java-002",
    levelName: "Java Data Types",
    language: "java",
    docs: `
      <h2>Data Types: Primitives and Objects</h2>
      <p><strong>Overview:</strong> Java separates primitive values from reference (object) types.</p>
      <p><strong>Goal:</strong> Declare variables using the correct types.</p>
      <p><strong>Why it matters:</strong> Type correctness is enforced by the compiler.</p>

      <h3>Primitive Types</h3>
      <ul>
        <li><code>int</code> for whole numbers</li>
        <li><code>double</code> for decimals</li>
        <li><code>boolean</code> for true/false</li>
        <li><code>char</code> for a single character</li>
      </ul>

      <h3>Reference Types</h3>
      <ul>
        <li><code>String</code> for text</li>
        <li>Arrays and custom objects</li>
      </ul>

      <h3>Example</h3>
      <pre><code>String username = "Alice";
int score = 100;
boolean isWinner = true;</code></pre>

      <h3>Common Mistakes</h3>
      <ul>
        <li>Using <code>String</code> for numeric values.</li>
        <li>Forgetting <code>""</code> around text.</li>
        <li>Mixing <code>char</code> and <code>String</code>.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will build reusable logic with methods.</p>
    `,
    task: "Create a String variable called 'language' and assign it the value 'Java'.",
    expectedAnswer: "String language = \"Java\";",
    xpReward: 150
  },
  {
    levelId: "java-003",
    levelName: "Java Methods",
    language: "java",
    docs: `
      <h2>Methods: Reusable Logic</h2>
      <p><strong>Overview:</strong> Methods group steps so you can call them many times.</p>
      <p><strong>Goal:</strong> Write a method with parameters and a return value.</p>
      <p><strong>Why it matters:</strong> Methods keep code organized and testable.</p>

      <h3>Method Example</h3>
      <pre><code>public static int add(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int result = add(5, 3);
    System.out.println(result);
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>public</code> controls access.</li>
        <li><code>static</code> means class-level method.</li>
        <li><code>int</code> is the return type.</li>
        <li>Parameters define inputs.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will control program flow with conditionals.</p>
    `,
    task: "Write a method called 'multiply' that takes two int parameters and returns their product.",
    expectedAnswer: "public static int multiply(int a, int b) { return a * b; }",
    xpReward: 200
  },
  {
    levelId: "java-004",
    levelName: "Conditionals",
    language: "java",
    docs: `
      <h2>Conditionals: Making Decisions</h2>
      <p><strong>Overview:</strong> Conditional logic chooses which block runs.</p>
      <p><strong>Goal:</strong> Use <code>if</code>, <code>else if</code>, and <code>else</code>.</p>
      <p><strong>Why it matters:</strong> Programs must respond to different inputs.</p>

      <h3>Example</h3>
      <pre><code>int age = 18;
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li>Conditions go inside parentheses.</li>
        <li>Blocks use curly braces.</li>
        <li><code>else if</code> adds extra branches.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will repeat actions with loops.</p>
    `,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if (num > 0) { System.out.println(\"Positive\"); }",
    xpReward: 220
  },
  {
    levelId: "java-005",
    levelName: "Loops",
    language: "java",
    docs: `
      <h2>Loops: Repeating Work</h2>
      <p><strong>Overview:</strong> Loops execute code multiple times.</p>
      <p><strong>Goal:</strong> Use a <code>for</code> loop to iterate predictable ranges.</p>
      <p><strong>Why it matters:</strong> You often process lists or repeated steps.</p>

      <h3>For Loop Example</h3>
      <pre><code>for (int i = 1; i <= 3; i++) {
    System.out.println(i);
}</code></pre>

      <h3>While Loop Example</h3>
      <pre><code>int count = 0;
while (count < 3) {
    count++;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will store many values using arrays.</p>
    `,
    task: "Write a for loop that prints numbers 1 to 3.",
    expectedAnswer: "for (int i = 1; i <= 3; i++) { System.out.println(i); }",
    xpReward: 240
  },
  {
    levelId: "java-006",
    levelName: "Arrays",
    language: "java",
    docs: `
      <h2>Arrays: Fixed Collections</h2>
      <p><strong>Overview:</strong> Arrays store multiple values of the same type.</p>
      <p><strong>Goal:</strong> Create arrays and access elements by index.</p>
      <p><strong>Why it matters:</strong> Arrays are the base of many data structures.</p>

      <h3>Example</h3>
      <pre><code>int[] scores = {10, 20, 30};
System.out.println(scores[0]);</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li>Indexes start at 0.</li>
        <li>Array length is fixed at creation.</li>
        <li>Use <code>scores.length</code> for size.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will work with Java strings.</p>
    `,
    task: "Create an int array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "int[] nums = {1, 2, 3};",
    xpReward: 260
  },
  {
    levelId: "java-007",
    levelName: "Strings",
    language: "java",
    docs: `
      <h2>Strings: Working with Text</h2>
      <p><strong>Overview:</strong> <code>String</code> is an object that stores text.</p>
      <p><strong>Goal:</strong> Create strings and use common methods.</p>
      <p><strong>Why it matters:</strong> Most apps process user input or messages.</p>

      <h3>Example</h3>
      <pre><code>String name = "HackEcho";
System.out.println(name.length());</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>length()</code> returns number of characters.</li>
        <li><code>toUpperCase()</code> changes case.</li>
        <li><code>substring()</code> extracts a range.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will build your own classes and objects.</p>
    `,
    task: "Create a String variable 'greeting' with value 'Hello'.",
    expectedAnswer: "String greeting = \"Hello\";",
    xpReward: 280
  },
  {
    levelId: "java-008",
    levelName: "Classes and Objects",
    language: "java",
    docs: `
      <h2>Classes and Objects</h2>
      <p><strong>Overview:</strong> A class defines data and behavior; objects are instances.</p>
      <p><strong>Goal:</strong> Create a class and instantiate it.</p>
      <p><strong>Why it matters:</strong> OOP organizes complex programs.</p>

      <h3>Example</h3>
      <pre><code>class User {
    String name;
}

User user = new User();
user.name = "Rita";</code></pre>

      <h3>Progression</h3>
      <p>Next you will initialize objects using constructors.</p>
    `,
    task: "Create a class 'Book' with a String field named 'title'.",
    expectedAnswer: "class Book { String title; }",
    xpReward: 300
  },
  {
    levelId: "java-009",
    levelName: "Constructors",
    language: "java",
    docs: `
      <h2>Constructors: Object Initialization</h2>
      <p><strong>Overview:</strong> Constructors run when you create an object.</p>
      <p><strong>Goal:</strong> Assign fields at construction time.</p>
      <p><strong>Why it matters:</strong> Constructors keep objects in valid state.</p>

      <h3>Example</h3>
      <pre><code>class User {
    String name;

    User(String name) {
        this.name = name;
    }
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li>Constructor name matches class name.</li>
        <li><code>this</code> refers to the current object.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will protect fields using encapsulation.</p>
    `,
    task: "Write a constructor for class 'Car' that sets the String field 'brand'.",
    expectedAnswer: "Car(String brand) { this.brand = brand; }",
    xpReward: 320
  },
  {
    levelId: "java-010",
    levelName: "Encapsulation",
    language: "java",
    docs: `
      <h2>Encapsulation: Hiding Data</h2>
      <p><strong>Overview:</strong> Encapsulation keeps fields private and exposes safe methods.</p>
      <p><strong>Goal:</strong> Use <code>private</code> fields with public getters/setters.</p>
      <p><strong>Why it matters:</strong> It prevents invalid or inconsistent state.</p>

      <h3>Example</h3>
      <pre><code>class Account {
    private double balance;

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will extend classes with inheritance.</p>
    `,
    task: "Create a private int field named 'age'.",
    expectedAnswer: "private int age;",
    xpReward: 340
  },
  {
    levelId: "java-011",
    levelName: "Inheritance",
    language: "java",
    docs: `
      <h2>Inheritance: Reusing Behavior</h2>
      <p><strong>Overview:</strong> A subclass inherits fields and methods from a parent class.</p>
      <p><strong>Goal:</strong> Create a class that extends another class.</p>
      <p><strong>Why it matters:</strong> Inheritance helps you share logic across related types.</p>

      <h3>Example</h3>
      <pre><code>class Animal {
    void eat() {}
}

class Dog extends Animal {
    void bark() {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will use interfaces for shared capabilities.</p>
    `,
    task: "Create class 'Dog' that extends class 'Animal'.",
    expectedAnswer: "class Dog extends Animal {}",
    xpReward: 360
  },
  {
    levelId: "java-012",
    levelName: "Interfaces",
    language: "java",
    docs: `
      <h2>Interfaces: Shared Contracts</h2>
      <p><strong>Overview:</strong> Interfaces define behaviors without implementation.</p>
      <p><strong>Goal:</strong> Declare an interface and implement it in a class.</p>
      <p><strong>Why it matters:</strong> Interfaces allow flexible, modular designs.</p>

      <h3>Example</h3>
      <pre><code>interface Drivable {
    void drive();
}

class Car implements Drivable {
    public void drive() {}
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will work with resizable collections using ArrayList.</p>
    `,
    task: "Declare an interface named 'Playable' with a method void play().",
    expectedAnswer: "interface Playable { void play(); }",
    xpReward: 380
  },
  {
    levelId: "java-013",
    levelName: "ArrayList",
    language: "java",
    docs: `
      <h2>ArrayList: Dynamic Lists</h2>
      <p><strong>Overview:</strong> <code>ArrayList</code> grows as you add items.</p>
      <p><strong>Goal:</strong> Create a list and add items to it.</p>
      <p><strong>Why it matters:</strong> Real data sizes change during runtime.</p>

      <h3>Example</h3>
      <pre><code>ArrayList<String> names = new ArrayList<>();
names.add("Asha");</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>ArrayList&lt;String&gt;</code> stores text.</li>
        <li><code>add</code> appends items.</li>
        <li><code>get</code> retrieves by index.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will store key-value data with HashMap.</p>
    `,
    task: "Create an ArrayList of Integers named 'scores'.",
    expectedAnswer: "ArrayList<Integer> scores = new ArrayList<>();",
    xpReward: 400
  },
  {
    levelId: "java-014",
    levelName: "HashMap",
    language: "java",
    docs: `
      <h2>HashMap: Key-Value Storage</h2>
      <p><strong>Overview:</strong> A <code>HashMap</code> maps keys to values.</p>
      <p><strong>Goal:</strong> Create a map with typed keys and values.</p>
      <p><strong>Why it matters:</strong> You often look up data by ID or name.</p>

      <h3>Example</h3>
      <pre><code>HashMap<String, Integer> ages = new HashMap<>();
ages.put("Rita", 20);</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle errors and work with files.</p>
    `,
    task: "Create a HashMap named 'prices' with String keys and Double values.",
    expectedAnswer: "HashMap<String, Double> prices = new HashMap<>();",
    xpReward: 420
  },
  {
    levelId: "java-015",
    levelName: "Exceptions and Files",
    language: "java",
    docs: `
      <h2>Exceptions and Files</h2>
      <p><strong>Overview:</strong> Exceptions let you handle errors; files store data.</p>
      <p><strong>Goal:</strong> Use <code>try/catch</code> and create a <code>File</code> object.</p>
      <p><strong>Why it matters:</strong> Programs must fail safely and persist data.</p>

      <h3>Try/Catch Example</h3>
      <pre><code>try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error");
}</code></pre>

      <h3>File Example</h3>
      <pre><code>File file = new File("data.txt");</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate Java foundation.</p>
    `,
    task: "Write a try/catch that catches Exception e.",
    expectedAnswer: "try { } catch (Exception e) { }",
    xpReward: 450
  }
];
