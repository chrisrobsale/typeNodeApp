import express, { NextFunction, Request, Response } from "express";
import usersRouter from "./routes/users";

const app = express();
app.use(express.json());
app.use("/api/users", usersRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
