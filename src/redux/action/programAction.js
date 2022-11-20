import axios from "axios";
const FETCH_START = "fetch_start";
const GET_PROGRAM = "get_program";
const SUCCESS_GET_PROGRAM = "success_get_program";

const fetchStart = () => {
    return {
        type : FETCH_START
    }
}

const successGetProgram = (data) => {
    return {
        type : SUCCESS_GET_PROGRAM,
        payload : data
    }
}

const getProgram = (id) => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information?company_id=' + id);
        dispatch(successGetProgram(result.data))
    }
}

const addProgram = (data, id) => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const response = await axios.post('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information', data);
        const result = await axios.get('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information?company_id=' + id);
        dispatch(successGetProgram(result.data))
    }
}

const updateProgram = (data, id) => {
    return async (dispatch) => {
        dispatch(fetchStart());

        const response = await axios.put('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information/' + id, data);
        const result = response.data;
        dispatch(successGetProgram(result));
    }
}

const removeProgram = (id, companyId) => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const response = await axios.delete('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information/' + id)
        const result = await axios.get('https://6350c3703e9fa1244e4c9abd.mockapi.io/bangkit/company_help_information?company_id=' + companyId)
        dispatch(successGetProgram(result.data));
    }
}

export { FETCH_START, fetchStart, GET_PROGRAM, getProgram, SUCCESS_GET_PROGRAM, successGetProgram, addProgram, updateProgram, removeProgram };