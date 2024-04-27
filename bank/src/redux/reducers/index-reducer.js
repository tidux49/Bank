import { combineReducers } from "redux";
import loginReducer from "../reducers/login-reducer";
import userinfoReducer from "../reducers/user_info_reducer";
import putusernameReducer from "../reducers/put-username-reducer";

export default combineReducers({
    loginReducer,
    userinfoReducer,
    putusernameReducer,
});
