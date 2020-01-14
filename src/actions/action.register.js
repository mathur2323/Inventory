import * as actionType from './../constants';

export const registerUserRequest = reqObj => ({
    type:actionType.REGISTER_USER_REQUEST,
    payload:reqObj
})