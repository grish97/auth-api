import { Request, Response, NextFunction } from "express";
import { ValidationResult } from "joi";
import AppError from "../services/AppError";

type TValidateCallback<T> = (payload: Partial<T>) => Promise<T>;

export default function validateBody<T>(validateCb: TValidateCallback<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await validateCb(req.body);
      next();
    } catch (err: any) {
      next(new AppError(err.message, 400));
    }
  };
}
