import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {

products:[],
categories:[],
sauces:[],
options:[],
loading:false

}

//products
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

//categories
const fetchCategoriesStart = ( state ) => {
    return updateObject( state, { loading: true } );
};

const fetchCategoriesSuccess = ( state, action ) => {
    return updateObject( state, {
        categories: action.categories,
        loading: false
    } );
};

const fetchCategoriesFail = ( state ) => {
    return updateObject( state, { loading: false } );
};

//sauces
const fetchSaucesStart = ( state ) => {
    return updateObject( state, { loading: true } );
};

const fetchSaucesSuccess = ( state, action ) => {
    return updateObject( state, {
        sauces: action.sauces,
        loading: false
    } );
};

const fetchSaucesFail = ( state ) => {
    return updateObject( state, { loading: false } );
};


//options
const fetchOptionsStart = ( state ) => {
    return updateObject( state, { loading: true } );
};

const fetchOptionsSuccess = ( state, action ) => {
    return updateObject( state, {
        options: action.options,
        loading: false
    } );
};

const fetchOptionsFail = ( state ) => {
    return updateObject( state, { loading: false } );
};




const reducer = (state = initialState, action) =>{

switch(action.type){
    case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart( state, action );
    case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess( state, action );
    case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail( state, action );

    case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart( state, action );
    case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess( state, action );
    case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail( state, action );

    case actionTypes.FETCH_SAUCES_START: return fetchSaucesStart( state, action );
    case actionTypes.FETCH_SAUCES_SUCCESS: return fetchSaucesSuccess( state, action );
    case actionTypes.FETCH_SAUCES_FAIL: return fetchSaucesFail( state, action );

    
    case actionTypes.FETCH_OPTIONS_START: return fetchOptionsStart( state, action );
    case actionTypes.FETCH_OPTIONS_SUCCESS: return fetchOptionsSuccess( state, action );
    case actionTypes.FETCH_OPTIONS_FAIL: return fetchOptionsFail( state, action );

    default: return state;
}


};




export default reducer;