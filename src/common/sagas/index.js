import {call,put,takeLatest,all,takeEvery} from 'redux-saga/effects'
import {apiFetchUsers,apiCreateUser,apiUpdateUser} from '../../api'
import TYPES from "../utils/types";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchUsersSaga(action){
    yield put({type: TYPES.SET_LOADING_USER,loading:true})
    yield delay(500)
    try{
        const users = yield call(apiFetchUsers)
        yield put({type: TYPES.SET_USERS,users})
        yield put({type: TYPES.SET_LOADING_USER,loading:false})
    }
    catch(err){

    }
}

function* createUserSaga(action){
    try{
        const user = yield call(apiCreateUser,action.user)
        yield put({type: TYPES.ADD_USER,user})
    }
    catch(err){
        console.log(err);
    }
}

function* updateUserSaga(action){
    try{
        const user = yield call(apiUpdateUser,action.user,action.id)
        yield put({type: TYPES.MODIFY_USER,user,id:action.id})
    }
    catch(err){
        console.log(err);
    }
}

function* fetchUsers() {
    yield takeLatest(TYPES.FETCH_USERS,fetchUsersSaga)
}
function* createUser() {
    yield takeLatest(TYPES.CREATE_USER,createUserSaga)
}
function* updateUser() {
    yield takeLatest(TYPES.UPDATE_USER,updateUserSaga)
}

export default function* rootSaga() {
    yield all([
        fetchUsers(),
        createUser(),
        updateUser()
    ]);
}