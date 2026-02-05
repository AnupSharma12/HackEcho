"use client";

import { useAuth } from "@/lib/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileMenu() {
  const auth = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (auth.loading || !auth.user) {
    return null;
  }

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/");
  };

  const defaultAvatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${auth.user.email}`;
  const profilePicture = auth.user.profilePicture || defaultAvatarUrl;

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full border border-electric-cyan/30 p-1 hover:border-electric-cyan transition"
        title={auth.user.name}
      >
        <img
          src={profilePicture}
          alt={auth.user.name || "Profile"}
          className="h-8 w-8 rounded-full"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = defaultAvatarUrl;
          }}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-industrial-after-dark shadow-lg z-50">
            <div className="border-b border-white/10 p-4">
              <p className="font-semibold text-chalk-white">{auth.user.name || auth.user.email}</p>
              <p className="text-xs text-chalk-white/60">{auth.user.email}</p>
            </div>

            <nav className="space-y-1 p-2">
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm text-chalk-white/80 hover:bg-electric-cyan/10 hover:text-electric-cyan transition"
              >
                📊 Dashboard
              </Link>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm text-chalk-white/80 hover:bg-electric-cyan/10 hover:text-electric-cyan transition"
              >
                👤 Profile
              </Link>
              <Link
                href="/settings"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm text-chalk-white/80 hover:bg-electric-cyan/10 hover:text-electric-cyan transition"
              >
                ⚙️ Settings
              </Link>
              <Link
                href="/badges"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm text-chalk-white/80 hover:bg-electric-cyan/10 hover:text-electric-cyan transition"
              >
                🏆 Badges
              </Link>
              <div className="border-t border-white/10 pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full rounded-lg px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 transition"
                >
                  🚪 Logout
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
