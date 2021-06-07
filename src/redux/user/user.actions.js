export const userTypes = {
    SET_USER: 'SET_USER',
    LOGIN: 'LOGIN'
};

export const setUser = (profile) => ({
    type: userTypes.SET_USER,
    payload: {profile}
});

export const onLogin = (payload) => {
    console.log(payload);
    return {
        type: userTypes.LOGIN,
        payload
    }
};