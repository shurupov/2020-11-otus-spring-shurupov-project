import {call} from "redux-saga/effects";

export function* extendedFetch(url: string, method = "GET", body: any = null): any {
    const requestSettings: RequestInit = {
        method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined,
    };
    const response: Response = yield call(fetch, process.env.service + url, requestSettings);
    return yield call([response, 'json']);
}