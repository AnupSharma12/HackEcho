import mongoose, { Schema, models, model } from "mongoose";

export type LevelDocument = mongoose.Document & {
  userId: mongoose.Types.ObjectId;
  language: string;
  levelNumber: number;
  documentation: string;
  exampleCode: string;
  question: string;
  aiFeedback?: string;
  attempts: Array<{
    answer: string;
    correct: boolean;
    feedback: string;
    createdAt: Date;
  }>;
};

const AttemptSchema = new Schema(
  {
    answer: { type: String, required: true },
    correct: { type: Boolean, required: true },
    feedback: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const LevelSchema = new Schema<LevelDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    language: { type: String, required: true },
    levelNumber: { type: Number, required: true },
    documentation: { type: String, required: true },
    exampleCode: { type: String, required: true },
    question: { type: String, required: true },
    aiFeedback: String,
    attempts: { type: [AttemptSchema], default: [] }
  },
  { timestamps: true }
);

LevelSchema.index({ userId: 1, language: 1, levelNumber: 1 }, { unique: true });

export const Level = models.Level || model<LevelDocument>("Level", LevelSchema);
