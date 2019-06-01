import { shopListConstants } from '../_constants';
import RNFirebase from '../Firebase';

export const shopListActions = {
    getUserShopLists,
};

function getUserShopLists(userId) {
    console.log('UserId', userId);
    return dispatch => {
        dispatch(request());

        RNFirebase.firestore()
            .collection('users').doc(userId).collection('shoplist')
                .get().then(querySnapshot => {
                    const shopLists = [];
                    querySnapshot.forEach(snapshot => {
                        const doc = snapshot.data();
                        doc['shopListElements'] = [];
                        
                        const id = snapshot.id;
                        doc['id'] = id;

                        RNFirebase.firestore().collection('users').doc(userId).collection('shoplist').doc(id).collection('ShopListElements')
                            .get().then(querySnapshot => {
                                querySnapshot.forEach(snapshot => {
                                    const shopListElement = snapshot.data();
                                    shopListElement['id'] = snapshot.id,
                                    
                                    doc.shopListElements.push(shopListElement);
                                })
                            }).catch(err => dispatch(failure(err)));

                        shopLists.push(doc);
                    });

                    dispatch(success(shopLists));
                }).catch(err => failure(err));

        function request() { return { type: shopListConstants.GET_USER_SHOPLISTS_REQUEST } };
        function success(shopLists) { return { type: shopListConstants.GET_USER_SHOPLISTS_SUCCESS, userShopLists: shopLists } };
        function failure(error) { return { type: shopListConstants.GET_USER_SHOPLISTS_FAILURE, error } };
    }
}
