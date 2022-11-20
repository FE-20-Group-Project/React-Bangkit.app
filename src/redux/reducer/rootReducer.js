import { combineReducers } from "redux";
import userSession from "./user/session";
import companyProgram from "./companyProgram/company";

const reducer = combineReducers({
    userSession,
    companyProgram
})


export default reducer;