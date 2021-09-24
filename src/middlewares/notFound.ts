import { Request, Response, NextFunction, RequestHandler } from "express";

const notFound: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  const error = new Error(`Not found - ${request.originalUrl}`);
  response.status(404);
  return next(error);
};

export default notFound;
