import { networkTypes } from "./networkTypes";

export class manualEnvironment {
    private static network: networkTypes;

    public static getNetwork() : networkTypes {
        return this.network;
    }

    public static setNetwork(network: networkTypes) : void {
        this.network = network;
    }
}