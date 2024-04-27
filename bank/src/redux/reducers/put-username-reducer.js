import { PUT_USERNAME } from "../actions/login-action";

const initialState_userinfo = {
    username: "",
};

export default function putusernameReducer(state =initialState_userinfo, action ){
    switch (action.type) {
        case PUT_USERNAME:
            return { ...state, username: action.payload};
            default:
                return state;}
}