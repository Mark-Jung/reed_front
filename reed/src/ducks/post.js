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
                current_release_time: 'Something went wrong!',
                current_theme: 'No available theme!',
                current_theme_inspire: 'No available inspiration!',
                current_theme_author: 'Contact the developer!',
                theme_error_message: 'Something went wrong!',
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
            }
        
        default:
            return state;
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
