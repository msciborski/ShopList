import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import RNFirebase from '../Firebase';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        loggerMiddleware,
    ),
    reactReduxFirebase(RNFirebase, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: false, enableRedirectHandling: false }),
    reduxFirestore(RNFirebase),
));

export default store;
