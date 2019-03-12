import axios from 'axios'
import {
   
    LOGIN_USER,
    REGISTER_USER,
    
} from './types'


//SERVER URLS
import { LOGIN_SERVER, REGISTER_SERVER } from '../../api/apiUrl'

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


