import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables.");
}

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// ✅ Fix: Use `globalThis` to persist connection in serverless environments
let cached: MongooseConnection = (globalThis as any).mongoose || {
  conn: null,
  promise: null,
};

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn; // ✅ Return existing connection if available

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "myDatabase", // Change this to your actual database name
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  (globalThis as any).mongoose = cached; // ✅ Store the connection globally

  return cached.conn;
};
