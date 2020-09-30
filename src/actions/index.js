import blogs from '../apis/blogs';
import history from '../history';


import { SIGN_IN,SIGN_OUT, 
         FETCH_POSTS,UPDATE_POSTS, CREATE_POST
} from './types'

export const signIn = userId => {
    return{
        type:SIGN_IN,
        payload:userId
    }
}

export const signOut = () =>{
    return{
        type:SIGN_OUT,
    }
}
export const createPosts = (title,data) =>  async (dispatch) =>{
        var post= {
            'pTitle' : title,
            'pContent' : data,
            'pAuthor' : "baba"}
        const response = await blogs.post('/addPost',post);
        dispatch({type:CREATE_POST,payload: response.data});
        history.push('/');           
}
export const fetchPosts = () => async dispatch =>{
    const response = await blogs.get('/getPosts');
    dispatch({type:FETCH_POSTS, payload:response.data});
}

export const editPost = (id,title,content) => async dispatch =>{
    var post1= {
        'pId':id,
        'pTitle' : title,
        'pContent' : content,}
    const response = await blogs.post('/editPost',post1);
    dispatch({type:UPDATE_POSTS, payload:response.data});
    history.push('/');
}


