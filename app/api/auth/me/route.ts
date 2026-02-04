import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { User } from "@/models/User";
import { getAuthUser } from "@/lib/auth-server";

export async function GET() {
  const auth = await getAuthUser();
  if (!auth) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  await connectDb();
  const user = await User.findById(auth.sub);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      provider: user.provider
    }
  });
}
