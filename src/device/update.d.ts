import * as $protobuf from "protobufjs";
/** Properties of a DeviceUpdateMsg. */
export interface IDeviceUpdateMsg {

    /** DeviceUpdateMsg deviceId */
    deviceId?: (string|null);

    /** DeviceUpdateMsg sensor */
    sensor?: (ISensorUpdateMsg[]|null);
}

/** Represents a DeviceUpdateMsg. */
export class DeviceUpdateMsg implements IDeviceUpdateMsg {

    /**
     * Constructs a new DeviceUpdateMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceUpdateMsg);

    /** DeviceUpdateMsg deviceId. */
    public deviceId: string;

    /** DeviceUpdateMsg sensor. */
    public sensor: ISensorUpdateMsg[];

    /**
     * Creates a new DeviceUpdateMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceUpdateMsg instance
     */
    public static create(properties?: IDeviceUpdateMsg): DeviceUpdateMsg;

    /**
     * Encodes the specified DeviceUpdateMsg message. Does not implicitly {@link DeviceUpdateMsg.verify|verify} messages.
     * @param message DeviceUpdateMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceUpdateMsg message, length delimited. Does not implicitly {@link DeviceUpdateMsg.verify|verify} messages.
     * @param message DeviceUpdateMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceUpdateMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceUpdateMsg;

    /**
     * Decodes a DeviceUpdateMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceUpdateMsg;

    /**
     * Verifies a DeviceUpdateMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceUpdateMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceUpdateMsg
     */
    public static fromObject(object: { [k: string]: any }): DeviceUpdateMsg;

    /**
     * Creates a plain object from a DeviceUpdateMsg message. Also converts values to other types if specified.
     * @param message DeviceUpdateMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceUpdateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceUpdateMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SensorUpdateMsg. */
export interface ISensorUpdateMsg {

    /** SensorUpdateMsg sensorId */
    sensorId?: (string|null);

    /** SensorUpdateMsg valueInt */
    valueInt?: (number|null);

    /** SensorUpdateMsg valueFloat */
    valueFloat?: (number|null);

    /** SensorUpdateMsg valueBool */
    valueBool?: (boolean|null);
}

/** Represents a SensorUpdateMsg. */
export class SensorUpdateMsg implements ISensorUpdateMsg {

    /**
     * Constructs a new SensorUpdateMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISensorUpdateMsg);

    /** SensorUpdateMsg sensorId. */
    public sensorId: string;

    /** SensorUpdateMsg valueInt. */
    public valueInt?: (number|null);

    /** SensorUpdateMsg valueFloat. */
    public valueFloat?: (number|null);

    /** SensorUpdateMsg valueBool. */
    public valueBool?: (boolean|null);

    /** SensorUpdateMsg value. */
    public value?: ("valueInt"|"valueFloat"|"valueBool");

    /**
     * Creates a new SensorUpdateMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SensorUpdateMsg instance
     */
    public static create(properties?: ISensorUpdateMsg): SensorUpdateMsg;

    /**
     * Encodes the specified SensorUpdateMsg message. Does not implicitly {@link SensorUpdateMsg.verify|verify} messages.
     * @param message SensorUpdateMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISensorUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SensorUpdateMsg message, length delimited. Does not implicitly {@link SensorUpdateMsg.verify|verify} messages.
     * @param message SensorUpdateMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISensorUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SensorUpdateMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SensorUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SensorUpdateMsg;

    /**
     * Decodes a SensorUpdateMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SensorUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SensorUpdateMsg;

    /**
     * Verifies a SensorUpdateMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SensorUpdateMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SensorUpdateMsg
     */
    public static fromObject(object: { [k: string]: any }): SensorUpdateMsg;

    /**
     * Creates a plain object from a SensorUpdateMsg message. Also converts values to other types if specified.
     * @param message SensorUpdateMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SensorUpdateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SensorUpdateMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
