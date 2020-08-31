import {createStore,applyMiddleware,compose,combineReducers,} from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import reducersUsers from './reducers';
import Sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({reducersUsers});

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(Sagas)

export default store;