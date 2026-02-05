import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, username } = body;

    if (!email || !password || !username) {
      return NextResponse.json({ message: "Email, password, and username are required" }, { status: 400 });
    }

    await connectDb();
    
    // Check if email or username already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return NextResponse.json({ message: "Email already exists" }, { status: 409 });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return NextResponse.json({ message: "Username already taken" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      name: name || username,
      passwordHash,
      provider: "credentials",
      xp: 0,
      completedLevels: [],
      languageProgress: {}
    });

    const token = signToken({ sub: user.id, email: user.email, name: user.name });
    const response = NextResponse.json({ 
      user: { 
        id: user.id, 
        email: user.email, 
        username: user.username,
        name: user.name, 
        profilePicture: user.profilePicture,
        xp: user.xp
      } 
    });
    response.cookies.set("hackecho_token", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Registration failed" }, { status: 500 });
  }
}
