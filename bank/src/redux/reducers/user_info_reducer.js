import {POST_USERINFO} from '../actions/login-action';

const initialState_userinfo = {
    userinfo: "",
};

export default function userinfoReducer(state =initialState_userinfo, action ){
    switch (action.type) {
        case POST_USERINFO:
            return { ...state, userinfo: action.payload};
            default:
                return state;}
}