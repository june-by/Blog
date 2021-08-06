import shortId from 'shortid';
import faker from 'faker';
import produce from '../util/produce';
export const initialState = {
    Posts: [],
    currentPost: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    loadCategorypostsLoading: false,
    loadCategorypostsDone: false,
    loadCategorypostsError: null,
    loadCurpostLoading: false,
    loadCurpostDone: false,
    loadCurpostError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    updatePostLoading: false,
    updatePostDone: false,
    updatePostError: null,
}

export const LOAD_CURPOST_REQUEST = 'LOAD_CURPOST_REQUEST';
export const LOAD_CURPOST_SUCCESS = 'LOAD_CURPOST_SUCCESS';
export const LOAD_CURPOST_FAILURE = 'LOAD_CURPOST_FAILURE';

export const LOAD_CATEGORYPOSTS_REQUEST = 'LOAD_CATEGORYPOSTS_REQUEST';
export const LOAD_CATEGORYPOSTS_SUCCESS = 'LOAD_CATEGORYPOSTS_SUCCESS';
export const LOAD_CATEGORYPOSTS_FAILURE = 'LOAD_CATEGORYPOSTS_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

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
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.Posts.unshift(action.data);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS: {
                draft.currentPost.Comments = draft.currentPost.Comments.concat(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
            }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
                
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = false;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.Posts = draft.Posts.filter((v) => v.id !== action.data);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;

            case UPDATE_POST_REQUEST:
                draft.updatePostLoading = true;
                draft.updatePostDone = false;
                draft.updatePostError = false;
                break;
            case UPDATE_POST_SUCCESS:{
                draft.updatePostLoading = false;
                draft.updatePostDone = true;
                draft.Posts.find((v) => v.id === action.data.id).title = action.data.title;
                draft.Posts.find((v) => v.id === action.data.id).category = action.data.category;
                draft.Posts.find((v) => v.id === action.data.id).hashTag = action.data.hashTag;
                draft.Posts.find((v) => v.id === action.data.id).content = action.data.content;

                break;
            }
            case UPDATE_POST_FAILURE:
                draft.updatePostLoading = false;
                draft.updatePostError = action.error;
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
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;

            case LOAD_CURPOST_REQUEST:
                draft.loadCurpostLoading = true;
                draft.loadCurpostDone = false;
                draft.loadCurpostError = false;
                break;
            case LOAD_CURPOST_SUCCESS:
                draft.loadCurpostLoading = false;
                draft.loadCurpostDone = true;
                draft.currentPost = action.data;
                break;
            case LOAD_CURPOST_FAILURE:
                draft.loadPCurpostLoading = false;
                draft.loadCurpostError = action.error;
                break;

            case LOAD_CATEGORYPOSTS_REQUEST:
                draft.loadCatorypostLoading = true;
                draft.loadCatorypostDone = false;
                draft.loadCatorypostError = false;
                break;
            case LOAD_CATEGORYPOSTS_SUCCESS:
                draft.loadCatorypostLoading = false;
                draft.loadCatorypostDone = true;
                draft.Posts = action.data.concat(draft.Posts);
                break;
            case LOAD_CATEGORYPOSTS_FAILURE:
                draft.loadPCatorypostLoading = false;
                draft.loadCatorypostError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;