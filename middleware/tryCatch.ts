import { Request, Response, NextFunction } from "express";
const tryCatch = (errFunction: Function) => (req: Request, res: Response, next: NextFunction) => {
  try {
    return errFunction(req, res, next);
  } catch (error) {
    return next(error);
  }
};
export default tryCatch;
