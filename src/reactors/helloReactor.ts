import { Server, Client } from "mosca";
import { helloMessage } from "../messages/helloMessage";

export class helloReactor {
    private topic: string;
    private retain: boolean;
    private qos: number;

    constructor(topic: string, retain: boolean, qos: number) {
        this.topic = topic;
        this.retain = retain;
        this.qos = qos;
    }

    public processMessage(socketServer: Server, mqttClient: Client) : void {
        var packet = new helloMessage().createMessage(this.topic, this.retain, this.qos);
        socketServer.published(packet, mqttClient, function(cb) {
            console.log(`Send message with callback: ${cb}`);
        });
    }
}