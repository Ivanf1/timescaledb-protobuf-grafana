import express, { Request, Response, NextFunction } from "express";
import protobuf from "protobufjs";
import { DeviceUpdateMsg } from "./protobufClasses/device/update";

const app = express();

// use .raw() middleware to parse body into Buffer
app.post("/update", express.raw(), (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = new Uint8Array(req.body);

    if (payload.length <= 0) {
      res.status(400).send({ error: "no body" });
      return next();
    }

    const msg = DeviceUpdateMsg.decode(payload);

    // console.log(msg);

    res.send({ deviceId: msg.deviceId });
  } catch (e) {
    if (e instanceof protobuf.util.ProtocolError) {
      // e.instance holds the so far decoded message with missing required fields
      res.status(400).send({ error: "required fields are missing" });
      console.log("missing fields");
    } else {
      // wire format is invalid
      res.status(400).send({ error: "invalid format" });
      console.log("invalid format");
    }
  }
});

export default app;
