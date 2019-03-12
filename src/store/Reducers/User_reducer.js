import {
    
    LOGIN_USER,
    REGISTER_USER,
    LOGIN_USER_ERROR,
   
} from '../Actions/types'


export default function(state = {}, action){
    
    switch(action.type){
        case REGISTER_USER:
            return {...state, register:action.payload}
        case LOGIN_USER:
            return {...state, loginSuccess:action.payload}
        case LOGIN_USER_ERROR:
            return {...state, isPending:false, error:action.payload}
        default:
            return state
    }
}