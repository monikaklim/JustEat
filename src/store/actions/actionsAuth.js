import * as actionTypes from './actionTypes';
import axios from 'axios'


export const fetchUserSuccess = (user) =>{
    return{
        type: actionTypes.FETCH_USER_SUCCESS,
      user:user
    };
};

export const fetchUserFail = (error) =>{
    return{
        type: actionTypes.FETCH_USER_FAIL,
        error:error
    };
};

export const fetchUserStart = () =>{
    return{
        type: actionTypes.FETCH_USER_START

    };
};

export const fetchUser = () =>{
return dispatch => {
    dispatch(fetchUserStart());
    axios.get('http://localhost:5000/api/current_user').then(response => {      
    dispatch(fetchUserSuccess(response.data));
    console.log(response)
     })
.catch(err => dispatch(fetchUserFail(err)));    

};
};
