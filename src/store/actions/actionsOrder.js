import * as actionTypes from './actionTypes';
import axios from 'axios';


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
   { localStorage.setItem(step,JSON.stringify(option)); 
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


  export const removeOrder = (order) =>{
    return{
        type: actionTypes.REMOVE_ORDER,
        order:order
    };
}


export const sendOrderFail= (err) =>{
    return{
        type: actionTypes.SEND_ORDER_FAIL,
        err:err
    };
};

export const sendOrderSuccess= () =>{
    return{
        type: actionTypes.SEND_ORDER_FAIL
    };
};

export const sendOrderStart= () =>{
    return{
        type: actionTypes.SEND_ORDER_START
    };
};




export const fetchOrdersFail= (err) =>{
    return{
        type: actionTypes.FETCH_ORDERS_FAIL,
        err:err
    };
};

export const fetchOrdersSuccess= (orders) =>{
    return{
        orders:orders,
        type: actionTypes.FETCH_ORDERS_FAIL
    };
};

export const fetchOrdersStart= () =>{
    return{
        type: actionTypes.FETCH_ORDERS_START
    };
};





export const sendOrder = () =>{
let orders = [];
    return dispatch => {
        dispatch(sendOrderStart());
        
        let keys = Object.keys(localStorage);    
        for(let key in keys){
        let ord = JSON.parse(localStorage.getItem(keys[key]));
           if(keys[key] !== "price")
            orders.push({ idOrder : ord.idOrder, name : ord.name, syn :ord.syn, options : ord.options, productPrice : ord.productPrice, notes : ord.notes, qnt : ord.qnt});
              
        }
        if(orders.length > 0) 
        axios.post('api/current_order', {orders:orders, price: localStorage.getItem("price"), date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()   }).then(
            dispatch(sendOrderSuccess()),
            localStorage.clear()
        ).catch(err => sendOrderFail(err));
        
    }
};
  

export const fetchOrders = () =>{

    let orders = [];
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('api/current_order').then( res =>        
        dispatch(fetchOrdersSuccess(res.data), console.log(res.data))
        ).catch(err =>  fetchOrdersFail(err))
        
    }



}