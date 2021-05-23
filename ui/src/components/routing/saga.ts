import {put, takeEvery, select} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListAction} from "../purchasesList/saga";
import {logout} from "../../utils/auth";

export const pathSelector = (state: any) => state.router.location.pathname;

export function* workerLocationChange(): any {
    const url = yield select(pathSelector);
    if (url == "/purchases") {
        yield put(purchasesListAction());
    } else if (url == "/logout") {
        console.log("/logout")
        logout();
    }
}

export function* watchLocationChange() {
    yield takeEvery(sagaActionTypes.LOCATION_CHANGE, workerLocationChange);
}

