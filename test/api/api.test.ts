import app from "../../src/app";
import request from "supertest";

describe("GET /api", () => {
  it("should respond with 404", async () => {
    const response = await request(app).get("/api").expect("Content-Type", /json/).expect(404);

    expect(response.body.name).toEqual("Error");
    expect(response.body.message).toEqual("Not found - /api");
  });
});
