import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { usersReducer } from './users.reducer';

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    usersReducer,
});

export default rootReducer;