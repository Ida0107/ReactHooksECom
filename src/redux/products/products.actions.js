export const productsTypes = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    GET_PRODUCTS: 'GET_PRODUCTS',
};

export const setProducts = (payload) => ({
    type: productsTypes.SET_PRODUCTS,
    payload
});

export const getProducts = () => ({
    type: productsTypes.GET_PRODUCTS,
});