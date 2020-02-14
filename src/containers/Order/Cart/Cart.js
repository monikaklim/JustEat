import React, {Component} from 'react';
import Order from '../Order';
import './Cart.module.css';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
import {pulse} from 'react-animations';
import AnimatedLink from '../../../components/UI/AnimatedLink/AnimatedLink';

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
           orders.push( <Order key = {ord.idOrder} id = {ord.idOrder} name = {ord.name} syn ={ord.syn} options = {ord.options} totPrice = {ord.totPrice} productPrice = {ord.productPrice} notes = {ord.notes} qnt = {ord.qnt}  obj  = {ord} />)
        }
        
        return orders;
        }
        
render(){


       

return(

<div className = "Cart">

{this.componentDidMount() }



</div>

);


}


}
export default Cart;