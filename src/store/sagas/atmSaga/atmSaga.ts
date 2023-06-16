import { call, put, takeLatest } from "redux-saga/effects";
import { addNewATMWather, deleteATMWathcer, loadATM } from "./atmSagaModel";
import { setIsLoading } from "../../appReducer/appReducer";
import { addNewATM, deleteATM, fetchAllATM } from "../../../services/atmService";
import { ATMModel } from "../../../models/ATMModel";
import { setATM } from "../../atmReducer/atmReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { responseATMBodyType } from "../../../models/ResponseModel";

export const atmSaga = [takeLatest(loadATM, fetchATMWorker), takeLatest(addNewATMWather, addNewATMWorker), takeLatest(deleteATMWathcer, deleteATMWorker)];

function* fetchATMWorker(): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchAllATM)) as ATMModel[];
        yield put(setATM(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* addNewATMWorker(action: PayloadAction<responseATMBodyType>): Generator {
    try {
        yield put(setIsLoading(true));
        yield call(addNewATM, action.payload);
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* deleteATMWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        yield call(deleteATM, action.payload);
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}
