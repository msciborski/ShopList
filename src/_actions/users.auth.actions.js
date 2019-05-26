import { usersAuthConstants } from '../_constants';
import RNFirebase from '../Firebase';

export const usersAuthActions = {
    singUp,
    singIn,
};

function singUp(email, password) {
    return dispatch => {
        dispatch(request());

        return RNFirebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const { user } = userCredential;
            dispatch(success(user)); 
        }).catch(error => dispatch(failure(error)));
    }

    function request() { return { type: usersAuthConstants.USER_SING_UP_REQUEST } };
    function success(user) { return { type: usersAuthConstants.USER_SING_UP_SUCCESS, user } };
    function failure(error) { return { type: usersAuthConstants.USER_SING_UP_FAILURE, error } };
}

function singIn(email, password) {
    return dispatch => {
        dispatch(request());

        return RNFirebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const { user } = userCredential;
                dispatch(success(user));
            }).catch(error => dispatch(failure(error)));
    }

    function request() { return { type: usersAuthConstants.USER_SING_IN_REQUEST } };
    function success(user) { return { type: usersAuthConstants.USER_SING_IN_SUCCESS, user } };
    function failure(error) { return { type: usersAuthConstants.USER_SING_IN_FAILURE, error } };
}