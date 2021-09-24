import express, { NextFunction, Request, Response } from "express";
import protobuf from "protobufjs";
import { DeviceUpdateMsg } from "../../protobufClasses/sensorData/update";

const router = express.Router();

// use .raw() middleware to parse body into Buffer
router.post("/create", express.raw(), (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = new Uint8Array(req.body);

    if (payload.length <= 0) {
      const error = new Error("no body");
      res.status(400);
      return next(error);
    }

    const msg = DeviceUpdateMsg.decode(payload);

    res.send({ deviceId: msg.deviceId });
  } catch (e) {
    if (e instanceof protobuf.util.ProtocolError) {
      // e.instance holds the so far decoded message with missing required fields
      const error = new Error("required fields are missing");
      res.status(400);
      return next(error);
    } else {
      // wire format is invalid
      const error = new Error("invalid format");
      res.status(400);
      return next(error);
    }
  }
});

export default router;
