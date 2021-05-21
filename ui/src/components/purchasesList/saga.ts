import {call, put, takeEvery} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListSlice} from "./slice";
import {extendedFetch} from "../../utils/auth";

export const purchasesListAction = () => {
    return {
        type: sagaActionTypes.PURCHASE_LIST,
    };
};

export function* workerPurchasesList(): any {
    try {
        const response = yield call(extendedFetch, "/api/purchases");
        const purchases = yield call([response, 'json']);
        yield put(purchasesListSlice.actions.list(purchases._embedded.purchases));
    } catch (e) {
        console.log(e);
        console.error("some error");
    }
}

export function* watchPurchasesList() {
    yield takeEvery(sagaActionTypes.PURCHASE_LIST, workerPurchasesList);
}