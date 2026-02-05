import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    await connectDb();
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      name,
      passwordHash,
      provider: "credentials"
    });

    const token = signToken({ sub: user.id, email: user.email, name: user.name });
    const response = NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, profilePicture: user.profilePicture } });
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
