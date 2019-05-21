import { usersConstants } from '../_constants';
import { usersService } from '../_services';

export const usersActions = {
    getUser,
};

function getUser(userId) {
    return (dispatch, getState, { getFirestore }) => {
        dispatch(request());

        usersService.getUser(userId, getFirestore)
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    dispatch(success(data));
                } else {
                    dispatch(failure('User doesn\'t exists.'));
                }
            }).catch(err => dispatch(failure(err)));
    }

    function request() { return { type: usersConstants.GET_USER_REQUEST} };
    function success(user) { return { type: usersConstants.GET_USER_SUCCESS, user } };
    function failure(error) { return { type: usersConstants.GET_USER_FAILURE, error } };
}