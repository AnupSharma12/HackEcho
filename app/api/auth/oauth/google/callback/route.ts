import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  if (!code) {
    return NextResponse.redirect(`${baseUrl}/login?message=Google login failed`);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || "";
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET || "";
  const redirectUri = `${baseUrl}/api/auth/oauth/google/callback`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    })
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token as string;

  const profileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const profile = await profileRes.json();

  await connectDb();
  let user = await User.findOne({ email: profile.email });
  if (!user) {
    // Generate username from email
    const baseUsername = profile.email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
    let username = baseUsername;
    let counter = 1;
    
    // Ensure unique username
    while (await User.findOne({ username })) {
      username = `${baseUsername}${counter}`;
      counter++;
    }

    user = await User.create({
      email: profile.email,
      username,
      name: profile.name,
      provider: "google",
      providerId: profile.sub,
      profilePicture: profile.picture,
      xp: 0,
      completedLevels: [],
      languageProgress: {}
    });
  } else if (!user.profilePicture && profile.picture) {
    user.profilePicture = profile.picture;
    await user.save();
  }

  const token = signToken({ sub: user.id, email: user.email, name: user.name, provider: "google" });
  const response = NextResponse.redirect(`${baseUrl}/dashboard`);
  response.cookies.set("hackecho_token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return response;
}
