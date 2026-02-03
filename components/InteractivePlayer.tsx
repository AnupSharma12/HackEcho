"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";

export type Milestone = {
  time: number;
  required: string;
  label: string;
};

type InteractivePlayerProps = {
  onMilestoneComplete?: (milestone: Milestone) => void;
};

const normalizeCode = (value: string) => value.replace(/\s+/g, " ").trim();

const languageConfigs: Record<
  string,
  {
    docTitle: string;
    docBody: string;
    exampleCode: string;
    expectedOutput: string;
    solutionCode: string;
  }
> = {
  javascript: {
    docTitle: "JavaScript Echo",
    docBody: "Use console.log to print a greeting. Match the exact string.",
    exampleCode: "console.log('Hello HackEcho');",
    expectedOutput: "Hello HackEcho",
    solutionCode: "console.log('Hello HackEcho');"
  },
  python: {
    docTitle: "Python Echo",
    docBody: "Use print() to output the message exactly.",
    exampleCode: "print('Hello HackEcho')",
    expectedOutput: "Hello HackEcho",
    solutionCode: "print('Hello HackEcho')"
  },
  html: {
    docTitle: "HTML Echo",
    docBody: "Create a heading element with the exact text.",
    exampleCode: "<h1>Hello HackEcho</h1>",
    expectedOutput: "Hello HackEcho",
    solutionCode: "<h1>Hello HackEcho</h1>"
  },
  java: {
    docTitle: "Java Echo",
    docBody: "Use System.out.println to output the message.",
    exampleCode: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello HackEcho\");\n  }\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "public class Main { public static void main(String[] args) { System.out.println(\"Hello HackEcho\"); } }"
  },
  cpp: {
    docTitle: "C++ Echo",
    docBody: "Use std::cout to print the greeting.",
    exampleCode: "#include <iostream>\nint main(){\n  std::cout << \"Hello HackEcho\";\n  return 0;\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "#include <iostream> int main(){ std::cout << \"Hello HackEcho\"; return 0; }"
  },
  sql: {
    docTitle: "SQL Echo",
    docBody: "Return the greeting from a SELECT statement.",
    exampleCode: "SELECT 'Hello HackEcho' AS greeting;",
    expectedOutput: "Hello HackEcho",
    solutionCode: "SELECT 'Hello HackEcho' AS greeting;"
  },
  c: {
    docTitle: "C Echo",
    docBody: "Use printf to output the greeting.",
    exampleCode: "#include <stdio.h>\nint main(){\n  printf(\"Hello HackEcho\");\n  return 0;\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "#include <stdio.h> int main(){ printf(\"Hello HackEcho\"); return 0; }"
  },
  csharp: {
    docTitle: "C# Echo",
    docBody: "Use Console.WriteLine to output the greeting.",
    exampleCode: "using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello HackEcho\");\n  }\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "using System; class Program { static void Main() { Console.WriteLine(\"Hello HackEcho\"); } }"
  },
  css: {
    docTitle: "CSS Echo",
    docBody: "Style the heading to use the accent color.",
    exampleCode: "h1 { color: #00DDFF; }",
    expectedOutput: "#00DDFF",
    solutionCode: "h1 { color: #00DDFF; }"
  },
  php: {
    docTitle: "PHP Echo",
    docBody: "Use echo to output the greeting string.",
    exampleCode: "<?php\necho 'Hello HackEcho';",
    expectedOutput: "Hello HackEcho",
    solutionCode: "<?php echo 'Hello HackEcho';"
  },
  lua: {
    docTitle: "Lua Echo",
    docBody: "Use print to output the greeting.",
    exampleCode: "print('Hello HackEcho')",
    expectedOutput: "Hello HackEcho",
    solutionCode: "print('Hello HackEcho')"
  },
  go: {
    docTitle: "Go Echo",
    docBody: "Use fmt.Println to output the greeting.",
    exampleCode: "package main\nimport \"fmt\"\nfunc main(){\n  fmt.Println(\"Hello HackEcho\")\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "package main import \"fmt\" func main(){ fmt.Println(\"Hello HackEcho\") }"
  },
  dart: {
    docTitle: "Dart Echo",
    docBody: "Use print to output the greeting.",
    exampleCode: "void main(){\n  print('Hello HackEcho');\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "void main(){ print('Hello HackEcho'); }"
  },
  rust: {
    docTitle: "Rust Echo",
    docBody: "Use println! to output the greeting.",
    exampleCode: "fn main(){\n  println!(\"Hello HackEcho\");\n}",
    expectedOutput: "Hello HackEcho",
    solutionCode: "fn main(){ println!(\"Hello HackEcho\"); }"
  },
  ruby: {
    docTitle: "Ruby Echo",
    docBody: "Use puts to output the greeting.",
    exampleCode: "puts 'Hello HackEcho'",
    expectedOutput: "Hello HackEcho",
    solutionCode: "puts 'Hello HackEcho'"
  }
};

export default function InteractivePlayer({
  onMilestoneComplete
}: InteractivePlayerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [code, setCode] = useState(languageConfigs.javascript.exampleCode);
  const [lockedMilestone, setLockedMilestone] = useState<Milestone | null>(null);
  const [completedTimes, setCompletedTimes] = useState<number[]>([]);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("Run the code to see output.");
  const [outputStatus, setOutputStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const languageContent = useMemo(
    () => languageConfigs[language] ?? languageConfigs.javascript,
    [language]
  );

  useEffect(() => {
    setCode(languageContent.exampleCode);
    setOutput("Run the code to see output.");
    setOutputStatus("idle");
  }, [languageContent]);

  const milestones = useMemo<Milestone[]>(
    () => [
      {
        time: 30,
        required: 'console.log("Hello World")',
        label: "Echo: Hello World"
      },
      {
        time: 75,
        required: "const answer = 42;",
        label: "Echo: Variables"
      }
    ],
    []
  );

  useEffect(() => {
    if (!isRunning || lockedMilestone) return;

    const interval = setInterval(() => {
      const nextMilestone = milestones.find(
        (milestone) => !completedTimes.includes(milestone.time)
      );

      if (nextMilestone) {
        setIsRunning(false);
        setLockedMilestone(nextMilestone);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [completedTimes, isRunning, lockedMilestone, milestones]);

  useEffect(() => {
    if (!lockedMilestone) return;

    const normalizedInput = normalizeCode(code);
    const normalizedRequired = normalizeCode(lockedMilestone.required);

    if (normalizedInput === normalizedRequired) {
      setCompletedTimes((prev) => [...prev, lockedMilestone.time]);
      onMilestoneComplete?.(lockedMilestone);
      setLockedMilestone(null);
      setIsRunning(true);
    }
  }, [code, lockedMilestone, onMilestoneComplete]);

  const handleRun = useCallback(() => {
    const normalizedInput = normalizeCode(code);
    const normalizedSolution = normalizeCode(languageContent.solutionCode);

    if (normalizedInput === normalizedSolution) {
      setOutput(languageContent.expectedOutput);
      setOutputStatus("success");
    } else {
      setOutput("Output mismatch. Update the code and try again.");
      setOutputStatus("error");
    }
  }, [code, languageContent]);

  return (
    <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="relative rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">How HackEcho Works</h2>
        </div>
        <div className="space-y-4 rounded-xl border border-white/10 bg-industrial-after-dark/70 p-4 text-sm text-chalk-white/80">
          <p>
            HackEcho pauses the lesson at specific stop-points. To continue, you
            must type the exact echo snippet in the editor.
          </p>
          <p className="text-sm text-chalk-white/70">
            {languageContent.docTitle}: {languageContent.docBody}
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Start the lesson timer to simulate the video timeline.</li>
            <li>When a milestone hits, the session locks.</li>
            <li>Type the required snippet to unlock and earn XP.</li>
          </ol>
          <div className="rounded-lg border border-electric-cyan/20 bg-electric-cyan/10 p-3 text-xs text-electric-cyan">
            Pro tip: Whitespace is normalized, so focus on matching the exact
            tokens.
          </div>
          <div className="rounded-lg border border-white/10 bg-industrial-after-dark/90 p-3">
            <p className="text-xs uppercase text-chalk-white/50">Level example</p>
            <pre className="mt-2 overflow-x-auto text-xs text-chalk-white/80">
              {languageContent.exampleCode}
            </pre>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className="rounded-full bg-electric-cyan px-4 py-2 text-sm font-semibold text-industrial-after-dark shadow-glow"
            onClick={() => setIsRunning(true)}
            disabled={lockedMilestone !== null}
          >
            {isRunning ? "Running" : "Start Timer"}
          </button>
          <button
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-chalk-white/80 hover:border-electric-cyan/50"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
          <button
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-chalk-white/80 hover:border-electric-cyan/50"
            onClick={() => {
              setIsRunning(false);
              setLockedMilestone(null);
              setCompletedTimes([]);
            }}
          >
            Reset
          </button>
        </div>
        {lockedMilestone ? (
          <div className="mt-4 rounded-xl border border-neon-purple/30 bg-neon-purple/10 p-4 text-center">
            <p className="text-xs uppercase text-neon-purple">Echo Required</p>
            <p className="mt-1 text-lg font-semibold">{lockedMilestone.label}</p>
            <p className="text-xs text-chalk-white/60">
              Type the snippet in the editor to resume.
            </p>
          </div>
        ) : null}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Monaco Editor</h2>
          <div className="flex items-center gap-2 text-xs text-chalk-white/60">
            {lockedMilestone ? (
              <span className="rounded-full bg-neon-purple/20 px-2 py-1 text-neon-purple">
                Locked
              </span>
            ) : (
              <span className="rounded-full bg-electric-cyan/20 px-2 py-1 text-electric-cyan">
                Live
              </span>
            )}
          </div>
        </div>
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-chalk-white/70">
          <label className="text-xs uppercase tracking-wide text-chalk-white/50">
            Language
          </label>
          <select
            className="rounded-full border border-white/10 bg-industrial-after-dark px-3 py-1 text-xs text-chalk-white"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="sql">SQL</option>
            <option value="c">C</option>
            <option value="csharp">C#</option>
            <option value="css">CSS</option>
            <option value="php">PHP</option>
            <option value="lua">Lua</option>
            <option value="go">Go</option>
            <option value="dart">Dart</option>
            <option value="rust">Rust</option>
            <option value="ruby">Ruby</option>
          </select>
        </div>
        <div className="h-[420px] overflow-hidden rounded-xl border border-white/10">
          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value ?? "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: "on"
            }}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <button
            className="rounded-full bg-electric-cyan px-4 py-2 text-xs font-semibold text-industrial-after-dark"
            onClick={handleRun}
          >
            Run Code
          </button>
          <span className="text-xs text-chalk-white/60">
            Expected output: {languageContent.expectedOutput}
          </span>
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-industrial-after-dark/80 p-4 text-xs">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-chalk-white">Output / Console</p>
            <span
              className={
                outputStatus === "success"
                  ? "text-electric-cyan"
                  : outputStatus === "error"
                  ? "text-neon-purple"
                  : "text-chalk-white/50"
              }
            >
              {outputStatus === "success"
                ? "Correct"
                : outputStatus === "error"
                ? "Wrong"
                : "Idle"}
            </span>
          </div>
          <div className="mt-2 rounded-lg border border-white/10 bg-black/40 p-3 text-chalk-white/70">
            {output}
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-industrial-after-dark/80 p-3 text-xs text-chalk-white/70">
          <p className="font-semibold text-chalk-white">Milestones</p>
          <ul className="mt-2 space-y-1">
            {milestones.map((milestone) => (
              <li key={milestone.time} className="flex items-center justify-between">
                <span>{milestone.label}</span>
                <span>
                  {completedTimes.includes(milestone.time)
                    ? "✓ Completed"
                    : `${milestone.time}s`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
