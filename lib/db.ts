import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

const mongooseCache = cached;

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI not defined");
  }

  if (mongooseCache.conn) return mongooseCache.conn;

  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  mongooseCache.conn = await mongooseCache.promise;
  return mongooseCache.conn;
}
