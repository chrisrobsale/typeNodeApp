import express, { NextFunction, Request, Response } from "express";
import usersRouter from "./routes/users";
import categoriesRouter from "./routes/category";
import productsRouter from "./routes/product";
import connectDB from "./db/connect";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/category", categoriesRouter);
app.use("/api/product", productsRouter);

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
