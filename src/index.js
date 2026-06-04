import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import mongoose from "mongoose";

dotenv.config({
  path: "./env",
  quiet: true,
});


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running on port", ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("connection filed: ", err.message);
  process.exit(1);
});
