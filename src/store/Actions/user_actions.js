import axios from 'axios'
import {
   
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
    
} from './types'


//SERVER URLS
import { LOGIN_SERVER, REGISTER_SERVER, AUTH_SERVER , LOGOUT_SERVER} from '../../api/apiUrl'

//REGISTER USER
export function registerUser(dataToSubmit){
    const request = axios.post(`${REGISTER_SERVER}`, dataToSubmit)
                        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}//REGISTER END

//LOGIN USER
export function loginUser(dataToSubmit){
    const request = axios.post(`${LOGIN_SERVER}`, dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}//END LOGIN

//AUTH USER
export function auth(){
    const request = axios.get(`${AUTH_SERVER}`, {
        headers:{Accept: "application/json", authorization:`Bearer`+localStorage.getItem('token')}
    })
        .then(response => response.data);

        return{
            type: AUTH_USER,
            payload:request
        }
}//END AUTH


//LOGOUT USER
export function logoutUser(){
    
    const request = axios.post(`${LOGOUT_SERVER}`,
    {
        headers:{Accept: "application/json", authorization:`Bearer`+localStorage.getItem('token')}
    })
        .then(response =>  response.data, localStorage.removeItem('token'))
   

    return {
        type:LOGOUT_USER,
        payload: request
    }
}//END LOGOUT

