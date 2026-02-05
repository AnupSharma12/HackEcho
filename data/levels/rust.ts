import { LevelData } from "../levels";

export const RUST_LEVELS: LevelData[] = [
  {
    levelId: "rust-001",
    levelName: "Rust Basics",
    language: "rust",
    docs: `
      <h2>Rust Basics: First Program</h2>
      <p><strong>Overview:</strong> Rust is a compiled language focused on safety and performance.</p>
      <p><strong>Goal:</strong> Run a basic program and print output.</p>
      <p><strong>Why it matters:</strong> Every Rust app starts in <code>fn main()</code>.</p>

      <h3>Hello World</h3>
      <pre><code>fn main() {
    println!("Hello, World!");
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>fn main()</code> is the entry point.</li>
        <li><code>println!</code> is a macro that prints a line.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will declare variables and types.</p>
    `,
    task: "Print 'Hello, Rust!' to the console.",
    expectedAnswer: "println!(\"Hello, Rust!\");",
    xpReward: 100
  },
  {
    levelId: "rust-002",
    levelName: "Variables and Mutability",
    language: "rust",
    docs: `
      <h2>Variables and Mutability</h2>
      <p><strong>Overview:</strong> Variables are immutable by default in Rust.</p>
      <p><strong>Goal:</strong> Declare immutable and mutable variables.</p>
      <p><strong>Why it matters:</strong> Immutability prevents many bugs.</p>

      <h3>Examples</h3>
      <pre><code>let name = "Asha";
let mut count = 0;
count += 1;</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>let</code> creates a variable.</li>
        <li><code>mut</code> allows changes.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will use Rust data types.</p>
    `,
    task: "Create a mutable integer variable named 'score' with value 10.",
    expectedAnswer: "let mut score = 10;",
    xpReward: 150
  },
  {
    levelId: "rust-003",
    levelName: "Data Types",
    language: "rust",
    docs: `
      <h2>Data Types</h2>
      <p><strong>Overview:</strong> Rust has explicit types and strong checking.</p>
      <p><strong>Goal:</strong> Use common scalar types.</p>
      <p><strong>Why it matters:</strong> Correct types avoid runtime surprises.</p>

      <h3>Examples</h3>
      <pre><code>let age: i32 = 21;
let price: f64 = 9.99;
let is_active: bool = true;
let letter: char = 'A';</code></pre>

      <h3>Progression</h3>
      <p>Next you will use operators and expressions.</p>
    `,
    task: "Create a boolean variable named 'is_online' with value true.",
    expectedAnswer: "let is_online = true;",
    xpReward: 200
  },
  {
    levelId: "rust-004",
    levelName: "Operators and Expressions",
    language: "rust",
    docs: `
      <h2>Operators and Expressions</h2>
      <p><strong>Overview:</strong> Rust uses expressions that return values.</p>
      <p><strong>Goal:</strong> Use arithmetic and comparison operators.</p>
      <p><strong>Why it matters:</strong> Expressions are the foundation of Rust control flow.</p>

      <h3>Examples</h3>
      <pre><code>let sum = 10 + 5;
let is_equal = 5 == 5;</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li>Most Rust constructs return values.</li>
        <li>Booleans are lowercase <code>true</code> and <code>false</code>.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will branch using if expressions.</p>
    `,
    task: "Store the result of 10 + 5 in variable 'total'.",
    expectedAnswer: "let total = 10 + 5;",
    xpReward: 220
  },
  {
    levelId: "rust-005",
    levelName: "Conditionals",
    language: "rust",
    docs: `
      <h2>Conditionals: if Expressions</h2>
      <p><strong>Overview:</strong> <code>if</code> is an expression in Rust.</p>
      <p><strong>Goal:</strong> Write a basic if/else block.</p>
      <p><strong>Why it matters:</strong> Branching logic is essential for decisions.</p>

      <h3>Example</h3>
      <pre><code>let num = 5;
if num > 0 {
    println!("Positive");
} else {
    println!("Not positive");
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will repeat actions with loops.</p>
    `,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if num > 0 { println!(\"Positive\"); }",
    xpReward: 240
  },
  {
    levelId: "rust-006",
    levelName: "Loops",
    language: "rust",
    docs: `
      <h2>Loops: Repetition</h2>
      <p><strong>Overview:</strong> Rust offers <code>loop</code>, <code>while</code>, and <code>for</code>.</p>
      <p><strong>Goal:</strong> Use a <code>for</code> loop with a range.</p>
      <p><strong>Why it matters:</strong> Iteration is common in data processing.</p>

      <h3>Example</h3>
      <pre><code>for i in 1..=3 {
    println!("{}", i);
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will define reusable functions.</p>
    `,
    task: "Write a for loop that prints numbers 1 to 3.",
    expectedAnswer: "for i in 1..=3 { println!(\"{}\", i); }",
    xpReward: 260
  },
  {
    levelId: "rust-007",
    levelName: "Functions",
    language: "rust",
    docs: `
      <h2>Functions: Reusable Logic</h2>
      <p><strong>Overview:</strong> Functions in Rust have explicit parameter and return types.</p>
      <p><strong>Goal:</strong> Define a function that returns a value.</p>
      <p><strong>Why it matters:</strong> Functions keep code modular and testable.</p>

      <h3>Example</h3>
      <pre><code>fn add(a: i32, b: i32) -> i32 {
    a + b
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>-> i32</code> declares the return type.</li>
        <li>The last expression is returned without <code>return</code>.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will store grouped data in arrays and tuples.</p>
    `,
    task: "Create a function 'square' that returns n * n.",
    expectedAnswer: "fn square(n: i32) -> i32 { n * n }",
    xpReward: 280
  },
  {
    levelId: "rust-008",
    levelName: "Arrays and Tuples",
    language: "rust",
    docs: `
      <h2>Arrays and Tuples</h2>
      <p><strong>Overview:</strong> Arrays are fixed size; tuples group mixed types.</p>
      <p><strong>Goal:</strong> Create an array and a tuple.</p>
      <p><strong>Why it matters:</strong> These structures model simple data efficiently.</p>

      <h3>Examples</h3>
      <pre><code>let nums = [1, 2, 3];
let point = (10, 20);</code></pre>

      <h3>Progression</h3>
      <p>Next you will use vectors for dynamic collections.</p>
    `,
    task: "Create an array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "let nums = [1, 2, 3];",
    xpReward: 300
  },
  {
    levelId: "rust-009",
    levelName: "Vectors",
    language: "rust",
    docs: `
      <h2>Vectors: Dynamic Collections</h2>
      <p><strong>Overview:</strong> <code>Vec&lt;T&gt;</code> grows at runtime.</p>
      <p><strong>Goal:</strong> Create a vector and push values.</p>
      <p><strong>Why it matters:</strong> Dynamic collections are common in real apps.</p>

      <h3>Example</h3>
      <pre><code>let mut scores = Vec::new();
    scores.push(10);</code></pre>

      <h3>Progression</h3>
      <p>Next you will build custom types with structs.</p>
    `,
    task: "Create a mutable vector of ints named 'scores'.",
    expectedAnswer: "let mut scores: Vec<i32> = Vec::new();",
    xpReward: 320
  },
  {
    levelId: "rust-010",
    levelName: "Structs",
    language: "rust",
    docs: `
      <h2>Structs: Custom Types</h2>
      <p><strong>Overview:</strong> Structs bundle related fields into one type.</p>
      <p><strong>Goal:</strong> Define a struct with named fields.</p>
      <p><strong>Why it matters:</strong> Structs model real-world entities.</p>

      <h3>Example</h3>
      <pre><code>struct User {
    name: String,
    age: i32,
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will use enums and pattern matching.</p>
    `,
    task: "Create a struct named 'Book' with a String field 'title'.",
    expectedAnswer: "struct Book { title: String }",
    xpReward: 340
  },
  {
    levelId: "rust-011",
    levelName: "Enums and Match",
    language: "rust",
    docs: `
      <h2>Enums and Match</h2>
      <p><strong>Overview:</strong> Enums define a type with multiple variants.</p>
      <p><strong>Goal:</strong> Create an enum and match on its value.</p>
      <p><strong>Why it matters:</strong> Enums encode state safely and clearly.</p>

      <h3>Example</h3>
      <pre><code>enum Status {
    Active,
    Inactive,
}

let status = Status::Active;
match status {
    Status::Active => println!("Active"),
    Status::Inactive => println!("Inactive"),
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will learn ownership and borrowing.</p>
    `,
    task: "Declare an enum named 'State' with variants On and Off.",
    expectedAnswer: "enum State { On, Off }",
    xpReward: 360
  },
  {
    levelId: "rust-012",
    levelName: "Ownership and Borrowing",
    language: "rust",
    docs: `
      <h2>Ownership and Borrowing</h2>
      <p><strong>Overview:</strong> Rust enforces ownership rules to prevent memory bugs.</p>
      <p><strong>Goal:</strong> Borrow a value with a reference.</p>
      <p><strong>Why it matters:</strong> Ownership is the core of Rust safety.</p>

      <h3>Example</h3>
      <pre><code>fn print_len(s: &String) {
    println!("{}", s.len());
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>&</code> creates a reference (borrow).</li>
        <li>Borrowing avoids moving ownership.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will define shared behavior with traits.</p>
    `,
    task: "Write a function that takes a &String parameter named s.",
    expectedAnswer: "fn show(s: &String) { }",
    xpReward: 380
  },
  {
    levelId: "rust-013",
    levelName: "Traits",
    language: "rust",
    docs: `
      <h2>Traits: Shared Behavior</h2>
      <p><strong>Overview:</strong> Traits define shared methods across types.</p>
      <p><strong>Goal:</strong> Declare a simple trait.</p>
      <p><strong>Why it matters:</strong> Traits enable polymorphism in Rust.</p>

      <h3>Example</h3>
      <pre><code>trait Drivable {
    fn drive(&self);
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle errors with Result.</p>
    `,
    task: "Declare a trait named 'Playable' with method play().",
    expectedAnswer: "trait Playable { fn play(&self); }",
    xpReward: 400
  },
  {
    levelId: "rust-014",
    levelName: "Error Handling",
    language: "rust",
    docs: `
      <h2>Error Handling with Result</h2>
      <p><strong>Overview:</strong> Rust uses <code>Result&lt;T, E&gt;</code> for fallible operations.</p>
      <p><strong>Goal:</strong> Match on a Result value.</p>
      <p><strong>Why it matters:</strong> Explicit error handling prevents hidden failures.</p>

      <h3>Example</h3>
      <pre><code>let result: Result<i32, String> = Ok(5);
match result {
    Ok(value) => println!("{}", value),
    Err(err) => println!("{}", err),
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will read and write files.</p>
    `,
    task: "Write a match that handles Ok(value) and Err(err).",
    expectedAnswer: "match result { Ok(value) => (), Err(err) => () }",
    xpReward: 420
  },
  {
    levelId: "rust-015",
    levelName: "File I/O",
    language: "rust",
    docs: `
      <h2>File I/O: Reading and Writing</h2>
      <p><strong>Overview:</strong> The standard library provides file operations in <code>std::fs</code>.</p>
      <p><strong>Goal:</strong> Write a file using <code>write</code>.</p>
      <p><strong>Why it matters:</strong> Programs persist results and logs.</p>

      <h3>Example</h3>
      <pre><code>std::fs::write("data.txt", "Hello")?;</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate Rust foundation.</p>
    `,
    task: "Write a line that writes 'Hello' to data.txt using std::fs::write.",
    expectedAnswer: "std::fs::write(\"data.txt\", \"Hello\");",
    xpReward: 450
  }
];
