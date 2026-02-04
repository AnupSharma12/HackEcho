import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

if (!GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in environment");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export type GeneratedLevel = {
  documentation: string;
  exampleCode: string;
  question: string;
};

export type AnswerFeedback = {
  correct: boolean;
  feedback: string;
  suggestions?: string;
  improvements?: string;
};

export async function generateLevelContent(params: {
  language: string;
  level: number;
  topic?: string;
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `You are a curriculum generator for a coding platform.\n\nLanguage: ${params.language}\nLevel: ${params.level}\nTopic/Difficulty: ${params.topic ?? "Beginner"}\n\nGenerate a JSON object with keys: documentation, exampleCode, question.\n- documentation: detailed teaching material, clear and structured.\n- exampleCode: practical code in the selected language that matches the documentation.\n- question: a task for the learner to complete.\n\nReturn ONLY valid JSON.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error("Invalid AI response");
  }
  const jsonString = text.slice(jsonStart, jsonEnd + 1);
  return JSON.parse(jsonString) as GeneratedLevel;
}

export async function evaluateAnswer(params: {
  language: string;
  documentation: string;
  exampleCode: string;
  question: string;
  answer: string;
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `You are a strict code reviewer. Evaluate the learner answer.\n\nLanguage: ${params.language}\nDocumentation:\n${params.documentation}\n\nExample Code:\n${params.exampleCode}\n\nTask:\n${params.question}\n\nLearner Answer:\n${params.answer}\n\nReturn JSON with keys: correct (boolean), feedback, suggestions, improvements. Be concise.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error("Invalid AI response");
  }
  const jsonString = text.slice(jsonStart, jsonEnd + 1);
  return JSON.parse(jsonString) as AnswerFeedback;
}
