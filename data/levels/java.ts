import { LevelData } from "../levels";

export const JAVA_LEVELS: LevelData[] = [
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
    task: "Write a Java statement that prints 'Hello, HackEcho!' to the console.",
    expectedAnswer: "System.out.println(\"Hello, HackEcho!\");",
    xpReward: 100
  },
  {
    levelId: "java-002",
    levelName: "Java Data Types",
    language: "java",
    docs: `
      <h2>Java Data Types</h2>
      <p>Java has <strong>primitive</strong> and <strong>reference</strong> types:</p>
      
      <h3>Primitive Types</h3>
      <ul>
        <li><code>int</code> - Integers: <code>42</code></li>
        <li><code>double</code> - Decimals: <code>3.14</code></li>
        <li><code>boolean</code> - True/false: <code>true</code>, <code>false</code></li>
        <li><code>char</code> - Single character: <code>'A'</code></li>
      </ul>
      
      <h3>Reference Types</h3>
      <ul>
        <li><code>String</code> - Text: <code>"Hello"</code></li>
        <li><code>Arrays</code> - Collections</li>
        <li><code>Objects</code> - Custom types</li>
      </ul>
      
      <h3>Example</h3>
      <pre><code>String username = "Alice";
int score = 100;
boolean isWinner = true;</code></pre>
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
      <h2>Java Methods</h2>
      <p>Methods define <strong>reusable blocks of code</strong>:</p>
      
      <h3>Method Declaration</h3>
      <pre><code>public static int add(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int result = add(5, 3);
    System.out.println(result); // 8
}</code></pre>
      
      <h3>Method Components</h3>
      <ul>
        <li><code>public</code> - Access modifier</li>
        <li><code>static</code> - Class-level method</li>
        <li><code>int</code> - Return type</li>
        <li><code>add</code> - Method name</li>
        <li><code>(int a, int b)</code> - Parameters</li>
      </ul>
    `,
    task: "Write a method called 'multiply' that takes two int parameters and returns their product.",
    expectedAnswer: "public static int multiply(int a, int b) { return a * b; }",
    xpReward: 200
  }
];
