import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import { connectMongoose } from "./util/connectionMongoose.js";

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

await connectMongoose();
app.use("/", userRoute);
app.listen(3010, () => console.log("Server is on PORT:3010"));
