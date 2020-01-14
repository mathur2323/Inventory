import * as actionType from './../constants';

export const loginUserRequest = reqObj => ({
    type:actionType.LOGIN_USER_REQUEST,
    payload:reqObj
})