import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDb ${connect.connection.host}`);
  } catch (error) {
    console.log("Failed to connect to DB", error);
    process.exit(1);
  }
};
