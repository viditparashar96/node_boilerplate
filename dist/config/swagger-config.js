"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Demo API with Swagger",
            version: "0.1.0",
            description: "Demo api endpoints",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "",
                url: "",
                email: "",
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["**/*.ts"]
};
exports.specs = (0, swagger_jsdoc_1.default)(options);
