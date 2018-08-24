"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messageTypes;
(function (messageTypes) {
    messageTypes[messageTypes["hello"] = 2001] = "hello";
    messageTypes[messageTypes["helloReply"] = 2002] = "helloReply";
    messageTypes[messageTypes["atmLocationStatus"] = 2003] = "atmLocationStatus";
    messageTypes[messageTypes["atmLocationStatusReply"] = 2004] = "atmLocationStatusReply";
    messageTypes[messageTypes["atmTradingStatus"] = 2005] = "atmTradingStatus";
    messageTypes[messageTypes["atmTradingStatusReply"] = 2006] = "atmTradingStatusReply";
    messageTypes[messageTypes["atmTradingPrice"] = 2007] = "atmTradingPrice";
    messageTypes[messageTypes["atmTradingPriceReply"] = 2008] = "atmTradingPriceReply";
})(messageTypes = exports.messageTypes || (exports.messageTypes = {}));
//# sourceMappingURL=messageTypes.js.map