import { LevelData } from "../levels";

export const PYTHON_LEVELS: LevelData[] = [
  {
    levelId: "py-001",
    levelName: "Running Python",
    language: "python",
    docs: `
<h2>Running Python: Your First Output</h2>
<p><strong>Overview:</strong> Python is an interpreted language, which means code runs line by line without a separate compile step.</p>
<p><strong>Learning goal:</strong> Use <code>print()</code> to display output and confirm your program is running.</p>
<p><strong>Why it matters:</strong> Printing output is the simplest way to debug and understand program flow.</p>

<h3>Where Python Runs</h3>
<p>You can run Python in a terminal, in an IDE like VS Code, or in online notebooks. The output appears in the console or notebook cell.</p>

<h3>Example: Print a Message</h3>
<pre><code>print("Hello World")</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>print</code> is a built-in function.</li>
  <li>The text in quotes is a string.</li>
  <li>Parentheses call the function with an argument.</li>
</ul>

<h3>Another Example: Print a Calculation</h3>
<pre><code>print(10 + 5)</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting the parentheses after <code>print</code>.</li>
  <li>Using curly braces instead of Python indentation.</li>
  <li>Leaving quotes unclosed.</li>
</ul>

<h3>Progression</h3>
<p>Next you will store values in variables so you can reuse them in multiple places.</p>
`,
    task: "Print 'Python Started' to the console.",
    expectedAnswer: "print('Python Started')",
    xpReward: 100
  },
  {
    levelId: "py-002",
    levelName: "Variables",
    language: "python",
    docs: `
<h2>Variables: Storing Data</h2>
<p><strong>Overview:</strong> Variables are names that point to values in memory.</p>
<p><strong>Learning goal:</strong> Assign values to variables without type declarations.</p>
<p><strong>Why it matters:</strong> Variables allow you to track user input, scores, and intermediate results.</p>

<h3>Basic Variable Assignment</h3>
<pre><code>name = "Anup"
age = 20</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Python uses <code>=</code> to assign values.</li>
  <li>There is no <code>let</code> or <code>const</code>.</li>
  <li>Variable names should be clear and descriptive.</li>
</ul>

<h3>Reassignment Example</h3>
<pre><code>score = 10
score = 15  # allowed</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using spaces in variable names.</li>
  <li>Starting names with numbers.</li>
  <li>Reusing the same name for different meanings.</li>
</ul>

<h3>Progression</h3>
<p>Next you will learn the most common data types in Python.</p>
`,
    task: "Create a variable 'country' with value 'Nepal'.",
    expectedAnswer: "country = 'Nepal'",
    xpReward: 150
  },
  {
    levelId: "py-003",
    levelName: "Data Types",
    language: "python",
    docs: `
<h2>Data Types: Understanding Values</h2>
<p><strong>Overview:</strong> Python supports multiple types that represent different kinds of data.</p>
<p><strong>Learning goal:</strong> Identify and use basic types correctly.</p>
<p><strong>Why it matters:</strong> Type mistakes are a common source of bugs.</p>

<h3>Common Types</h3>
<ul>
  <li><code>str</code> for text</li>
  <li><code>int</code> for whole numbers</li>
  <li><code>float</code> for decimals</li>
  <li><code>bool</code> for True/False</li>
</ul>

<h3>Example</h3>
<pre><code>age = 25
price = 9.99
is_active = True</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Numbers are unquoted.</li>
  <li>Booleans start with capital <code>True</code>.</li>
  <li>Python detects types automatically.</li>
</ul>

<h3>Type Checking</h3>
<pre><code>type(age)      # &lt;class 'int'&gt;
type(price)    # &lt;class 'float'&gt;
type(is_active) # &lt;class 'bool'&gt;</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using <code>true</code> instead of <code>True</code>.</li>
  <li>Writing numbers as strings when you want math.</li>
  <li>Forgetting that <code>"5"</code> is not <code>5</code>.</li>
</ul>

<h3>Progression</h3>
<p>Next you will use operators to work with these values.</p>
`,
    task: "Create a boolean variable 'is_online' set to True.",
    expectedAnswer: "is_online = True",
    xpReward: 200
  },
  {
    levelId: "py-004",
    levelName: "Operators",
    language: "python",
    docs: `
<h2>Operators: Doing Work with Values</h2>
<p><strong>Overview:</strong> Operators let you calculate and compare values.</p>
<p><strong>Learning goal:</strong> Use arithmetic operators correctly.</p>
<p><strong>Why it matters:</strong> Math is at the core of many programs.</p>

<h3>Arithmetic Example</h3>
<pre><code>result = 5 * 4</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>*</code> multiplies two numbers.</li>
  <li>The result is stored in <code>result</code>.</li>
</ul>

<h3>More Operators</h3>
<pre><code>10 + 5  # addition
10 - 3  # subtraction
10 / 2  # division
10 // 3 # floor division
10 % 3  # remainder
2 ** 3  # power</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using integer division when you wanted decimals.</li>
  <li>Ignoring operator precedence in complex formulas.</li>
  <li>Mixing strings and numbers in arithmetic.</li>
</ul>

<h3>Progression</h3>
<p>Next you will make decisions with conditionals.</p>
`,
    task: "Store the result of 10 + 5 in variable 'total'.",
    expectedAnswer: "total = 10 + 5",
    xpReward: 200
  },
  {
    levelId: "py-005",
    levelName: "Conditionals",
    language: "python",
    docs: `
<h2>Conditionals: Decision Making</h2>
<p><strong>Overview:</strong> Conditionals allow your program to choose paths based on data.</p>
<p><strong>Learning goal:</strong> Write clear <code>if</code> statements.</p>
<p><strong>Why it matters:</strong> Most programs respond differently to different inputs.</p>

<h3>Basic If Statement</h3>
<pre><code>if age >= 18:
    print("Adult")</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>The condition must be True to run the block.</li>
  <li>Indentation defines the block.</li>
  <li>Use <code>elif</code> and <code>else</code> for more paths.</li>
</ul>

<h3>Expanded Example</h3>
<pre><code>if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Using <code>=</code> instead of <code>==</code>.</li>
  <li>Forgetting the colon after the condition.</li>
  <li>Mixing tabs and spaces in indentation.</li>
</ul>

<h3>Progression</h3>
<p>Next you will repeat actions with loops.</p>
`,
    task: "Write an if statement that prints 'Positive' if num > 0.",
    expectedAnswer: "if num > 0:\n    print('Positive')",
    xpReward: 250
  },
  {
    levelId: "py-006",
    levelName: "Loops",
    language: "python",
    docs: `
<h2>Loops: Repeating Work</h2>
<p><strong>Overview:</strong> Loops run the same code multiple times.</p>
<p><strong>Learning goal:</strong> Use <code>for</code> loops with <code>range()</code>.</p>
<p><strong>Why it matters:</strong> Repetition is common when handling lists or data sets.</p>

<h3>For Loop Example</h3>
<pre><code>for i in range(3):
    print(i)</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>range(3)</code> produces 0, 1, 2.</li>
  <li>The loop runs once per value.</li>
  <li>Indentation controls the loop body.</li>
</ul>

<h3>Range with Start and End</h3>
<pre><code>for i in range(1, 4):
    print(i)</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Off-by-one errors with <code>range</code>.</li>
  <li>Forgetting to indent.</li>
  <li>Using a while loop when a for loop is clearer.</li>
</ul>

<h3>Progression</h3>
<p>Next you will put logic into reusable functions.</p>
`,
    task: "Write a loop that prints numbers 1 to 3.",
    expectedAnswer: "for i in range(1, 4):\n    print(i)",
    xpReward: 300
  },
  {
    levelId: "py-007",
    levelName: "Functions",
    language: "python",
    docs: `
<h2>Functions: Reusable Logic</h2>
<p><strong>Overview:</strong> Functions group steps so you can reuse them.</p>
<p><strong>Learning goal:</strong> Define a function and return a value.</p>
<p><strong>Why it matters:</strong> Functions reduce duplication and make code easier to maintain.</p>

<h3>Function Example</h3>
<pre><code>def greet(name):
    return "Hello " + name</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>def</code> starts the function definition.</li>
  <li><code>name</code> is a parameter.</li>
  <li><code>return</code> sends a value back.</li>
</ul>

<h3>Using the Function</h3>
<pre><code>message = greet("Rita")
print(message)</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting to indent the function body.</li>
  <li>Using <code>print</code> instead of <code>return</code>.</li>
  <li>Giving functions unclear names.</li>
</ul>

<h3>Progression</h3>
<p>Next you will store multiple values using lists.</p>
`,
    task: "Create function 'square' that returns n * n.",
    expectedAnswer: "def square(n):\n    return n * n",
    xpReward: 350
  },
  {
    levelId: "py-008",
    levelName: "Lists",
    language: "python",
    docs: `
<h2>Lists: Collections of Data</h2>
<p><strong>Overview:</strong> Lists store multiple values in order.</p>
<p><strong>Learning goal:</strong> Create lists and access elements by index.</p>
<p><strong>Why it matters:</strong> Most programs manage lists of users, items, or scores.</p>

<h3>Creating a List</h3>
<pre><code>numbers = [1, 2, 3]
print(numbers[0])</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Lists use square brackets.</li>
  <li>Index starts at 0.</li>
  <li>Values can be different types, but keep them consistent.</li>
</ul>

<h3>Negative Indexing</h3>
<pre><code>colors = ["red", "green", "blue"]
print(colors[-1])  # "blue"</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Accessing an index out of range.</li>
  <li>Confusing lists with tuples.</li>
  <li>Mutating a list while iterating.</li>
</ul>

<h3>Progression</h3>
<p>Next you will use list methods to change lists.</p>
`,
    task: "Create list 'scores' with 10, 20, 30.",
    expectedAnswer: "scores = [10, 20, 30]",
    xpReward: 400
  },
  {
    levelId: "py-009",
    levelName: "List Methods",
    language: "python",
    docs: `
<h2>List Methods: Modifying Data</h2>
<p><strong>Overview:</strong> Lists have methods to add, remove, and inspect elements.</p>
<p><strong>Learning goal:</strong> Use <code>append()</code> and <code>len()</code>.</p>
<p><strong>Why it matters:</strong> You often need to update collections as your program runs.</p>

<h3>Append Example</h3>
<pre><code>nums = [1, 2]
nums.append(3)</code></pre>

<h3>Length Example</h3>
<pre><code>count = len(nums)</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>append()</code> adds to the end.</li>
  <li><code>len()</code> returns the number of items.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Using <code>append</code> without parentheses.</li>
  <li>Confusing <code>append</code> with <code>extend</code>.</li>
  <li>Expecting <code>append</code> to return a new list.</li>
</ul>

<h3>Progression</h3>
<p>Next you will store key-value data using dictionaries.</p>
`,
    task: "Append 40 to list numbers.",
    expectedAnswer: "numbers.append(40)",
    xpReward: 450
  },
  {
    levelId: "py-010",
    levelName: "Dictionaries",
    language: "python",
    docs: `
<h2>Dictionaries: Key-Value Data</h2>
<p><strong>Overview:</strong> Dictionaries store labeled data, like a mini database.</p>
<p><strong>Learning goal:</strong> Create a dictionary and access a value by key.</p>
<p><strong>Why it matters:</strong> Dictionaries model real-world objects (users, products, settings).</p>

<h3>Dictionary Example</h3>
<pre><code>user = {"name": "John", "age": 20}
print(user["name"])</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Keys are inside quotes.</li>
  <li>Values can be any type.</li>
  <li>Access values using square brackets and the key.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Accessing a key that does not exist.</li>
  <li>Mixing up keys and values.</li>
  <li>Forgetting commas between pairs.</li>
</ul>

<h3>Progression</h3>
<p>Next you will learn tuples for fixed data.</p>
`,
    task: "Create dictionary 'book' with key 'title' = 'Python Guide'.",
    expectedAnswer: "book = {'title': 'Python Guide'}",
    xpReward: 500
  },
  {
    levelId: "py-011",
    levelName: "Tuples",
    language: "python",
    docs: `
<h2>Tuples: Fixed Collections</h2>
<p><strong>Overview:</strong> Tuples are like lists but cannot be changed after creation.</p>
<p><strong>Learning goal:</strong> Create a tuple and understand immutability.</p>
<p><strong>Why it matters:</strong> Tuples are useful for fixed data like coordinates.</p>

<h3>Tuple Example</h3>
<pre><code>point = (10, 20)</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li>Parentheses create a tuple.</li>
  <li>Tuples are ordered, like lists.</li>
  <li>You cannot change tuple values after creation.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Trying to modify a tuple.</li>
  <li>Forgetting the comma in a single-item tuple.</li>
  <li>Confusing tuples and lists.</li>
</ul>

<h3>Progression</h3>
<p>Next you will compress loops with list comprehensions.</p>
`,
    task: "Create tuple 'coords' with values 5 and 10.",
    expectedAnswer: "coords = (5, 10)",
    xpReward: 550
  },
  {
    levelId: "py-012",
    levelName: "List Comprehension",
    language: "python",
    docs: `
<h2>List Comprehensions: Compact Loops</h2>
<p><strong>Overview:</strong> List comprehensions create lists with a compact syntax.</p>
<p><strong>Learning goal:</strong> Use comprehension to build a list of squares.</p>
<p><strong>Why it matters:</strong> It makes transformations shorter and clearer.</p>

<h3>Comprehension Example</h3>
<pre><code>squares = [x*x for x in range(3)]</code></pre>

<h3>Expanded Equivalent</h3>
<pre><code>squares = []
for x in range(3):
    squares.append(x * x)</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Making comprehensions too complex.</li>
  <li>Forgetting the brackets.</li>
  <li>Using comprehensions when a loop is clearer.</li>
</ul>

<h3>Progression</h3>
<p>Next you will handle errors with try/except.</p>
`,
    task: "Create list of squares from 1 to 3 using comprehension.",
    expectedAnswer: "[x*x for x in range(1, 4)]",
    xpReward: 600
  },
  {
    levelId: "py-013",
    levelName: "Exception Handling",
    language: "python",
    docs: `
<h2>Exception Handling: Safe Programs</h2>
<p><strong>Overview:</strong> Exceptions let you handle errors gracefully.</p>
<p><strong>Learning goal:</strong> Use <code>try</code> and <code>except</code> blocks.</p>
<p><strong>Why it matters:</strong> Errors happen. Handling them keeps your program running.</p>

<h3>Try/Except Example</h3>
<pre><code>try:
    x = 10 / 0
except ZeroDivisionError:
    print("Error")</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>try</code> contains risky code.</li>
  <li><code>except</code> runs if an error occurs.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Catching the wrong exception type.</li>
  <li>Using a broad <code>except</code> without logging.</li>
  <li>Ignoring errors without understanding them.</li>
</ul>

<h3>Progression</h3>
<p>Next you will create custom objects with classes.</p>
`,
    task: "Write try/except catching ValueError.",
    expectedAnswer: "try:\n    pass\nexcept ValueError:\n    pass",
    xpReward: 700
  },
  {
    levelId: "py-014",
    levelName: "Classes & OOP",
    language: "python",
    docs: `
<h2>Classes: Object-Oriented Basics</h2>
<p><strong>Overview:</strong> Classes define blueprints for creating objects.</p>
<p><strong>Learning goal:</strong> Create a class with an initializer and attribute.</p>
<p><strong>Why it matters:</strong> OOP organizes large projects into reusable parts.</p>

<h3>Class Example</h3>
<pre><code>class User:
    def __init__(self, name):
        self.name = name</code></pre>

<h3>Using the Class</h3>
<pre><code>user = User("Rita")
print(user.name)</code></pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Forgetting <code>self</code> in method parameters.</li>
  <li>Not calling the class to create an instance.</li>
  <li>Putting too much logic in <code>__init__</code>.</li>
</ul>

<h3>Progression</h3>
<p>Next you will work with files for persistence.</p>
`,
    task: "Create class 'Car' with attribute brand.",
    expectedAnswer: "class Car:\n    def __init__(self, brand):\n        self.brand = brand",
    xpReward: 850
  },
  {
    levelId: "py-015",
    levelName: "File Handling",
    language: "python",
    docs: `
<h2>File Handling: Reading and Writing</h2>
<p><strong>Overview:</strong> Files allow your program to save and load data.</p>
<p><strong>Learning goal:</strong> Open files in different modes safely.</p>
<p><strong>Why it matters:</strong> Real applications store data beyond memory.</p>

<h3>Read a File</h3>
<pre><code>with open("file.txt", "r") as f:
    content = f.read()</code></pre>

<h3>Write a File</h3>
<pre><code>with open("file.txt", "w") as f:
    f.write("Hello")</code></pre>

<h3>Code Breakdown</h3>
<ul>
  <li><code>open()</code> opens a file handle.</li>
  <li><code>"r"</code> is read mode, <code>"w"</code> is write mode.</li>
  <li><code>with</code> ensures the file closes automatically.</li>
</ul>

<h3>Common Mistakes</h3>
<ul>
  <li>Opening a non-existent file in read mode.</li>
  <li>Overwriting a file accidentally with write mode.</li>
  <li>Forgetting to close files without <code>with</code>.</li>
</ul>

<h3>Progression</h3>
<p>You now have a beginner to intermediate Python foundation.</p>
`,
    task: "Open file 'data.txt' in write mode.",
    expectedAnswer: "open('data.txt', 'w')",
    xpReward: 1000
  }
];
