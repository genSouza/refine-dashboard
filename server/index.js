//express server
import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import propertyRoutes from "./routes/property.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 3000;

//server config
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//all routes
app.use("/api/v1/properties", propertyRoutes);
app.use("/api/v1/users", userRoutes);

//hello world route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//start server

const startServer = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
