import axios from 'axios';

export const login = async (data) => {
    console.log(data);
    return await fetch('https://fakestoreapi.com/users').then((res) => res.json())
};