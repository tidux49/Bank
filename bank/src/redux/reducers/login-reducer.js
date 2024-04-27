import { POST_LOGIN } from '../actions/login-action';
import { FAIL_LOGIN } from '../actions/login-action';
import { ERROR_LOGIN } from '../actions/login-action';


const initialState_login = {
    token: "",
    message: null,
};

export default function loginReducer(state = initialState_login, action) {
    switch (action.type) {
        case POST_LOGIN:
            return { ...state, token: action.payload, message: null };
        case FAIL_LOGIN:
            return { ...state, message: action.payload };
        case ERROR_LOGIN:
            return { ...state, message: action.payload };
        default:
            return state;
    }
}


