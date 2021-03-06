import express, { NextFunction, Request, Response } from "express";
import { DeviceUpdateMsg } from "../../protobufClasses/sensorData/update";
import protobuf from "protobufjs";
import prisma from "../../db/db";
import { Prisma } from ".prisma/client";

const router = express.Router();

// use .raw() middleware to parse body into Buffer
router.post("/create", express.raw(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = new Uint8Array(req.body);

    if (payload.length <= 0) {
      const error = new Error("no body");
      res.status(400);
      return next(error);
    }

    const msg = DeviceUpdateMsg.decode(payload);
    const data: Array<Prisma.sensor_dataCreateManyInput> = [];

    for (let sensor of msg.sensor) {
      if (!Number(sensor.time)) {
        res.status(400);
        const error = new Error("invalid message");
        return next(error);
      }

      data.push({
        sensor_id: Number(sensor.sensorId),
        value: sensor.valueBool
          ? String(sensor.valueBool)
          : sensor.valueFloat
          ? sensor.valueFloat.toString()
          : sensor.valueInt!.toString(),
        timestmp: new Date(Number(sensor.time) * 1000),
        unit_id: Number(sensor.type!) + 1,
      });
    }

    await prisma.sensor_data.createMany({
      data: data,
    });

    res.status(201).end();
  } catch (e) {
    const error = new Error("server error");
    if (e instanceof protobuf.util.ProtocolError) {
      // e.instance holds the so far decoded message with missing required fields
      error.message = "required fields are missing";
      res.status(400);
    } else {
      // wire format is invalid
      error.message = "invalid format";
      res.status(400);
    }
    return next(error);
  }
});

export default router;
