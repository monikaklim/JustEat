import * as actionTypes from './actionTypes';
import axios from 'axios'


export const fetchDataSuccess = (products,categories,sauces) =>{
    return{
        type: actionTypes.FETCH_DATA_SUCCESS,
        products:products,
        categories:categories,
        sauces:sauces
    };
};

export const fetchDataFail = (error) =>{
    return{
        type: actionTypes.FETCH_DATA_FAIL,
        error:error
    };
};

export const fetchDataStart = () =>{
    return{
        type: actionTypes.FETCH_DATA_START,

    };
};

export const fetchData = () =>{
return dispatch => {
    dispatch(fetchDataStart());
    axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {      
    const fetchedProducts = [];
    const fetchedCategories = [];
    const fetchedSauces = [];

    for(let key in response.data.Menu.products){
     
        fetchedProducts.push({...response.data.Menu.products[key], id:key});
    }

    for(let key in response.data.Menu.Categories){
        fetchedCategories.push({...response.data.Menu.Categories[key], id:key });
    
    }

 for(let key in response.data.Menu.accessories){
        fetchedSauces.push({...response.data.Menu.accessories[key], id:key });
    }

    
 
    dispatch(fetchDataSuccess(fetchedProducts,fetchedCategories,fetchedSauces));
    
     })
.catch(err => dispatch(fetchDataFail(err)));    

};
};







