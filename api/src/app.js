import express from "express";
import rotas from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", rotas);

export default app;
