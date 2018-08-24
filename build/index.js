"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var source = rxjs_1.timer(1000, 2000);
source.subscribe(function (val) {
    return console.log("Ahihi Next index: " + val);
});
var mosca_1 = require("mosca");
var mongoDbUrl = "mongodb://localhost:27017/atms";
var dbSettings = {
    type: 'mongo',
    url: mongoDbUrl,
    pubsubCollection: 'mosca',
    mongo: {},
    capped: false,
    size: 409600
};
var serverSettings = {
    port: 1883,
    http: {
        port: 3000,
        bundle: true,
        static: './public'
    },
    persistence: {
        factory: mosca_1.persistence.Mongo,
        url: mongoDbUrl,
        ttl: {
            subscriptions: 60 * 60 * 1000,
            packets: 60 * 60 * 1000,
        },
        mongo: {}
    },
    logger: {
        level: 'debug'
    },
    stats: false,
    backend: dbSettings
};
var server = new mosca_1.Server(serverSettings);
server.on('clientConnected', function (h, mqttClient) {
    console.log("Client connected with id", mqttClient.id, "\n");
});
server.on('published', function (packet, mqttClient) {
    if (mqttClient != undefined) {
        try {
            var data = packet.payload.toString("utf-8");
            var value = JSON.parse(data);
            if (value.messageType % 2 == 0) {
                console.log("Message sent to client : \n", value);
            }
            else {
                console.log("Message received from: " + mqttClient.id + " packet : \n", value);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
});
server.on('subscribed', function (topic, mqttClient) {
    console.log("client", mqttClient.id, "subscribed topic", topic, "\n");
});
server.on('unsubscribed', function (topic, mqttClient) {
    console.log("client", mqttClient.id, "unsubscribed topic", topic, "\n");
});
server.on('clientDisconnected', function (h, mqttClient) {
    console.log("client", mqttClient.id, "clientDisconnected", "\n");
});
server.on('ready', setup);
function setup() {
    console.log('BTC Exchange server is running');
    console.log(server);
}
//# sourceMappingURL=index.js.map