import {POST_LOGIN} from '../actions/login-action';
const initialState = {
    token : "",
};

export default function loginReducer(state = initialState, action){
    switch(action.type){
        case POST_LOGIN :
            return {token: action.payload.body.token };
        default:
            return state;
    }
}