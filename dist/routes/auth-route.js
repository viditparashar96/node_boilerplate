"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth-controller");
const auth_middleware_1 = require("../middlewares/auth-middleware");
const validateSchema_middleware_1 = require("../middlewares/validateSchema-middleware");
const authSchemas_1 = require("../schemas/authSchemas");
const router = express_1.default.Router();
// User Routes
router.post("/user/register", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.userRegisterSchema), auth_controller_1.registerUser);
router.post("/user/login", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.userLoginSchema), auth_controller_1.loginUser);
// Vendor Routes
router.post("/vendor/register", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.vendorRegisterSchema), auth_controller_1.registerVendor);
router.post("/vendor/login", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.vendorLoginSchema), auth_controller_1.loginVendor);
// Current Logged in User
router.get("/me", auth_middleware_1.authenticateUser, (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    res.status(200).json({
        message: "Successfully retrieved user",
        user: req.user.data,
        role: req.user.role,
    });
});
exports.default = router;
