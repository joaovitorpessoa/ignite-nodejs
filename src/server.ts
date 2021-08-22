import "reflect-metadata";
import express, { json, NextFunction, Request, Response } from "express";
import "express-async-errors";
import swagger from "swagger-ui-express";

import "./database";
import "./shared/container";
import { routes } from "./routes";
import { AppError } from "./errors";

import swaggerConfig from "./swagger.json";

const app = express();

app.use(json());

app.use("/docs", swagger.serve, swagger.setup(swaggerConfig));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    return response.status(500).json({
      message: `Internal server error - ${error.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running on port 3333! 🚀"));
