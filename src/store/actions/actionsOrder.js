import * as actionTypes from './actionTypes';

export const addOption = (step,option) =>{

    let opt = null;

    if(localStorage.getItem(step)){
        
    }
    else
   { localStorage.setItem(step,option); 
    opt = option;
   }


    return{
        type: actionTypes.ADD_OPTION,
        option:opt
    };
};



export const addProduct = (product) =>{

  localStorage.setItem(product.Id,product); 
    return{
        type: actionTypes.ADD_PRODUCT,
       product:product
    };
};

export const cancelOrder = () =>{
      return{
          type: actionTypes.CANCEL_ORDER
      };
  };