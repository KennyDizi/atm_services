"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transferableMessage_1 = require("./transferableMessage");
var messageBuilder = (function () {
    function messageBuilder(objectReply) {
        this.objectReply = objectReply;
    }
    messageBuilder.prototype.buildMessage = function (mqttClient, moscaServer, topic, retain, qos, messageType, callback) {
        var json = JSON.stringify(this.objectReply);
        console.log("Message content reply: " + json + "\n");
        var message = new transferableMessage_1.transferableMessage(0, 1, messageType, -1, json);
        var messageReply = JSON.stringify(message);
        var buf = Buffer.from(messageReply);
        var newPacket = {
            topic: topic,
            payload: buf,
            retain: retain,
            qos: qos,
            messageId: "auto-generated"
        };
        callback(mqttClient, moscaServer, newPacket);
    };
    return messageBuilder;
}());
exports.messageBuilder = messageBuilder;
//# sourceMappingURL=messageBuilder.js.map