import { all, fork, delay, takeLatest, put , call} from 'redux-saga/effects';
import axios from 'axios'

import {
    UPDATE_POST_FAILURE,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    generateDummyPost,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
} from '../reducers/post';


function addPostAPI(data) {
    console.log("axios 호출");
    return axios.post('/post', data);
}

function* addPost(action) {
    console.log("add post");
    try {
        const result = yield call(addPostAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            type: ADD_POST_SUCCESS,
            data : result.data,
            //data : result.data //성공결과가 담긴다
        })
    } catch (error) {
        console.log(error.response);
            yield put({
                type: ADD_POST_FAILURE,
                error: error.response //실패결과가 담긴다
            })
        }

}



function removePostAPI(data) {
    return axios.post('/api/post', data);
}

function* removePost(action) {
    try {
        yield delay(1000);
        //const result = yield call(logInAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            type: REMOVE_POST_SUCCESS,
            //data : result.data //성공결과가 담긴다
        })
    } catch (error) {
        yield put({
            type: REMOVE_POST_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }

}

function updatePostAPI(data) {
    return axios.post('/api/post', data);
}

function* updatePost(action) {
    try {
        yield delay(1000);
        //const result = yield call(logInAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            type: UPDATE_POST_SUCCESS,
            //data : result.data //성공결과가 담긴다
        })
    } catch (error) {
        yield put({
            type: UPDATE_POST_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }
}

function loadPostsAPI(data) {
    return axios.post('/api/post', data);
}

function* loadPosts(action) {
    try {
        yield delay(1000);
        //const result = yield call(logInAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            type: LOAD_POSTS_SUCCESS,
            //data : result.data //성공결과가 담긴다
            data : generateDummyPost(10),
        })
    } catch (error) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
} //eventlistner와 비슷

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
} //eventlistner와 비슷

function* watchUpdatePost() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePost);
} //eventlistner와 비슷

function* watchLoadPost() {
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
} //eventlistner와 비슷

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchUpdatePost),
        fork(watchLoadPost),
    ])
}