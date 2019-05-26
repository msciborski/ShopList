import { usersAuthConstants } from '../_constants';
import RNFirebase from '../Firebase';

export const usersAuthActions = {
    signUp,
    signIn,
    signOut,
};

function signUp(email, password) {
    return dispatch => {
        dispatch(request());

        return RNFirebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const { user } = userCredential;
            dispatch(success(user)); 
        }).catch(error => dispatch(failure(error)));
    }

    function request() { return { type: usersAuthConstants.USER_SIGN_UP_REQUEST } };
    function success(user) { return { type: usersAuthConstants.USER_SIGN_UP_SUCCESS, user } };
    function failure(error) { return { type: usersAuthConstants.USER_SIGN_UP_FAILURE, error } };
}

function signIn(email, password) {
    return dispatch => {
        dispatch(request());

        return RNFirebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const { user } = userCredential;
                dispatch(success(user));
            }).catch(error => dispatch(failure(error)));
    }

    function request() { return { type: usersAuthConstants.USER_SIGN_IN_REQUEST } };
    function success(user) { return { type: usersAuthConstants.USER_SIGN_IN_SUCCESS, user } };
    function failure(error) { return { type: usersAuthConstants.USER_SIGN_IN_FAILURE, error } };
}

function signOut() {
    return dispatch => {
        dispatch(request());

        RNFirebase.auth().signOut()
            .then(() => dispatch(success()))
            .catch(error => dispatch(failure(error)));
    }

    function request() { return { type: usersAuthConstants.USER_SIGN_OUT_REQUEST } };
    function success() { return { type: usersAuthConstants.USER_SIGN_OUT_SUCCESS } };
    function failure(error) { return { type: usersAuthConstants.USER_SIGN_OUT_FAILURE, error } };
}