import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in environment");
}

export type AuthPayload = {
  sub: string;
  email: string;
  name?: string;
  provider?: string;
};

export function signToken(payload: AuthPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as AuthPayload;
}
