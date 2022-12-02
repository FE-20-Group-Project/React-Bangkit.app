import axios from "axios";
import { API_KEY_REPORT } from "../../env/env";

const SUCCESS_GET_REPORT = 'success_get_report';
const CALL_REPORT = 'call_report';


const successGetReport = (data) => {
    console.log(data);
    return {
        type: SUCCESS_GET_REPORT,
        payload: data
    }
}

const callReport = (data) => {
    return {
        type: CALL_REPORT,
        payload: data
    }
}

const getDataReport = () => {
    return async (dispatch) => {
        const response = await axios.get(API_KEY_REPORT);
        console.log(response);
        dispatch(callReport(response.data.data));
    }
}


const postDataReport = (token, form, MySwal, navigate) => {
    return async (dispatch) => {
        axios({
            url: API_KEY_REPORT,
            method: "POST",
            headers: { 
                authorization: `Bearer ${token}` 
            },
            data: form
        }).then( data => {
            if(data.data) {
                dispatch(successGetReport(data.data.data));
                MySwal.fire({
                    title: 'Berhasil membuat laporan!',
                })
                navigate('/report/my-report');
            }
        } )
    }
}


export { SUCCESS_GET_REPORT, CALL_REPORT, callReport, getDataReport, postDataReport };