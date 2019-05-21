import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import fb from '../config';

import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        loggerMiddleware,
    ),
    reactReduxFirebase(fb, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
    reduxFirestore(fb),
));

export default store;