import React, { Component } from 'react';
import './Checkout.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import {pulse} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Cart from '../Cart/Cart';

const checkout = () =>{

        const AnimatedLink = styled.div`
        
        animation: 2s ${ keyframes`${pulse}`} infinite `;
        

    return(
<div>
    <Navbar />
    <div className="Checkout">
        <h1> Carrello</h1>

{   localStorage.getItem("price") > 0 ? 
<div>
<div className = "Orders">

<Cart/>

</div>

<p className = "Price">Totale: {Number(localStorage.getItem("price")).toFixed(2)} € </p>

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





export default checkout;