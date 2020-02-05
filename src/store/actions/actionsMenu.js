import * as actionTypes from './actionTypes';
import axios from 'axios'


//products
export const fetchProductsSuccess = (products) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products:products
    };
};

export const fetchProductsFail = (error) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error:error
    };
};

export const fetchProductsStart = () =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_START,

    };
};

export const fetchProducts = () =>{
return dispatch => {
    dispatch(fetchProductsStart());
    axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {
    console.log(response.data);
            
    const fetchedProducts = [];
    for(let key in response.data.Menu.products){
        fetchedProducts.push({...response.data.Menu.products[key], id:key });
    }
    dispatch(fetchProductsSuccess(fetchedProducts));

     })
.catch(err => dispatch(fetchProductsFail(err)));    

};
};

//categories

export const fetchCategoriesSuccess = (categories) =>{
    return{
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories:categories
    };
};

export const fetchCategoriesFail = (error) =>{
    return{
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error:error
    };
};

export const fetchCategoriesStart = () =>{
    return{
        type: actionTypes.FETCH_CATEGORIES_START,

    };
};

export const fetchCategories = () =>{
return dispatch => {
    dispatch(fetchCategoriesStart());
    axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {           
    const fetchedCategories = [];
    for(let key in response.data.Menu.Categories){
        fetchedCategories.push({...response.data.Menu.Categories[key], id:key });
    }
    dispatch(fetchCategoriesSuccess(fetchedCategories));

     })
.catch(err => dispatch(fetchCategoriesFail(err)));    

};
};
