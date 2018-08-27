import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const atmTradingPriceSchema = new Schema({
    machineId : {
        type: String
    },
    machineName : {
        type : String
    },
    machineAddress : {
        type : String
    },
    machineBTCBuyPrice : {
        type : Number
    },
    machineBTCSellPrice : {
        type : Number
    },
    machineETHBuyPrice : {
        type : Number
    },
    machineETHSellPrice : {
        type : Number
    },
    network : {
        type : Number
    }
});