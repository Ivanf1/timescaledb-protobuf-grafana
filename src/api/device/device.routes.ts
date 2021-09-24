import express, { NextFunction, Request, Response } from "express";
import prisma from "../../db/db";

const router = express.Router();

router.post("/create", express.json(), async (req: Request, res: Response, next: NextFunction) => {
  const { name }: { name: string } = req.body;

  try {
    const device = await prisma.device.create({
      data: {
        name: name,
      },
    });
    res.status(201).send(device);
  } catch (e) {
    res.status(400);
    return next(e);
  }
});

export default router;
