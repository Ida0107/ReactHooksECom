import { takeLatest, all, call } from 'redux-saga/effects';
import { login } from './userApiCalls';

function* onClickLogin(payload){
    console.log(payload);
    try{
        const res = yield call(login);
    }catch(err){
        console.log(err);
    }
}


export default function* watchAll(){
    yield all([
        takeLatest('LOGIN', onClickLogin)
    ])
}