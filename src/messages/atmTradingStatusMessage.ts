import { messageBuilder } from "./messageBuilder";
import { Packet } from "mosca";
import { messageTypes } from "../defines/messageTypes";
import * as mongoose from "mongoose";

export class atmTradingStatusMessage {
    public status: mongoose.Document[];
    constructor(status: mongoose.Document[]) {
        this.status = status;
    }

    public createMessage(topic: string, retain: boolean, qos: number, clientId: string) : Packet {
        var builder = new messageBuilder(this);
        var message = builder.buildPacket(topic, retain, qos, clientId, messageTypes.atmTradingStatusReply);
        return message;
    }
}