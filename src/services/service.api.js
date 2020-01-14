import {baseService} from './service';

function registerUser(data){
    let url = '/api/signup';
    return baseService.post(url,data)
}

function loginUser(data){
    let url = '/api/login';
    return baseService.post(url,data)
}

export const api = {
    registerUser,
    loginUser
}