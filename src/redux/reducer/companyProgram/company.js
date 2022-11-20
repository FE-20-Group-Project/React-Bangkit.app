import { FETCH_START, SUCCESS_GET_PROGRAM } from "../../action/programAction";

const initialState = {
    companyProgram : [],
    isLoading : false,
    err : null,
};

const companyProgram = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_START :
                return {
                    ...state,
                    isLoading : true
                }
            case SUCCESS_GET_PROGRAM :
                return {
                    ...state,
                    companyProgram : action.payload,
                    isLoading : false
                }
            default :
                return state;
        }
};

export default companyProgram;