import "reflect-metadata";
import express, { json } from "express";
import swagger from "swagger-ui-express";

import "./database";
import "./shared/container";

import swaggerConfig from "./swagger.json";

import { routes } from "./routes";

const app = express();

app.use(json());

app.use("/docs", swagger.serve, swagger.setup(swaggerConfig));

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333! 🚀"));
