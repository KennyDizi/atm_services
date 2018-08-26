import {messageBuilder} from './messageBuilder'
import { Packet } from 'mosca';
import { messageTypes } from '../defines/messageTypes';
import * as moment from 'moment';

export class helloMessage {
    public message: string;
    constructor() {
        var date = moment.utc().format('MMMM Do YYYY, h:mm:ss a');
        console.log(`UTC time: ${date}`); // July 18th 2018, 4:25:32 pm
        var stillUtc = moment.utc(date).toDate();
        var sendTime = moment(stillUtc).local().format('MMMM Do YYYY, h:mm:ss a');
        console.log(`Local time: ${sendTime}`);
        this.message = `Hello at: ${sendTime}`;
    }

    public createMessage(topic: string, retain: boolean, qos: number) : Packet {
        var builder = new messageBuilder(new helloMessage());
        var message = builder.buildPacket(topic, retain, qos, messageTypes.helloReply)
        return message;
    }
}