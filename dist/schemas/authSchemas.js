"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorLoginSchema = exports.vendorRegisterSchema = exports.userLoginSchema = exports.userRegisterSchema = void 0;
const zod_1 = require("zod");
// User Registration Schema
exports.userRegisterSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name must be at least 3 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    address: zod_1.z.array(zod_1.z.object({
        street: zod_1.z.string(),
        city: zod_1.z.string(),
        state: zod_1.z.string(),
        zip: zod_1.z.string(),
        country: zod_1.z.string(),
    })),
});
// User Login Schema
exports.userLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string(),
});
// Vendor Registration Schema
exports.vendorRegisterSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name must be at least 3 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    storeName: zod_1.z.string().min(3, "Store name must be at least 3 characters"),
    storeDescription: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
});
// Vendor Login Schema
exports.vendorLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string(),
});
