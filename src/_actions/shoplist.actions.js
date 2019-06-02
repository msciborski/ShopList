import { shopListConstants } from '../_constants';
import RNFirebase from '../Firebase';

export const shopListActions = {
    getUserShopLists,
    addElementToShopList,
    addShoplist,
    updateShopListElement,
};

function getUserShopLists(userId) {
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

function addElementToShopList(shopListId, userId, element) {
    return dispatch => {
        dispatch(request());

        RNFirebase.firestore().collection('users').doc(userId).collection('shoplist').doc(shopListId).collection('ShopListElements')
            .add(element)
                .then(ref => dispatch(success()))
                .catch(err => dispatch(failure(err)));
    }
    function request() { return { type: shopListConstants.ADD_SHOPLIST_ELEMENT_REQUEST } };
    function success() { return { type: shopListConstants.ADD_SHOPLIST_ELEMENT_SUCCESS } };
    function failure(error) { return { type: shopListConstants.ADD_SHOPLIST_ELEMENT_FAILURE, error} };
}

function addShoplist(userId, shopList) {
    return dispatch => {
        dispatch(request());
        RNFirebase.firestore().collection('users').doc(userId).collection('shoplist')
            .add(shopList)
                .then(ref => dispatch(success()))
                .catch(err => dispatch(failure(err)));
    }

    function request() { return { type: shopListConstants.ADD_SHOPLIST_REQUEST } };
    function success() { return { type: shopListConstants.ADD_SHOPLIST_SUCCESS } };
    function failure() { return { type: shopListConstants.ADD_SHOPLIST_FAILURE } };
}

function updateShopListElement(userId, shopListId, shopListElementId, element) {
    return dispatch => {
        dispatch(request());
        
        RNFirebase.firestore().collection('users').doc(userId).collection('shoplist').doc(shopListId).collection('ShopListElements').doc(shopListElementId)
            .set(element)
                .then(ref => dispatch(success()))
                .catch(err => dispatch(failure(err)));
    }


    function request() { return { type: shopListConstants.UPDATE_SHOPLIST_ELEMENT_REQUEST } };
    function success() { return { type: shopListConstants.UPDATE_SHOPLIST_ELEMENT_SUCCESS } };
    function failure(error) { return { type: shopListConstants.UPDATE_SHOPLIST_ELEMENT_FAILURE } };
}
