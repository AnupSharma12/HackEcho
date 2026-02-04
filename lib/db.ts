import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in environment");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = global as typeof globalThis & { mongoose?: MongooseCache };

const cached: MongooseCache = globalWithMongoose.mongoose ?? {
  conn: null,
  promise: null
};

globalWithMongoose.mongoose = cached;

export async function connectDb() {
  if (cached?.conn) return cached.conn;
  if (!cached?.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "hackecho"
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
