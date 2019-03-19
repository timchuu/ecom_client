import {
    
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGIN_USER_ERROR,
    LOGOUT_USER
   
} from '../Actions/types'

const initState ={
    authenticated:false
}

export default function(state = initState, action){
    
    switch(action.type){
        case REGISTER_USER:
            return {...state, register:action.payload}
        case LOGIN_USER:
            return {...state, loginSuccess:action.payload}
        case LOGIN_USER_ERROR:
            return {...state, isPending:false, error:action.payload}
        case AUTH_USER:
            return {...state, isLoading:false, authenticated:true,userData: action.payload}
        case  LOGOUT_USER:
            return {...state, authenticated:false}
        default:
            return state
    }
}