import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import UserActionTypes from "../user/user.types";
import { clearTheCart } from "./cart.actions";


export function* clearTheCartAfterSignOut() {

    yield put(clearTheCart());
};


export function* onSignOutSuccessCartClear() {

    yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearTheCartAfterSignOut);
};


export function* cartSagas() {

    yield all([call(onSignOutSuccessCartClear)]);
};