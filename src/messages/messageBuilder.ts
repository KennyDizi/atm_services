import {Packet, Server, Client} from 'mosca';
import {transferableMessage} from "./transferableMessage";
import {Chance} from 'chance';

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
        var chance = new Chance();
        var json = JSON.stringify(this.objectReply);
        console.log("Message content reply: " + json + "\n");
        var messageId = chance.integer({ min: 1, max: 9007199254740991 });
        var message = new transferableMessage(0, 1, messageType, messageId, json);
        var messageReply = JSON.stringify(message);
        var buf = Buffer.from(messageReply);
        
        const newPacket : Packet = {
            topic: topic,
            payload: buf,
            retain: retain,
            qos: qos,
            messageId : chance.string({ length: 16 })
        };
        
        callback(mqttClient, moscaServer, newPacket);
    }
}