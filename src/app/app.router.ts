import type { Request, Response } from "express";
import { Router } from "express";
import { HttpStatus } from "../core";
import { ResponseHandler } from "../core";

export const appRouter = Router();

appRouter.get('/', (_: Request, res: Response) => {
    return ResponseHandler.success(res, HttpStatus.OK, "Server is running");
});