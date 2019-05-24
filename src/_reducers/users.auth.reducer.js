import { usersAuthConstants } from '../_constants';

export const usersAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case usersAuthConstants.USER_SING_UP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case usersAuthConstants.USER_SING_UP_SUCCESS:
            return {
                ...state,
                user: action.user,
            };
        case usersAuthConstants.USER_SING_UP_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
};