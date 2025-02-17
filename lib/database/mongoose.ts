import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables.");
}

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// ✅ Fix: Use `globalThis` with explicit casting
const globalWithMongoose = globalThis as unknown as {
  mongoose?: MongooseConnection;
};

// ✅ Fix: Ensure `cached` is typed correctly
const cached: MongooseConnection = globalWithMongoose.mongoose ?? {
  conn: null,
  promise: null,
};

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn; // ✅ Return cached connection if available

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "myDatabase", // Change this to your actual database name
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  globalWithMongoose.mongoose = cached; // ✅ Store connection globally with correct typing

  return cached.conn;
};
