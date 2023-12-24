import { connect_db } from "./config/db-config";
import { env_conf } from "./config/env-config";
import express, { Express, Request, Response } from "express";
const cors = require("cors");
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "morgan";
import { specs } from "./config/swagger-config";
var cookieParser = require("cookie-parser");
const hello_route = require("./routes/hello-route");
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use(cookieParser());
app.use("/api/v1", hello_route);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);





app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

const start = (): void => {
  try {
    connect_db();
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at ${
          env_conf.node_env == "dev" ? `http://localhost:${port}` : port
        } \n📄[docs]: ${
          env_conf.node_env == "dev" ? `http://localhost:${port}/api-docs` : ""
        }`
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
