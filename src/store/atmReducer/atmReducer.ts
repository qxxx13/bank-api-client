import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialATMState } from "./atmReducerModel";
import { RootState } from "../rootStore";
import { ATMModel } from "../../models/ATMModel";

const atmSlice = createSlice({
    name: "atmReducer",
    initialState: initialATMState,
    reducers: {
        setATM: (state, action: PayloadAction<ATMModel[]>) => {
            state.atm = action.payload;
        },
    },
});

export const { setATM } = atmSlice.actions;

export const getATM = (store: RootState): ATMModel[] => store.atmReducer.atm;

export default atmSlice.reducer;
