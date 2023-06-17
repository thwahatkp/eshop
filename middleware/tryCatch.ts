import { Request, Response, NextFunction } from "express";
import errorMiddleware from "./errorHandler";
export default (mainFunction: Function) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await mainFunction(req, res, next);
    } catch (error) {
      return next(errorMiddleware);
    }
  };
