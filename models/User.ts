import mongoose, { Schema, models, model } from "mongoose";

export type UserDocument = mongoose.Document & {
  name?: string;
  email: string;
  username: string;
  passwordHash?: string;
  provider?: "credentials" | "google" | "github";
  providerId?: string;
  profilePicture?: string;
  xp: number;
  completedLevels: string[];
  languageProgress: Record<string, {
    currentLevel: number;
    completedLevels: string[];
    totalXp: number;
  }>;
};

const UserSchema = new Schema<UserDocument>(
  {
    name: String,
    email: { type: String, required: true, unique: true, index: true },
    username: { type: String, required: true, unique: true, index: true },
    passwordHash: String,
    provider: { type: String, default: "credentials" },
    providerId: String,
    profilePicture: String,
    xp: { type: Number, default: 0 },
    completedLevels: { type: [String], default: [] },
    languageProgress: { type: Schema.Types.Mixed, default: {} }
  },
  { timestamps: true }
);

export const User = models.User || model<UserDocument>("User", UserSchema);
