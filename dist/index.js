"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_config_1 = require("./config/db-config");
const env_config_1 = require("./config/env-config");
const auth_route_1 = __importDefault(require("./routes/auth-route"));
const cors = require("cors");
var cookieParser = require("cookie-parser");
const hello_route = require("./routes/hello-route");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(cors());
app.use((0, morgan_1.default)("dev"));
app.use(cookieParser());
app.use("/api/v1/auth", auth_route_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const start = () => {
    try {
        (0, db_config_1.connect_db)();
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at ${env_config_1.env_conf.node_env == "dev" ? `http://localhost:${port}` : port}`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start();
