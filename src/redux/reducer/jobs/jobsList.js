import { FETCH_START, SUCCESS_GET_JOBS } from "../../action/jobAction";

const initialState = {
    jobs : [],
    isLoading : false,
    err : null
};

const jobList = ( state = initialState, action ) => {

        switch( action.type ) {
            case FETCH_START : 
                return {
                    ...state,
                    isLoading : true
                }
            case SUCCESS_GET_JOBS :
                return {
                    ...state,
                    jobs : action.payload,
                    isLoading : false
                }
            default :
                return state;
        }
}


export default jobList;