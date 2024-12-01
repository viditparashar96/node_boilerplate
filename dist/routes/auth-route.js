"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth-controller");
const validateSchema_middleware_1 = require("../middlewares/validateSchema-middleware");
const authSchemas_1 = require("../schemas/authSchemas");
const router = express_1.default.Router();
// User Routes
router.post("/user/register", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.userRegisterSchema), auth_controller_1.registerUser);
router.post("/user/login", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.userLoginSchema), auth_controller_1.loginUser);
// Vendor Routes
router.post("/vendor/register", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.vendorRegisterSchema), auth_controller_1.registerVendor);
router.post("/vendor/login", (0, validateSchema_middleware_1.validateSchema)(authSchemas_1.vendorLoginSchema), auth_controller_1.loginVendor);
exports.default = router;
