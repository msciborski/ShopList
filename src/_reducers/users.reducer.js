import { usersConstants } from '../_constants';

export const usersReducer = (state={}, action) =>{
    switch (action.type) {
        case usersConstants.GET_USER_REQUEST: 
            return {
                ...state,
            };
        case usersConstants.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
            };
        case usersConstants.GET_USER_FAILURE:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
}