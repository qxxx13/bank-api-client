import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";
import { addNewBankWatcher, loadBanks } from "../store/sagas/bankSaga/bankSagaModel";
import { responseATMBodyType, responseBankBodyType, responseClientBodyType } from "../models/ResponseModel";
import { addNewClientWatcher, loadClients } from "../store/sagas/clientSaga/clientSagaModel";
import { addNewATMWather, loadATM } from "../store/sagas/atmSaga/atmSagaModel";

export const useDataAppend = (watcher: "bank" | "client" | "atm", responseBody: responseBankBodyType | responseClientBodyType | responseATMBodyType) => {
    const dispatch = useAppDispatch();

    const addNewBank = useCallback(() => {
        dispatch(addNewBankWatcher(responseBody as responseBankBodyType));
        dispatch(loadBanks());
    }, [dispatch, responseBody]);

    const addNewClient = useCallback(() => {
        dispatch(addNewClientWatcher(responseBody as responseClientBodyType));
        dispatch(loadClients());
    }, [dispatch, responseBody]);

    const addNewATM = useCallback(() => {
        dispatch(addNewATMWather(responseBody as responseATMBodyType));
        dispatch(loadATM());
    }, [dispatch, responseBody]);

    switch (watcher) {
        case "bank":
            return addNewBank;
        case "client":
            return addNewClient;
        case "atm":
            return addNewATM;
    }
};
