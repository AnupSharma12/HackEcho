import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export function middleware(request: NextRequest) {
  const protectedPaths = ["/dashboard", "/levels", "/profile", "/settings"];
  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));

  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get("hackecho_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/levels/:path*", "/profile/:path*", "/settings/:path*"]
};
