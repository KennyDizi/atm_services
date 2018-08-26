import { networkTypes } from "./networkTypes";

//https://ramlez.com/blog/node-js-typescript-2-x-mongodb-quick-start-2/
//https://www.npmjs.com/package/@types/mongodb
export enum mongodbConnections
{
    local = "mongodb://localhost:27017/atms",
    cloudTestnet = "mongodb+srv://dbmanager:eLAvxCeoe5BFSBFg@atms-sznh7.mongodb.net/admin",
    cloudMainnet = "mongodb+srv://dbmanager:eLAvxCeoe5BFSBFg@atms-sznh7.mongodb.net/admin"
}

export class mongodbConnectionExs {
    public static getConnection(network: number) : string {
        var connection = mongodbConnections.local;
        switch(network)
        {
            case networkTypes.localhost:
            {
                connection = mongodbConnections.local;
            }
            break;

            case networkTypes.testnet:
            {
                connection = mongodbConnections.cloudTestnet;
            }
            break;

            case networkTypes.mainnet:
            {
                connection = mongodbConnections.cloudMainnet;
            }
            break;
        }

        return connection;
    }
}