import app from "../../../src/app";
import request from "supertest";
import { DeviceUpdateMsg, SensorUpdateMsg } from "../../../src/protobufClasses/sensorData/update";

describe("POST /create with no body", () => {
  it("should respond with error: 'no body'", async () => {
    const response = await request(app).post("/api/sensor_data/create").expect(400);

    expect(response.body.message).toEqual("no body");
    expect(response.body.name).toEqual("Error");
  });
});

describe("POST /create with valid message, valid header but invalid format", () => {
  it("should respond with error: 'invalid format'", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({ sensorId: 1, valueInt: 32 });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: 1,
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = Buffer.from(JSON.stringify(deviceUpdateMessage));

    const response = await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/octet-stream")
      .send(encodedMessage)
      .expect(400);

    expect(response.body.message).toEqual("invalid format");
    expect(response.body.name).toEqual("Error");
  });
});

describe("POST /create with valid message, valid format but invalid header", () => {
  it("should respond with error: 'no body'", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({ sensorId: 1, valueInt: 32 });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: 1,
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = DeviceUpdateMsg.encode(deviceUpdateMessage).finish();

    const response = await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/json")
      .send(encodedMessage)
      .expect(400);

    expect(response.body.message).toEqual("no body");
    expect(response.body.name).toEqual("Error");
  });
});

describe("POST /create without timestamp, valid header and valid format", () => {
  it("should respond with error: 'invalid message'", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({
      sensorId: 1,
      valueInt: 32,
      type: SensorUpdateMsg.Type.TEMPERATURE,
    });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: 1,
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = DeviceUpdateMsg.encode(deviceUpdateMessage).finish();

    const response = await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/octet-stream")
      .send(encodedMessage)
      .expect(400);

    expect(response.body.message).toEqual("invalid message");
    expect(response.body.name).toEqual("Error");
  });
});

describe("POST /create with valid message, valid header and valid format", () => {
  it("should respond with status code 201", async () => {
    const sensorUpdateMessage = SensorUpdateMsg.create({
      sensorId: 1,
      valueInt: 32,
      time: 1613593793,
      type: SensorUpdateMsg.Type.TEMPERATURE,
    });

    const deviceUpdateMessage = DeviceUpdateMsg.create({
      deviceId: 1,
      sensor: [sensorUpdateMessage],
    });

    const encodedMessage = DeviceUpdateMsg.encode(deviceUpdateMessage).finish();

    await request(app)
      .post("/api/sensor_data/create")
      .set("Content-Type", "application/octet-stream")
      .send(encodedMessage)
      .expect(201);
  });
});

// describe("POST /create with valid message, valid header and valid format", () => {
//   it("should respond with status code 201", async () => {
//     const sensorUpdateMessage = SensorUpdateMsg.create({
//       sensorId: 1,
//       valueInt: 32,
//       time: 1613593780,
//       type: SensorUpdateMsg.Type.TEMPERATURE,
//     });

//     expect(response.body).toEqual({ deviceId: deviceUpdateMessage.deviceId });
//   });
// });
