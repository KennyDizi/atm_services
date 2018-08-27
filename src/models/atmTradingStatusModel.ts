import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const atmTradingStatusSchema = new Schema({
    machineId : {
        type: String
    },
    machineOnline : {
        type : Boolean
    },
    machineName : {
        type : String
    },
    machineAddress : {
        type : String
    },
    machineInventory : {
        type : Number
    },
    machineType : {
        type : String
    },
    network : {
        type : Number
    }
});