import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Checkout.module.css';
import Order from '../Order';
import Navbar from '../../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import {tada} from 'react-animations';
import styled, {keyframes} from 'styled-components';

class Checkout extends Component{

componentDidMount(){

    if(this.props.product){
this.saveOrderHandler();
    }
 return this.getOrdersHandler();
}


saveOrderHandler = () =>{
let order = {name: this.props.product.Name, syn: this.props.product.Syn, options: this.props.options, price:this.props.price, notes : this.props.notes}

   const optionsToRemove = ["notes","2","3","4","5", this.props.product.Id ];

   for (let key of optionsToRemove) {
       if(localStorage.getItem(key))
         localStorage.removeItem(key);
    }
    console.log(order)
let keyOrder = this.props.product.Name+ " " + this.props.product.Syn;
localStorage.setItem(keyOrder,JSON.stringify(order));

}
   
getOrdersHandler = () =>{
let orders = [];
let keys = Object.keys(localStorage);

for(let key in keys){
let ord = JSON.parse(localStorage.getItem(keys[key]));
   console.log(ord.name)
   orders.push( <Order name = {ord.name} syn ={ord.syn} options = {ord.options} price = {ord.price} notes = {ord.notes} />)
}

return orders;
}



    render(){

        const AnimatedLink = styled.div`
        animation: 2s ${ keyframes`${tada}`} infinite
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

<p>Totale:</p>
<NavLink className = "LinkMenu" to = "/" > Aggiungi più prodotti </NavLink> 
<p> <b>oppure</b></p>
<AnimatedLink><NavLink className = "LinkMenu" to = "/" > Invia ordine </NavLink> </AnimatedLink>
</div>

  : 

<div>
<p><b>Il tuo carrello è vuoto. </b></p>
<br/>


<AnimatedLink><NavLink className = "LinkMenuEmptyCart" to = "/" > Ordina ora </NavLink></AnimatedLink>


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