import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';


const initialState = {
products:[],
categories:[],
sauces:[],
order: [],
loading:false
}




const fetchDataStart = ( state ) => {
    return updateObject( state, { loading: true } );
};

const fetchDataSuccess = ( state, action ) => {
    localStorage.setItem("price",0);
    return updateObject( state, {
        products: action.products,
        categories: action.categories,
        sauces:action.sauces,
        loading: false
    } );
};

const fetchDataFail = ( state ) => {
    return updateObject( state, { loading: false } );
};





const reducerMenu = (state = initialState, action) =>{

switch(action.type){
    case actionTypes.FETCH_DATA_START: return fetchDataStart( state, action );
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess( state, action );
    case actionTypes.FETCH_DATA_FAIL: return fetchDataFail( state, action );

    default: return state;
}


};




export default reducerMenu;