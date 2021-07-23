export const initialState = {
    Posts:
        [
            {
                id: 1,
                Title: "JavaScript 첫번째 게시글입니다",
                hashTag : ["Js","JavaScript","HTML","Web"],
                content: "첫번째 게시글!",
                belong: "JavaScript",
                createdAt : "2017-06-13"
            }
            ,
            {
                id: 2,
                Title: "React 첫번째 게시글입니다!",
                hashTag : ["React","ReactHooks","Js","JavaScript","HTML","Web"],
                content: "두번째 게시글!",
                belong: "React",
                createdAt : "2018-06-20"
            },
            {
                id: 3,
                Title: "TypeScript 첫번째 게시글입니당",
                hashTag : ["TypeScript","Ts","Js","JavaScript","HTML","Web"],
                content: "세번째 게시글!",
                belong: "TypeScript",
                createdAt : "2019-04-22"
            }
        ],
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
};

const DEL_POST = 'DEL_POST';
export const delPost = {
    type: DEL_POST
};

const UPDATE_POST = 'UPDATE_POST';
export const updatePost = {
    type: UPDATE_POST
};

const dummyPost = {
    id: 4,
    Title: "Database 첫번째 게시글입니당",
    hashTag : ["DB","Database","CS"],
    content: "네번째 게시글!",
    belong: "Database",
    createdAt : "2021-07-23"
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                Posts: [dummyPost, ...state.Posts], //앞에다 추가해야 위로올라옴
            }
        default:
            return state;
    }
}

export default reducer;