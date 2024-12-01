import express, { Express, Request, Response } from "express";
import logger from "morgan";
import { connect_db } from "./config/db-config";
import { env_conf } from "./config/env-config";
import authRoutes from "./routes/auth-route";

const cors = require("cors");

var cookieParser = require("cookie-parser");
const hello_route = require("./routes/hello-route");
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const start = (): void => {
  try {
    connect_db();
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at ${
          env_conf.node_env == "dev" ? `http://localhost:${port}` : port
        }`
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
