import { z } from "zod";

// User Registration Schema
export const userRegisterSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  address: z.array(
    z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
      country: z.string(),
    })
  ),
});

// User Login Schema
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

// Vendor Registration Schema
export const vendorRegisterSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  storeName: z.string().min(3, "Store name must be at least 3 characters"),
  storeDescription: z.string().optional(),
  address: z.string().optional(),
});

// Vendor Login Schema
export const vendorLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});
