import {put, takeEvery, select} from "redux-saga/effects";
import {sagaActionTypes} from "../../store/sagaActionTypes";

export const pathSelector = (state: any) => state.router.location.pathname;
export const locationSelector = (state: any) => state.router.location;

export function* workerLocationChange(): any {
    const url = yield select(pathSelector);
    console.log(url);
    const location = yield select(locationSelector);
    console.log(location);
}

export function* watchLocationChange() {
    yield takeEvery(sagaActionTypes.LOCATION_CHANGE, workerLocationChange);
}