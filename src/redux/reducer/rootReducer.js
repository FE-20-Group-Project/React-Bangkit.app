import { combineReducers } from "redux";
import userSession from "./user/session";
import companyProgram from "./companyProgram/company";
import jobsList from "./jobs/jobsList";
import scholarshipList from "./scholarship/scholarshipList";

const reducer = combineReducers({
    userSession,
    companyProgram,
    jobsList,
    scholarshipList
})


export default reducer;