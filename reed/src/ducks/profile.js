import _ from 'lodash';
import axios from 'axios';
import APIConfig from '../config/api';


const themeAPIRoot = `${APIConfig.localapiRoot}/user`;
const jwt_demo = APIConfig.jwt_demo;


//Action Types
export const LOAD_PROFILE = 'mark/profile/LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'mark/profile/LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'mark/profile/LOAD_PROFILE_FAILURE';


const INITIAL_STATE = {
    uid: '',
    username: '',
    sec_question: '',
    sec_answer: '',
    saved: null,
    saved_count: 0,
    followed_by_count: 0,
    followed_by: 0,
    following: 0,
    following_count: 0,
    intro: '',
    profile_error_message: '',
};


//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_PROFILE:

        case LOAD_PROFILE_SUCCESS:
            if (typeof action.payload != "undefined") {
                return {
                    ...state,
                    uid: action.payload.id,
                    username: action.payload.username,
                    saved: action.payload.saved,
                    saved_count: action.payload.saved_count,
                    followed_by_count: action.payload.followed_by_count,
                    followed_by: action.payload.followed_by,
                    following: action.payload.following,
                    following_count: action.payload.following_count,
                    intro: action.payload.intro,
                    error_message: '',
                };
            } else {
                return {
                    ...state
                };
            }
            
        case LOAD_PROFILE_FAILURE:
            return {
                ...state,
                profile_error_message: 'Failed to load profile. Try restarting the application'
            };   
        default:
            return state;
    }
}


//Action Creators
export const load_profile = (user) => {
    const url = `${themeAPIRoot}/${user}`;
    return (dispatch) => {
        dispatch({
          type: LOAD_PROFILE
        });
        axios.get(url, {
            headers: {'Authorization': jwt_demo}
        })
          .then((response) => load_profile_success(dispatch, response))
          .catch((error) => load_profile_failure(dispatch, error));
    };
}

export const load_profile_success = (dispatch, response) => {
    // console.log('from load_profile_success');
    // console.log(response.data.user);
    dispatch({
        type: LOAD_PROFILE_SUCCESS,
        payload: response.data.user
    });
}

export const load_profile_failure = (dispatch, error) => {
    dispatch({
        type: LOAD_PROFILE_FAILURE,
        payload: error
    });
}

