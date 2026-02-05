import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    await connectDb();
    const user = await User.findOne({ email });
    if (!user || !user.passwordHash) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken({ sub: user.id, email: user.email, name: user.name, provider: user.provider });
    const response = NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, profilePicture: user.profilePicture } });
    response.cookies.set("hackecho_token", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Login failed" }, { status: 500 });
  }
}
