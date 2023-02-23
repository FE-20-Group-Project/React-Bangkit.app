import axios from "axios";
import { BASE_URL } from "../../env/env";

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
        const response = await axios.get(`${BASE_URL}/api/laporan/lapor`);
        console.log(response);
        dispatch(callReport(response.data.data));
    }
}


const postDataReport = (token, form, MySwal, navigate) => {
    return async (dispatch) => {
        axios({
            url: `${BASE_URL}/api/laporan/lapor`,
            method: "POST",
            headers: { 
                authorization: `Bearer ${token}` 
            },
            data: form
        }).then( data => {
            if(data.data) {
                dispatch(successGetReport(data.data.data));
                MySwal.fire({
                    icon: 'success',
                    title: 'Berhasil membuat laporan!',
                })
                navigate('/report/my-report');
            }
        } ).catch( error => {
            MySwal.fire({
                icon: 'warning',
                title: error.response.data.message,
            })
        } )
    }
}


export { SUCCESS_GET_REPORT, CALL_REPORT, callReport, getDataReport, postDataReport };