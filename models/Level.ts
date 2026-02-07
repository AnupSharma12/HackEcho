import mongoose, { Schema, models, model } from "mongoose";

export type LevelDocument = mongoose.Document & {
  levelId: string;
  levelName: string;
  language: string;
  docs: string;
  task: string;
  expectedAnswer: string;
  xpReward: number;
  mcqs?: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
};

const LevelSchema = new Schema<LevelDocument>(
  {
    levelId: { type: String, required: true, unique: true, index: true },
    levelName: { type: String, required: true },
    language: { type: String, required: true, index: true },
    docs: { type: String, required: true },
    task: { type: String, required: true },
    expectedAnswer: { type: String, required: true },
    mcqs: {
      type: [
        {
          id: { type: String, required: true },
          question: { type: String, required: true },
          options: { type: [String], required: true },
          correctIndex: { type: Number, required: true },
          explanation: { type: String, required: true }
        }
      ],
      default: []
    },
    xpReward: { type: Number, required: true, default: 100 }
  },
  { timestamps: true }
);

export const Level = models.Level || model<LevelDocument>("Level", LevelSchema);
