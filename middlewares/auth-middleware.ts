import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserDb, VendorDb } from "../database";

interface JwtPayload {
  id: string;
  role: string;
}

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token; // Expecting "Bearer <token>"
  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided. Access denied." });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    console.log("decoded data===>", decoded);

    if (decoded.role === "user") {
      const user = await UserDb.findUserById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      req.user = { id: user._id, role: "user", data: user };
    } else if (decoded.role === "vendor") {
      const vendor = await VendorDb.findVendorById(decoded.id);
      if (!vendor) return res.status(404).json({ message: "Vendor not found" });
      req.user = { id: vendor._id, role: "vendor", data: vendor };
    } else {
      return res.status(403).json({ message: "Invalid role" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token", error });
  }
};
