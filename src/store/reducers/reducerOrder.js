import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {
    product: null,
    options: [],
    notes : '',
    price: 0,
    orders:[],
    quantity:0,
   totalPrice:0
}


const addOption = ( state, action ) => {
  
if(action.option === null )
{
    return state;
}
else{
  
    return updateObject( state,
            { options:  state.options.concat(action.option)
            });
  
}
};


const addOptionFail = ( state ) => {
    return state;
};



const addProduct = ( state, action ) => {
    let keyOrder = action.product.Name+ " " +  action.product.Syn;
    let quantity;
    let price;
    let totalPrice;
    let arrayOrd = [...state.orders];

    if(localStorage.getItem(keyOrder)){
         quantity = state.quantity+1;
         price =  action.price * quantity;
         totalPrice = state.totalPrice + action.price;
         let idOrder = state.orders.findIndex(i=>i.Id  === action.product.Id);
         arrayOrd.splice(idOrder, 1);
      
    }else{
        quantity = 1;
        price =  action.price * quantity;
        totalPrice = state.totalPrice + action.price;
    }
      
       let order = {idOrder: action.product.Id, name: action.product.Name, syn: action.product.Syn, options: state.options, totPrice:price, productPrice:action.price, notes : action.notes, qnt: quantity}
        
        localStorage.setItem(keyOrder,JSON.stringify(order));
         
        localStorage.setItem("price",Number(totalPrice).toFixed(2));
       
    const optionsToRemove = ["2","3","4","5" ];
 
    for (let key of optionsToRemove) {
        if(localStorage.getItem(key))
          localStorage.removeItem(key);
     }

    arrayOrd.push(order);

      return updateObject( state,
            { product:action.product,
              price: price,
              totalPrice: totalPrice,
              notes: action.notes,
              orders: arrayOrd, 
              quantity:quantity,
              options:[]
            });
    };

 

const cancelOrder = (state) =>{
    const optionsToRemove = ["2","3","4","5"];

    for (let key of optionsToRemove) {
                if(localStorage.getItem(key))
                    localStorage.removeItem(key);
                }
    state.options = [];
    return state;
}



const removeOrder  = (state,action) =>{
let quantity = action.order.qnt;
let arrayOrd  = [...state.orders];
let keyOrder = action.order.name + " " + action.order.syn;
let newPrice = 0;

if(action.order.qnt > 1){
    quantity =  action.order.qnt - 1;
    newPrice = state.totalPrice - action.order.productPrice;
    localStorage.setItem("price",newPrice);
    let updatedOrder = {...action.order, qnt:quantity, totPrice: (action.order.totPrice - action.order.productPrice)}
    localStorage.setItem(keyOrder,JSON.stringify(updatedOrder));
    let idOrder = state.orders.findIndex(i=>i.Id  === action.order.idOrder);
    arrayOrd.splice(idOrder, 1);
    arrayOrd.push(updatedOrder);

}else{
    quantity= 0;
    if(state.orders.length === 0)
    newPrice = 0;

    newPrice = state.totalPrice - action.order.productPrice;
    localStorage.removeItem(keyOrder);
    localStorage.setItem("price",newPrice);
    let idOrder = state.orders.findIndex(i=>i.Id  === action.order.idOrder);
    arrayOrd.splice(idOrder, 1);

}


    return updateObject( state,
        {
         quantity:quantity,
         orders:arrayOrd,
         totalPrice:newPrice
        });

}





const reducerOrder = (state = initialState, action) =>{

    switch(action.type){
        case actionTypes.ADD_OPTION: return addOption( state, action);
        case actionTypes.ADD_PRODUCT: return addProduct( state, action);
        case actionTypes.CANCEL_ORDER: return cancelOrder( state, action);
        case actionTypes.ADD_OPTION_FAIL: return addOptionFail( state);
        case actionTypes.REMOVE_ORDER: return removeOrder(state,action);
        default: return state;
    }
};








export default reducerOrder;