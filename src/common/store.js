import {createStore,applyMiddleware,compose,combineReducers,} from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import reducers from './reducers';
//import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({reducers});

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);
export default configureStore;