import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './../reducers';
import DevTools from '../containers/app/devTools';
import rootSaga from './../sagas';
import createSagaMiddleware, {runSaga} from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';

const sagaMiddleware = createSagaMiddleware({sagaMonitor})

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), DevTools.instrument()))

store.runSaga = sagaMiddleware.run;

store.runSaga(rootSaga);

export default store;