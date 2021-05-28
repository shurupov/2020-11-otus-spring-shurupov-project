import {put, takeEvery, select} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListAction} from "../purchasesList/saga";
import {logout} from "../../utils/auth";
import {purchaseDisplayAction} from "../purchase/saga";
import {productsListAction} from "../productList/saga";

export const pathSelector = (state: any) => state.router.location.pathname;

export function* workerLocationChange(): any {
    const url = yield select(pathSelector);
    if (url == "/purchases") {
        yield put(purchasesListAction());
    } else if (/^\/purchases\/\d+$/.test(url)) {
        const result = url.match(/^\/purchases\/(\d+)$/);
        const purchaseId = result[1];
        yield put(purchaseDisplayAction(purchaseId));
        yield put(productsListAction(purchaseId));
    } else if (url == "/logout") {
        console.log("/logout")
        logout();
    }
}

export function* watchLocationChange() {
    yield takeEvery(sagaActionTypes.LOCATION_CHANGE, workerLocationChange);
}

