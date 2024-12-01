"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = require("../config/env-config");
const generateToken = (id, role) => {
    console.log(env_config_1.env_conf.jwt_secret);
    return jsonwebtoken_1.default.sign({ id, role }, env_config_1.env_conf.jwt_secret, {
        expiresIn: env_config_1.env_conf.jwt_expiration,
    });
};
exports.generateToken = generateToken;
