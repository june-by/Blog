import shortId from 'shortid';
import faker from 'faker';
import produce from '../util/produce';
export const initialState = {
    Posts:[],
    currentPost: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    updatePostLoading: false,
    updatePostDone: false,
    updatePostError: null,
}

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';



const reducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = false;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading= false;
                draft.addPostDone= true;
                draft.Posts.unshift(action.data);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading= false;
                draft.addPostError= action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = false;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.Posts = draft.Posts.filter((v)=>v.id!==action.data);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading= false;
                draft.removePostError= action.error;
                break;

            case UPDATE_POST_REQUEST:
                draft.updatePostLoading = true;
                draft.updatePostDone = false;
                draft.updatePostError = false;
                break;
            case UPDATE_POST_SUCCESS:
                draft.updatePostLoading = false;
                draft.updatePostDone = true;
                draft.Posts = draft.Posts.filter((v)=>v.id!==action.data);
                break;
            case UPDATE_POST_FAILURE:
                draft.updatePostLoading= false;
                draft.updatePostError= action.error;
                break;

            case LOAD_POSTS_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = false;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostLoading = false;
                draft.loadPostDone = true;
                draft.Posts = action.data.concat(draft.Posts);
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPsostLoading= false;
                draft.loadPostError= action.error;
                break;
            default:
                break;
        }
    });

export default reducer;