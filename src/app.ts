import express from "express";
import api from "./api/api";

const app = express();

app.use("/api", api);

export default app;
