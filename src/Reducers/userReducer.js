const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
            break;
        case 'RESET_USER':
            return {};
            break;
        default:
            return state
    }
};
export default userReducer;