import * as actionTypes from './actionTypes';



export const addOptionSuccess = (option) =>{
    return{
        type: actionTypes.ADD_OPTION,
        option:option
    };
};

export const addOptionFail= () =>{
    return{
        type: actionTypes.ADD_OPTION_FAIL
    };
};




export const addOption = (step,option) =>{
    return dispatch => {

    let opt = null;

    if(localStorage.getItem(step)){
       dispatch(addOptionFail()) 
    }
    else
   { localStorage.setItem(step,option); 
    opt = option;
    dispatch(addOptionSuccess(opt));
   }

}
};



export const addProduct = (product, notes) =>{

    return{
     type: actionTypes.ADD_PRODUCT,
      notes:notes,
       product:product,
       price:product.Price
    };
};

export const cancelOrder = () =>{
      return{
          type: actionTypes.CANCEL_ORDER
      };
  };


  export const removeOrder = (orderId,orderName,orderSyn,price) =>{
    return{
        type: actionTypes.REMOVE_ORDER,
        orderId:orderId,
        orderName:orderName,
        orderSyn:orderSyn,
        price:price
    };
}


  
