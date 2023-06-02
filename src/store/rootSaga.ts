import { all } from "redux-saga/effects";
import { banksSaga } from "./sagas/bankSaga/bankSaga";

export default function* rootSaga(): Generator {
    yield all([...banksSaga]);
}
