import { call, put, takeLatest } from "redux-saga/effects";

import { loadBanks, addNewBankWatcher, deleteBankWatcher, loadBankClients } from "./bankSagaModel";
import { setIsLoading } from "../../appReducer/appReducer";
import { addNewBank, deleteBank, fetchBanks, fetchClientsByBankCode } from "../../../services/apiService";
import { BankModel } from "../../../models/BankModel";
import { setBankClients, setBanks, setIsBankClientsLoading } from "../../banksReducer/banksReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { responseBankBodyType } from "../../../models/ResponseModel";
import { ClientModel } from "../../../models/ClientModel";

export const banksSaga = [
    takeLatest(loadBanks, fetchBanksWorker),
    takeLatest(addNewBankWatcher, addNewBankWorker),
    takeLatest(deleteBankWatcher, deleteBankWorker),
    takeLatest(loadBankClients, fetchBankClientsWorker),
];

function* fetchBanksWorker(): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchBanks)) as BankModel[];
        yield put(setBanks(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* addNewBankWorker(action: PayloadAction<responseBankBodyType>): Generator {
    try {
        yield put(setIsLoading(true));
        yield call(addNewBank, action.payload);
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* deleteBankWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        yield call(deleteBank, action.payload);
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* fetchBankClientsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsBankClientsLoading(true));
        const bankClient = (yield call(fetchClientsByBankCode, action.payload)) as ClientModel[];
        yield put(setBankClients(bankClient));
        yield put(setIsBankClientsLoading(false));
    } catch (error) {
        console.log(error);
    }
}
