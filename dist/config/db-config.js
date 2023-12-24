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
exports.connect_db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = require("./env-config");
const connect_db = () => __awaiter(void 0, void 0, void 0, function* () {
    const db_options = {};
    try {
        const conn = yield mongoose_1.default.connect(env_config_1.env_conf.db_uri, db_options);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error.msg}`);
        process.exit();
    }
});
exports.connect_db = connect_db;
