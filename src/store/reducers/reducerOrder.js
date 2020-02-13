import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {
    product: null,
    options: [],
    notes : '',
    price: 0,
    orders:[],
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

    let order = {idOrder: action.product.Id, name: action.product.Name, syn: action.product.Syn, options: state.options, price:action.price, notes : action.notes}
    let keyOrder = action.product.Name+ " " +  action.product.Syn;
    localStorage.setItem(keyOrder,JSON.stringify(order));
    let totalPrice = state.totalPrice + action.price;
    localStorage.setItem("price",totalPrice);
    const optionsToRemove = ["2","3","4","5" ];
 
    for (let key of optionsToRemove) {
        if(localStorage.getItem(key))
          localStorage.removeItem(key);
     }

    let arrayOrd = [...state.orders];
    arrayOrd.push(order);

      return updateObject( state,
            { product:action.product,
              price: action.price,
              totalPrice: totalPrice,
              notes: action.notes,
              orders: arrayOrd, 
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
let keyOrder = action.orderName + " " + action.orderSyn;
localStorage.removeItem(keyOrder);

let idOrder = state.options.findIndex(i=>i.Id  === action.orderId);
let arrayOrd = [...state.orders];

arrayOrd.splice(idOrder, 1);

let newPrice = 0;
if(state.totalPrice>action.price){
newPrice = state.totalPrice - action.price;
localStorage.setItem("price",newPrice.toFixed(2));}


    return updateObject( state,
        {
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