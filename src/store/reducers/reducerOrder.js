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

    let order = {name: action.product.Name, syn: action.product.Syn, options: state.options, price:action.price, notes : action.notes}
    let keyOrder = action.product.Name+ " " +  action.product.Syn;
    localStorage.setItem(keyOrder,JSON.stringify(order));
    let totalPrice = state.totalPrice + action.price;
    localStorage.setItem("price",totalPrice);
    const optionsToRemove = ["2","3","4","5" ];
 
    for (let key of optionsToRemove) {
        if(localStorage.getItem(key))
          localStorage.removeItem(key);
     }


      return updateObject( state,
            { product:action.product,
              price: action.price,
              totalPrice: totalPrice,
              notes: action.notes,
              options:[]
            });
    
    };


    

const cancelOrder = (state) =>{
    const optionsToRemove = ["2","3","4","5"];

    for (let key of optionsToRemove) {
                if(localStorage.getItem(key))
                    localStorage.removeItem(key);
                }
    state = initialState;
    return state;
}


const saveOrder = (state)=>{

    let order = {name: state.product.Name, syn: state.product.Syn, options: state.options, price:state.price, notes : state.notes}
    let keyOrder = state.product.Name+ " " +  state.product.Syn;
    localStorage.setItem(keyOrder,JSON.stringify(order));

    const optionsToRemove = ["notes","2","3","4","5", state.product.Id ];
 
    for (let key of optionsToRemove) {
        if(localStorage.getItem(key))
          localStorage.removeItem(key);
     }
   
     return updateObject( state,
        { orders:  state.orders.concat(order)
        });

}





const reducerOrder = (state = initialState, action) =>{

    switch(action.type){
        case actionTypes.ADD_OPTION: return addOption( state, action);
        case actionTypes.ADD_PRODUCT: return addProduct( state, action);
        case actionTypes.CANCEL_ORDER: return cancelOrder( state, action);
        case actionTypes.ADD_OPTION_FAIL: return addOptionFail( state);
        case actionTypes.SAVE_ORDER: return saveOrder(state);
        default: return state;
    }
};








export default reducerOrder;