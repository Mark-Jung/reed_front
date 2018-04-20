import _ from 'lodash';
import axios from 'axios';
import APIConfig from '../config/api';


const profileAPIRoot = `${APIConfig.localapiRoot}/user`;
const jwt_demo = APIConfig.jwt_demo;


//Action Types
export const LOAD_PROFILE = 'reed/profile/LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'reed/profile/LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'reed/profile/LOAD_PROFILE_FAILURE';
export const LOAD_SAVED_POST = 'reed/profile/LOAD_SAVED_POST';
export const LOAD_SAVED_POST_SUCCESS = 'reed/profile/LOAD_SAVED_POST_SUCCESS';
export const LOAD_SAVED_POST_FAILURE = 'reed/profile/LOAD_SAVED_POST_FAILURE';



const INITIAL_STATE = {
    uid: '',
    username: '',
    sec_question: '',
    sec_answer: '',
    saved: 'na',
    saved_count: 0,
    followed_by_count: 0,
    followed_by: 0,
    following: 0,
    following_count: 0,
    intro: '',
    profile_error_message: '',
    written: [],
    saved_post: [],
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
                    written: action.payload.written,
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
        case LOAD_SAVED_POST:
        
        case LOAD_SAVED_POST_SUCCESS:
            // console.log("loading saved post is successful");
            return {
                ...state,
                saved_post: action.payload
            }
        case LOAD_SAVED_POST_FAILURE:
            return {
                ...state,
                profile_error_message: 'Failed to load saved posts.'
            }
        default:
            return state;
    }
}


//Action Creators

export const load_saved = (saved) => {
    const url = `${APIConfig.localapiRoot}/postlist/id/please`;
    
    return (dispatch) => {
        dispatch({
            type: LOAD_SAVED_POST
        });
        axios.post(url, {'wanted': saved },{
            headers: {
                'Authorization': jwt_demo, 
                'Content-Type': 'application/json'
            },
        })
        .then((response) => load_saved_success(dispatch, response))
        .catch((error) => load_saved_failure(dispatch, error));
    };
}

export const load_saved_success = (dispatch, response) => {
    
    dispatch({
        type: LOAD_SAVED_POST_SUCCESS,
        payload: response.data.response,
    });
}
export const load_saved_failure = (dispatch, error) => {
    dispatch({
        type: LOAD_SAVED_POST_FAILURE,
        payload: error
    });
}

export const load_profile = (user) => {
    const url = `${profileAPIRoot}/${user}`;
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

