import { shopListConstants } from '../_constants';
import RNFirebase from '../Firebase';

export const shopListActions = {
    getUserShopLists,
};

function getUserShopLists(userId) {
    return dispatch => {
        dispatch(request());

        RNFirebase
            .firestore()
            .collection('users')
            .doc(userId)
            .collection('shoplist')
            .get().then(snapshot => {
                const shopLists = snapshot.map(doc => doc.data());
                dispatch(success(shopLists));
            }).catch(err => dispatch(failure(err)));


        function request() { return { type: shopListConstants.GET_USER_SHOPLISTS_REQUEST } };
        function success(shopLists) { return { type: shopListConstants.GET_USER_SHOPLISTS_SUCCESS, userShopLists: shopLists } };
        function failure(error) { return { type: shopListConstants.GET_USER_SHOPLISTS_FAILURE, error } };
    }
}
