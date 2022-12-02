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

const getFIlterJobs = (name, location) => {
    return async (dispatch) => {
        dispatch(fetchStart());
        const response = await axios.get('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information?type=Job%20Seeker')
        const filter = response.data.filter( item => item.namaPerusahaan == name || item.lokasi == location );
        console.log(filter);
        dispatch(successGetJobs(filter));
    }
}

export { FETCH_START, getJobs, getFIlterJobs, SUCCESS_GET_JOBS };