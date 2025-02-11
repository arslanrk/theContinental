import mongoose from "mongoose";

const MONGO_URI =
  process.env.DB_URL || "mongodb://localhost:27017/continental_db";

if (!MONGO_URI) {
  throw new Error("Set the env variables");
}

