import { CALL_REPORT, SUCCESS_GET_REPORT } from "../../action/laporanAction";

const initialState = [];

const laporan = ( state = initialState, action ) => {
    switch(action.type) {
        case CALL_REPORT :
            return action.payload
        case SUCCESS_GET_REPORT :
            return [...state, action.payload]
        default : 
        return state;
    }
}


export default laporan;