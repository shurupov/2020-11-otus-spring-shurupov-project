import {call, put, takeEvery} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListSlice} from "./slice";

export const purchasesListAction = () => {
    return {
        type: sagaActionTypes.PURCHASE_LIST,
    };
};

export function* workerPurchasesList(): any {
    const response = yield call(fetch, process.env.service + "/api/purchases");
    const purchases = yield call([response, 'json']);
    yield put(purchasesListSlice.actions.list(purchases._embedded.purchases));
}

export function* watchPurchasesList() {
    yield takeEvery(sagaActionTypes.PURCHASE_LIST, workerPurchasesList);
}