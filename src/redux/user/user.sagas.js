import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import UserActionTypes from "./user.types";
import {
    googleProvider,
    auth,
    createUserProfileDocument,
    getCurrentUser
} from "../../firebase/firebase.utils";
import {
    signInSuccess, signInFailure,
    signOutSuccess, signOutFailure
} from "./user.actions";



export function* signInWithGoogle() {

    try {

        const { user } = yield auth.signInWithPopup(googleProvider);

        yield getSnapshotFromUserAuth(user);

    } catch (error) {

        yield put(signInFailure(error));
    }
};


export function* onGoogleSignInStart() {

    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
};


export function* getSnapshotFromUserAuth(userAuth) {

    try {
        const userRef = yield call(createUserProfileDocument, userAuth);

        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));

    } catch (error) {

        yield put(signInFailure(error));
    }
};


export function* signInWithEmail({ payload: { email, password } }) {

    try {

        const { user } = yield auth.signInWithEmailAndPassword(email, password);

        yield getSnapshotFromUserAuth(user);

    } catch (error) {

        yield put(signInFailure(error));
    }


};


export function* onEmailSignInStart() {

    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
};


export function* onceUserAuthenticated() {

    try {

        const userAuth = yield getCurrentUser();

        if (!userAuth) {

            return;
        }

        yield getSnapshotFromUserAuth(userAuth);

    } catch (error) {

        yield put(signInFailure(error));
    }
};

export function* onCheckUserSession() {

    yield takeLatest(UserActionTypes.PERSIST_USER_SESSION, onceUserAuthenticated)
};

export function* signOut() {

    try {

        yield auth.signOut();

        yield put(signOutSuccess());

    } catch (error) {

        yield put(signOutFailure(error));
    }
};


export function* onSignOutStart() {

    yield takeLatest(UserActionTypes.SIGNOUT_START, signOut)
};

export function* userSagas() {

    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)]);
}