import { usersAuthService } from '../_services';
import { usersAuthConstants } from '../_constants';

export const usersAuthAction = {
    singUpUser,
};

function singUpUser(email, password) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        dispatch(request());

        usersAuthService.singUpUser(email, password, getFirebase).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                username: email
            });
        })
        .then(() => dispatch(success()))
        .catch(err => dispatch(failure(err)));
    };

    function request() { return { type: usersAuthConstants.USER_SING_UP_REQUEST } };
    function success() { return { type: usersAuthConstants.USER_SING_UP_SUCCESS } };
    function failure(error) { return { type: usersAuthConstants.USER_SING_UP_FAILURE } };
} 