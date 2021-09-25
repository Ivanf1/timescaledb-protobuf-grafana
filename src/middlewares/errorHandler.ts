import {
  PrismaClientInitializationError,
  PrismaClientValidationError,
} from "@prisma/client/runtime";
import protobuf from "protobufjs";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

interface CustomError {
  name: string;
  message: string;
}

const errorHandler: ErrorRequestHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
  response.status(statusCode);

  const customError: CustomError = {
    name: error.name,
    message: error.message,
  };

  if (error instanceof PrismaClientValidationError) {
    customError.message = "request has missing fields";
    response.status(400);
  } else if (error instanceof PrismaClientInitializationError) {
    response.status(500);
    customError.message = "server error";
  } else if (error instanceof protobuf.util.ProtocolError) {
    response.status(400);
    customError.message = "required fields are missing";
  }

  response.json(customError);
};

export default errorHandler;
