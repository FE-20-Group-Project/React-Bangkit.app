import { FETCH_START, SUCCESS_GET_SCHOLARSHIP } from "../../action/scholarshipAction";

const initialState = {
        scholarship : [],
        isLoading : false,
        err : null
    };

const scholarshipList = ( state = initialState, action ) => {

        switch( action.type ) {
            case FETCH_START : 
                return {
                    ...state,
                    isLoading : true
                }
            case SUCCESS_GET_SCHOLARSHIP :
                return {
                    ...state,
                    scholarship : action.payload,
                    isLoading : false,
                }
            default : 
                return state;
        }
}


export default scholarshipList;