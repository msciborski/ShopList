import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { usersAuthReducer } from './users.auth.reducer';
import { shopListReducer } from './shoplist.reducer';

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    authUser: usersAuthReducer,
    shopListReducer: shopListReducer,
});

export default rootReducer;