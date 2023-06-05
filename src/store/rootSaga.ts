import { all } from "redux-saga/effects";
import { banksSaga } from "./sagas/bankSaga/bankSaga";
import { clientSaga } from "./sagas/clientSaga/clientSaga";

export default function* rootSaga(): Generator {
    yield all([...banksSaga, ...clientSaga]);
}
