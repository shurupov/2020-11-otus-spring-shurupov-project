import {put, takeEvery, select} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {purchasesListAction} from "../purchasesList/saga";

export const pathSelector = (state: any) => state.router.location.pathname;

export function* workerLocationChange(): any {
    const url = yield select(pathSelector);
    console.log(url);
    if (url == "/purchases") {
        console.log("purchases condition branch")
        yield put(purchasesListAction());
    }
}

export function* watchLocationChange() {
    yield takeEvery(sagaActionTypes.LOCATION_CHANGE, workerLocationChange);
}

