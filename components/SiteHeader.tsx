"use client";

import Link from "next/link";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "@/lib/auth-context";

const publicNavLinks = [
  { href: "/", label: "Home" },
  { href: "/levels", label: "Levels" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" }
];

const authenticatedNavLinks = [
  { href: "/", label: "Home" },
  { href: "/levels", label: "Levels" },
  { href: "/leaderboard", label: "Leaderboard" }
];

export default function SiteHeader() {
  const auth = useAuth();
  const isLoggedIn = !auth.loading && !!auth.user;
  const navLinks = isLoggedIn ? authenticatedNavLinks : publicNavLinks;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-industrial-after-dark/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Logo />
        <nav className="flex flex-1 flex-wrap items-center gap-3 text-xs text-chalk-white/70">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-3 py-1 transition hover:border-electric-cyan/60 hover:text-electric-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {isLoggedIn && <ProfileMenu />}
      </div>
    </header>
  );
}
