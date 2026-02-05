import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

// AI is optional - we'll fallback to expectedAnswer if it fails
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

export type AnswerFeedback = {
  correct: boolean;
  feedback: string;
  usedFallback?: boolean;
};

/**
 * Check user's answer using AI with fallback to expectedAnswer
 * AI ONLY checks answers - does NOT generate content
 */
export async function checkAnswer(params: {
  language: string;
  task: string;
  expectedAnswer: string;
  userAnswer: string;
}): Promise<AnswerFeedback> {
  // Try AI first if available
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const prompt = `You are a code evaluator. Check if the learner's answer is correct.

Language: ${params.language}
Task: ${params.task}
Expected Answer: ${params.expectedAnswer}
User's Answer: ${params.userAnswer}

Evaluate if the user's answer accomplishes the task. Consider:
- Correctness (does it work?)
- Logic (is it reasonable?)
- Alternative valid solutions

Return JSON with keys: correct (boolean), feedback (string with detailed explanation).
Be encouraging but honest. Keep feedback concise (2-3 sentences).`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      const jsonStart = text.indexOf("{");
      const jsonEnd = text.lastIndexOf("}");
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const jsonString = text.slice(jsonStart, jsonEnd + 1);
        const aiResponse = JSON.parse(jsonString);
        return {
          correct: Boolean(aiResponse.correct),
          feedback: String(aiResponse.feedback),
          usedFallback: false
        };
      }
    } catch (error) {
      // AI failed, use fallback
      console.error("AI check failed, using fallback:", error);
    }
  }

  // Fallback: Simple string comparison with normalization
  const normalizedExpected = normalizeCode(params.expectedAnswer);
  const normalizedUser = normalizeCode(params.userAnswer);
  const isCorrect = normalizedExpected === normalizedUser;

  return {
    correct: isCorrect,
    feedback: isCorrect
      ? "✅ Correct! Your answer matches the expected solution."
      : "❌ Not quite right. Compare your answer with the expected solution and try again.",
    usedFallback: true
  };
}

/**
 * Normalize code for comparison (remove extra whitespace, semicolons, etc.)
 */
function normalizeCode(code: string): string {
  return code
    .toLowerCase()
    .replace(/\s+/g, " ") // normalize whitespace
    .replace(/;+$/g, "") // remove trailing semicolons
    .trim();
}

