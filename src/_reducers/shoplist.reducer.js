import { shopListConstants } from '../_constants';

export const shopListReducer = (state = {}, action) => {
    switch (action.type) {
        case shopListConstants.GET_USER_SHOPLISTS_REQUEST: 
            return {
                ...state,
            };
        case shopListConstants.GET_USER_SHOPLISTS_SUCCESS: 
            return {
                ...state,
                userShopLists: action.userShopLists,
            };
        case shopListConstants.GET_USER_SHOPLISTS_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}