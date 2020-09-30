import { SIGN_IN,SIGN_OUT, 
    FETCH_POSTS,UPDATE_POSTS, CREATE_POST } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    blogs:null

}
export default (state = INITIAL_STATE, action)=>{
    switch(action.type){

        case SIGN_IN:{
            return {...state, isSignedIn: true, userId: action.payload};
        }
        case SIGN_OUT:{
            return {...state, isSignedIn: false, userId: null};
        }
        case FETCH_POSTS:
        {
            return {...state, blogs: action.payload.data.result };
        }
        case CREATE_POST:{
            return {...state, [action.payload.id] :action.payload};
        }
        case UPDATE_POSTS:{
            return {...state, [action.payload.id] :action.payload};
        }
        default:
            return state; 
    }
}