import { combineReducers } from "redux";
import loginReducer from "../reducers/login-reducer";
import userinfoReducer from "../reducers/user_info_reducer";
import newusernameReducer from "../reducers/newusernameReducer";

export default combineReducers({
    loginReducer,
    userinfoReducer,
    newusernameReducer,
});
