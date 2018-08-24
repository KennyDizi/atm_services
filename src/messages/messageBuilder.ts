import {Packet, Server, Client} from 'mosca';
import {transferableMessage} from "./transferableMessage";

export class messageBuilder
{
    private objectReply: object;
    constructor(objectReply: object)
    {
        this.objectReply = objectReply;
    }

    public buildMessage (mqttClient: Client, moscaServer: Server, topic: string, retain: boolean, qos: number, messageType: number,
        callback: (mqttClient: Client, moscaServer: Server, packet: Packet) => void) : void
    {
        var json = JSON.stringify(this.objectReply);
        console.log("Message content reply: " + json + "\n");
        var message = new transferableMessage(0, 1, messageType, -1, json);
        var messageReply = JSON.stringify(message);
        var buf = Buffer.from(messageReply);
        const newPacket : Packet = {
            topic: topic,
            payload: buf,
            retain: retain,
            qos: qos,
            messageId : "auto-generated"
        };
        
        callback(mqttClient, moscaServer, newPacket);
    }
}