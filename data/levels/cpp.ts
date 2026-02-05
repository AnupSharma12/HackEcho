import { LevelData } from "../levels";

export const CPP_LEVELS: LevelData[] = [
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
  {
    levelId: "cpp-002",
    levelName: "C++ Data Types",
    language: "cpp",
    docs: `
      <h2>C++ Data Types</h2>
      <p>C++ has several <strong>built-in data types</strong>:</p>
      
      <h3>Fundamental Types</h3>
      <ul>
        <li><code>int</code> - Integer: <code>42</code></li>
        <li><code>double</code> - Floating point: <code>3.14</code></li>
        <li><code>char</code> - Character: <code>'A'</code></li>
        <li><code>bool</code> - Boolean: <code>true</code>, <code>false</code></li>
      </ul>
      
      <h3>Standard Library Types</h3>
      <ul>
        <li><code>string</code> - Text (requires <code>&lt;string&gt;</code>)</li>
        <li><code>vector</code> - Dynamic array</li>
        <li><code>array</code> - Fixed-size array</li>
      </ul>
      
      <h3>Example</h3>
      <pre><code>string username = "Alice";
int score = 100;
bool isWinner = true;</code></pre>
    `,
    task: "Create a string variable called 'language' and assign it the value 'C++'.",
    expectedAnswer: "string language = \"C++\";",
    xpReward: 150
  },
  {
    levelId: "cpp-003",
    levelName: "C++ Functions",
    language: "cpp",
    docs: `
      <h2>C++ Functions</h2>
      <p>Functions encapsulate <strong>reusable code</strong>:</p>
      
      <h3>Function Declaration</h3>
      <pre><code>int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    cout &lt;&lt; result &lt;&lt; endl; // 8
    return 0;
}</code></pre>
      
      <h3>Function Components</h3>
      <ul>
        <li><code>int</code> - Return type</li>
        <li><code>add</code> - Function name</li>
        <li><code>(int a, int b)</code> - Parameters</li>
        <li><code>return</code> - Return statement</li>
      </ul>
      
      <h3>Void Functions</h3>
      <pre><code>void greet() {
    cout &lt;&lt; "Hello!" &lt;&lt; endl;
}</code></pre>
    `,
    task: "Write a function called 'multiply' that takes two int parameters and returns their product.",
    expectedAnswer: "int multiply(int a, int b) { return a * b; }",
    xpReward: 200
  }
];
