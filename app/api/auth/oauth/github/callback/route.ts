import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  if (!code) {
    return NextResponse.redirect(`${baseUrl}/login?message=GitHub login failed`);
  }

  const clientId = process.env.GITHUB_CLIENT_ID || "";
  const clientSecret = process.env.GITHUB_CLIENT_SECRET || "";

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code
    })
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token as string;

  const profileRes = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const profile = await profileRes.json();

  const emailsRes = await fetch("https://api.github.com/user/emails", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const emails = await emailsRes.json();
  const primaryEmail = Array.isArray(emails)
    ? emails.find((item) => item.primary)?.email || emails[0]?.email
    : undefined;

  const email = primaryEmail || `${profile.login}@users.noreply.github.com`;

  await connectDb();
  let user = await User.findOne({ email });
  if (!user) {
    // Generate username from GitHub login or email
    const baseUsername = profile.login || email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
    let username = baseUsername;
    let counter = 1;
    
    // Ensure unique username
    while (await User.findOne({ username })) {
      username = `${baseUsername}${counter}`;
      counter++;
    }

    user = await User.create({
      email,
      username,
      name: profile.name || profile.login,
      provider: "github",
      providerId: profile.id?.toString(),
      profilePicture: profile.avatar_url,
      xp: 0,
      completedLevels: [],
      completedQuests: [],
      currentStreak: 0,
      longestStreak: 0,
      preferences: {
        autoSave: true,
        darkMode: true,
        xpNotifications: false
      },
      languageProgress: {}
    });
  } else if (!user.profilePicture && profile.avatar_url) {
    user.profilePicture = profile.avatar_url;
    await user.save();
  }

  const token = signToken({ sub: user.id, email: user.email, name: user.name, provider: "github" });
  const response = NextResponse.redirect(`${baseUrl}/dashboard`);
  response.cookies.set("hackecho_token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return response;
}
