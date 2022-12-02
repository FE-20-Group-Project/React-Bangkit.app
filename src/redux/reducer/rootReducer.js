import { combineReducers } from "redux";
import userSession from "./user/session";
import companyProgram from "./companyProgram/company";
import jobsList from "./jobs/jobsList";
import scholarshipList from "./scholarship/scholarshipList";
import laporan from "./laporan/laporan";

const reducer = combineReducers({
    userSession,
    companyProgram,
    jobsList,
    scholarshipList,
    laporan
})


export default reducer;