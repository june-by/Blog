import {HYDRATE} from 'next-redux-wrapper';
import post from './post';
import { combineReducers } from 'redux';

//(이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index : (state = {}, action) => { //hydrate를 위해 index reducer를 추가 (SSR을 위해)
        switch(action.type) {
            case HYDRATE :
                console.log('HYDRATE',action);
                return {...state,...action.payload};
            default :
                return state;
        }
    },
    post,
});

export default rootReducer;