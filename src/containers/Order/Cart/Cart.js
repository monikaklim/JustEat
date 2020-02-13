import React, {Component} from 'react';
import Order from '../Order';
import './Cart.module.css';


class Cart extends Component{

componentDidMount(){

return this.getOrdersHandler();

}
    getOrdersHandler = () =>{
        let orders = [];
        let keys = Object.keys(localStorage);
        
        for(let key in keys){
        let ord = JSON.parse(localStorage.getItem(keys[key]));
          
           if(keys[key] !== "price")
           orders.push( <Order key = {ord.idOrder} id = {ord.idOrder} name = {ord.name} syn ={ord.syn} options = {ord.options} price = {ord.price} notes = {ord.notes} />)
        }
        
        return orders;
        }
        



render(){


return(

<div className = "Cart">

{this.componentDidMount()  }


</div>

);


}


}
export default Cart;