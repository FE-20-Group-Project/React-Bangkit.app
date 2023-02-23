import axios from "axios";
import { BASE_URL } from "../../env/env";

const FETCH_START = 'fetch_start'
const ADD_SESSION = 'add_session';
const CLEAR_SESSION = 'clear_session';
const UPDATE_SESSION = 'update_session';


const fetchStart = () => {
    return {
        type: FETCH_START
    }
}

const addSession = (data) => {
    return {
        type : ADD_SESSION,
        payload : data
    }
}


const editProfile = (data) => {
    return {
        type : UPDATE_SESSION,
        payload : data
    }
}

const getSession = (token, setIsLoading) => {
    return async (dispatch) => {
        const response = await axios.get(`${BASE_URL}/api/auth/data`, {
            "headers": { "Authorization": `Bearer ${token}` }
        });
        dispatch(addSession(response.data.data));
        setIsLoading(false);
    }
}


const successClearSession = () => {
    return {
        type : CLEAR_SESSION
    }
}

const clearSession = (token) => {
    return async (dispatch) => {
        const response = await axios.get(`${BASE_URL}/api/auth/logout`, {
            "headers" : {"Authorization": "Bearer " + token}
        })
        console.log(response);
        dispatch(successClearSession());
    }
}


export { FETCH_START, ADD_SESSION, addSession, CLEAR_SESSION, clearSession, UPDATE_SESSION, editProfile, getSession };
