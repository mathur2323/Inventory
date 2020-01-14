import axios from 'axios';

function post(url, body){
    return axios.post(url, body)
    .then(handleResponse)
    .catch(error)
}

function handleResponse(response){
    return response
}

function error(error){
    return error
}

export const baseService = {
    post
}