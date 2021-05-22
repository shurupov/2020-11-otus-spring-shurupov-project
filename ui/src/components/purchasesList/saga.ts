import {call, put, takeEvery} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListSlice} from "./slice";
import {authenticatedFetch} from "../../utils/auth";
import {history} from "../../store/store";

export const purchasesListAction = () => {
    return {
        type: sagaActionTypes.PURCHASE_LIST,
    };
};

export function* workerPurchasesList(): any {
    try {
        const purchases = yield call(authenticatedFetch, "/api/purchases");
        yield put(purchasesListSlice.actions.list(purchases._embedded.purchases));
    } catch (e) {
        console.log(e);
        if (e.name == "BadResponse" && e.response.status == 401) {
            history.push("/auth");
        }
    }
}

export function* watchPurchasesList() {
    yield takeEvery(sagaActionTypes.PURCHASE_LIST, workerPurchasesList);
}