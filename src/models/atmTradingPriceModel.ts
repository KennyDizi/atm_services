import * as mongoose from 'mongoose';
import { networkTypes } from '../defines/networkTypes';
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
    machineBuyPrice : {
        type : Number
    },
    machineSellPrice : {
        type : Number
    },
    network : {
        type : networkTypes
    }
});