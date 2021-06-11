export const setUser = userData => ({ type: 'SET_USER', payload: userData })
export const resetUser = () => ({ type: 'RESET_USER' })
export const setLogIn = () => ({ type: 'SET_LOGIN_TRUE' });
export const setLogOut = () => ({ type: 'SET_LOGIN_FALSE' });