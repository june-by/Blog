import { all, fork, delay, takeLatest, put , call} from 'redux-saga/effects';
import axios from 'axios'

import {
    UPDATE_POST_FAILURE,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_CATEGORYPOSTS_FAILURE,
    LOAD_CATEGORYPOSTS_REQUEST,
    LOAD_CATEGORYPOSTS_SUCCESS,
    LOAD_CURPOST_FAILURE,
    LOAD_CURPOST_REQUEST,
    LOAD_CURPOST_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
} from '../reducers/post';


function addPostAPI(data) {
    return axios.post('/post', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            
            type: ADD_POST_SUCCESS,
            data : result.data,
            //data : result.data //성공결과가 담긴다
        })
    } catch (error) {
        console.error(error);
            yield put({
                type: ADD_POST_FAILURE,
                error: error.response //실패결과가 담긴다
            })
        }

}


function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI,action.data)
        console.log("결과 : " , result);
        yield put({ //put은 dispatch라고 생각
            type: ADD_COMMENT_SUCCESS,
            data : result.data,
        })
    } catch (error) {
        console.error(error);
            yield put({
                type: ADD_COMMENT_FAILURE,
                error: error.response //실패결과가 담긴다
            })
        }

}


function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI,action.data);
        yield put({ //put은 dispatch라고 생각
            type: REMOVE_POST_SUCCESS,
            data : result.data //성공결과가 담긴다
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }

}

function updatePostAPI(data) {
    return axios.patch(`/post/${data.id}`, data);
}

function* updatePost(action) {
    try {        
        const result = yield call(updatePostAPI,action.data)
        console.log(result.data);
        yield put({ //put은 dispatch라고 생각
            type: UPDATE_POST_SUCCESS,
            data : result.data //성공결과가 담긴다
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: UPDATE_POST_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }
}

function loadPostsAPI() {
    return axios.get('/posts/load');
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI)
        yield put({ //put은 dispatch라고 생각
            type: LOAD_POSTS_SUCCESS,
            //data : result.data //성공결과가 담긴다
            data : result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }
}


function loadCategorypostsAPI(data) {
    return axios.get(`/posts/load/${data}`);
}

function* loadCategoryposts(action) {
    try {
        const result = yield call(loadCategorypostsAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            type: LOAD_CATEGORYPOSTS_SUCCESS,
            //data : result.data //성공결과가 담긴다
            data : result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_CATEGORYPOSTS_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }
}

function loadCurpostAPI(data) {
    return axios.get(`/post/load/${data}`);
}

function* loadCurpost(action) {
    try {
        const result = yield call(loadCurpostAPI,action.data)
        yield put({ //put은 dispatch라고 생각
            type: LOAD_CURPOST_SUCCESS,
            //data : result.data //성공결과가 담긴다
            data : result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_CURPOST_FAILURE,
            data: error.response.data //실패결과가 담긴다
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
} //eventlistner와 비슷

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
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

function* watchLoadCurpost() {
    yield takeLatest(LOAD_CURPOST_REQUEST, loadCurpost);
} //eventlistner와 비슷

function* watchLoadCatoryposts() {
    yield takeLatest(LOAD_CATEGORYPOSTS_REQUEST, loadCategoryposts);
} //eventlistner와 비슷

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
        fork(watchUpdatePost),
        fork(watchLoadPost),
        fork(watchLoadCurpost),
        fork(watchLoadCatoryposts),
    ])
}