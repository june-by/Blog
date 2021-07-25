import shortId from 'shortid';
import faker from 'faker';
import produce from '../util/produce';
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
            },
            {
                id: 4,
                title: "JavaScript 두번째 게시글입니다",
                hashTag: ["Js", "JavaScript", "HTML", "Web"],
                content: "첫번째 게시글!",
                category: "JavaScript",
                createdAt: "2017-06-13"
            }
            ,
            {
                id: 5,
                title: "React 두번째 게시글입니다!",
                hashTag: ["#React", "ReactHooks", "Js", "JavaScript", "HTML", "Web"],
                content: "두번째 게시글!",
                category: "React",
                createdAt: "2018-06-20"
            },
            {
                id: 6,
                title: "TypeScript 두번째 게시글입니당",
                hashTag: ["TypeScript", "Ts", "Js", "JavaScript", "HTML", "Web"],
                content: "세번째 게시글!",
                category: "TypeScript",
                createdAt: "2019-04-22"
            }
        ],
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

export const generateDummyPost = (number) => Array(number).fill().map((value,index) => ({
    id: shortId.generate(),
    title : faker.lorem.sentence(),
    hashTag : ["dummy", "dummyPost", "Faker", "힘들어용"],
    category : index%2==0 ? "React" : "JavaScript",
    content : faker.lorem.paragraph()
}));

const dummyPost = (data) => ({
    id: shortId.generate(),
    title : data.title,
    hashTag : data.hashTagSplit,
    category : data.category,
    content: data.content,
});


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
                draft.Posts.unshift(dummyPost(action.data));
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