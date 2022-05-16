import { all, fork, takeLatest, put , call} from 'redux-saga/effects';
import axios from 'axios'

import {
    SET_CURRENT_PAGENUM,
    UPDATE_POST_FAILURE,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    LOAD_MAIN_POSTS_FAILURE,
    LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_SUCCESS,
    SEARCH_POSTS_FAILURE,
    SEARCH_POSTS_REQUEST,
    SEARCH_POSTS_SUCCESS,
    LOAD_CATEGORYPOSTS_FAILURE,
    LOAD_CATEGORYPOSTS_REQUEST,
    LOAD_CATEGORYPOSTS_SUCCESS,
    LOAD_CURPOST_FAILURE,
    LOAD_CURPOST_REQUEST,
    LOAD_CURPOST_SUCCESS,
    LOAD_POSTNUM_FAILURE,
    LOAD_POSTNUM_REQUEST,
    LOAD_POSTNUM_SUCCESS,
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
        yield put({ 
            type: ADD_POST_SUCCESS,
            data : result.data,
        })
    } catch (error) {
        console.error(error);
            yield put({
                type: ADD_POST_FAILURE,
                error: error.response 
            })
        }

}


function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI,action.data)
        yield put({ 
            type: ADD_COMMENT_SUCCESS,
            data : result.data,
        })
    } catch (error) {
        console.error(error);
            yield put({
                type: ADD_COMMENT_FAILURE,
                error: error.response 
            })
        }

}


function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI,action.data);
        yield put({ 
            type: REMOVE_POST_SUCCESS,
            data : result.data
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: error.response.data
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
        yield put({
            type: UPDATE_POST_SUCCESS,
            data : result.data 
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: UPDATE_POST_FAILURE,
            data: error.response.data
        })
    }
}

function loadMainPostsAPI(data) {
    return axios.get(`/posts/load/main/${data.page}`);
}

function* loadMainPosts(action) {
    try {
        const result = yield call(loadMainPostsAPI,action.data)
        yield put({ 
            type: LOAD_MAIN_POSTS_SUCCESS,
            data : result.data,
        })
        yield put({
            type : SET_CURRENT_PAGENUM,
            data : action.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            data: error.response.data 
        })
    }
}

function searchPostsAPI(data) {
    return axios.get(`/posts/search/${encodeURIComponent(data)}`);
}

function* searchPosts(action) {
    try {
        console.log("action.data : ", action.data);
        const result = yield call(searchPostsAPI,action.data)
        yield put({
            type: SEARCH_POSTS_SUCCESS,
            data : result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: SEARCH_POSTS_FAILURE,
            data: error.response.data 
        })
    }
}


function loadCategorypostsAPI(data) {
    return axios.get(`/posts/load/${data.category}/${data.page}`);
}

function* loadCategoryposts(action) {
    try {
        const result = yield call(loadCategorypostsAPI,action.data)
        yield put({ 
            type: LOAD_CATEGORYPOSTS_SUCCESS,
            data : result.data,
        })
        yield put({
            type : SET_CURRENT_PAGENUM,
            data : action.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_CATEGORYPOSTS_FAILURE,
            data: error.response.data 
        })
    }
}

function loadCurpostAPI(data) {
    return axios.get(`/post/load/${data}`);
}

function* loadCurpost(action) {
    try {
        const result = yield call(loadCurpostAPI,action.data)
        yield put({ 
            type: LOAD_CURPOST_SUCCESS,
            data : result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_CURPOST_FAILURE,
            data: error.response.data 
        })
    }
}

function loadPostNumAPI(data) {
    return axios.get(`/posts/load/length/${data}`);
}

function* loadPostNum(action) {
    try {
        const result = yield call(loadPostNumAPI,action.data)
        yield put({ 
            type: LOAD_POSTNUM_SUCCESS,
            data : result.data,
        })
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_POSTNUM_FAILURE,
            data: error.response.data 
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
} 

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
} 

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
} 

function* watchUpdatePost() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePost);
} 

function* watchLoadMainPost() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

function* watchLoadCurpost() {
    yield takeLatest(LOAD_CURPOST_REQUEST, loadCurpost);
} 
function* watchLoadCatoryposts() {
    yield takeLatest(LOAD_CATEGORYPOSTS_REQUEST, loadCategoryposts);
} 

function* watchLoadSearchposts() {
    yield takeLatest(SEARCH_POSTS_REQUEST, searchPosts);
} 

function* watchLoadPostnum() {
    yield takeLatest(LOAD_POSTNUM_REQUEST, loadPostNum);
} 



export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
        fork(watchUpdatePost),
        fork(watchLoadMainPost),
        fork(watchLoadCurpost),
        fork(watchLoadCatoryposts),
        fork(watchLoadSearchposts),
        fork(watchLoadPostnum),
    ])
}