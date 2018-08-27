import * as mongoose from 'mongoose';
import { networkTypes } from '../defines/networkTypes';
const Schema = mongoose.Schema;

export const atmLocationStatusSchema = new Schema({
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
    machineLongtitude : {
        type : Number
    },
    machineLatitude : {
        type : Number
    },
    network : {
        type : networkTypes
    }
});