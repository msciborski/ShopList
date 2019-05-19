import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { users } from './users.reducer';

const rootReducer = combineReducers({
    firestoreShoplist: firestoreReducer,
    users,
});

export default rootReducer;