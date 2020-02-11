import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility/utility';

const initialState = {
    product: null,
    options: [],
    price:0,
    disable:false,

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



const addProduct = ( state, action ) => {
      return updateObject( state,
            { product:action.product});
    
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

        default: return state;
    }
};

export default reducerOrder;