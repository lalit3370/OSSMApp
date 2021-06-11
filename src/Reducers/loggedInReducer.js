const loggedInReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOGIN_TRUE':
            return true;
        case 'SET_LOGIN_FALSE':
            return false;
        default:
            return state;
    }
}
export default loggedInReducer;