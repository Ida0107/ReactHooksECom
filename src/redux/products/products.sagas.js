import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getProducts } from './products.ApiCalls';
import { productsTypes, setProducts } from './products.actions';


function* onGetProducts(){
    const res = yield call(getProducts);
    yield put(setProducts(res));
}

export default function* watchAll(){
    yield all([
        takeLatest(productsTypes.GET_PRODUCTS, onGetProducts)
    ])
}