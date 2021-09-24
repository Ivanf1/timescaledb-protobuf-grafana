import app from "../../../src/app";
import request from "supertest";
import { DeviceUpdateMsg, SensorUpdateMsg } from "../../../src/protobufClasses/device/update";

describe("POST /create with no body", () => {
  it("should respond with error: 'no body'", async () => {
    const response = await request(app).post("/api/sensor_data/create").expect(400);

    expect(response.body).toEqual({ error: "no body" });
  });
});

describe("POST /create with valid message, valid header but invalid format", () => {
  it("should respond with error: 'invalid format'", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({ sensorId: "se187de", valueInt: 32 });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: "haha123",
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = Buffer.from(JSON.stringify(deviceUpdateMessage));

    const response = await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/octet-stream")
      .send(encodedMessage)
      .expect(400);

    expect(response.body).toEqual({ error: "invalid format" });
  });
});

describe("POST /create with valid message, valid format but invalid header", () => {
  it("should respond with error: 'no body'", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({ sensorId: "se187de", valueInt: 32 });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: "haha123",
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = DeviceUpdateMsg.encode(deviceUpdateMessage).finish();

    const response = await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/json")
      .send(encodedMessage)
      .expect(400);

    expect(response.body).toEqual({ error: "no body" });
  });
});

describe("POST /create with valid message, valid header and valid format", () => {
  it("should respond with deviceId", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({ sensorId: "se187de", valueInt: 32 });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: "haha123",
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = DeviceUpdateMsg.encode(deviceUpdateMessage).finish();

    const response = await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/octet-stream")
      .send(encodedMessage)
      .expect(200);

    expect(response.body).toEqual({ deviceId: deviceUpdateMessage.deviceId });
  });
});
