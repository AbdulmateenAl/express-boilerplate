import type { Request, Response } from "express";

export class ResponseHandler {
    static success(res: Response, statusCode: number, message: string, data?: any) {
        res.status(statusCode).json({
            success: true,
            message,
            data: data ?? null //include data if provided else null
        });
    };

    static error(res: Response, error: { statusCode?: number, message: string, data?: unknown }) {
        res.status(error.statusCode ?? 500).json({
            status: "error",
            message: error.message,
            data: error.data ?? null
        })
    }
}