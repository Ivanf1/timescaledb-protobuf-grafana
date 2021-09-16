import express from "express";

const app = express();

app.post("/update", (_, res) => {
  // console.log(req.body);
  res.send({ message: "nothing" });
});

export default app;
