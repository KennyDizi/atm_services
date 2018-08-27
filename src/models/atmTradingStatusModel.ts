import * as mongoose from 'mongoose';
import { machineInventory } from '../defines/machineInventory';
import { networkTypes } from '../defines/networkTypes';
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
        type : machineInventory
    },
    machineType : {
        type : String
    },
    network : {
        type : networkTypes
    }
});