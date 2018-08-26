import { Server, Client } from "mosca";
import * as mongoose from "mongoose";
import { mongoDbNaming } from '../defines/mongoDbNaming';
import { atmLocationStatusSchema} from '../models/atmLocationStatusModel';
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

    async processMessage(socketServer: Server, mqttClient: Client) {
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
            }
        });
    }
}