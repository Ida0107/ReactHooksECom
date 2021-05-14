import userSagas from './user/user.sagas';
import { all, fork, spawn } from 'redux-saga/effects'

export default function* rootSaga() {
    yield spawn(userSagas)
}