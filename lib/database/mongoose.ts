import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables.");
}

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// ✅ Fix: Extend `globalThis` properly to avoid `any`
declare global {
  // Extend globalThis only in the NodeJS environment
  namespace NodeJS {
    interface Global {
      mongoose?: MongooseConnection;
    }
  }
}

const globalWithMongoose = global as unknown as {
  mongoose?: MongooseConnection;
};

// ✅ Fix: Use `globalWithMongoose` instead of `(globalThis as any).mongoose`
let cached: MongooseConnection = globalWithMongoose.mongoose ?? {
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

  globalWithMongoose.mongoose = cached; // ✅ Store the connection globally with correct typing

  return cached.conn;
};
