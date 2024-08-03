import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import companyRouter from "./routes/companyRouter.js";
import userRouter from "./routes/userRouter.js";
import profileRouter from "./routes/profileRouter.js";
import pitchRouter from "./routes/pitchRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", companyRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", profileRouter);
app.use("/api/v1", pitchRouter);

connectDB().then(() => {
  const port = process.env.PORT || 8080;
  app
    .listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
    .on("error", (err) => {
      console.error(err);
    });
});
