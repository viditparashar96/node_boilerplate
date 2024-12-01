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
exports.loginVendor = exports.registerVendor = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = require("../database");
const generateToken_1 = require("../utils/generateToken");
// User Registration
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, address } = req.body;
    try {
        const existingUser = yield database_1.UserDb.findUserByEmail(email);
        if (existingUser)
            return res.status(400).json({ message: "User already exists" });
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield database_1.UserDb.createUser({
            name,
            email,
            password: hashedPassword,
            address,
        });
        const token = (0, generateToken_1.generateToken)(user._id, "user");
        res.status(201).json({ token, user });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.registerUser = registerUser;
// User Login
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield database_1.UserDb.findUserByEmail(email);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        //@ts-ignore
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid credentials" });
        const token = (0, generateToken_1.generateToken)(user._id, "user");
        res.status(200).json({ token, user });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.loginUser = loginUser;
// Vendor Registration
const registerVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, storeName, storeDescription, address } = req.body;
    try {
        const existingVendor = yield database_1.VendorDb.findVendorByEmail(email);
        if (existingVendor)
            return res.status(400).json({ message: "Vendor already exists" });
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const vendor = yield database_1.VendorDb.createVendor({
            name,
            email,
            password: hashedPassword,
            storeName,
            storeDescription,
            address,
        });
        const token = (0, generateToken_1.generateToken)(vendor._id, "vendor");
        res.status(201).json({ token, vendor });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.registerVendor = registerVendor;
// Vendor Login
const loginVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const vendor = yield database_1.VendorDb.findVendorByEmail(email);
        if (!vendor)
            return res.status(404).json({ message: "Vendor not found" });
        const isMatch = yield bcryptjs_1.default.compare(password, vendor.password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid credentials" });
        const token = (0, generateToken_1.generateToken)(vendor._id, "vendor");
        res.status(200).json({ token, vendor });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.loginVendor = loginVendor;
