import express, { NextFunction, Request, Response } from "express";
import prisma from "../../db/db";

const router = express.Router();

router.post("/create", express.json(), async (req: Request, res: Response, next: NextFunction) => {
  const { deviceId }: { deviceId: number } = req.body;

  try {
    const sensor = await prisma.sensor.create({
      data: {
        device_id: deviceId,
      },
    });
    res.status(201).send(sensor);
  } catch (e) {
    return next(e);
  }
});

export default router;
