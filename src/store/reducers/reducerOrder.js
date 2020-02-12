import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {
    product: null,
    options: [],
    notes : '',
    price: ''
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

    if(state.options.length > 0){
    state.options = initialState.options;
    }
      return updateObject( state,
            { product:action.product,
              price: action.price,
              notes: action.notes
            });
    
    };


    

const cancelOrder = (state) =>{
    state = initialState;
    return state;
}





const reducerOrder = (state = initialState, action) =>{

    switch(action.type){
        case actionTypes.ADD_OPTION: return addOption( state, action);
        case actionTypes.ADD_PRODUCT: return addProduct( state, action);
        case actionTypes.CANCEL_ORDER: return cancelOrder( state, action);
        case actionTypes.ADD_OPTION_FAIL: return addOptionFail( state);
        default: return state;
    }
};








export default reducerOrder;