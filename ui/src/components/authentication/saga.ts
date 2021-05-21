import {AuthRequest} from "./Authetication";
import {sagaActionTypes} from "../../store/sagaActionTypes";
import {call, takeEvery} from "redux-saga/effects";
import {extendedFetch} from "../../utils/auth";
import {AnyAction} from "redux";

export const loginAction = (authRequest: AuthRequest) => {
    return {
        type: sagaActionTypes.AUTHENTICATION_LOGIN,
        payload: authRequest
    }
}

export function* workerLogin(action:AnyAction): any {
    const jwtResponse = yield call(extendedFetch, "/authenticate", "POST", action.payload);
    console.log(jwtResponse);
}

export function* watchLogin() {
    yield takeEvery(sagaActionTypes.AUTHENTICATION_LOGIN, workerLogin);
}