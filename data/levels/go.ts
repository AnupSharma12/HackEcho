import { LevelData } from "../levels";

export const GO_LEVELS: LevelData[] = [
  {
    levelId: "go-001",
    levelName: "Go Basics",
    language: "go",
    docs: `
      <h2>Go Basics: First Program</h2>
      <p><strong>Overview:</strong> Go is a compiled language designed for simplicity and speed.</p>
      <p><strong>Goal:</strong> Run a basic program and print output.</p>
      <p><strong>Why it matters:</strong> Every Go program starts with <code>package main</code> and <code>func main()</code>.</p>

      <h3>Hello World</h3>
      <pre><code>package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>package main</code> declares the entry package.</li>
        <li><code>import "fmt"</code> brings in formatting utilities.</li>
        <li><code>func main()</code> is the entry point.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will declare variables and types.</p>
    `,
    task: "Print 'Hello, Go!' to the console.",
    expectedAnswer: "fmt.Println(\"Hello, Go!\")",
    xpReward: 100
  },
  {
    levelId: "go-002",
    levelName: "Variables and Types",
    language: "go",
    docs: `
      <h2>Variables and Types</h2>
      <p><strong>Overview:</strong> Go uses static types with concise syntax.</p>
      <p><strong>Goal:</strong> Declare variables using <code>:=</code> and <code>var</code>.</p>
      <p><strong>Why it matters:</strong> Clear typing helps the compiler catch errors early.</p>

      <h3>Examples</h3>
      <pre><code>var name string = "Asha"
age := 21
isActive := true</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>var</code> uses an explicit type.</li>
        <li><code>:=</code> infers the type.</li>
        <li>Go uses <code>true</code> and <code>false</code> for booleans.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will perform calculations with operators.</p>
    `,
    task: "Create a variable named 'language' with value 'Go'.",
    expectedAnswer: "language := \"Go\"",
    xpReward: 150
  },
  {
    levelId: "go-003",
    levelName: "Operators",
    language: "go",
    docs: `
      <h2>Operators: Working with Values</h2>
      <p><strong>Overview:</strong> Operators allow arithmetic and comparison.</p>
      <p><strong>Goal:</strong> Use basic arithmetic operators.</p>
      <p><strong>Why it matters:</strong> Most programs calculate and compare values.</p>

      <h3>Example</h3>
      <pre><code>sum := 10 + 5
product := 4 * 3
isEqual := 5 == 5</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>+</code> adds numbers.</li>
        <li><code>*</code> multiplies numbers.</li>
        <li><code>==</code> compares values.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will make decisions with conditionals.</p>
    `,
    task: "Store the result of 10 + 5 in variable 'total'.",
    expectedAnswer: "total := 10 + 5",
    xpReward: 200
  },
  {
    levelId: "go-004",
    levelName: "Conditionals",
    language: "go",
    docs: `
      <h2>Conditionals: Decision Making</h2>
      <p><strong>Overview:</strong> <code>if</code> statements choose which block to run.</p>
      <p><strong>Goal:</strong> Write an <code>if</code> block with a condition.</p>
      <p><strong>Why it matters:</strong> Programs react to input and state changes.</p>

      <h3>Example</h3>
      <pre><code>if score >= 90 {
    fmt.Println("A")
} else {
    fmt.Println("B")
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li>Conditions do not need parentheses.</li>
        <li>Curly braces are required.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will repeat actions using loops.</p>
    `,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if num > 0 { fmt.Println(\"Positive\") }",
    xpReward: 220
  },
  {
    levelId: "go-005",
    levelName: "Loops",
    language: "go",
    docs: `
      <h2>Loops: Repeating Work</h2>
      <p><strong>Overview:</strong> Go uses <code>for</code> for all looping patterns.</p>
      <p><strong>Goal:</strong> Use a counting loop to iterate numbers.</p>
      <p><strong>Why it matters:</strong> Iteration is common for lists and ranges.</p>

      <h3>Example</h3>
      <pre><code>for i := 1; i <= 3; i++ {
    fmt.Println(i)
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will package logic into functions.</p>
    `,
    task: "Write a loop that prints numbers 1 to 3.",
    expectedAnswer: "for i := 1; i <= 3; i++ { fmt.Println(i) }",
    xpReward: 240
  },
  {
    levelId: "go-006",
    levelName: "Functions",
    language: "go",
    docs: `
      <h2>Functions: Reusable Logic</h2>
      <p><strong>Overview:</strong> Functions group steps and return values.</p>
      <p><strong>Goal:</strong> Define a function with a parameter and return type.</p>
      <p><strong>Why it matters:</strong> Functions keep code modular and testable.</p>

      <h3>Example</h3>
      <pre><code>func add(a int, b int) int {
    return a + b
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>func</code> starts a function declaration.</li>
        <li>Parameters include types.</li>
        <li>Return type is after the parameters.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will store multiple values with arrays and slices.</p>
    `,
    task: "Create function 'square' that returns n * n.",
    expectedAnswer: "func square(n int) int { return n * n }",
    xpReward: 260
  },
  {
    levelId: "go-007",
    levelName: "Arrays",
    language: "go",
    docs: `
      <h2>Arrays: Fixed-Size Collections</h2>
      <p><strong>Overview:</strong> Arrays have a fixed size that is part of the type.</p>
      <p><strong>Goal:</strong> Create an array and access elements by index.</p>
      <p><strong>Why it matters:</strong> Arrays are the base of slices.</p>

      <h3>Example</h3>
      <pre><code>nums := [3]int{1, 2, 3}
fmt.Println(nums[0])</code></pre>

      <h3>Progression</h3>
      <p>Next you will use slices for dynamic collections.</p>
    `,
    task: "Create an array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "nums := [3]int{1, 2, 3}",
    xpReward: 280
  },
  {
    levelId: "go-008",
    levelName: "Slices",
    language: "go",
    docs: `
      <h2>Slices: Dynamic Collections</h2>
      <p><strong>Overview:</strong> Slices are flexible views over arrays.</p>
      <p><strong>Goal:</strong> Create a slice and append values.</p>
      <p><strong>Why it matters:</strong> Slices are the most common collection in Go.</p>

      <h3>Example</h3>
      <pre><code>scores := []int{10, 20, 30}
    scores = append(scores, 40)</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li>Empty brackets <code>[]</code> declare a slice.</li>
        <li><code>append</code> returns a new slice value.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will store key-value data using maps.</p>
    `,
    task: "Create a slice named 'scores' with values 10, 20, 30.",
    expectedAnswer: "scores := []int{10, 20, 30}",
    xpReward: 300
  },
  {
    levelId: "go-009",
    levelName: "Maps",
    language: "go",
    docs: `
      <h2>Maps: Key-Value Storage</h2>
      <p><strong>Overview:</strong> Maps store values by key for fast lookup.</p>
      <p><strong>Goal:</strong> Create a map with string keys and int values.</p>
      <p><strong>Why it matters:</strong> Maps model real-world lookups like IDs and names.</p>

      <h3>Example</h3>
      <pre><code>ages := map[string]int{
    "Rita": 20,
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will create custom types with structs.</p>
    `,
    task: "Create a map named 'ages' with key 'Rita' and value 20.",
    expectedAnswer: "ages := map[string]int{\"Rita\": 20}",
    xpReward: 320
  },
  {
    levelId: "go-010",
    levelName: "Structs",
    language: "go",
    docs: `
      <h2>Structs: Custom Types</h2>
      <p><strong>Overview:</strong> Structs group related fields into one type.</p>
      <p><strong>Goal:</strong> Define a struct type with named fields.</p>
      <p><strong>Why it matters:</strong> Structs model real-world entities.</p>

      <h3>Example</h3>
      <pre><code>type User struct {
    Name string
    Age  int
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will add behavior using methods.</p>
    `,
    task: "Create a struct named 'Book' with a string field 'Title'.",
    expectedAnswer: "type Book struct { Title string }",
    xpReward: 340
  },
  {
    levelId: "go-011",
    levelName: "Methods",
    language: "go",
    docs: `
      <h2>Methods: Behavior on Types</h2>
      <p><strong>Overview:</strong> Methods attach functions to a struct type.</p>
      <p><strong>Goal:</strong> Declare a method with a receiver.</p>
      <p><strong>Why it matters:</strong> Methods organize behavior around data.</p>

      <h3>Example</h3>
      <pre><code>type Car struct {
    Brand string
}

func (c Car) Drive() {
    fmt.Println("Driving")
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will define shared behavior with interfaces.</p>
    `,
    task: "Create a method Drive on struct Car with no parameters and no return value.",
    expectedAnswer: "func (c Car) Drive() {}",
    xpReward: 360
  },
  {
    levelId: "go-012",
    levelName: "Interfaces",
    language: "go",
    docs: `
      <h2>Interfaces: Contracts</h2>
      <p><strong>Overview:</strong> Interfaces define behavior without specifying implementation.</p>
      <p><strong>Goal:</strong> Declare a simple interface.</p>
      <p><strong>Why it matters:</strong> Interfaces enable flexible design and testing.</p>

      <h3>Example</h3>
      <pre><code>type Drivable interface {
    Drive()
}</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle errors properly.</p>
    `,
    task: "Declare an interface named 'Playable' with method Play().",
    expectedAnswer: "type Playable interface { Play() }",
    xpReward: 380
  },
  {
    levelId: "go-013",
    levelName: "Error Handling",
    language: "go",
    docs: `
      <h2>Error Handling: Explicit Control</h2>
      <p><strong>Overview:</strong> Go uses explicit <code>error</code> values instead of exceptions.</p>
      <p><strong>Goal:</strong> Check errors and return early.</p>
      <p><strong>Why it matters:</strong> Clear error flow keeps programs stable.</p>

      <h3>Example</h3>
      <pre><code>if err != nil {
    return err
}</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>err</code> is checked after a function call.</li>
        <li>Returning early avoids nested logic.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will organize code with packages and imports.</p>
    `,
    task: "Write an error check that returns err if it is not nil.",
    expectedAnswer: "if err != nil { return err }",
    xpReward: 400
  },
  {
    levelId: "go-014",
    levelName: "File I/O",
    language: "go",
    docs: `
      <h2>File I/O: Saving Data</h2>
      <p><strong>Overview:</strong> The <code>os</code> package creates and opens files.</p>
      <p><strong>Goal:</strong> Create a file and handle the error result.</p>
      <p><strong>Why it matters:</strong> Real programs store results and logs.</p>

      <h3>Example</h3>
      <pre><code>file, err := os.Create("data.txt")
if err != nil {
    return err
}
_ = file</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>os.Create</code> returns a file and an error.</li>
        <li>Always check <code>err</code> before using the file.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will run code concurrently with goroutines.</p>
    `,
    task: "Create a file named 'data.txt' using os.Create.",
    expectedAnswer: "os.Create(\"data.txt\")",
    xpReward: 420
  },
  {
    levelId: "go-015",
    levelName: "Goroutines",
    language: "go",
    docs: `
      <h2>Goroutines: Concurrency</h2>
      <p><strong>Overview:</strong> Goroutines are lightweight concurrent tasks.</p>
      <p><strong>Goal:</strong> Start a goroutine with the <code>go</code> keyword.</p>
      <p><strong>Why it matters:</strong> Concurrency is a key strength of Go.</p>

      <h3>Example</h3>
      <pre><code>go doWork()</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>go</code> starts the function in the background.</li>
        <li>Goroutines run concurrently with <code>main</code>.</li>
      </ul>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate Go foundation.</p>
    `,
    task: "Start a goroutine that calls doWork().",
    expectedAnswer: "go doWork()",
    xpReward: 450
  }
];
