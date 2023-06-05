import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootStore";
import { ClientModel } from "../../models/ClientModel";
import { initialClientState } from "./clientReducerModel";

const clientSlice = createSlice({
    name: "clientsReducer",
    initialState: initialClientState,
    reducers: {
        setClients: (state, action: PayloadAction<ClientModel[]>) => {
            state.clients = action.payload;
        },
    },
});

export const { setClients } = clientSlice.actions;

export const getClients = (store: RootState): ClientModel[] => store.clientsReducer.clients;

export default clientSlice.reducer;
