import { all } from "redux-saga/effects";
import { banksSaga } from "./sagas/bankSaga/bankSaga";
import { clientSaga } from "./sagas/clientSaga/clientSaga";
import { atmSaga } from "./sagas/atmSaga/atmSaga";

export default function* rootSaga(): Generator {
    yield all([...banksSaga, ...clientSaga, ...atmSaga]);
}
