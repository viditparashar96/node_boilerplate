import {
  Errback,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";

export const not_found = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const error_handler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    msg: err.msg,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
