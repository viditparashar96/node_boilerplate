import express from "express";
import {
  loginUser,
  loginVendor,
  registerUser,
  registerVendor,
} from "../controllers/auth-controller";
import { authenticateUser } from "../middlewares/auth-middleware";
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

// Current Logged in User

router.get("/me", authenticateUser, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.status(200).json({
    message: "Successfully retrieved user",
    user: req.user.data,
    role: req.user.role,
  });
});

export default router;
