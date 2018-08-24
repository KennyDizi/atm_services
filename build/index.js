"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var source = rxjs_1.timer(1000, 2000);
var subscribe = source.subscribe(function (val) {
    return console.log("Next index: " + val);
});
//# sourceMappingURL=index.js.map