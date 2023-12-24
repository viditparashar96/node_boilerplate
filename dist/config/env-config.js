"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env_conf = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env_conf = {
    port: process.env.PORT || "",
    db_uri: process.env.DB_URI || "",
    node_env: process.env.NODE_ENV || "",
    jwt_secret: process.env.JWT_SECRET || "",
    salt_round: process.env.SALT_ROUND || "",
    smtp_host: process.env.SMTP_HOST || "",
    smtp_port: process.env.SMTP_PORT || "",
    smtp_user: process.env.SMTP_USER || "",
    smtp_pass: process.env.SMTP_PASS || "",
    client_url: process.env.FRONTEND_URL || "",
};
