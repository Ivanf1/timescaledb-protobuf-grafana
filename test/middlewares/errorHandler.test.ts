import { Request, Response, NextFunction } from "express";
import errorHandler from "../../src/middlewares/errorHandler";

describe("Error Handler middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn(),
      json: jest.fn(),
      statusCode: 400,
    };
  });

  it("should change the status code to 500 when it is 200", () => {
    const error = new Error("");
    mockResponse = {
      ...mockResponse,
      statusCode: 200,
    };

    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toBeCalledWith(500);
  });

  it("should not change the status code when it is not 500", () => {
    const error = new Error("");
    mockResponse = {
      ...mockResponse,
      statusCode: 401,
    };

    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.statusCode).toEqual(401);
  });

  it("should respond with an object with fields name and message", () => {
    const error = new Error("this is an error");

    const errorObj = {
      name: error.name,
      message: error.message,
    };

    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.json).toBeCalledWith(errorObj);
  });
});
