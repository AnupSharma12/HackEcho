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
  completedQuests: string[];
  currentStreak: number;
  longestStreak: number;
  lastActiveAt?: Date;
  preferences?: {
    autoSave: boolean;
    darkMode: boolean;
    xpNotifications: boolean;
  };
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
    completedQuests: { type: [String], default: [] },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastActiveAt: { type: Date },
    preferences: {
      autoSave: { type: Boolean, default: true },
      darkMode: { type: Boolean, default: true },
      xpNotifications: { type: Boolean, default: false }
    },
    languageProgress: { type: Schema.Types.Mixed, default: {} }
  },
  { timestamps: true }
);

export const User = models.User || model<UserDocument>("User", UserSchema);
