import { Request, Response, NextFunction } from "express";
import notFound from "../../src/middlewares/notFound";

describe("Not found middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {
      originalUrl: "/",
    };
    mockResponse = {
      status: jest.fn(),
      json: jest.fn(),
    };
  });

  it("should return the message 'Not found - ${originalUrl}'", async () => {
    const error = new Error(`Not found - ${mockRequest.originalUrl}`);

    notFound(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toBeCalledWith(404);
    expect(nextFunction).toBeCalledWith(error);
  });
});
