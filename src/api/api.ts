import express from "express";
import device from "./device/device.routes";
import sensorData from "./sensorData/sensorData.routes";

const router = express.Router();

router.use("/device", device);
router.use("/sensor_data", sensorData);

export default router;
