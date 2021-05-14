import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import userSagas from './user/user.sagas';


const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSaga);

export default store;