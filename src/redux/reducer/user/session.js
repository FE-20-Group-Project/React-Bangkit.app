import { FETCH_START, ADD_SESSION, CLEAR_SESSION, UPDATE_SESSION} from '../../action/userSession';

const initialState = {
    session : false,
    isLoading : false
}

const userSession = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_START : 
                return {
                    ...state,
                    isLoading: true
                }
            case ADD_SESSION :
                // console.log(action.payload)
                return {
                    session : action.payload,
                    isLoading : false
                }
            case CLEAR_SESSION : 
                return {
                    ...state,
                    session : false,
                }
            default : return state;
        }
}

export default userSession;