import mongoose, { Schema, models, model } from "mongoose";

export type UserDocument = mongoose.Document & {
  name?: string;
  email: string;
  passwordHash?: string;
  provider?: "credentials" | "google" | "github";
  providerId?: string;
  currentLevelByLanguage: Record<string, number>;
  progress: Array<{
    language: string;
    level: number;
    completed: boolean;
    score?: number;
    feedback?: string;
    attempts: number;
    updatedAt: Date;
  }>;
};

const ProgressSchema = new Schema(
  {
    language: { type: String, required: true },
    level: { type: Number, required: true },
    completed: { type: Boolean, default: false },
    score: Number,
    feedback: String,
    attempts: { type: Number, default: 0 },
    updatedAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const UserSchema = new Schema<UserDocument>(
  {
    name: String,
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: String,
    provider: { type: String, default: "credentials" },
    providerId: String,
    currentLevelByLanguage: { type: Schema.Types.Mixed, default: {} },
    progress: { type: [ProgressSchema], default: [] }
  },
  { timestamps: true }
);

export const User = models.User || model<UserDocument>("User", UserSchema);
