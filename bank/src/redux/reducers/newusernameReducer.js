import {PUT_USERNAME} from '../actions/login-action';
const initialState_userinfo = {
    newusername : "",
};

export default function newusernameReducer(state =initialState_userinfo, action ){
    switch (action.type) {
    case PUT_USERNAME:
    return { ...state, 
            newusername: action.payload};
    default:
        return state;}
}