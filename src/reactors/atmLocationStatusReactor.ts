import { Server, Client } from "mosca";
import * as mongoose from "mongoose";
import { mongoDbNaming } from '../defines/mongoDbNaming';
import { atmLocationStatusSchema} from '../models/atmLocationStatusModel';
import { atmLocationStatusMessage } from "../messages/atmLocationStatusMessage";
const atmLocationStatus = mongoose.model(mongoDbNaming.atmLocationStatus, atmLocationStatusSchema);

export class atmLocationStatusReactor {
    private topic: string;
    private retain: boolean;
    private qos: number;
    private network: number;

    constructor(topic: string, retain: boolean, qos: number, network: number) {
        this.topic = topic;
        this.retain = retain;
        this.qos = qos;
        this.network = network;
    }

    processMessage(socketServer: Server, mqttClient: Client) {
        /*
        var mgClient = new mongoDbClient();
        let db = await mgClient.connect();

            let results = await db.collection("todo").insertOne({
                topic: "learn angular.js", progress: 10
            });
            */

           atmLocationStatus.find({}, (err, locations) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log(locations);
                var msg = new atmLocationStatusMessage(locations);
                var packet = msg.createMessage(this.topic, this.retain, this.qos);
                socketServer.published(packet, mqttClient, function(cb) {
                    console.log(`Send message with callback: ${cb}`);
                });
            }
        });
    }
}