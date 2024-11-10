export const registerAction = user => ({
    type: 'REGISTER',
    payload: user,
});

export const loginAction = user => ({
    type: 'LOGIN',
    payload: user,
});

export const logoutAction = user => ({
    type: 'LOGOUT',
    payload: user,
});
