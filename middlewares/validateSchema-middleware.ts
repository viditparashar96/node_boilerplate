import { NextFunction, Request, Response } from "express";
import * as z from "zod";
import { ZodSchema } from "zod";
export const validateSchema =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res
          .status(400)
          .json({ errors: err.errors, message: "Invalid data" });
      }
      next(err);
    }
  };
