import _ from 'lodash';
import axios from 'axios';
import APIConfig from '../config/api';


const postAPIRoot = `${APIConfig.localapiRoot}`;
const jwt_demo = APIConfig.jwt_demo;


//Action Types
export const LOAD_POST = 'reed/post/LOAD_POST';
export const LOAD_POST_FAILURE = 'reed/post/LOAD_POST_FAILURE';
export const LOAD_POST_SUCCESS = 'reed/post/LOAD_POST_SUCCESS';
export const SEND_POST = 'reed/post/SEND_POST';
export const SEND_POST_FAILURE = 'reed/post/SEND_POST_FAILURE';
export const SEND_POST_SUCCESS= 'reed/post/SEND_POST_SUCCESS';
export const TEMP_SAVE = 'reed/post/TEMP_SAVE';

const INITIAL_STATE = { 
    postList: [],
    draft: [],
    error_message: '',
    cur_draft: '',
}; 

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POST:

        case LOAD_POST_SUCCESS:
            
            return {
                ...state,
                postList: action.payload
            };
        
        case LOAD_POST_FAILURE:
            return {
                ...state,
                error_message: 'Something went wrong!',
            };   
        
        case TEMP_SAVE:
            var old_draft = state.draft;
            var old_index = _.findIndex(old_draft, function(obj) {return obj.theme === action.payload.theme});
            if ( old_index >= 0){
                old_draft[old_index].text = action.payload.text;
            } else {
                old_draft.push(action.payload);
            }
            return {
                ...state,
                draft: old_draft,
                cur_draft: action.payload.text,
            }
        
        case SEND_POST:
        
        case SEND_POST_FAILURE:
            return {
                ...state,
                error_message: action.payload
            }
        
        case SEND_POST_SUCCESS:
            return {
                ...state,
                error_message: ''
            }
        default:
            return {
                ...state,
            }
    }
}


//Action Creators
export const load_post = (theme) => {
    const url = `${postAPIRoot}/postlist/theme/` + theme;
    return (dispatch) => {
        dispatch({
          type: LOAD_POST
        });
        axios.get(url, {
            headers: {'Authorization': jwt_demo}
        })
          .then((response) => load_post_success(dispatch, response))
          .catch((error) => load_post_failure(dispatch, error));
    };
}

export const load_post_success = (dispatch, response) => {
    // console.log('from load_current_theme_success');
    // console.log(response.data.response);
    dispatch({
        type: LOAD_POST_SUCCESS,
        payload: response.data.response
    });
}

export const load_post_failure = (dispatch, error) => {
    dispatch({
        type: LOAD_POST_FAILURE,
        payload: error
    });
}

export const send_post = (content, theme) => {
    const url = `${postAPIRoot}/posts`;
    return (dispatch) => {
        dispatch({
          type: SEND_POST
        });
        axios.post(url, {"theme": theme, "content": content, "anonymity": false}, {
            headers: {
                'Authorization': jwt_demo, 
                'Content-Type': 'application/json'
            },
        })
          .then((response) => load_post_success(dispatch, response))
          .catch((error) => load_post_failure(dispatch, error));
    };
}

export const send_post_success = (disptach, response) => {
    console.log(response.data);
    dispatch({
        type: SEND_POST_SUCCESS,
        payload: response
    });
}

export const send_post_failure = (dispatch, error) => {
    console.log(error)
    dispatch({
        type: SEND_POST_FAILURE,
        payload: "Error in sending post."
    });
}

export const temp_save = (text, theme) => {
    // console.log("text change detected!");
    // console.log("The text that will be saved is " + text);
    return (dispatch) => {
        dispatch({
            type: TEMP_SAVE,
            payload: {'text': text, 'theme': theme}
        });
    };
}
