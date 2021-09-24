/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.DeviceUpdateMsg = (function() {

    /**
     * Properties of a DeviceUpdateMsg.
     * @exports IDeviceUpdateMsg
     * @interface IDeviceUpdateMsg
     * @property {number|Long|null} [deviceId] DeviceUpdateMsg deviceId
     * @property {Array.<ISensorUpdateMsg>|null} [sensor] DeviceUpdateMsg sensor
     */

    /**
     * Constructs a new DeviceUpdateMsg.
     * @exports DeviceUpdateMsg
     * @classdesc Represents a DeviceUpdateMsg.
     * @implements IDeviceUpdateMsg
     * @constructor
     * @param {IDeviceUpdateMsg=} [properties] Properties to set
     */
    function DeviceUpdateMsg(properties) {
        this.sensor = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceUpdateMsg deviceId.
     * @member {number|Long} deviceId
     * @memberof DeviceUpdateMsg
     * @instance
     */
    DeviceUpdateMsg.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * DeviceUpdateMsg sensor.
     * @member {Array.<ISensorUpdateMsg>} sensor
     * @memberof DeviceUpdateMsg
     * @instance
     */
    DeviceUpdateMsg.prototype.sensor = $util.emptyArray;

    /**
     * Creates a new DeviceUpdateMsg instance using the specified properties.
     * @function create
     * @memberof DeviceUpdateMsg
     * @static
     * @param {IDeviceUpdateMsg=} [properties] Properties to set
     * @returns {DeviceUpdateMsg} DeviceUpdateMsg instance
     */
    DeviceUpdateMsg.create = function create(properties) {
        return new DeviceUpdateMsg(properties);
    };

    /**
     * Encodes the specified DeviceUpdateMsg message. Does not implicitly {@link DeviceUpdateMsg.verify|verify} messages.
     * @function encode
     * @memberof DeviceUpdateMsg
     * @static
     * @param {IDeviceUpdateMsg} message DeviceUpdateMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceUpdateMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.deviceId);
        if (message.sensor != null && message.sensor.length)
            for (var i = 0; i < message.sensor.length; ++i)
                $root.SensorUpdateMsg.encode(message.sensor[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceUpdateMsg message, length delimited. Does not implicitly {@link DeviceUpdateMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceUpdateMsg
     * @static
     * @param {IDeviceUpdateMsg} message DeviceUpdateMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceUpdateMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceUpdateMsg message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceUpdateMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceUpdateMsg} DeviceUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceUpdateMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceUpdateMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.uint64();
                break;
            case 2:
                if (!(message.sensor && message.sensor.length))
                    message.sensor = [];
                message.sensor.push($root.SensorUpdateMsg.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceUpdateMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceUpdateMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceUpdateMsg} DeviceUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceUpdateMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceUpdateMsg message.
     * @function verify
     * @memberof DeviceUpdateMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceUpdateMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                return "deviceId: integer|Long expected";
        if (message.sensor != null && message.hasOwnProperty("sensor")) {
            if (!Array.isArray(message.sensor))
                return "sensor: array expected";
            for (var i = 0; i < message.sensor.length; ++i) {
                var error = $root.SensorUpdateMsg.verify(message.sensor[i]);
                if (error)
                    return "sensor." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DeviceUpdateMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceUpdateMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceUpdateMsg} DeviceUpdateMsg
     */
    DeviceUpdateMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceUpdateMsg)
            return object;
        var message = new $root.DeviceUpdateMsg();
        if (object.deviceId != null)
            if ($util.Long)
                (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = true;
            else if (typeof object.deviceId === "string")
                message.deviceId = parseInt(object.deviceId, 10);
            else if (typeof object.deviceId === "number")
                message.deviceId = object.deviceId;
            else if (typeof object.deviceId === "object")
                message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber(true);
        if (object.sensor) {
            if (!Array.isArray(object.sensor))
                throw TypeError(".DeviceUpdateMsg.sensor: array expected");
            message.sensor = [];
            for (var i = 0; i < object.sensor.length; ++i) {
                if (typeof object.sensor[i] !== "object")
                    throw TypeError(".DeviceUpdateMsg.sensor: object expected");
                message.sensor[i] = $root.SensorUpdateMsg.fromObject(object.sensor[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceUpdateMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceUpdateMsg
     * @static
     * @param {DeviceUpdateMsg} message DeviceUpdateMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceUpdateMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.sensor = [];
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.deviceId = options.longs === String ? "0" : 0;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (typeof message.deviceId === "number")
                object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
            else
                object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber(true) : message.deviceId;
        if (message.sensor && message.sensor.length) {
            object.sensor = [];
            for (var j = 0; j < message.sensor.length; ++j)
                object.sensor[j] = $root.SensorUpdateMsg.toObject(message.sensor[j], options);
        }
        return object;
    };

    /**
     * Converts this DeviceUpdateMsg to JSON.
     * @function toJSON
     * @memberof DeviceUpdateMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceUpdateMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeviceUpdateMsg;
})();

$root.SensorUpdateMsg = (function() {

    /**
     * Properties of a SensorUpdateMsg.
     * @exports ISensorUpdateMsg
     * @interface ISensorUpdateMsg
     * @property {number|Long|null} [sensorId] SensorUpdateMsg sensorId
     * @property {SensorUpdateMsg.Type|null} [type] SensorUpdateMsg type
     * @property {number|Long|null} [time] SensorUpdateMsg time
     * @property {number|null} [valueInt] SensorUpdateMsg valueInt
     * @property {number|null} [valueFloat] SensorUpdateMsg valueFloat
     * @property {boolean|null} [valueBool] SensorUpdateMsg valueBool
     */

    /**
     * Constructs a new SensorUpdateMsg.
     * @exports SensorUpdateMsg
     * @classdesc Represents a SensorUpdateMsg.
     * @implements ISensorUpdateMsg
     * @constructor
     * @param {ISensorUpdateMsg=} [properties] Properties to set
     */
    function SensorUpdateMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SensorUpdateMsg sensorId.
     * @member {number|Long} sensorId
     * @memberof SensorUpdateMsg
     * @instance
     */
    SensorUpdateMsg.prototype.sensorId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SensorUpdateMsg type.
     * @member {SensorUpdateMsg.Type} type
     * @memberof SensorUpdateMsg
     * @instance
     */
    SensorUpdateMsg.prototype.type = 0;

    /**
     * SensorUpdateMsg time.
     * @member {number|Long} time
     * @memberof SensorUpdateMsg
     * @instance
     */
    SensorUpdateMsg.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SensorUpdateMsg valueInt.
     * @member {number|null|undefined} valueInt
     * @memberof SensorUpdateMsg
     * @instance
     */
    SensorUpdateMsg.prototype.valueInt = null;

    /**
     * SensorUpdateMsg valueFloat.
     * @member {number|null|undefined} valueFloat
     * @memberof SensorUpdateMsg
     * @instance
     */
    SensorUpdateMsg.prototype.valueFloat = null;

    /**
     * SensorUpdateMsg valueBool.
     * @member {boolean|null|undefined} valueBool
     * @memberof SensorUpdateMsg
     * @instance
     */
    SensorUpdateMsg.prototype.valueBool = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * SensorUpdateMsg value.
     * @member {"valueInt"|"valueFloat"|"valueBool"|undefined} value
     * @memberof SensorUpdateMsg
     * @instance
     */
    Object.defineProperty(SensorUpdateMsg.prototype, "value", {
        get: $util.oneOfGetter($oneOfFields = ["valueInt", "valueFloat", "valueBool"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new SensorUpdateMsg instance using the specified properties.
     * @function create
     * @memberof SensorUpdateMsg
     * @static
     * @param {ISensorUpdateMsg=} [properties] Properties to set
     * @returns {SensorUpdateMsg} SensorUpdateMsg instance
     */
    SensorUpdateMsg.create = function create(properties) {
        return new SensorUpdateMsg(properties);
    };

    /**
     * Encodes the specified SensorUpdateMsg message. Does not implicitly {@link SensorUpdateMsg.verify|verify} messages.
     * @function encode
     * @memberof SensorUpdateMsg
     * @static
     * @param {ISensorUpdateMsg} message SensorUpdateMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorUpdateMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sensorId != null && Object.hasOwnProperty.call(message, "sensorId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sensorId);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
        if (message.valueInt != null && Object.hasOwnProperty.call(message, "valueInt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.valueInt);
        if (message.valueFloat != null && Object.hasOwnProperty.call(message, "valueFloat"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.valueFloat);
        if (message.valueBool != null && Object.hasOwnProperty.call(message, "valueBool"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.valueBool);
        return writer;
    };

    /**
     * Encodes the specified SensorUpdateMsg message, length delimited. Does not implicitly {@link SensorUpdateMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SensorUpdateMsg
     * @static
     * @param {ISensorUpdateMsg} message SensorUpdateMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SensorUpdateMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SensorUpdateMsg message from the specified reader or buffer.
     * @function decode
     * @memberof SensorUpdateMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SensorUpdateMsg} SensorUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorUpdateMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SensorUpdateMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sensorId = reader.uint64();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.time = reader.int64();
                break;
            case 4:
                message.valueInt = reader.int32();
                break;
            case 5:
                message.valueFloat = reader.float();
                break;
            case 6:
                message.valueBool = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SensorUpdateMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SensorUpdateMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SensorUpdateMsg} SensorUpdateMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SensorUpdateMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SensorUpdateMsg message.
     * @function verify
     * @memberof SensorUpdateMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SensorUpdateMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.sensorId != null && message.hasOwnProperty("sensorId"))
            if (!$util.isInteger(message.sensorId) && !(message.sensorId && $util.isInteger(message.sensorId.low) && $util.isInteger(message.sensorId.high)))
                return "sensorId: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.valueInt != null && message.hasOwnProperty("valueInt")) {
            properties.value = 1;
            if (!$util.isInteger(message.valueInt))
                return "valueInt: integer expected";
        }
        if (message.valueFloat != null && message.hasOwnProperty("valueFloat")) {
            if (properties.value === 1)
                return "value: multiple values";
            properties.value = 1;
            if (typeof message.valueFloat !== "number")
                return "valueFloat: number expected";
        }
        if (message.valueBool != null && message.hasOwnProperty("valueBool")) {
            if (properties.value === 1)
                return "value: multiple values";
            properties.value = 1;
            if (typeof message.valueBool !== "boolean")
                return "valueBool: boolean expected";
        }
        return null;
    };

    /**
     * Creates a SensorUpdateMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SensorUpdateMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SensorUpdateMsg} SensorUpdateMsg
     */
    SensorUpdateMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.SensorUpdateMsg)
            return object;
        var message = new $root.SensorUpdateMsg();
        if (object.sensorId != null)
            if ($util.Long)
                (message.sensorId = $util.Long.fromValue(object.sensorId)).unsigned = true;
            else if (typeof object.sensorId === "string")
                message.sensorId = parseInt(object.sensorId, 10);
            else if (typeof object.sensorId === "number")
                message.sensorId = object.sensorId;
            else if (typeof object.sensorId === "object")
                message.sensorId = new $util.LongBits(object.sensorId.low >>> 0, object.sensorId.high >>> 0).toNumber(true);
        switch (object.type) {
        case "TEMPERATURE":
        case 0:
            message.type = 0;
            break;
        case "HUMIDITY":
        case 1:
            message.type = 1;
            break;
        }
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.valueInt != null)
            message.valueInt = object.valueInt | 0;
        if (object.valueFloat != null)
            message.valueFloat = Number(object.valueFloat);
        if (object.valueBool != null)
            message.valueBool = Boolean(object.valueBool);
        return message;
    };

    /**
     * Creates a plain object from a SensorUpdateMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SensorUpdateMsg
     * @static
     * @param {SensorUpdateMsg} message SensorUpdateMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SensorUpdateMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.sensorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sensorId = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "TEMPERATURE" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
        }
        if (message.sensorId != null && message.hasOwnProperty("sensorId"))
            if (typeof message.sensorId === "number")
                object.sensorId = options.longs === String ? String(message.sensorId) : message.sensorId;
            else
                object.sensorId = options.longs === String ? $util.Long.prototype.toString.call(message.sensorId) : options.longs === Number ? new $util.LongBits(message.sensorId.low >>> 0, message.sensorId.high >>> 0).toNumber(true) : message.sensorId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.SensorUpdateMsg.Type[message.type] : message.type;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.valueInt != null && message.hasOwnProperty("valueInt")) {
            object.valueInt = message.valueInt;
            if (options.oneofs)
                object.value = "valueInt";
        }
        if (message.valueFloat != null && message.hasOwnProperty("valueFloat")) {
            object.valueFloat = options.json && !isFinite(message.valueFloat) ? String(message.valueFloat) : message.valueFloat;
            if (options.oneofs)
                object.value = "valueFloat";
        }
        if (message.valueBool != null && message.hasOwnProperty("valueBool")) {
            object.valueBool = message.valueBool;
            if (options.oneofs)
                object.value = "valueBool";
        }
        return object;
    };

    /**
     * Converts this SensorUpdateMsg to JSON.
     * @function toJSON
     * @memberof SensorUpdateMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SensorUpdateMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name SensorUpdateMsg.Type
     * @enum {number}
     * @property {number} TEMPERATURE=0 TEMPERATURE value
     * @property {number} HUMIDITY=1 HUMIDITY value
     */
    SensorUpdateMsg.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TEMPERATURE"] = 0;
        values[valuesById[1] = "HUMIDITY"] = 1;
        return values;
    })();

    return SensorUpdateMsg;
})();

module.exports = $root;
