import { KEY_SESSION } from '../../../env/env';
import { LOGIN, LOGOUT } from '../../action/userSession';

let isLogin = localStorage.getItem(KEY_SESSION);
const initialState = {
    isLogin : JSON.parse(isLogin) || false
}

const userSession = (state = initialState, action) => {
        switch(action.type) {
            case LOGIN :
                console.log(action.payload)
                return {
                    isLogin : action.payload
                }
            case LOGOUT : 
                return {
                    isLogin : false
                }
            default : return state;
        }
}

export default userSession;