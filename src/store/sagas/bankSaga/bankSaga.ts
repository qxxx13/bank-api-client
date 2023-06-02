import { call, put, takeLatest } from "redux-saga/effects";

import { loadBanks } from "./bankSagaModel";
import { setIsLoading } from "../../appReducer/appReducer";
import { fetchBanks } from "../../../services/apiService";
import { BankModel } from "../../../models/BankModel";
import { setBanks } from "../../banksReducer/banksReducer";

export const banksSaga = [takeLatest(loadBanks, fetchBanksWorker)];

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
