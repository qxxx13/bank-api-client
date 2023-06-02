import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootStore";
import { initialBanksState } from "./banksReducerModel";
import { BankModel } from "../../models/BankModel";

const banksSlice = createSlice({
    name: "banksReducer",
    initialState: initialBanksState,
    reducers: {
        setBanks: (state, action: PayloadAction<BankModel[]>) => {
            state.banks = action.payload;
        },
    },
});

export const { setBanks } = banksSlice.actions;

export const getBanks = (store: RootState): BankModel[] => store.banksReducer.banks;

export default banksSlice.reducer;
