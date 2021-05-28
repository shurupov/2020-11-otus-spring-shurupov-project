import {put, takeEvery, select} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListAction} from "../purchasesList/saga";
import {logout} from "../../utils/auth";
import {purchaseDisplayAction} from "../purchase/saga";

export const pathSelector = (state: any) => state.router.location.pathname;

export function* workerLocationChange(): any {
    const url = yield select(pathSelector);
    if (url == "/purchases") {
        yield put(purchasesListAction());
    } else if (/^\/purchases\/\d+$/.test(url)) {
        const result = url.match(/^\/purchases\/(\d+)$/);
        yield put(purchaseDisplayAction(result[1]));
    } else if (url == "/logout") {
        console.log("/logout")
        logout();
    }
}

export function* watchLocationChange() {
    yield takeEvery(sagaActionTypes.LOCATION_CHANGE, workerLocationChange);
}

