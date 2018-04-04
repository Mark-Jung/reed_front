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

            console.log(action.payload);
            if (typeof action.payload != "undefined") {
                return {
                    ...state,
                    current_release_time: action.payload.release_time,
                    current_theme: action.payload.theme,
                    current_theme_inspire: action.payload.theme_inspire,
                    current_theme_author: action.payload.theme_author,
                    error_message: '',
                };
            } else {
                return {
                    ...state
                };
            }
            
        case LOAD_CURRENT_THEME_FAILURE:
            return {
                ...state,
                current_release_time: 'Something went wrong!',
                current_theme: 'No available theme!',
                current_theme_inspire: 'No available inspiration!',
                current_theme_author: 'Contact the developer!',
                error_message: 'Something went wrong!',
            };   
        default:
            return state;
    }
}


//Action Creators
export const load_current_theme = () => {
    const url = `${themeAPIRoot}/now/1`;
    return (dispatch) => {
        dispatch({
          type: LOAD_CURRENT_THEME
        });
        axios.get(url, {
            headers: {'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjUzMjQwMjYsImlhdCI6MTUyMjczMjAyNiwic3ViIjoxfQ.gWnAJbJEUg4PTa8Fr1w7gAkt0quHYYnQK8C6AcJdMkk'}
        })
          .then((response) => load_current_theme_success(dispatch, response))
          .catch((error) => load_current_theme_failure(dispatch, error));
    };
}

export const load_current_theme_success = (dispatch, response) => {
    console.log('from load_current_theme_success');
    console.log(response.data.response[0]);
    dispatch({
        type: LOAD_CURRENT_THEME_SUCCESS,
        payload: response.data.response[0]
    });
}

export const load_current_theme_failure = (dispatch, error) => {
    dispatch({
        type: LOAD_CURRENT_THEME_FAILURE,
        payload: error
    });
}

