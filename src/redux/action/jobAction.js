import axios from "axios";
import { API_KEY_JOBS } from "../../env/env";
const FETCH_START = "fetch_start";
const SUCCESS_GET_JOBS = "success_get_jobs";


const fetchStart = () => {
    return {
        type : FETCH_START
    }
}

const successGetJobs = (data) => {
    return {
        type : SUCCESS_GET_JOBS,
        payload : data
    }
}

const getJobs = () => {
    return async (dispatch) => {
        dispatch(fetchStart());
        const response = await axios.get(API_KEY_JOBS);
        const result = response.data.data;
        dispatch(successGetJobs(result));
    }
}

// const filterJobs = (jobs, category, type) => {
//     return () => {
//         dispatch(fetchStart());
//         const filter = jobs.filter( item => item.category === category && item. )
//         dispatch(successGetJobs());
//     }
// }


export { FETCH_START, getJobs, SUCCESS_GET_JOBS };