import express, { Request, Response, NextFunction } from "express";
import protobuf from "protobufjs";
import { DeviceUpdateMsg } from "./protobufClasses/device/update";

const app = express();

app.post("/update", express.raw(), (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = new Uint8Array(req.body);

    if (payload.length <= 0) {
      res.send({ error: "no body" });
      return next();
    }

    const msg = DeviceUpdateMsg.decode(payload);

    res.send({ deviceId: msg.deviceId });
  } catch (e) {
    if (e instanceof protobuf.util.ProtocolError) {
      // e.instance holds the so far decoded message with missing required fields
      res.send({ error: "required fields are missing" });
    } else {
      // wire format is invalid
      res.send({ error: "invalid format" });
    }
  }
});

export default app;
