"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messageType;
(function (messageType) {
    messageType[messageType["hello"] = 2001] = "hello";
    messageType[messageType["helloReply"] = 2002] = "helloReply";
    messageType[messageType["atmLocationStatus"] = 2003] = "atmLocationStatus";
    messageType[messageType["atmLocationStatusReply"] = 2004] = "atmLocationStatusReply";
    messageType[messageType["atmTradingStatus"] = 2005] = "atmTradingStatus";
    messageType[messageType["atmTradingStatusReply"] = 2006] = "atmTradingStatusReply";
    messageType[messageType["atmTradingPrice"] = 2007] = "atmTradingPrice";
    messageType[messageType["atmTradingPriceReply"] = 2008] = "atmTradingPriceReply";
})(messageType = exports.messageType || (exports.messageType = {}));
//# sourceMappingURL=messageType.js.map