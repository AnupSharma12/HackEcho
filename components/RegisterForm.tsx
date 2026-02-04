"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../lib/auth-context";

export function RegisterForm() {
  const router = useRouter();
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await auth.signUpWithEmail(email, password, name);
      router.push("/login?message=Check your email to confirm your account");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGitHub = async () => {
    setError("");
    setLoading(true);
    try {
      await auth.signInWithGitHub();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await auth.signInWithGoogle();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleEmailSignUp} className="space-y-4">
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}
      <div>
        <label className="text-xs uppercase text-chalk-white/60">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
          required
        />
      </div>
      <div>
        <label className="text-xs uppercase text-chalk-white/60">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@hackecho.dev"
          className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
          required
        />
      </div>
      <div>
        <label className="text-xs uppercase text-chalk-white/60">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className="mt-2 w-full rounded-xl border border-white/10 bg-industrial-after-dark px-4 py-3 text-sm text-chalk-white"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-electric-cyan px-4 py-3 text-sm font-semibold text-industrial-after-dark shadow-glow disabled:opacity-50"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-industrial-after-dark px-2 text-chalk-white/50">or</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleGitHub}
        disabled={loading}
        className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70 hover:border-electric-cyan/50 disabled:opacity-50"
      >
        Sign up with GitHub
      </button>
      <button
        type="button"
        onClick={handleGoogle}
        disabled={loading}
        className="w-full rounded-full border border-white/10 px-4 py-2 text-sm text-chalk-white/70 hover:border-electric-cyan/50 disabled:opacity-50"
      >
        Sign up with Google
      </button>

      <p className="text-xs text-chalk-white/60">
        Already have an account?{" "}
        <Link href="/login" className="text-electric-cyan">
          Sign in
        </Link>
      </p>
    </form>
  );
}
