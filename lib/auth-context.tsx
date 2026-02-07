"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  username?: string;
  name?: string;
  provider?: string;
  profilePicture?: string;
  xp?: number;
  completedLevels?: string[];
  completedQuests?: string[];
  currentStreak?: number;
  longestStreak?: number;
  preferences?: {
    autoSave: boolean;
    darkMode: boolean;
    xpNotifications: boolean;
  };
  languageProgress?: Record<string, {
    currentLevel: number;
    completedLevels: string[];
    totalXp: number;
  }>;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUpWithEmail: (email: string, password: string, name: string, username: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGitHub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function fetchJson(url: string, options?: RequestInit) {
  const res = await fetch(url, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson("/api/auth/me");
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const signUpWithEmail = async (email: string, password: string, name: string, username: string) => {
    await fetchJson("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name, username })
    });
    await refresh();
  };

  const signInWithEmail = async (email: string, password: string) => {
    await fetchJson("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    await refresh();
  };

  const signInWithGitHub = async () => {
    window.location.href = "/api/auth/oauth/github";
  };

  const signInWithGoogle = async () => {
    window.location.href = "/api/auth/oauth/google";
  };

  const signOut = async () => {
    await fetchJson("/api/auth/logout", { method: "POST" });
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUpWithEmail,
        signInWithEmail,
        signInWithGitHub,
        signInWithGoogle,
        signOut,
        refresh
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
