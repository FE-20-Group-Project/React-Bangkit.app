import axios from "axios";
import { API_KEY_SCHOLARSHIP } from '../../env/env'

const FETCH_START = "fetch_start";
const SUCCESS_GET_SCHOLARSHIP = "success_get_scholarship";

const fetchStart = () => {
    return {
        type : FETCH_START
    }
}

const successGetScholarship = (data) => {
    return {
        type : SUCCESS_GET_SCHOLARSHIP,
        payload : data
    }
}

const getScholarship = () => {
    return async (dispatch) => {
        dispatch(fetchStart());
        const response = await axios.get(API_KEY_SCHOLARSHIP);
        const result = response.data.data;
        dispatch(successGetScholarship(result));
    }
}

const getFilterScholarship = (namaPerusahaan, namaBeasiswa) => {
    return async (dispatch) => {
        dispatch(fetchStart());
        const response = await axios.get('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information?type=Beasiswa');
        const filter = response.data.filter( item => item.namaPerusahaan == namaPerusahaan || item.nama == nama );
        dispatch(successGetScholarship(filter));
    }

}


export { FETCH_START, getScholarship, getFilterScholarship ,SUCCESS_GET_SCHOLARSHIP };