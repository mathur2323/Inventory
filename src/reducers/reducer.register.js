import * as actionType from './../constants';

const defaultState = {}

const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.REGISTER_USER_REQUEST:
            return {
                ...state,
                processing: true,
                isUserLoggedIn:false,
                errMsg:''
            }

        case actionType.REGISTER_USER_SUCCESS:
        sessionStorage.setItem("access_token", action.payload.token);
            return {
                ...state,
                processing: false,
                isUserLoggedIn:true,
                token:action.payload.token,
                errMsg:''
            }

        case actionType.REGISTER_USER_FAILURE:
            return {
                ...state,
                processing: false,
                isUserLoggedIn:false,
                errMsg:action.payload.msg
            }

        default:
            return state
    }
}

export default registerReducer;