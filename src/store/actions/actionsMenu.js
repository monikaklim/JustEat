import * as actionTypes from './actionTypes';
import axios from 'axios'



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