import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAppState } from "./appReducerModel";
import { RootState } from "../rootStore";

const appSlice = createSlice({
    name: "appReducer",
    initialState: initialAppState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setIsLoading } = appSlice.actions;

export const getIsLoading = (store: RootState): boolean => store.appReducer.isLoading;

export default appSlice.reducer;
