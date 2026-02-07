import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";

export async function PUT(request: Request) {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { name, username, profilePicture } = body;

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedUsername = typeof username === "string" ? username.trim() : "";
  const trimmedPicture = typeof profilePicture === "string" ? profilePicture.trim() : "";

  if (!trimmedUsername) {
    return NextResponse.json({ message: "Username is required" }, { status: 400 });
  }

  await connectDb();

  const existing = await User.findOne({
    username: trimmedUsername,
    _id: { $ne: auth.sub }
  });

  if (existing) {
    return NextResponse.json({ message: "Username already taken" }, { status: 409 });
  }

  const user = await User.findByIdAndUpdate(
    auth.sub,
    {
      $set: {
        name: trimmedName || trimmedUsername,
        username: trimmedUsername,
        profilePicture: trimmedPicture || undefined
      }
    },
    { new: true }
  );

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      profilePicture: user.profilePicture
    }
  });
}
