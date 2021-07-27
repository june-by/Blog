import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import axios from 'axios';

//rootsaga를 만들고 거기에 만들고싶은 비동기action들을 넣어준다
axios.defaults.baseURL = 'http://localhost:3085';
export default function* rootSaga() { //중단점이 있는 함수
    yield all([ //all은 배열을 받음 > 동시에 실행
        fork(postSaga),
    ]);
}