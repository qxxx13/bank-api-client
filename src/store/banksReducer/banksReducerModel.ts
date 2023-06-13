import { BankModel } from "../../models/BankModel";
import { ClientModel } from "../../models/ClientModel";

export const initialBanksState = {
    banks: [] as BankModel[],
    bankClients: [] as ClientModel[],
    isBankClientsLoading: false,
};
