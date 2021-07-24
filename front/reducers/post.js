export const initialState = {
    Posts:
        [
            {
                id: 1,
                title: "JavaScript 첫번째 게시글입니다",
                hashTag: ["Js", "JavaScript", "HTML", "Web"],
                content: "첫번째 게시글!",
                category: "JavaScript",
                createdAt: "2017-06-13"
            }
            ,
            {
                id: 2,
                title: "React 첫번째 게시글입니다!",
                hashTag: ["React", "ReactHooks", "Js", "JavaScript", "HTML", "Web"],
                content: "두번째 게시글!",
                category: "React",
                createdAt: "2018-06-20"
            },
            {
                id: 3,
                title: "TypeScript 첫번째 게시글입니당",
                hashTag: ["TypeScript", "Ts", "Js", "JavaScript", "HTML", "Web"],
                content: "세번째 게시글!",
                category: "TypeScript",
                createdAt: "2019-04-22"
            }
        ],
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


export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});


export const removePost = {
    type: REMOVE_POST_REQUEST
};


export const updatePost = {
    type: UPDATE_POST_REQUEST
};

const dummyPost = {
    id: 4,
    title: "Database 첫번째 게시글입니당",
    hashTag: ["DB", "Database", "CS"],
    content: "네번째 게시글!",
    category: "Database",
    createdAt: "2021-07-23"
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            console.log("2.reducer ADD_POST_REQUEST");
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: false,
            }
        case ADD_POST_SUCCESS:
            
            return {
                ...state,
                Posts: [dummyPost, ...state.Posts], //앞에다 추가해야 위로올라옴
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            }

        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removPostError: false,
            }
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                Posts: [dummyPost, ...state.mainPosts], //앞에다 추가해야 위로올라옴
                removePostLoading: false,
                removePostDone: true,
            }
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.error,
            }

        case UPDATE_POST_REQUEST:
            return {
                ...state,
                updatePostLoading: true,
                updatePostDone: false,
                updatePostError: false,
            }
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                Posts: [dummyPost, ...state.mainPosts], //앞에다 추가해야 위로올라옴
                updatePostLoading: false,
                updatePostDone: true,
            }
        case UPDATE_POST_FAILURE:
            return {
                ...state,
                updatePostLoading: false,
                updatePostError: action.error,
            }

        default:
            return state;
    }
}

export default reducer;