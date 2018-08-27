import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const atmLocationStatusSchema = new Schema({
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
    }
});