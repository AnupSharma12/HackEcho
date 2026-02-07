"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "@/lib/auth-context";

const publicNavLinks = [
  { href: "/", label: "Home" },
  { href: "/levels", label: "Levels" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/quests", label: "Quests" },
  { href: "/more", label: "More" }
];

const authenticatedNavLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/levels", label: "Levels" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/quests", label: "Quests" }
];

export default function SiteHeader() {
  const auth = useAuth();
  const isLoggedIn = !auth.loading && !!auth.user;
  const navLinks = isLoggedIn ? authenticatedNavLinks : publicNavLinks;
  const pathname = usePathname();

  const getNavClass = (href: string) => {
    const isActive = pathname === href;
    return `rounded-full border px-3 py-1 text-xs transition ${
      isActive
        ? "border-electric-cyan/70 text-electric-cyan"
        : "border-white/10 text-chalk-white/70 hover:border-electric-cyan/60 hover:text-electric-cyan"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-industrial-after-dark/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-chalk-white/60 md:inline-block">
            Learn by doing
          </span>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-3 text-xs lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getNavClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-chalk-white/80 transition hover:border-electric-cyan/60 hover:text-electric-cyan"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-electric-cyan px-4 py-2 text-xs font-semibold text-industrial-after-dark shadow-glow transition hover:bg-electric-cyan/90"
              >
                Get started
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/levels"
                className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-chalk-white/80 transition hover:border-electric-cyan/60 hover:text-electric-cyan md:inline-flex"
              >
                Jump back in
              </Link>
              <ProfileMenu />
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-white/5 px-4 py-2 text-[11px] text-chalk-white/60 lg:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={getNavClass(link.href)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
