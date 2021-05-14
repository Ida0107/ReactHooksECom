import axios from 'axios';

export const login = async () => {
    return await axios({
        url: 'https://fakestoreapi.com/auth/login',
        method:'POST',
        data:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    });
};