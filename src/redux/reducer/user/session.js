import { KEY_SESSION } from '../../../env/env';
import { ADD_SESSION, CLEAR_SESSION, UPDATE_SESSION} from '../../action/userSession';

let sessionData = localStorage.getItem(KEY_SESSION);
const initialState = {
    session : JSON.parse(sessionData) || false,
}

const userSession = (state = initialState, action) => {
        switch(action.type) {
            case ADD_SESSION :
                return {
                    session : action.payload
                }
            case CLEAR_SESSION : 
                return {
                    session : false,
                }
            default : return state;
        }
}

export default userSession;