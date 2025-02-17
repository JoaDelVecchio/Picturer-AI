import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseConnection | undefined;
}

let cached = global.mongoose as MongooseConnection | undefined;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached?.conn) return cached.conn;

  if (!MONGO_URI) throw new Error("Missing MONGO_URI");

  cached!.promise =
    cached!.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "PicturerAI",
      bufferCommands: false,
    });

  cached!.conn = await cached!.promise;
  return cached!.conn;
};
