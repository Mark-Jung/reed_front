import _ from 'lodash';
import axios from 'axios';
import APIConfig from '../config/api';


const themeAPIRoot = `${APIConfig.localapiRoot}/theme`;
const jwt_demo = APIConfig.jwt_demo;


//Action Types
export const LOAD_CURRENT_THEME = 'reed/theme/LOAD_CURRENT_THEME';
export const LOAD_CURRENT_THEME_FAILURE = 'reed/theme/LOAD_CURRENT_THEME_FAILURE';
export const LOAD_CURRENT_THEME_SUCCESS = 'reed/theme/LOAD_CURRENT_THEME_SUCCESS';
export const LOAD_ALL_THEMES = 'reed/theme/LOAD_ALL_THEMES';
export const LOAD_ALL_THEMES_SUCCESS = 'reed/theme/LOAD_ALL_THEMES_SUCCESS';
export const LOAD_ALL_THEMES_FAILURE = 'reed/theme/LOAD_ALL_THEMES_FAILURE';


const INITIAL_STATE = {
    current_release_time: '',
    current_theme: '',
    current_theme_inspire: '',
    current_theme_author: '',
    theme_error_message: '',
    themes: [],
    loaded_count: 0,
};


//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_CURRENT_THEME:

        case LOAD_CURRENT_THEME_SUCCESS:
            if (typeof action.payload != "undefined") {
                return {
                    ...state,
                    current_release_time: action.payload.release_time,
                    current_theme: action.payload.theme,
                    current_theme_inspire: action.payload.theme_inspire,
                    current_theme_author: action.payload.theme_author,
                    theme_error_message: '',
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
                theme_error_message: 'Something went wrong!',
            };   
        case LOAD_ALL_THEMES:
        case LOAD_ALL_THEMES_SUCCESS:
            if (typeof action.payload != 'undefined'){
                // console.log(action.payload)
                return {
                    ...state,
                    themes: action.payload,
                    loaded_count: action.payload.length
                }
            } else {
                return {
                    ...state,
                }
            }
        case LOAD_ALL_THEMES_FAILURE:
            return {
                ...state,
            }
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
            headers: {'Authorization': jwt_demo}
        })
          .then((response) => load_current_theme_success(dispatch, response))
          .catch((error) => load_current_theme_failure(dispatch, error));
    };
}

export const load_current_theme_success = (dispatch, response) => {
    // console.log('from load_current_theme_success');
    // console.log(response.data.response[0]);
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

export const load_all_themes = (loaded) => {
    // after theme/browse is updated, it will be the following line.
    // const url = `${themeAPIRoot}/browse/${loaded}/30`;
    const url = `${themeAPIRoot}/browse/30`;
    return (dispatch) => {
        dispatch({
            type: LOAD_ALL_THEMES
        });
        axios.get(url, {
            headers: {'Authorization': jwt_demo}
        })
        .then((response) => load_all_themes_success(dispatch, response))
        .catch((error) => load_all_themes_failure(dispatch, error))
    }
}

export const load_all_themes_success = (dispatch, response) => {
    // console.log(response.data.response)
    dispatch({
        type: LOAD_ALL_THEMES_SUCCESS,
        payload: response.data.response
    });
}

export const load_all_themes_failure = (dispatch, error) => {
    // console.log(error);
    dispatch({
        type: LOAD_ALL_THEMES_FAILURE,
        payload: error
    });
}

