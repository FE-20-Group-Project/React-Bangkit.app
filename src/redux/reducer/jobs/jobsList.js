import { FETCH_START, SUCCESS_GET_JOBS } from "../../action/jobAction";

const initialState = {
    jobs : [],
    isLoading : false,
};

const jobList = ( state = initialState, action ) => {

        switch( action.type ) {
            case FETCH_START : 
                return {
                    isLoading : true
                }
            case SUCCESS_GET_JOBS :
                console.log(action.payload);
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