import _ from 'lodash';
import axios from 'axios';
import APIConfig from '../config/api';


const postAPIRoot = `${APIConfig.localapiRoot}`;
const jwt_demo = APIConfig.jwt_demo;


//Action Types
export const LOAD_POST = 'reed/post/LOAD_POST';
export const LOAD_POST_FAILURE = 'reed/post/LOAD_POST_FAILURE';
export const LOAD_POST_SUCCESS = 'reed/post/LOAD_POST_SUCCESS';

const INITIAL_STATE = {
    postList: [],
    error_message: '',
};

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POST:

        case LOAD_POST_SUCCESS:
            if (typeof action.payload != "undefined") {
                return {
                    ...state,
                    postList: action.payload.postList
                };
            } else {
                return {
                    ...state
                };
            }
        case LOAD_POST_FAILURE:
            return {
                ...state,
                current_release_time: 'Something went wrong!',
                current_theme: 'No available theme!',
                current_theme_inspire: 'No available inspiration!',
                current_theme_author: 'Contact the developer!',
                theme_error_message: 'Something went wrong!',
            };   
        
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
