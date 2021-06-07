import { productsTypes } from './products.actions';

export const INITIAL_STATE = {
    allProducts: []
}

export const productsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case productsTypes.SET_PRODUCTS: {
            return {
                ...state,
                allProducts: action.payload
            }
        }
        default: return state;

    }
}

