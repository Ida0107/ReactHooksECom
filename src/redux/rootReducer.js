import { userReducer } from './user/user.reducer';
import { productsReducer } from './products/products.reducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
});

export default rootReducer;