import registerReducer from './reducer.register';
import loginReducer from './reducer.login';
import {combineReducers} from 'redux';

export default combineReducers({
    register:registerReducer,
    login:loginReducer
})
