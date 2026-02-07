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
  const { autoSave, darkMode, xpNotifications } = body;

  await connectDb();

  const user = await User.findByIdAndUpdate(
    auth.sub,
    {
      $set: {
        "preferences.autoSave": Boolean(autoSave),
        "preferences.darkMode": Boolean(darkMode),
        "preferences.xpNotifications": Boolean(xpNotifications)
      }
    },
    { new: true }
  );

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    preferences: user.preferences
  });
}
