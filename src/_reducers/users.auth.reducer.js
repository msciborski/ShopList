import { usersAuthConstants } from '../_constants';

export const usersAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case usersAuthConstants.USER_SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case usersAuthConstants.USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user,
            };
        case usersAuthConstants.USER_SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case usersAuthConstants.USER_SIGN_IN_REQUEST: 
            return {
                ...state,
                loading: true,
            };
        case usersAuthConstants.USER_SIGN_IN_SUCCESS: 
            return {
                ...state,
                loading: false,
                user: action.user,
            };
        case usersAuthConstants.USER_SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state
    }
};