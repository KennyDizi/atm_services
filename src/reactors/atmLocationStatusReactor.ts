import { Server, Client } from "mosca";

export class atmLocationStatusReactor {
    private topic: string;
    private retain: boolean;
    private qos: number;

    constructor(topic: string, retain: boolean, qos: number) {
        this.topic = topic;
        this.retain = retain;
        this.qos = qos;
    }

    processMessage(socketServer: Server, mqttClient: Client) : void {
        
    }
}