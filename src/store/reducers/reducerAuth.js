import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {
    user : null
}


    const fetchUserStart = ( state ) => {
        return state;
    };
    
    const fetchUserSuccess = ( state, action ) => {
       
        return updateObject( state, {
          user:action.user
        } );
    };
    
    const fetchUserFail = ( state,action ) => {
        console.log(action.error)
        return state;
    };
    
    
    
    
    
    const reducerAuth = (state = initialState, action) =>{
    
    switch(action.type){
        case actionTypes.FETCH_USER_START: return fetchUserStart( state, action );
        case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess( state, action );
        case actionTypes.FETCH_USER_FAIL: return fetchUserFail( state, action );
    
        default: return state;
    }
    
    
    };


    
export default reducerAuth;