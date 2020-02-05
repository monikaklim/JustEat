import * as actionTypes from './actions';

const initialState = {

    items : [],
    text:''

}


const addItemHandler = (state, action) =>
{

    }





const reducer = (state = initialState, action) =>{

switch(action.type){
case actionTypes.ADD_ELEMENT:
    return{



    };


default: return state;
}


};




export default reducer;