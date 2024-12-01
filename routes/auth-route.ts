import express from "express";
import {
  loginUser,
  loginVendor,
  registerUser,
  registerVendor,
} from "../controllers/auth-controller";
import { validateSchema } from "../middlewares/validateSchema-middleware";
import {
  userLoginSchema,
  userRegisterSchema,
  vendorLoginSchema,
  vendorRegisterSchema,
} from "../schemas/authSchemas";

const router = express.Router();

// User Routes
router.post("/user/register", validateSchema(userRegisterSchema), registerUser);
router.post("/user/login", validateSchema(userLoginSchema), loginUser);

// Vendor Routes
router.post(
  "/vendor/register",
  validateSchema(vendorRegisterSchema),
  registerVendor
);
router.post("/vendor/login", validateSchema(vendorLoginSchema), loginVendor);

export default router;
