//dotenv config
import dotenv from "dotenv";
dotenv.config()


import mongoose from "mongoose";
const mongoServer = process.env.MONGODB_SERVER;

const mongo = {
  connect: async () => {
    try {
      await mongoose.connect(mongoServer);
      console.log(`Connected To The Database`);
    } catch (error) {
      console.error("Error connecting to Database:", error);
    }
  },
};


export default mongo;
