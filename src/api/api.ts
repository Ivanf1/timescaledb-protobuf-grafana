import express from "express";
import device from "./device/device.routes";
import sensorData from "./sensorData/sensorData.routes";
import sensor from "./sensor/sensor.routes";

const router = express.Router();

router.use("/device", device);
router.use("/sensor_data", sensorData);
router.use("/sensor", sensor);

export default router;
