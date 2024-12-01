"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../database");
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || req.cookies.token; // Expecting "Bearer <token>"
    if (!token) {
        return res
            .status(401)
            .json({ message: "No token provided. Access denied." });
    }
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        console.log("decoded data===>", decoded);
        // Determine user role and fetch data
        if (decoded.role === "user") {
            const user = yield database_1.UserDb.findUserById(decoded.id);
            if (!user)
                return res.status(404).json({ message: "User not found" });
            req.user = { id: user._id, role: "user", data: user };
        }
        else if (decoded.role === "vendor") {
            const vendor = yield database_1.VendorDb.findVendorById(decoded.id);
            if (!vendor)
                return res.status(404).json({ message: "Vendor not found" });
            req.user = { id: vendor._id, role: "vendor", data: vendor };
        }
        else {
            return res.status(403).json({ message: "Invalid role" });
        }
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        res.status(401).json({ message: "Invalid or expired token", error });
    }
});
exports.authenticateUser = authenticateUser;
