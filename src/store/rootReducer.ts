import { CombinedState, combineReducers, Reducer } from "redux";
import { initialAppState } from "./appReducer/appReducerModel";
import appReducer from "./appReducer/appReducer";
import { initialBanksState } from "./banksReducer/banksReducerModel";
import banksReducer from "./banksReducer/banksReducer";
import { initialClientState } from "./clientReducer/clientReducerModel";
import clientReducer from "./clientReducer/clientReducer";

export const initialState = {
    appReducer: initialAppState,
    banksReducer: initialBanksState,
    clientsReducer: initialClientState,
};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> =>
    combineReducers<RootStoreType>({
        appReducer: appReducer,
        banksReducer: banksReducer,
        clientsReducer: clientReducer,
    });
