import express, { json } from "express";

import { categoriesRoutes } from "./routes";

const app = express();

// Middlewares de dependência
app.use(json());

// Rotas
app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is running on port 3333! 🚀"));
