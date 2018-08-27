export class transferableMessage
{
    public messageStart: number;
    public messageEnd: number;
    public messageType: number;
    public messageContent: string;
    public clientId: string;

    constructor(messageStart: number, messageEnd: number, messageType: number, messageId: number, clientId: string, messageContent: string)
    {
        this.messageStart = messageStart;
        this.messageEnd = messageEnd;
        this.messageType = messageType;
        this.messageEnd = messageId;
        this.messageContent = messageContent;
        this.clientId = clientId;
    }
}