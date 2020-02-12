import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Checkout.module.css';
import Order from '../Order';
import Navbar from '../../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import {pulse} from 'react-animations';
import styled, {keyframes} from 'styled-components';

class Checkout extends Component{

componentDidMount(){

 return this.getOrdersHandler();
}


   
getOrdersHandler = () =>{
let orders = [];
let keys = Object.keys(localStorage);

for(let key in keys){
let ord = JSON.parse(localStorage.getItem(keys[key]));
  
   if(keys[key] !== "price")
   orders.push( <Order name = {ord.name} syn ={ord.syn} options = {ord.options} price = {ord.price} notes = {ord.notes} />)
}

return orders;
}



render(){

        const AnimatedLink = styled.div`
        
        animation: 2s ${ keyframes`${pulse}`} infinite
        `;
        

    return(
<div>
    <Navbar />
    <div className="Checkout">
        <h1> Carrello</h1>

{ this.props.product ? 
<div>
<div className = "Orders">

{this.componentDidMount()  }

</div>

<p>Totale: {localStorage.getItem("price")} € </p>

<div className="LinkContainer">
<NavLink className = "LinkOrder" to = "/" > Aggiungi più prodotti </NavLink> 
<p> <b>oppure</b></p>
<AnimatedLink><NavLink className = "LinkOrder" to = "/" > Invia ordine </NavLink> </AnimatedLink>
</div>

</div>

  : 

<div>
<p><b>Il carrello è vuoto. </b></p>
<br/>


<AnimatedLink><NavLink className = "LinkEmptyCart" to = "/" > Ordina ora </NavLink></AnimatedLink>


</div>
}


</div>

</div>
   
    );
    }
};


const mapStateToProps = state =>{
    return{
     options:state.order.options,
     product:state.order.product,
     price:state.order.price,
     notes:state.order.notes
    };
};



export default connect(mapStateToProps)(Checkout);