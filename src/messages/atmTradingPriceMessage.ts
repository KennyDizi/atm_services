import { messageBuilder } from "./messageBuilder";
import { Packet } from "mosca";
import { messageTypes } from "../defines/messageTypes";
import * as mongoose from "mongoose";

export class atmTradingPriceMessage {
    public prices: mongoose.Document[];
    constructor(prices: mongoose.Document[]) {
        this.prices = prices;
    }

    public createMessage(topic: string, retain: boolean, qos: number, clientId: string) : Packet {
        var builder = new messageBuilder(this);
        var message = builder.buildPacket(topic, retain, qos, clientId, messageTypes.atmTradingPriceReply);
        return message;
    }
}