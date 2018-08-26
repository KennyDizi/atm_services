import { Server, Client } from "mosca";
import { mongoDbClient } from '../defines/mongoDbClient';
import * as mongoose from "mongoose";
import { MongoClient} from 'mongodb';
import { mongodbConnectionExs } from "../defines/mongodbConnections";

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
    }
}