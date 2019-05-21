import { usersConstants } from '../_constants';
import { usersService } from '../_services';

export const usersActions = {
    getUser,
};

function getUser(userId) {
    console.log('Get user action');
    return (dispatch, getState, { getFirestore }) => {
        dispatch(request());

        usersService.getUser(userId, getFirestore)
            .then((doc) => {
                console.log('Doc', doc);
                if (doc.exists) {
                    const data = doc.data();
                    dispatch(success(data));
                } else {
                    console.log('Cos sie wyjebalo');
                    dispatch(failure('User doesn\'t exists.'));
                }
            }).catch(err => dispatch(failure(err)));
    }

    function request() { return { type: usersConstants.GET_USER_REQUEST} };
    function success(user) { return { type: usersConstants.GET_USER_SUCCESS, user } };
    function failure(error) { return { type: usersConstants.GET_USER_FAILURE, error } };
}