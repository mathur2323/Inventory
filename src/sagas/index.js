import {all} from 'redux-saga/effects';
import registerUserWatcherSaga from './saga.register';
import loginUserWatcherSaga from './saga.login';

export default function* rootSaga(){
    yield all([
        registerUserWatcherSaga(),
        loginUserWatcherSaga()
    ])
}