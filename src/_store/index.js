import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';

import fb from '../config';

import rootReducer from '../_reducers';


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fb, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: false }),
    reduxFirestore(fb),
));

export default store;