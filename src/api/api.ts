import express from "express";
import sensorData from "./sensorData/sensorData.routes";

const router = express.Router();

router.use("/sensor_data", sensorData);

export default router;
