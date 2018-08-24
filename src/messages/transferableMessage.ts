export class transferableMessage
{
    public messageStart: number;
    public messageEnd: number;
    public messageType: number;
    public messageContent: string;
    
    constructor(messageStart: number, messageEnd: number, messageType: number, messageId: number, messageContent: string)
    {
        this.messageStart = messageStart;
        this.messageEnd = messageEnd;
        this.messageType = messageType;
        this.messageEnd = messageId;
        this.messageContent = messageContent;
    }
}