import express, { ErrorRequestHandler } from "express";
import api from "./api/api";
import errorHandler from "./middlewares/errorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.use("/api", api);

app.use(notFound);

app.use(errorHandler as ErrorRequestHandler);

export default app;
