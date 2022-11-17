const LOGIN = 'login';
const LOGOUT = 'logout';

const loginSession = (data) => {
    console.log(data);
    return {
        type : LOGIN,
        payload : data
    }
}

const logOut = () => {
    return {
        type : LOGOUT
    }
}


export { LOGIN, loginSession, LOGOUT, logOut };
