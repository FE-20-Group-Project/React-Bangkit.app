import { combineReducers } from "redux";
import userSession from "./user/session";

const reducer = combineReducers({
    userSession,
})


export default reducer;