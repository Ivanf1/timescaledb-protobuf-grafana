import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

interface CustomError extends Error {
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

  response.json(customError);
};

export default errorHandler;
