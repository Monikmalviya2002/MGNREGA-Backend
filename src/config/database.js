import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://monikmalviya2:knObj0x9qHuikiYi@monik04.vyrcayb.mongodb.net/MGNREGA"
    );
    console.log("Database connection is successful");
  } catch (err) {
    console.error("Database connection failed", err);
   
  }
}

export default connectDB;
