import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { db } from '../config';

import rootReducer from '../_reducers';


const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware.withExtraArgument({ getFirestore })),
    reduxFirestore(db)
));

export default store;