import { takeLatest, all, call } from 'redux-saga/effects';
import { login } from './user.ApiCalls';

function* onClickLogin({payload}){
    try{
        const res = yield call(login, payload);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}


export default function* watchAll(){
    yield all([
        takeLatest('LOGIN', onClickLogin)
    ])
}