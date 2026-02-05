import { LevelData } from "../levels";

export const RUBY_LEVELS: LevelData[] = [
  {
    levelId: "ruby-001",
    levelName: "Ruby Basics",
    language: "ruby",
    docs: `
      <h2>Ruby Basics: First Program</h2>
      <p><strong>Overview:</strong> Ruby is a dynamic, object-oriented language known for readability.</p>
      <p><strong>Goal:</strong> Print output using <code>puts</code>.</p>
      <p><strong>Why it matters:</strong> Output is the quickest way to verify code runs.</p>

      <h3>Hello World</h3>
      <pre><code>puts "Hello, World!"</code></pre>

      <h3>Code Breakdown</h3>
      <ul>
        <li><code>puts</code> prints a line with a newline.</li>
        <li>Ruby does not require semicolons.</li>
      </ul>

      <h3>Progression</h3>
      <p>Next you will declare variables.</p>
    `,
    task: "Print 'Hello, Ruby!' to the console.",
    expectedAnswer: "puts 'Hello, Ruby!'",
    xpReward: 100
  },
  {
    levelId: "ruby-002",
    levelName: "Variables and Types",
    language: "ruby",
    docs: `
      <h2>Variables and Types</h2>
      <p><strong>Overview:</strong> Ruby is dynamically typed, so variables hold any type.</p>
      <p><strong>Goal:</strong> Assign values to variables.</p>
      <p><strong>Why it matters:</strong> Variables are used to store data and state.</p>

      <h3>Examples</h3>
      <pre><code>name = "Asha"
age = 21
is_active = true</code></pre>

      <h3>Progression</h3>
      <p>Next you will use operators.</p>
    `,
    task: "Create a variable named 'language' with value 'Ruby'.",
    expectedAnswer: "language = 'Ruby'",
    xpReward: 150
  },
  {
    levelId: "ruby-003",
    levelName: "Operators",
    language: "ruby",
    docs: `
      <h2>Operators: Working with Values</h2>
      <p><strong>Overview:</strong> Operators perform arithmetic and comparisons.</p>
      <p><strong>Goal:</strong> Use arithmetic operators correctly.</p>
      <p><strong>Why it matters:</strong> Calculations drive most application logic.</p>

      <h3>Examples</h3>
      <pre><code>sum = 10 + 5
product = 4 * 3
is_equal = (5 == 5)</code></pre>

      <h3>Progression</h3>
      <p>Next you will make decisions with conditionals.</p>
    `,
    task: "Store the result of 10 + 5 in variable 'total'.",
    expectedAnswer: "total = 10 + 5",
    xpReward: 200
  },
  {
    levelId: "ruby-004",
    levelName: "Conditionals",
    language: "ruby",
    docs: `
      <h2>Conditionals: Decision Making</h2>
      <p><strong>Overview:</strong> Conditionals choose which code runs.</p>
      <p><strong>Goal:</strong> Write an if/else statement.</p>
      <p><strong>Why it matters:</strong> Programs must respond to user input.</p>

      <h3>Example</h3>
      <pre><code>score = 85
if score >= 90
  puts "A"
else
  puts "B"
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will repeat actions with loops.</p>
    `,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if num > 0\n  puts 'Positive'\nend",
    xpReward: 220
  },
  {
    levelId: "ruby-005",
    levelName: "Loops",
    language: "ruby",
    docs: `
      <h2>Loops</h2>
      <p><strong>Overview:</strong> Loops repeat code for multiple values.</p>
      <p><strong>Goal:</strong> Use <code>times</code> and <code>each</code>.</p>
      <p><strong>Why it matters:</strong> Iteration is common in data processing.</p>

      <h3>Example</h3>
      <pre><code>3.times do |i|
  puts i + 1
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will create reusable methods.</p>
    `,
    task: "Write a loop that prints numbers 1 to 3.",
    expectedAnswer: "3.times { |i| puts i + 1 }",
    xpReward: 240
  },
  {
    levelId: "ruby-006",
    levelName: "Methods",
    language: "ruby",
    docs: `
      <h2>Methods: Reusable Logic</h2>
      <p><strong>Overview:</strong> Methods group logic so it can be reused.</p>
      <p><strong>Goal:</strong> Define a method with parameters and a return value.</p>
      <p><strong>Why it matters:</strong> Methods keep code clean and testable.</p>

      <h3>Example</h3>
      <pre><code>def add(a, b)
  a + b
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will store values in arrays.</p>
    `,
    task: "Create a method 'square' that returns n * n.",
    expectedAnswer: "def square(n)\n  n * n\nend",
    xpReward: 260
  },
  {
    levelId: "ruby-007",
    levelName: "Arrays",
    language: "ruby",
    docs: `
      <h2>Arrays: Ordered Collections</h2>
      <p><strong>Overview:</strong> Arrays store multiple values in order.</p>
      <p><strong>Goal:</strong> Create arrays and access elements.</p>
      <p><strong>Why it matters:</strong> Arrays are the most common collection type.</p>

      <h3>Example</h3>
      <pre><code>nums = [1, 2, 3]
puts nums[0]</code></pre>

      <h3>Progression</h3>
      <p>Next you will use hashes for key-value data.</p>
    `,
    task: "Create an array named 'nums' with values 1, 2, 3.",
    expectedAnswer: "nums = [1, 2, 3]",
    xpReward: 280
  },
  {
    levelId: "ruby-008",
    levelName: "Hashes",
    language: "ruby",
    docs: `
      <h2>Hashes: Key-Value Data</h2>
      <p><strong>Overview:</strong> Hashes map keys to values.</p>
      <p><strong>Goal:</strong> Create a hash and access values by key.</p>
      <p><strong>Why it matters:</strong> Hashes model data like settings and profiles.</p>

      <h3>Example</h3>
      <pre><code>user = { name: "Rita", age: 20 }
puts user[:name]</code></pre>

      <h3>Progression</h3>
      <p>Next you will work with strings.</p>
    `,
    task: "Create a hash 'book' with key :title and value 'Ruby Guide'.",
    expectedAnswer: "book = { title: 'Ruby Guide' }",
    xpReward: 300
  },
  {
    levelId: "ruby-009",
    levelName: "Strings",
    language: "ruby",
    docs: `
      <h2>Strings: Text Handling</h2>
      <p><strong>Overview:</strong> Strings represent text and include many helper methods.</p>
      <p><strong>Goal:</strong> Use common string methods.</p>
      <p><strong>Why it matters:</strong> Apps format and validate text often.</p>

      <h3>Example</h3>
      <pre><code>name = "HackEcho"
length = name.length</code></pre>

      <h3>Progression</h3>
      <p>Next you will define classes and objects.</p>
    `,
    task: "Create a string variable 'greeting' with value 'Hello'.",
    expectedAnswer: "greeting = 'Hello'",
    xpReward: 320
  },
  {
    levelId: "ruby-010",
    levelName: "Classes and Objects",
    language: "ruby",
    docs: `
      <h2>Classes and Objects</h2>
      <p><strong>Overview:</strong> Classes define data and behavior; objects are instances.</p>
      <p><strong>Goal:</strong> Create a class with an attribute.</p>
      <p><strong>Why it matters:</strong> OOP organizes code into reusable pieces.</p>

      <h3>Example</h3>
      <pre><code>class User
  attr_accessor :name
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will initialize objects with <code>initialize</code>.</p>
    `,
    task: "Create a class 'Book' with attr_accessor :title.",
    expectedAnswer: "class Book\n  attr_accessor :title\nend",
    xpReward: 340
  },
  {
    levelId: "ruby-011",
    levelName: "Initialize",
    language: "ruby",
    docs: `
      <h2>Initialize: Object Construction</h2>
      <p><strong>Overview:</strong> The <code>initialize</code> method runs when a new object is created.</p>
      <p><strong>Goal:</strong> Set instance variables in <code>initialize</code>.</p>
      <p><strong>Why it matters:</strong> Initialization keeps objects valid.</p>

      <h3>Example</h3>
      <pre><code>class Car
  def initialize(brand)
    @brand = brand
  end
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will reuse behavior with inheritance.</p>
    `,
    task: "Write an initialize method that sets @brand.",
    expectedAnswer: "def initialize(brand)\n  @brand = brand\nend",
    xpReward: 360
  },
  {
    levelId: "ruby-012",
    levelName: "Inheritance",
    language: "ruby",
    docs: `
      <h2>Inheritance: Reusing Behavior</h2>
      <p><strong>Overview:</strong> A subclass inherits methods from a parent class.</p>
      <p><strong>Goal:</strong> Create a subclass using <code>&lt;</code>.</p>
      <p><strong>Why it matters:</strong> Inheritance reduces repeated logic.</p>

      <h3>Example</h3>
      <pre><code>class Animal
  def eat
  end
end

class Dog &lt; Animal
  def bark
  end
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will share behavior with modules.</p>
    `,
    task: "Create class 'Dog' that inherits from 'Animal'.",
    expectedAnswer: "class Dog < Animal\nend",
    xpReward: 380
  },
  {
    levelId: "ruby-013",
    levelName: "Modules and Mixins",
    language: "ruby",
    docs: `
      <h2>Modules and Mixins</h2>
      <p><strong>Overview:</strong> Modules provide reusable methods shared across classes.</p>
      <p><strong>Goal:</strong> Define a module and include it in a class.</p>
      <p><strong>Why it matters:</strong> Mixins avoid deep inheritance chains.</p>

      <h3>Example</h3>
      <pre><code>module Drivable
  def drive
  end
end

class Car
  include Drivable
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will handle runtime errors with exceptions.</p>
    `,
    task: "Declare a module named 'Playable' with method play.",
    expectedAnswer: "module Playable\n  def play\n  end\nend",
    xpReward: 400
  },
  {
    levelId: "ruby-014",
    levelName: "Exceptions",
    language: "ruby",
    docs: `
      <h2>Exceptions: Error Handling</h2>
      <p><strong>Overview:</strong> Exceptions let you handle failures safely.</p>
      <p><strong>Goal:</strong> Use <code>begin</code>, <code>rescue</code>, and <code>end</code>.</p>
      <p><strong>Why it matters:</strong> Programs should recover from invalid input or I/O failures.</p>

      <h3>Example</h3>
      <pre><code>begin
  raise "Error"
rescue => e
  puts e
end</code></pre>

      <h3>Progression</h3>
      <p>Next you will read and write files.</p>
    `,
    task: "Write a begin/rescue block that prints 'Error' in rescue.",
    expectedAnswer: "begin\nrescue\n  puts 'Error'\nend",
    xpReward: 420
  },
  {
    levelId: "ruby-015",
    levelName: "File I/O",
    language: "ruby",
    docs: `
      <h2>File I/O: Saving Data</h2>
      <p><strong>Overview:</strong> Ruby can write files using <code>File.write</code>.</p>
      <p><strong>Goal:</strong> Write text to a file.</p>
      <p><strong>Why it matters:</strong> Files store logs, exports, and reports.</p>

      <h3>Example</h3>
      <pre><code>File.write("data.txt", "Hello")</code></pre>

      <h3>Progression</h3>
      <p>You now have a beginner to intermediate Ruby foundation.</p>
    `,
    task: "Write a line that saves 'Hello' to data.txt using File.write.",
    expectedAnswer: "File.write('data.txt', 'Hello')",
    xpReward: 450
  }
];
