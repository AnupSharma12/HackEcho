"use client";

import { useEffect, useState } from "react";
import PageShell from "../../components/PageShell";
import { useAuth } from "@/lib/auth-context";

export default function SettingsPage() {
  const { user, refresh } = useAuth();
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPrefs, setSavingPrefs] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [autoSave, setAutoSave] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [xpNotifications, setXpNotifications] = useState(false);

  useEffect(() => {
    if (!user) return;
    setName(user.name ?? "");
    setUsername(user.username ?? "");
    setProfilePicture(user.profilePicture ?? "");
    setAutoSave(user.preferences?.autoSave ?? true);
    setDarkMode(user.preferences?.darkMode ?? true);
    setXpNotifications(user.preferences?.xpNotifications ?? false);
  }, [user]);

  const handleProfileSave = async () => {
    setSavingProfile(true);
    setMessage(null);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, username, profilePicture })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Profile update failed");
      }
      await refresh();
      setMessage("Profile updated.");
    } catch (error: any) {
      setMessage(error.message || "Profile update failed.");
    } finally {
      setSavingProfile(false);
    }
  };

  const handlePrefsSave = async () => {
    setSavingPrefs(true);
    setMessage(null);
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ autoSave, darkMode, xpNotifications })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Settings update failed");
      }
      await refresh();
      setMessage("Settings saved.");
    } catch (error: any) {
      setMessage(error.message || "Settings update failed.");
    } finally {
      setSavingPrefs(false);
    }
  };

  return (
    <PageShell
      title="Settings"
      description="Tune your notifications, editor preferences, and privacy controls."
    >
      {message ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-chalk-white/70">
          {message}
        </div>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Profile</h3>
          <div className="mt-4 space-y-4 text-sm text-chalk-white/70">
            <label className="block">
              <span className="text-xs uppercase text-chalk-white/50">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase text-chalk-white/50">Username</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
                placeholder="your-handle"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase text-chalk-white/50">Avatar URL</span>
              <input
                value={profilePicture}
                onChange={(event) => setProfilePicture(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-3 py-2 text-sm text-chalk-white"
                placeholder="https://..."
              />
            </label>
            <button
              onClick={handleProfileSave}
              disabled={!user || savingProfile}
              className="rounded-full bg-electric-cyan px-4 py-2 text-xs font-semibold text-industrial-after-dark disabled:opacity-50"
            >
              {savingProfile ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Preferences</h3>
          <div className="mt-4 space-y-4 text-sm text-chalk-white/70">
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3">
              Editor auto-save
              <input
                type="checkbox"
                className="accent-electric-cyan"
                checked={autoSave}
                onChange={(event) => setAutoSave(event.target.checked)}
              />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3">
              Dark mode
              <input
                type="checkbox"
                className="accent-electric-cyan"
                checked={darkMode}
                onChange={(event) => setDarkMode(event.target.checked)}
              />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-industrial-after-dark/70 px-4 py-3">
              XP notifications
              <input
                type="checkbox"
                className="accent-electric-cyan"
                checked={xpNotifications}
                onChange={(event) => setXpNotifications(event.target.checked)}
              />
            </label>
            <button
              onClick={handlePrefsSave}
              disabled={!user || savingPrefs}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-chalk-white/80 disabled:opacity-50"
            >
              {savingPrefs ? "Saving..." : "Save Preferences"}
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-industrial-after-dark/70 p-6">
          <h3 className="text-lg font-semibold">Security</h3>
          <div className="mt-4 space-y-4 text-sm text-chalk-white/70">
            <button className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70">
              Reset Password
            </button>
            <button className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70">
              Two-Factor Authentication
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
