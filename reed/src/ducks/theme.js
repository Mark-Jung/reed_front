import _ from 'lodash';
import axios from 'axios';
import APIConfig from '../config/api';


const themeAPIRoot = `${APIConfig.localapiRoot}/theme`;


//Action Types
export const LOAD_CURRENT_THEME = 'mark/theme/LOAD_CURRENT_THEME';
export const LOAD_CURRENT_THEME_FAILURE = 'mark/theme/LOAD_CURRENT_THEME_FAILURE';
export const LOAD_CURRENT_THEME_SUCCESS = 'mark/theme/LOAD_CURRENT_THEME_SUCCESS';


const INITIAL_STATE = {
    current_release_time: '',
    current_theme: '',
    current_theme_inspire: '',
    current_theme_author: '',
    error_message: '',
};


//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_CURRENT_THEME:

        case LOAD_CURRENT_THEME_SUCCESS:
            return {
                ...state,
                current_release_time: 'hi',
                current_theme: action.payload,
                current_theme_inspire: 'action.payload.theme_inspire',
                current_theme_author: 'action.payload.theme_author',
                error_message: '',
            };
        case LOAD_CURRENT_THEME_FAILURE:
            return {
                ...state,
                current_release_time: '',
                current_theme: 'hihi',
                current_theme_inspire: '',
                current_theme_author: '',
                error_message: action.payload,
            };   
        default:
            return state;
    }
}


//Action Creators
export const load_current_theme = () => {
    const url = `${themeAPIRoot}/now/1`;
    console.log(url);
    return (dispatch) => {
        dispatch({
          type: LOAD_CURRENT_THEME
        });
        axios.get(url, {
            header: {'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjUzMjQwMjYsImlhdCI6MTUyMjczMjAyNiwic3ViIjoxfQ.gWnAJbJEUg4PTa8Fr1w7gAkt0quHYYnQK8C6AcJdMkk'}
        })
          .then((response) => load_current_theme_success(dispatch, response))
          .catch((error) => load_current_theme_failure(dispatch, error));
    };
}

export const load_current_theme_success = (dispatch, response) => {
    console.log(response);
    dispatch({
        type: LOAD_CURRENT_THEME_SUCCESS,
        payload: response
    });
}

export const load_current_theme_failure = (dispatch, error) => {
    console.log(error);
    dispatch({
        type: LOAD_CURRENT_THEME_FAILURE,
        payload: error
    });
}

