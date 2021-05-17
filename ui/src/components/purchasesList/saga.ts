import {call, takeEvery} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";

export const purchasesListAction = () => {
    return {
        type: sagaActionTypes.PURCHASE_LIST,
    };
};

// export const SERVER_URL = `${process.env.service}`;

export function* workerPurchasesList(): any {
    console.log("workerPurchasesList");
    const response = yield call(fetch, process.env.service + "/api/purchases");
    const purchases = yield call([response, 'json']);
    // fetch("/api/purchases")
    //     .then(r => console.log(r.json()));
    /*const response = yield call(fetch, "/api/purchases");
    const purchases = yield call([response, 'json']);*/
    console.log("fetch completed");
    // console.log(purchases);
}

export function* watchPurchasesList() {
    yield takeEvery(sagaActionTypes.PURCHASE_LIST, workerPurchasesList);
}