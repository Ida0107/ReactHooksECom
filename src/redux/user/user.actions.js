export const userTypes = {
    SET_USER: 'SET_USER',
    LOGIN: 'LOGIN'
};

export const setUser = (profile) => ({
    type: userTypes.SET_USER,
    payload: {profile}
});

// export const onLogin = (payload) => ({
//     type: userTypes.LOGIN,
//     payload
// });

export const onLogin = (payload) => {
    console.log('a');
    return {
        type: userTypes.LOGIN,
        payload
    }
};