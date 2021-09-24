import express from "express";
import api from "./api/api";
import notFound from "./middlewares/notFound";

const app = express();

app.use("/api", api);

app.use(notFound);

export default app;
