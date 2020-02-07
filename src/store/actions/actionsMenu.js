import * as actionTypes from './actionTypes';
import axios from 'axios'


//products
export const fetchProductsSuccess = (products,categories,sauces,options) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products:products,
        categories:categories,
        sauces:sauces,
        options:options
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
    const fetchedProducts = [];
    const fetchedCategories = [];
    const fetchedSauces = [];
    const fetchedOptions = [];

    for(let key in response.data.Menu.products){
     
        fetchedProducts.push({...response.data.Menu.products[key], id:key});
    }

    for(let key in response.data.Menu.Categories){
        fetchedCategories.push({...response.data.Menu.Categories[key], id:key });
    
    }

 for(let key in response.data.Menu.accessories){
        fetchedSauces.push({...response.data.Menu.accessories[key], id:key });
    }

    
     
       
    
  
    dispatch(fetchProductsSuccess(fetchedProducts,fetchedCategories,fetchedSauces));
    
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
    console.log(response.data);   
    for(let key in response.data.Menu.Categories){
        fetchedCategories.push({...response.data.Menu.Categories[key], id:key });
    }
    dispatch(fetchCategoriesSuccess(fetchedCategories));
     })
.catch(err => dispatch(fetchCategoriesFail(err)));    

};
};

//sauces

export const fetchSaucesSuccess = (sauces) =>{
    return{
        type: actionTypes.FETCH_SAUCES_SUCCESS,
       sauces:sauces
    };
};

export const fetchSaucesFail = (error) =>{
    return{
        type: actionTypes.FETCH_SAUCES_FAIL,
        error:error
    };
};

export const fetchSaucesStart = () =>{
    return{
        type: actionTypes.FETCH_SAUCES_START,

    };
};

export const fetchSauces = () =>{
return dispatch => {
    dispatch(fetchSaucesStart());
    axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {   
           
    const fetchedSauces = [];
    for(let key in response.data.Menu.accessories){
        fetchedSauces.push({...response.data.Menu.accessories[key], id:key });
    }
    dispatch(fetchSaucesSuccess(fetchedSauces));

     })
.catch(err => dispatch(fetchSaucesFail(err)));    

};
};


//products options

export const fetchOptionsSuccess = (options) =>{
    return{
        type: actionTypes.FETCH_OPTIONS_SUCCESS,
     options:options
    };
};

export const fetchOptionsFail = (error) =>{
    return{
        type: actionTypes.FETCH_OPTIONS_FAIL,
        error:error
    };
};

export const fetchOptionsStart = () =>{
    return{
        type: actionTypes.FETCH_OPTIONS_START,

    };
};

export const fetchOptions = () =>{
return dispatch => {
    dispatch(fetchOptionsStart());
    axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {   
      
    const fetchedBurgerOptions = [];
    const fetchedHotDogOptions = [];
    
    for(let key in response.data.Menu.products.slice(0,11)){
        fetchedBurgerOptions.push({...response.data.Menu.products[key], id:key });
    }

    for( let key in response.data.Menu.products){
        if(key>35 && key<39){
        fetchedHotDogOptions.push({...response.data.Menu.products[key], id:key });}
    }

  const options = {...fetchedBurgerOptions,...fetchedHotDogOptions};

    dispatch(fetchOptionsSuccess(options));

     })
.catch(err => dispatch(fetchOptionsFail(err)));    

};
};
