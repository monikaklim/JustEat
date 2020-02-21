import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {
    user : null,
    loading:false
}


    const fetchUserStart = ( state ) => {
        return updateObject( state, {
           loading:true
          } );
    };
    
    const fetchUserSuccess = ( state, action ) => {
        if(action.user ===""){
            localStorage.clear()
        }


        return updateObject( state, {
          user:action.user,
          loading: false
        } );
    };
    
    const fetchUserFail = ( state ) => {
        return updateObject( state, {
            loading:false
           } );
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