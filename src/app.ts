import express from "express";

const app = express();

app.post("/update", (req, res) => {
  console.log(req.body);
  res.send();
});

export default app;
