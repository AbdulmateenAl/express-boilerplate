import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils";

export class ErrorMiddleware {
    static handler(err: unknown, req: Request, res: Response, next: NextFunction) {
        const statusCode = (err instanceof AppError ? err.statusCode : 500);
        const status = (err instanceof AppError ? err.status : "error");
        const message = (err instanceof AppError ? err.message : "Internal Server Error");

        if(!(err instanceof AppError)) {
            console.error("Unexpected Error: ", err);
        };

        res.status(statusCode).json({
            status,
            message
        })
    }
}