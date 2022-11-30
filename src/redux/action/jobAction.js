import axios from "axios";

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
        const response = await axios.get('https://api-bangkit.up.railway.app/api/user/loker');
        const result = response.data;
        dispatch(successGetJobs(result));
    }
}

const getFIlterJobs = (name, location) => {
    return async (dispatch) => {
        dispatch(fetchStart());
        const response = await axios.get('https://api-bangkit.up.railway.app/api/user/loker')
        const filter = response.data.filter( item => item.namaPerusahaan == name || item.lokasi == location );
        console.log(filter);
        dispatch(successGetJobs(filter));
    }
}

export { FETCH_START, getJobs, getFIlterJobs, SUCCESS_GET_JOBS };