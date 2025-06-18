import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { appRouter } from "./app.router";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
  origin: ['*'], //Allow all origin
  credentials: true //Allow using cookies
}))

app.use("/api/v1", appRouter);