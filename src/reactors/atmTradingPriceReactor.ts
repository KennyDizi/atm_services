import { Server, Client } from "mosca";
import * as mongoose from "mongoose";
import { mongoDbNaming } from '../defines/mongoDbNaming';
import { atmTradingPriceSchema} from '../models/atmTradingPriceModel';
import { atmTradingPriceMessage } from "../messages/atmTradingPriceMessage";
const atmTradingPrices = mongoose.model(mongoDbNaming.atmTradingPrice, atmTradingPriceSchema);

export class atmTradingPriceReactor {
    private topic: string;
    private retain: boolean;
    private qos: number;
    private network: number;
    private clientId: string;

    constructor(topic: string, retain: boolean, qos: number, clientId: string, network: number) {
        this.topic = topic;
        this.retain = retain;
        this.qos = qos;
        this.network = network;
        this.clientId = clientId;
    }

    processMessage(socketServer: Server, mqttClient: Client) {
           atmTradingPrices.find({network: this.network}, (err, prices) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log(prices);
                var msg = new atmTradingPriceMessage(prices);
                var packet = msg.createMessage(this.topic, this.retain, this.qos, this.clientId);
                socketServer.published(packet, mqttClient, function(cb) {
                    console.log(`Send message with callback: ${cb}`);
                });
            }
        });
    }
}