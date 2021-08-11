import express, { json } from "express";

import { CategoriesRoutes, SpecificationsRoutes } from "./routes";

const app = express();

// Middlewares de dependência
app.use(json());

// Rotas
app.use("/categories", CategoriesRoutes);

app.use("/specifications", SpecificationsRoutes);

app.listen(3333, () => console.log("Server is running on port 3333! 🚀"));
