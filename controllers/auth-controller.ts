import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { UserDb, VendorDb } from "../database";
import { generateToken } from "../utils/generateToken";

// User Registration
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, address } = req.body;
  try {
    const existingUser = await UserDb.findUserByEmail(email);
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserDb.createUser({
      name,
      email,
      password: hashedPassword,
      address,
    });
    const token = generateToken(user._id, "user");

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User Login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserDb.findUserByEmail(email);
    if (!user) return res.status(404).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id, "user");
    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Vendor Registration
export const registerVendor = async (req: Request, res: Response) => {
  const { name, email, password, storeName, storeDescription, address } =
    req.body;
  try {
    const existingVendor = await VendorDb.findVendorByEmail(email);
    if (existingVendor)
      return res.status(400).json({ message: "Vendor already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const vendor = await VendorDb.createVendor({
      name,
      email,
      password: hashedPassword,
      storeName,
      storeDescription,
      address,
    });
    const token = generateToken(vendor._id, "vendor");

    res.status(201).json({ token, vendor });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Vendor Login
export const loginVendor = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const vendor = await VendorDb.findVendorByEmail(email);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(vendor._id, "vendor");
    res.status(200).json({ token, vendor });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
