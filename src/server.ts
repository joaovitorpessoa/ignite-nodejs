import express, { json } from "express";

import { CategoriesRoutes } from "./routes";

const app = express();

// Middlewares de dependência
app.use(json());

// Rotas
app.use("/categories", CategoriesRoutes);

app.listen(3333, () => console.log("Server is running on port 3333! 🚀"));
