import { call, put, takeLatest } from "redux-saga/effects";

import { setIsLoading } from "../../appReducer/appReducer";
import { addNewClientWatcher, loadClients } from "./clientSagaModel";
import { addNewClient, fetchClients } from "../../../services/apiService";
import { ClientModel } from "../../../models/ClientModel";
import { setClients } from "../../clientReducer/clientReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { responseClientBodyType } from "../../../components/ClientPage/AddNewClient/AddNewClient";

export const clientSaga = [
    takeLatest(loadClients, fetchClientsWorker),
    takeLatest(addNewClientWatcher, addNewClientWorker),
];

function* fetchClientsWorker(): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchClients)) as ClientModel[];
        yield put(setClients(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* addNewClientWorker(action: PayloadAction<responseClientBodyType>): Generator {
    try {
        yield put(setIsLoading(true));
        yield call(addNewClient, action.payload);
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}
