import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());

// to access json requests in the body
app.use(express.json());

dotenv.config({ path: "./.env" });

connectDB();

app.get("/", (req, res) => {
  res.send("api is coming up");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `welcome in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
