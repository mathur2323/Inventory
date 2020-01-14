import * as actionType from './../constants';

const defaultState = {}

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.LOGIN_USER_REQUEST:
            return {
                ...state,
                processing: true,
                isUserLoggedIn:false,
                errMsg:''
            }

        case actionType.LOGIN_USER_SUCCESS:
            return {
                ...state,
                processing: false,
                isUserLoggedIn:true,
                token:action.payload.token,
                errMsg:''
            }

        case actionType.LOGIN_USER_FAILURE:
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

export default loginReducer;