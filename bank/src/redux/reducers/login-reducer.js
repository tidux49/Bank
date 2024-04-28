import { POST_LOGIN } from '../actions/login-action';
import { FAIL_LOGIN } from '../actions/login-action';
import { ERROR_LOGIN } from '../actions/login-action';
import { LOGOUT } from '../actions/login-action';


const initialState_login = {
    token: "",
    message: null,
    connect : false
};

export default function loginReducer(state = initialState_login, action) {
    switch (action.type) {
        case POST_LOGIN:
            return { ...state, token: action.payload, message: null, connect : true };
        case FAIL_LOGIN:
            return { ...state, message: action.payload };
        case ERROR_LOGIN:
            return { ...state, message: action.payload };
        case LOGOUT:
            return { ...state,token: null, connect:false };
        default:
            return state;
    }
}


