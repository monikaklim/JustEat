import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {

products:[],
loading:false

}


const fetchProductsStart = ( state ) => {
    return updateObject( state, { loading: true } );
};

const fetchProductsSuccess = ( state, action ) => {
    return updateObject( state, {
        products: action.products,
        loading: false
    } );
};

const fetchProductsFail = ( state ) => {
    return updateObject( state, { loading: false } );
};




const reducer = (state = initialState, action) =>{

switch(action.type){
    case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart( state, action );
    case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess( state, action );
    case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail( state, action );

    default: return state;
}


};




export default reducer;