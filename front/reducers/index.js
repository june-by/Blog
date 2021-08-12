import {HYDRATE} from 'next-redux-wrapper';
import post from './post';
import user from './user';
import { combineReducers } from 'redux';

//(이전상태, 액션) => 다음상태
const rootReducer = (state,action) => {
    switch(action.type){
      case HYDRATE :
        return action.payload;
      default : {
        const combinedReducers = combineReducers({
          user,
          post,
        });
        return combinedReducers(state,action);
      }
    }
  };

export default rootReducer;