import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootStore";
import { initialBanksState } from "./banksReducerModel";
import { BankModel } from "../../models/BankModel";
import { ClientModel } from "../../models/ClientModel";

const banksSlice = createSlice({
    name: "banksReducer",
    initialState: initialBanksState,
    reducers: {
        setBanks: (state, action: PayloadAction<BankModel[]>) => {
            state.banks = action.payload;
        },
        setBankClients: (state, action: PayloadAction<ClientModel[]>) => {
            state.bankClients = action.payload;
        },
        setIsBankClientsLoading: (state, action: PayloadAction<boolean>) => {
            state.isBankClientsLoading = action.payload;
        },
    },
});

export const { setBanks, setBankClients, setIsBankClientsLoading } = banksSlice.actions;

export const getBanks = (store: RootState): BankModel[] => store.banksReducer.banks;
export const getBankClient = (store: RootState): ClientModel[] => store.banksReducer.bankClients;
export const getIsBankClientsLoading = (store: RootState): boolean => store.banksReducer.isBankClientsLoading;

export default banksSlice.reducer;
