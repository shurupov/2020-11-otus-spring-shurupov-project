import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {purchasesListSlice} from "../components/purchasesList/slice";

export const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    purchasesList: purchasesListSlice.reducer
});