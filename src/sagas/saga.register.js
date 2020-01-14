import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from './../services';
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from './../constants';
import { _global } from './../helpers';

function* registerUserWalker(action) {
    try {
        const result = yield call(api.registerUser, action.payload)
        if (result.status !== 200) throw result
        yield put({
            type: REGISTER_USER_SUCCESS,
            payload: result.data
        })
    } catch (e) {
        yield put({
            type: REGISTER_USER_FAILURE,
            payload: e.response.data
        })
    }

}

export default function* registerUserWatcherSaga() {
    yield takeLatest(REGISTER_USER_REQUEST, registerUserWalker)
}