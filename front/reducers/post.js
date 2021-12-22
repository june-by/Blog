import produce from "../util/produce";
export const initialState = {
  Posts: [],
  currentPageNum : null,
  currentPost: null,
  ForwardPost : null,
  BackwardPost : null,
  loadMainPostsLoading: false,
  loadMainPostsDone: false,
  loadMainPostsError: null,
  loadCategorypostsLoading: false,
  loadCategorypostsDone: false,
  loadCategorypostsError: null,
  loadCurpostLoading: false,
  loadCurpostDone: false,
  loadCurpostError: null,
  searchPostsLoading: false,
  searchPostsDone: false,
  searchPostsError: null,
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
};

export const SET_CURRENT_PAGENUM = "SET_CURRENT_PAGENUM";

export const LOAD_CURPOST_REQUEST = "LOAD_CURPOST_REQUEST";
export const LOAD_CURPOST_SUCCESS = "LOAD_CURPOST_SUCCESS";
export const LOAD_CURPOST_FAILURE = "LOAD_CURPOST_FAILURE";

export const LOAD_CATEGORYPOSTS_REQUEST = "LOAD_CATEGORYPOSTS_REQUEST";
export const LOAD_CATEGORYPOSTS_SUCCESS = "LOAD_CATEGORYPOSTS_SUCCESS";
export const LOAD_CATEGORYPOSTS_FAILURE = "LOAD_CATEGORYPOSTS_FAILURE";

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const SEARCH_POSTS_REQUEST = "SEARCH_POSTS_REQUEST";
export const SEARCH_POSTS_SUCCESS = "SEARCH_POSTS_SUCCESS";
export const SEARCH_POSTS_FAILURE = "SEARCH_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

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
        draft.currentPost.Comments = draft.currentPost.Comments.concat(
          action.data
        );
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
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = action.data.message;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case LOAD_MAIN_POSTS_REQUEST:
        draft.loadMainPostLoading = true;
        draft.loadMainPostDone = false;
        draft.loadMainPostError = false;
        break;
      case LOAD_MAIN_POSTS_SUCCESS:
        draft.loadMainPostLoading = false;
        draft.loadMainPostDone = true;
        draft.Posts = action.data;
        break;
      case LOAD_MAIN_POSTS_FAILURE:
        draft.loadMainPostLoading = false;
        draft.loadMainPostError = action.error;
        break;

      case SEARCH_POSTS_REQUEST:
        draft.searchPostsLoading = true;
        draft.searchPostDone = false;
        draft.searchPostError = false;
        break;
      case SEARCH_POSTS_SUCCESS:
        draft.searchPostsLoading = false;
        draft.searchPostsDone = true;
        draft.Posts = action.data.concat(draft.Posts);
        break;
      case SEARCH_POSTS_FAILURE:
        draft.searchPostsLoading = false;
        draft.searchPostsError = action.error;
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
        draft.loadCategorypostsLoading = true;
        draft.loadCategorypostsDone = false;
        draft.loadCategorypostsError = false;
        break;
      case LOAD_CATEGORYPOSTS_SUCCESS:
        draft.loadCategorypostsLoading = false;
        draft.loadCategorypostsDone = true;
        draft.Posts = action.data;
        break;
      case LOAD_CATEGORYPOSTS_FAILURE:
        draft.loadCategorypostsLoading = false;
        draft.loadCategorypostsError = action.error;
        break;

      case SET_CURRENT_PAGENUM:
        draft.currentPageNum = action.data.page;
        break;

      default:
        break;
    }
  });

export default reducer;
