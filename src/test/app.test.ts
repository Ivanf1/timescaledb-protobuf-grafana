import app from "../app";
import request from "supertest";

describe("POST /update", () => {
  it("should respond with nothing", async () => {
    const response = await request(app).post("/update");

    expect(response.body).toEqual({ message: "nothing" });
  });
});
