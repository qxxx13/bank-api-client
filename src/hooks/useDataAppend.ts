import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";
import { addNewBankWatcher, loadBanks } from "../store/sagas/bankSaga/bankSagaModel";
import { responseBankBodyType, responseClientBodyType } from "../models/ResponseModel";
import { addNewClientWatcher, loadClients } from "../store/sagas/clientSaga/clientSagaModel";

export const useDataAppend = (watcher: "bank" | "client", responseBody: responseBankBodyType | responseClientBodyType) => {
    const dispatch = useAppDispatch();

    const addNewBank = useCallback(() => {
        dispatch(addNewBankWatcher(responseBody as responseBankBodyType));
        dispatch(loadBanks());
    }, [dispatch, responseBody]);

    const addNewClient = useCallback(() => {
        dispatch(addNewClientWatcher(responseBody as responseClientBodyType));
        dispatch(loadClients());
    }, [dispatch, responseBody]);

    switch (watcher) {
        case "bank":
            return addNewBank;
        case "client":
            return addNewClient;
    }
};
