import { ClientModel } from "./ClientModel";

export type responseBankBodyType = {
    name: string;
    legalAddress: string;
    image: string;
};

export type responseClientBodyType = Omit<ClientModel, "id">;

export type responseATMBodyType = {
    address: string;
    bankCode: number;
};
