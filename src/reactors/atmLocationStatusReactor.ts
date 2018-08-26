import { Server, Client } from "mosca";
import { mongoDbClient } from '../defines/mongoDbClient';

export class atmLocationStatusReactor {
    private topic: string;
    private retain: boolean;
    private qos: number;

    constructor(topic: string, retain: boolean, qos: number) {
        this.topic = topic;
        this.retain = retain;
        this.qos = qos;
    }

    async processMessage(socketServer: Server, mqttClient: Client) {
        /*
        var mgClient = new mongoDbClient();
        let db = await mgClient.connect();

            let results = await db.collection("todo").insertOne({
                topic: "learn angular.js", progress: 10
            });
            */
    }
}