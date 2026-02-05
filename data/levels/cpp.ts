import { LevelData } from "../levels";

export const CPP_LEVELS: LevelData[] = [
  {
    levelId: "cpp-001",
    levelName: "C++ Basics",
    language: "cpp",
    docs: `
      <h2>C++ Basics: First Program</h2>
      <p><strong>Overview:</strong> C++ is a compiled, high-performance language with manual control.</p>
      <p><strong>Goal:</strong> Understand the minimal program structure and print output.</p>
      <p><strong>Why it matters:</strong> Every C++ app starts with <code>main()</code>.</p>

      <h3>Hello World</h3>
      <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>#include &lt;iostream&gt;</code> enables console I/O.</li>
        <li><code>cout</code> writes to the terminal.</li>
        <li><code>endl</code> ends the line.</li>
      </ul>

      <h3>Variables Preview</h3>
      <pre><code>string name = "HackEcho";
int age = 25;
bool isActive = true;</code></pre>

      <h3>Progression</h3>
      <p>Next you will learn C++ data types.</p>
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
      <h2>Data Types: Fundamental and STL</h2>
      <p><strong>Overview:</strong> C++ has built-in types and standard library types.</p>
      <p><strong>Goal:</strong> Declare variables with correct types.</p>
      <p><strong>Why it matters:</strong> The compiler enforces type correctness.</p>

      <h3>Fundamental Types</h3>
      <ul>
        <li><code>int</code> for integers</li>
        <li><code>double</code> for decimals</li>
        <li><code>char</code> for single characters</li>
        <li><code>bool</code> for true/false</li>
      </ul>

      <h3>Standard Library Types</h3>
      <ul>
        <li><code>string</code> from <code>&lt;string&gt;</code></li>
        <li><code>vector</code> from <code>&lt;vector&gt;</code></li>
      </ul>

      <h3>Example</h3>
      <pre><code>string username = "Alice";
int score = 100;
bool isWinner = true;</code></pre>

      <h3>Progression</h3>
      <p>Next you will write functions to reuse logic.</p>
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
      <h2>Functions: Reusable Code</h2>
      <p><strong>Overview:</strong> Functions group steps and return results.</p>
      <p><strong>Goal:</strong> Write a function with parameters and a return value.</p>
      <p><strong>Why it matters:</strong> Functions make code reusable and readable.</p>

      <h3>Function Example</h3>
      <pre><code>int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    cout &lt;&lt; result &lt;&lt; endl;
    return 0;
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>int</code> before the name is the return type.</li>
        <li>Parameters define inputs.</li>
        <li><code>return</code> sends the result back.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will control program flow with conditionals.</p>
    `,
    task: "Write a function called 'multiply' that takes two int parameters and returns their product.",
    expectedAnswer: "int multiply(int a, int b) { return a * b; }",
    xpReward: 200
  },
  {
    levelId: "cpp-004",
    levelName: "Conditionals",
    language: "cpp",
    docs: `
      <h2>Conditionals: Branching Logic</h2>
      <p><strong>Overview:</strong> Conditionals choose which block runs.</p>
      <p><strong>Goal:</strong> Use <code>if</code> and <code>else</code> correctly.</p>
      <p><strong>Why it matters:</strong> Programs must respond to different inputs.</p>

      <h3>Example</h3>
      <pre><code>int num = 5;
if (num > 0) {
    cout &lt;&lt; "Positive" &lt;&lt; endl;
} else {
    cout &lt;&lt; "Not positive" &lt;&lt; endl;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will repeat actions with loops.</p>
    `,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if (num > 0) { cout << \"Positive\" << endl; }",
    xpReward: 220
  },
  {
    levelId: "cpp-005",
    levelName: "Loops",
    language: "cpp",
    docs: `
      <h2>Loops: Repetition</h2>
      <p><strong>Overview:</strong> Loops run code multiple times.</p>
      <p><strong>Goal:</strong> Use a <code>for</code> loop for predictable iteration.</p>
      <p><strong>Why it matters:</strong> Most tasks involve processing many items.</p>

      <h3>For Loop</h3>
      <pre><code>for (int i = 1; i <= 3; i++) {
    cout &lt;&lt; i &lt;&lt; endl;
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will store multiple values with arrays.</p>
    `,
    task: "Write a for loop that prints numbers 1 to 3.",
    expectedAnswer: "for (int i = 1; i <= 3; i++) { cout << i << endl; }",
    xpReward: 240
  },
  {
    levelId: "cpp-006",
    levelName: "Arrays",
    language: "cpp",
    docs: `
      <h2>Arrays: Fixed-Size Storage</h2>
      <p><strong>Overview:</strong> Arrays store a fixed number of same-type values.</p>
      <p><strong>Goal:</strong> Declare arrays and access by index.</p>
      <p><strong>Why it matters:</strong> Arrays are the base of many data structures.</p>

      <h3>Example</h3>
      <pre><code>int nums[3] = {1, 2, 3};
cout &lt;&lt; nums[0] &lt;&lt; endl;</code></pre>

      <h3>Progression</h3>
      <p>Next you will use vectors for resizable arrays.</p>
    `,
    task: "Create an int array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "int nums[3] = {1, 2, 3};",
    xpReward: 260
  },
  {
    levelId: "cpp-007",
    levelName: "Vectors",
    language: "cpp",
    docs: `
      <h2>Vectors: Dynamic Arrays</h2>
      <p><strong>Overview:</strong> Vectors grow as you add items.</p>
      <p><strong>Goal:</strong> Create a vector and push elements.</p>
      <p><strong>Why it matters:</strong> Real data sizes often change at runtime.</p>

      <h3>Example</h3>
      <pre><code>vector<int> scores;
scores.push_back(10);</code></pre>

      <h3>Progression</h3>
      <p>Next you will work with C++ strings.</p>
    `,
    task: "Create a vector of ints named 'scores'.",
    expectedAnswer: "vector<int> scores;",
    xpReward: 280
  },
  {
    levelId: "cpp-008",
    levelName: "Strings",
    language: "cpp",
    docs: `
      <h2>Strings: Text Handling</h2>
      <p><strong>Overview:</strong> <code>string</code> stores text with useful methods.</p>
      <p><strong>Goal:</strong> Create strings and access length.</p>
      <p><strong>Why it matters:</strong> Most programs handle user input or messages.</p>

      <h3>Example</h3>
      <pre><code>string name = "HackEcho";
cout &lt;&lt; name.size() &lt;&lt; endl;</code></pre>

      <h3>Progression</h3>
      <p>Next you will explore pointers for memory access.</p>
    `,
    task: "Create a string variable named 'greeting' with value 'Hello'.",
    expectedAnswer: "string greeting = \"Hello\";",
    xpReward: 300
  },
  {
    levelId: "cpp-009",
    levelName: "Pointers",
    language: "cpp",
    docs: `
      <h2>Pointers: Memory Addresses</h2>
      <p><strong>Overview:</strong> Pointers store addresses of variables.</p>
      <p><strong>Goal:</strong> Declare and use a pointer.</p>
      <p><strong>Why it matters:</strong> Pointers enable low-level control and performance.</p>

      <h3>Example</h3>
      <pre><code>int value = 10;
int* ptr = &value;</code></pre>

      <h3>Progression</h3>
      <p>Next you will use references for safer aliasing.</p>
    `,
    task: "Declare an int pointer named 'ptr'.",
    expectedAnswer: "int* ptr;",
    xpReward: 320
  },
  {
    levelId: "cpp-010",
    levelName: "References",
    language: "cpp",
    docs: `
      <h2>References: Aliases</h2>
      <p><strong>Overview:</strong> References are alternate names for variables.</p>
      <p><strong>Goal:</strong> Bind a reference to an existing variable.</p>
      <p><strong>Why it matters:</strong> References simplify function signatures.</p>

      <h3>Example</h3>
      <pre><code>int x = 5;
int& ref = x;</code></pre>

      <h3>Progression</h3>
      <p>Next you will group data with structs.</p>
    `,
    task: "Create a reference 'ref' to an int variable 'x'.",
    expectedAnswer: "int& ref = x;",
    xpReward: 340
  },
  {
    levelId: "cpp-011",
    levelName: "Structs",
    language: "cpp",
    docs: `
      <h2>Structs: Grouped Data</h2>
      <p><strong>Overview:</strong> Structs bundle related fields in one type.</p>
      <p><strong>Goal:</strong> Define a struct with multiple fields.</p>
      <p><strong>Why it matters:</strong> Structs model real-world objects simply.</p>

      <h3>Example</h3>
      <pre><code>struct User {
    string name;
    int age;
};</code></pre>

      <h3>Progression</h3>
      <p>Next you will learn classes and constructors.</p>
    `,
    task: "Create a struct named 'Point' with int fields x and y.",
    expectedAnswer: "struct Point { int x; int y; };",
    xpReward: 360
  },
  {
    levelId: "cpp-012",
    levelName: "Classes and Constructors",
    language: "cpp",
    docs: `
      <h2>Classes and Constructors</h2>
      <p><strong>Overview:</strong> Classes add access control and methods.</p>
      <p><strong>Goal:</strong> Create a class with public data.</p>
      <p><strong>Why it matters:</strong> Classes are the foundation of OOP in C++.</p>

      <h3>Example</h3>
      <pre><code>class Car {
public:
    string brand;
    Car(string b) : brand(b) {}
};</code></pre>

      <h3>Progression</h3>
      <p>Next you will reuse logic with inheritance.</p>
    `,
    task: "Write a class 'Car' with a public string field 'brand'.",
    expectedAnswer: "class Car { public: string brand; };",
    xpReward: 380
  },
  {
    levelId: "cpp-013",
    levelName: "Inheritance",
    language: "cpp",
    docs: `
      <h2>Inheritance: Extending Types</h2>
      <p><strong>Overview:</strong> A derived class extends a base class.</p>
      <p><strong>Goal:</strong> Inherit behavior with <code>public</code> inheritance.</p>
      <p><strong>Why it matters:</strong> Inheritance reduces duplication.</p>

      <h3>Example</h3>
      <pre><code>class Animal {
public:
    void eat() {}
};

class Dog : public Animal {
public:
    void bark() {}
};</code></pre>

      <h3>Progression</h3>
      <p>Next you will use STL algorithms to process data.</p>
    `,
    task: "Create a class 'Dog' that inherits from 'Animal'.",
    expectedAnswer: "class Dog : public Animal {};",
    xpReward: 400
  },
  {
    levelId: "cpp-014",
    levelName: "STL Algorithms",
    language: "cpp",
    docs: `
      <h2>STL Algorithms: Sorting</h2>
      <p><strong>Overview:</strong> STL provides efficient algorithms like <code>sort</code>.</p>
      <p><strong>Goal:</strong> Sort a vector using iterators.</p>
      <p><strong>Why it matters:</strong> Algorithms save you from rewriting common logic.</p>

      <h3>Example</h3>
      <pre><code>vector<int> nums = {3, 1, 2};
sort(nums.begin(), nums.end());</code></pre>

      <h3>Progression</h3>
      <p>Next you will save data using file I/O.</p>
    `,
    task: "Write a line that sorts vector 'nums'.",
    expectedAnswer: "sort(nums.begin(), nums.end());",
    xpReward: 420
  },
  {
    levelId: "cpp-015",
    levelName: "File I/O",
    language: "cpp",
    docs: `
      <h2>File I/O: Saving Data</h2>
      <p><strong>Overview:</strong> Files allow data to persist beyond program runtime.</p>
      <p><strong>Goal:</strong> Open a file for output using <code>ofstream</code>.</p>
      <p><strong>Why it matters:</strong> Real programs store logs, settings, and results.</p>

      <h3>Example</h3>
      <pre><code>ofstream out("data.txt");
out &lt;&lt; "Hello";</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate C++ foundation.</p>
    `,
    task: "Create an ofstream named 'out' that opens 'data.txt'.",
    expectedAnswer: "ofstream out(\"data.txt\");",
    xpReward: 450
  }
];
