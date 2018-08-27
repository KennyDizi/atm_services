import {messageBuilder} from './messageBuilder'
import { Packet } from 'mosca';
import { messageTypes } from '../defines/messageTypes';
import * as moment from 'moment';

export class helloMessage {
    public message: string;
    public clientId: string;
    constructor(clientId: string) {
        var date = moment.utc().format('MMMM Do YYYY, h:mm:ss a');
        console.log(`UTC time: ${date}`); // July 18th 2018, 4:25:32 pm
        var stillUtc = moment.utc(date).toDate();
        var sendTime = moment(stillUtc).local().format('MMMM Do YYYY, h:mm:ss a');
        console.log(`Local time: ${sendTime}`);
        this.message = `Hello at: ${sendTime}`;
        this.clientId = clientId;
    }

    public createMessage(topic: string, retain: boolean, qos: number) : Packet {
        var builder = new messageBuilder(this);
        var message = builder.buildPacket(topic, retain, qos, this.clientId, messageTypes.helloReply)
        return message;
    }
}