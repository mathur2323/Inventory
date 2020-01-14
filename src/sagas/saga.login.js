import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from './../services';
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from './../constants';
import { _global } from './../helpers';

function* loginUserWalker(action) {
    try {
        const result = yield call(api.loginUser, action.payload)
        if (result.status !== 200) throw result
        sessionStorage.setItem("access_token", result.data.token);
        sessionStorage.setItem("userId", result.data.user.id);
        yield put({
            type: LOGIN_USER_SUCCESS,
            payload: result.data
        })
    } catch (e) {
        yield put({
            type: LOGIN_USER_FAILURE,
            payload: e.response.data
        })
    }

}

export default function* loginUserWatcherSaga() {
    yield takeLatest(LOGIN_USER_REQUEST, loginUserWalker)
}