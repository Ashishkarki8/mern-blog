import mongoose from "mongoose";
import appConfig from "./config.js";
const connectDb = () => {
  mongoose.connect(appConfig.mongoUri)
    .then(() => console.log("Connected to DB successfully"))
    .catch(err => console.error("Error connecting to DB:", err));
};

export default connectDb;