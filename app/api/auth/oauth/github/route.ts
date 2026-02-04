import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const clientId = process.env.GITHUB_CLIENT_ID || "";
  const redirectUri = `${baseUrl}/api/auth/oauth/github/callback`;

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", "read:user user:email");

  return NextResponse.redirect(url.toString());
}
