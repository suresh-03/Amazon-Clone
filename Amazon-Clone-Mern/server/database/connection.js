import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected at ${mongoose.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
