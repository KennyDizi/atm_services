import { messageBuilder } from "./messageBuilder";
import { Packet } from "mosca";
import { messageTypes } from "../defines/messageTypes";
import { helloMessage } from "./helloMessage";
import { mongoDbNaming } from '../defines/mongoDbNaming';

export class atmLocationStatusMessage {
    public createMessage(topic: string, retain: boolean, qos: number) : Packet {
        var builder = new messageBuilder(new helloMessage());
        var message = builder.buildPacket(topic, retain, qos, messageTypes.atmLocationStatusReply);
        return message;
    }
}